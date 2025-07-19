import { Post, Body, Inject, Provide } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { RegisterService } from '../../service/register';

@Provide()
@CoolController({
  api: [],
})
export class AppRegisterController extends BaseController {
  @Inject()
  registerService: RegisterService;

  @Post('/register', { summary: '用户注册' })
  async register(
    @Body('phone') phone: string,
    @Body('password') password: string,
    @Body('smsCode') smsCode: string
  ) {
    return this.ok(
      await this.registerService.register(phone, password, smsCode)
    );
  }
}
