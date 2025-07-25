import { CoolController, BaseController } from '@cool-midway/core';
import { Body, Get, Inject, Post, Query } from '@midwayjs/core';
import { UserInfoService } from '../../service/info';
import { UserInfoEntity } from '../../entity/info';
import { UserLoginService } from '../../service/login';

/**
 * 用户信息
 */
@CoolController({
  api: [],
  entity: UserInfoEntity,
})
export class AppUserInfoController extends BaseController {
  @Inject()
  ctx;

  @Inject()
  userInfoService: UserInfoService;

  @Inject()
  userLoginService: UserLoginService;

  @Get('/person', { summary: '获取用户信息' })
  async person() {
    return this.ok(await this.userInfoService.person(this.ctx.user.id));
  }

  @Get('/person/addresses', { summary: '获取当前用户所有地址' })
  async personAddresses() {
    return this.ok(await this.userInfoService.addresses(this.ctx.user.id));
  }

  @Post('/updatePerson', { summary: '更新用户信息' })
  async updatePerson(@Body() body) {
    return this.ok(
      await this.userInfoService.updatePerson(this.ctx.user.id, body)
    );
  }

  @Post('/updatePassword', { summary: '更新用户密码' })
  async updatePassword(
    @Body('password') password: string,
    @Body('code') code: string
  ) {
    await this.userInfoService.updatePassword(this.ctx.user.id, password, code);
    return this.ok();
  }

  @Post('/logoff', { summary: '注销' })
  async logoff() {
    await this.userInfoService.logoff(this.ctx.user.id);
    return this.ok();
  }

  @Post('/bindPhone', { summary: '绑定手机号' })
  async bindPhone(@Body('phone') phone: string, @Body('code') code: string) {
    await this.userInfoService.bindPhone(this.ctx.user.id, phone, code);
    return this.ok();
  }

  @Post('/miniPhone', { summary: '绑定小程序手机号' })
  async miniPhone(@Body() body) {
    const { code, encryptedData, iv } = body;
    return this.ok(
      await this.userInfoService.miniPhone(
        this.ctx.user.id,
        code,
        encryptedData,
        iv
      )
    );
  }

  @Get('/byInviteCode', { summary: '通过邀请码查找用户' })
  async byInviteCode(@Query('code') code: string) {
    return this.ok(await this.userInfoService.findByInviteCode(code));
  }
}
