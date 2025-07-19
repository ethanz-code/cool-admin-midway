import { Get, Inject, Post, Provide, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { UserAddressEntity } from '../../entity/address';
import { UserAddressService } from '../../service/address';

/**
 * 地址
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: UserAddressEntity,
  service: UserAddressService,
  insertParam: ctx => {
    return {
      userId: ctx.user.id,
    };
  },
  pageQueryOp: {
    where: async ctx => {
      return [['userId =:userId', { userId: ctx.user.id }]];
    },
    addOrderBy: {
      isDefault: 'DESC',
    },
  },
})
export class AppUserAddressController extends BaseController {
  @Inject()
  userAddressService: UserAddressService;

  @Inject()
  ctx;

  /**
   * 设置默认地址
   * @param id 地址ID
   */
  @Post('/setDefault', { summary: '设置默认地址' })
  async setDefault(@Query('id') id: number) {
    if (!id) {
      return this.fail('地址ID不能为空');
    }

    // 检查地址是否存在且属于当前用户
    const address = await this.userAddressService.info(id);
    if (!address) {
      return this.fail('地址不存在');
    }

    if (address.userId !== this.ctx.user.id) {
      return this.fail('无权操作此地址');
    }

    // 设置为默认地址
    await this.userAddressService.setDefault(id, this.ctx.user.id);

    return this.ok('设置成功');
  }

  @Get('/default', { summary: '默认地址' })
  async default() {
    return this.ok(await this.userAddressService.default(this.ctx.user.id));
  }
}
