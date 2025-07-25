import { Config, Inject, Provide } from '@midwayjs/core';
import { BaseService, CoolCommException } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { UserInfoEntity } from '../entity/info';
import { UserWxService } from './wx';
import * as jwt from 'jsonwebtoken';
import { UserWxEntity } from '../entity/wx';
import { BaseSysLoginService } from '../../base/service/sys/login';
import { UserSmsService } from './sms';
import { v1 as uuid } from 'uuid';
import * as md5 from 'md5';
import { PluginService } from '../../plugin/service/info';
import { Utils } from '../../../comm/utils';

/**
 * 登录
 */
@Provide()
export class UserLoginService extends BaseService {
  @InjectEntityModel(UserInfoEntity)
  userInfoEntity: Repository<UserInfoEntity>;

  @InjectEntityModel(UserWxEntity)
  userWxEntity: Repository<UserWxEntity>;

  @Inject()
  userWxService: UserWxService;

  @Config('module.user.jwt')
  jwtConfig;

  @Inject()
  baseSysLoginService: BaseSysLoginService;

  @Inject()
  pluginService: PluginService;

  @Inject()
  userSmsService: UserSmsService;

  @Inject()
  utils: Utils;

  /**
   * 发送手机验证码
   * @param phone
   * @param captchaId
   * @param code
   */
  async smsCode(phone, captchaId, code) {
    // 1、检查图片验证码  2、发送短信验证码
    const check = await this.baseSysLoginService.captchaCheck(captchaId, code);
    if (!check) {
      throw new CoolCommException('图片验证码错误');
    }
    await this.userSmsService.sendSms(phone);
  }

  /**
   *  手机验证码登录
   * @param phone
   * @param smsCode
   */
  async phoneVerifyCode(phone, smsCode) {
    // 1、检查短信验证码  2、登录
    const check = await this.userSmsService.checkCode(phone, smsCode);
    if (check) {
      return await this.phone(phone);
    } else {
      throw new CoolCommException('验证码错误');
    }
  }

  /**
   * 小程序手机号登录
   * @param code
   * @param encryptedData
   * @param iv
   */
  async miniPhone(code, encryptedData, iv) {
    const phone = await this.userWxService.miniPhone(code, encryptedData, iv);
    if (phone) {
      return await this.phone(phone);
    } else {
      throw new CoolCommException('获得手机号失败，请检查配置');
    }
  }

  /**
   * 手机号一键登录
   * @param access_token
   * @param openid
   */
  async uniPhone(access_token, openid, appId) {
    const instance: any = await this.pluginService.getInstance('uniphone');
    const phone = await instance.getPhone(access_token, openid, appId);
    if (phone) {
      return await this.phone(phone);
    } else {
      throw new CoolCommException('获得手机号失败，请检查配置');
    }
  }

  /**
   * 手机登录
   * @param phone
   * @returns
   */
  async phone(phone: string) {
    let user: any = await this.userInfoEntity.findOneBy({
      phone: Equal(phone),
    });
    if (!user) {
      user = {
        phone,
        unionid: phone,
        loginType: 2,
        nickName: phone.replace(/^(){3}\d{4}(\d{4})$/, '$1****$2'),
        inviteCode: await this.utils.generateUniqueInviteCode(
          this.userInfoEntity
        ), // 使用工具类生成邀请码
      };
      await this.userInfoEntity.insert(user);
    }
    return this.token({ id: user.id });
  }

  /**
   * 生成唯一的邀请码
   * @param length 邀请码长度，默认6位
   */
  async generateUniqueInviteCode(length = 6): Promise<string> {
    // 可用字符集
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    // 检查数据库中是否已存在该邀请码
    const exist = await this.userInfoEntity.findOneBy({ inviteCode: code });
    if (exist) {
      // 如果已存在，递归重新生成
      return this.generateUniqueInviteCode(length);
    }
    return code;
  }

  /**
   * 公众号登录
   * @param code
   */
  async mp(code: string) {
    let wxUserInfo = await this.userWxService.mpUserInfo(code);
    if (wxUserInfo) {
      delete wxUserInfo.privilege;
      wxUserInfo = await this.saveWxInfo(
        {
          openid: wxUserInfo.openid,
          unionid: wxUserInfo.unionid,
          avatarUrl: wxUserInfo.headimgurl,
          nickName: wxUserInfo.nickname,
          gender: wxUserInfo.sex,
          city: wxUserInfo.city,
          province: wxUserInfo.province,
          country: wxUserInfo.country,
        },
        1
      );
      return this.wxLoginToken(wxUserInfo);
    } else {
      throw new Error('微信登录失败');
    }
  }

