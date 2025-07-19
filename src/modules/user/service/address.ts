import { Init, Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { Equal, Repository } from 'typeorm';
import { UserAddressEntity } from '../entity/address';
import { InjectEntityModel } from '@midwayjs/typeorm';

/**
 * 地址
 */
@Provide()
export class UserAddressService extends BaseService {
  @InjectEntityModel(UserAddressEntity)
  userAddressEntity: Repository<UserAddressEntity>;

  @Inject()
  ctx;

  @Init()
  async init() {
    await super.init();
    this.setEntity(this.userAddressEntity);
  }

  /**
   * 列表信息
   */
  async list() {
    return this.userAddressEntity
      .createQueryBuilder()
      .where('userId = :userId ', { userId: this.ctx.user.id })
      .addOrderBy('isDefault', 'DESC')
      .getMany();
  }

  /**
   * 修改之后
   * @param data
   * @param type
   */
  async modifyAfter(data: any, type: 'add' | 'update' | 'delete') {
    if (type == 'add' || type == 'update') {
      if (data.isDefault) {
        // 构建查询条件，优先使用data中的userId，如果没有则尝试使用ctx.user.id
        const userId = data.userId || this.ctx.user?.id;

        // 如果有userId，则更新该用户的其他地址为非默认
        if (userId) {
          await this.userAddressEntity
            .createQueryBuilder()
            .update()
            .set({ isDefault: false })
            .where('userId = :userId ', { userId })
            .andWhere('id != :id', { id: data.id })
            .execute();
        }
      }
    }
  }

  /**
   * 默认地址
   */
  async default(userId) {
    return await this.userAddressEntity.findOneBy({
      userId: Equal(userId),
      isDefault: true,
    });
  }

  /**
   * 设置默认地址
   * @param id 地址ID
   * @param userId 用户ID
   */
  async setDefault(id: number, userId: number) {
    // 1. 先将该用户的所有地址设为非默认
    await this.userAddressEntity
      .createQueryBuilder()
      .update()
      .set({ isDefault: false })
      .where('userId = :userId', { userId })
      .execute();

    // 2. 再将指定地址设为默认
    await this.userAddressEntity
      .createQueryBuilder()
      .update()
      .set({ isDefault: true })
      .where('id = :id', { id })
      .andWhere('userId = :userId', { userId })
      .execute();

    return true;
  }
}
