import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';
import { entities } from '../entities';
import { TenantSubscriber } from '../modules/base/db/tenant';

/**
 * 本地开发 npm run prod 读取的配置文件
 */
export default {
  typeorm: {
    dataSource: {
      default: {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
        // 打印日志
        logging: process.env.DB_LOGGING === 'true',
        // 字符集
        charset: 'utf8mb4',
        // 是否开启缓存
        cache: process.env.DB_CACHE === 'true',
        // 实体路径
        entities,
        // 订阅者
        subscribers: [TenantSubscriber],
      },
    },
  },
  cool: {
    // 实体与路径，跟生成代码、前端请求、swagger文档相关 注意：线上不建议开启，以免暴露敏感信息
    eps: process.env.COOL_EPS === 'true',
    // 是否自动导入模块数据库
    initDB: process.env.COOL_INIT_DB === 'true',
    // 判断是否初始化的方式
    initJudge: process.env.COOL_INIT_JUDGE,
    // 是否自动导入模块菜单
    initMenu: process.env.COOL_INIT_MENU === 'true',
  } as CoolConfig,
} as MidwayConfig;
