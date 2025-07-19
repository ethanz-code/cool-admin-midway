import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 用户信息
 */
@Entity('user_info')
export class UserInfoEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '手机号', length: 11 })
  phone: string;

  @Column({ comment: '密码' })
  password: string;

  @Column({ comment: '昵称', nullable: true })
  nickName: string;

  @Column({ comment: '头像', nullable: true })
  avatarUrl: string;

  @Column({ comment: '邮箱', nullable: true })
  email: string;

  @Column({ comment: '邀请码', unique: true, nullable: true })
  inviteCode: string;

  @Column({ comment: '性别', dict: ['未知', '男', '女'], default: 0 })
  gender: number;

  @Column({ comment: '状态', dict: ['禁用', '正常'], default: 1 })
  status: number;

  @Column({ comment: '身份', dict: ['普通', '推广人'], default: 0 })
  identity: number;

  @Column({ comment: '微信用户唯一id', nullable: true })
  unionid: number;
}