  /**
   * 微信APP授权登录
   * @param code
   */
  async wxApp(code: string) {
    let wxUserInfo = await this.userWxService.appUserInfo(code);
    if (wxUserInfo) {
      delete wxUserInfo.privilege;
      wxUserInfo = await this.saveWxInfo(
        {
          openid: wxUserInfo.openid,
          unionid: wxUserInfo.unionid,
          avatarUrl: wxUserInfo.headimgurl,
          nickName: wxUserInfo.nickname,
          gender: wxUserInfo.sex,
          city: wxUserInfo.city,
          province: wxUserInfo.province,
          country: wxUserInfo.country,
        },
        1
      );
      return this.wxLoginToken(wxUserInfo);
    } else {
      throw new Error('微信登录失败');
    }
  }

  /**
   * 保存微信信息
   * @param wxUserInfo
   * @param type
   * @returns
   */
  async saveWxInfo(wxUserInfo, type) {
    const find: any = { openid: wxUserInfo.openid };
    let wxInfo: any = await this.userWxEntity.findOneBy(find);
    if (wxInfo) {
      wxUserInfo.id = wxInfo.id;
    }
    return this.userWxEntity.save({
      ...wxUserInfo,
      type,
    });
  }

  /**
   * 小程序登录
   * @param code
   * @param encryptedData
   * @param iv
   */
  async mini(code, encryptedData, iv) {
    let wxUserInfo = await this.userWxService.miniUserInfo(
      code,
      encryptedData,
      iv
    );
    if (wxUserInfo) {
      // 保存
      wxUserInfo = await this.saveWxInfo(wxUserInfo, 0);
      return await this.wxLoginToken(wxUserInfo);
    }
  }

  /**
   * 微信登录 获得token
   * @param wxUserInfo 微信用户信息
   * @returns
   */
  async wxLoginToken(wxUserInfo) {
    const unionid = wxUserInfo.unionid ? wxUserInfo.unionid : wxUserInfo.openid;
    let userInfo: any = await this.userInfoEntity.findOneBy({ unionid });
    if (!userInfo) {
      const file = await this.pluginService.getInstance('upload');
      const avatarUrl = await file.downAndUpload(
        wxUserInfo.avatarUrl,
        uuid() + '.png'
      );
      userInfo = {
        unionid,
        nickName: wxUserInfo.nickName,
        avatarUrl,
        gender: wxUserInfo.gender,
        loginType: wxUserInfo.type,
        inviteCode: await this.utils.generateUniqueInviteCode(
          this.userInfoEntity
        ), // 使用工具类生成邀请码
      };
      await this.userInfoEntity.insert(userInfo);
    }
    return this.token({ id: userInfo.id });
  }

  /**
   * 刷新token
   * @param refreshToken
   */
  async refreshToken(refreshToken) {
    try {
      const info = jwt.verify(refreshToken, this.jwtConfig.secret);
      if (!info['isRefresh']) {
        throw new CoolCommException('token类型非refreshToken');
      }
      const userInfo = await this.userInfoEntity.findOneBy({
        id: info['id'],
      });
      return this.token({ id: userInfo.id });
    } catch (e) {
      throw new CoolCommException(
        '刷新token失败，请检查refreshToken是否正确或过期'
      );
    }
  }

  /**
   * 密码登录
   * @param phone
   * @param password
   */
  async password(phone, password) {
    const user = await this.userInfoEntity.findOneBy({ phone });

    if (user && user.password == md5(password)) {
      return this.token({
        id: user.id,
      });
    } else {
      throw new CoolCommException('账号或密码错误');
    }
  }

  /**
   * 获得token
   * @param info
   * @returns
   */
  async token(info) {
    const { expire, refreshExpire } = this.jwtConfig;
    return {
      expire,
      token: await this.generateToken(info),
      refreshExpire,
      refreshToken: await this.generateToken(info, true),
    };
  }

  /**
   * 生成token
   * @param info 信息
   * @param isRefresh 是否为刷新token
   */
  async generateToken(info, isRefresh = false) {
    const { expire, refreshExpire, secret } = this.jwtConfig;
    const user = await this.userInfoEntity.findOneBy({ id: Equal(info.id) });
    const tokenInfo = {
      isRefresh,
      ...info,
      tenantId: user?.tenantId,
    };
    return jwt.sign(tokenInfo, secret, {
      expiresIn: isRefresh ? refreshExpire : expire,
    });
  }
}
