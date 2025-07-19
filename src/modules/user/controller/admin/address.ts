import { CoolController, BaseController } from '@cool-midway/core';
import { UserAddressEntity } from '../../entity/address';
import { UserAddressService } from '../../service/address';

/**
 * 用户地址
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: UserAddressEntity,
  service: UserAddressService,
  pageQueryOp: {
    fieldEq: ['userId'],
    addOrderBy: {
      isDefault: 'DESC',
    },
  },
})
export class AdminAddressController extends BaseController {}
