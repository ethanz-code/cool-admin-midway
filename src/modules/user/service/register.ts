import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { BaseService, CoolCommException } from '@cool-midway/core';
import { Repository, Equal } from 'typeorm';
import { UserInfoEntity } from '../entity/info';
import * as md5 from 'md5';
import { UserLoginService } from './login';
import { Inject } from '@midwayjs/core';
import { UserSmsService } from './sms';
import { Utils } from '../../../comm/utils';

@Provide()
export class RegisterService extends BaseService {
  @InjectEntityModel(UserInfoEntity)
  userInfoEntity: Repository<UserInfoEntity>;

  @Inject()
  userLoginService: UserLoginService;

  @Inject()
  userSmsService: UserSmsService;

  @Inject()
  utils: Utils;

  /**
   * 用户注册
   * @param phone 手机号
   * @param password 密码
   * @param smsCode 短信验证码
   */
  async register(phone: string, password: string, smsCode: string) {
    // 1. 验证短信验证码
    const check = await this.userSmsService.checkCode(phone, smsCode);
    if (!check) {
      throw new CoolCommException('短信验证码错误');
    }

    // 2. 检查手机号是否已存在
    let user: any = await this.userInfoEntity.findOneBy({
      phone: Equal(phone),
    });
    if (user) {
      throw new CoolCommException('手机号已存在');
    }

    // 3. 创建新用户
    user = {
      phone,
      password: md5(password),
      nickName: phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2'),
      inviteCode: await this.utils.generateUniqueInviteCode(
        this.userInfoEntity
      ), // 使用工具类生成邀请码
      status: 1,
      identity: 0,
    };
    await this.userInfoEntity.insert(user);

    // 4. 复用登录 service 的 token 生成逻辑
    const created = await this.userInfoEntity.findOneBy({ phone });
    return this.userLoginService.token({ id: created.id });
  }
}
