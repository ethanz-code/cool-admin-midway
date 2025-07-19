import { CoolController, BaseController } from '@cool-midway/core';
import { Inject, Post, Body } from '@midwayjs/core';
import { UserInfoEntity } from '../../entity/info';
import { UserInfoService } from '../../service/info';

/**
 * 用户信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: UserInfoEntity,
  pageQueryOp: {
    fieldEq: ['a.id', 'a.status', 'a.identity'],
    keyWordLikeFields: ['a.nickName', 'a.phone'],
  },
})
export class AdminUserInfoController extends BaseController {
  @Inject()
  userInfoService: UserInfoService;
}
