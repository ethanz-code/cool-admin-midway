<p align="center">
  <a href="https://midwayjs.org/" target="blank"><img src="https://cool-show.oss-cn-shanghai.aliyuncs.com/admin/logo.png" width="200" alt="Midway Logo" /></a>
</p>

<p align="center">cool-admin(nodejs版)一个很酷的后台权限管理系统，开源免费，Ai编码、流程编排、模块化、插件化、极速开发CRUD，方便快速构建迭代后台管理系统，支持原生、docker、普通服务器等多种方式部署
到 <a href="https://cool-js.com" target="_blank">官网</a> 进一步了解。
<p align="center">
    <a href="https://github.com/cool-team-official/cool-admin-midway/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="GitHub license" />
    <a href=""><img src="https://img.shields.io/github/package-json/v/cool-team-official/cool-admin-midway?style=flat-square" alt="GitHub tag"></a>
    <img src="https://img.shields.io/github/last-commit/cool-team-official/cool-admin-midway?style=flat-square" alt="GitHub tag"></a>
</p>

## 特性

Ai 时代，很多老旧的框架已经无法满足现代化的开发需求，Cool-Admin 开发了一系列的功能，让开发变得更简单、更快速、更高效。

- **Ai 编码**：通过微调大模型学习框架特有写法，实现简单功能从 Api 接口到前端页面的一键生成[详情](https://node.cool-admin.com/src/guide/ai.html)
- **流程编排**：通过拖拽编排方式，即可实现类似像智能客服这样的功能[详情](https://node.cool-admin.com/src/guide/flow.html)
- **多租户**：支持多租户，采用全局动态注入查询条件[详情](https://node.cool-admin.com/src/guide/core/tenant.html)
- **多语言**：基于大模型自动翻译，无需更改原有代码[详情](https://node.cool-admin.com/src/guide/core/i18n.html)
- **原生打包**：打包成 exe 等安装包，打包完可以直接运行在 windows、mac、linux 等操作系统上[详情](https://node.cool-admin.com/src/guide/core/pkg.html)
- **模块化**：代码是模块化的，清晰明了，方便维护
- **插件化**：插件化的设计，可以通过安装插件的方式扩展如：支付、短信、邮件等功能
- ......

![](https://cool-show.oss-cn-shanghai.aliyuncs.com/admin/flow.png)

## 演示

[AI 极速编码](https://node.cool-admin.com/src/guide/ai.html)

[https://show.cool-admin.com](https://show.cool-admin.com)

- 账户：admin
- 密码：123456

<img src="https://cool-show.oss-cn-shanghai.aliyuncs.com/admin/home-mini.png" alt="Admin Home"></a>

#### 项目前端

[https://github.com/cool-team-official/cool-admin-vue](https://github.com/cool-team-official/cool-admin-vue)

## 运行

#### 修改数据库配置，配置文件位于`src/config/config.local.ts`

以 Mysql 为例，其他数据库请参考[数据库配置文档](https://cool-js.com/admin/node/quick.html#%E6%95%B0%E6%8D%AE%E5%BA%93%E9%85%8D%E7%BD%AE)

Mysql(`>=5.7版本`)，建议 8.0，node 版本(`>=18.x`)，首次启动会自动初始化并导入数据

```ts
// mysql，驱动已经内置，无需安装
typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'cool',
        // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
        synchronize: true,
        // 打印日志
        logging: false,
        // 字符集
        charset: 'utf8mb4',
        // 是否开启缓存
        cache: true,
        // 实体路径
        entities: ['**/modules/*/entity'],
      },
    },
  },
```

#### 安装依赖并运行

```bash
$ pnpm i
$ pnpm run dev
```

启动完成访问：[http://localhost:8001/](http://localhost:8001)

## CURD(快速增删改查)

大部分的后台管理系统，或者 API 服务都是对数据进行管理，所以可以看到大量的 CRUD 场景(增删改查)，cool-admin 对此进行了大量地封装，让这块的编码量变得极其地少。

#### 新建一个数据表

`src/modules/demo/entity/goods.ts`，项目启动数据库会自动创建该表，无需手动创建

```ts
import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商品
 */
@Entity('demo_app_goods')
export class DemoAppGoodsEntity extends BaseEntity {
  @Column({ comment: '标题' })
  title: string;

  @Column({ comment: '图片' })
  pic: string;

  @Column({ comment: '价格', type: 'decimal', precision: 5, scale: 2 })
  price: number;
}
```

#### 编写 api 接口

`src/modules/demo/controller/app/goods.ts`，快速编写 7 个 api 接口

```ts
import { CoolController, BaseController } from '@cool-midway/core';
import { DemoAppGoodsEntity } from '../../entity/goods';

/**
 * 商品
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoAppGoodsEntity,
})
export class DemoAppGoodsController extends BaseController {
  /**
   * 其他接口
   */
  @Get('/other')
  async other() {
    return this.ok('hello, cool-admin!!!');
  }
}
```

这样我们就完成了 7 个接口的编写，对应的接口如下：

- `POST /app/demo/goods/add` 新增
- `POST /app/demo/goods/delete` 删除
- `POST /app/demo/goods/update` 更新
- `GET /app/demo/goods/info` 单个信息
- `POST /app/demo/goods/list` 列表信息
- `POST /app/demo/goods/page` 分页查询(包含模糊查询、字段全匹配等)
- `GET /app/demo/goods/other` 其他接口，成功输出 hello, cool-admin!!!

### 部署

[部署教程](https://node.cool-admin.com/src/guide/deploy.html)

### 内置指令

- 使用 `pnpm run lint` 来做代码风格检查。

[midway]: https://midwayjs.org

---

## 本地仓库与官方仓库的区别

### 1. 版本信息

- **本地仓库**：当前使用的是 cool-admin 8.0.0 版本
- **官方仓库**：目前也是在 8.x 分支下开发维护

### 2. 环境变量管理

- **本地仓库**：使用 dotenvx 进行环境变量管理，支持非对称加密保护敏感配置
- **官方仓库**：使用 cross-env 管理环境变量
- 注意：环境变量中的 `NODE_ENV` 必须存在，并正确对应 `local` 或 `prod`
- 本地仓库提供了环境变量加解密脚本：`encrypt:local`, `encrypt:prod`, `decrypt:local`, `decrypt:prod`

### 3. 功能增强

- 本地仓库提供了更贴合实际应用的用户地址和用户信息相关代码，包含 entity, controller 和 service
- 修改了 JWT 密钥配置，提高安全性

## 推荐插件

### 短信发送插件

为了方便应用中集成短信发送功能，推荐安装以下官方短信插件：

#### 1. 阿里云短信插件

支持调用阿里云短信服务发送短信，配置简单，使用方便。

- **插件标识**: `sms-ali`
- **详细信息**: [阿里云短信插件](https://cool-js.com/plugin/32)
- **安装方式**: 在插件市场下载并添加到项目

```ts
// 调用示例
@Inject()
pluginService: PluginService;

// 发送短信
await this.pluginService.invoke(
  'sms-ali',
  'send',
  ['13800138000'], // 手机号数组
  { code: '1234' }  // 参数
);
```

#### 2. 腾讯云短信插件

支持调用腾讯云短信服务发送短信，功能完善。

- **插件标识**: `sms-tx`
- **详细信息**: [腾讯云短信插件](https://cool-js.com/plugin/31)
- **安装方式**: 在插件市场下载并添加到项目

```ts
// 调用示例
@Inject()
pluginService: PluginService;

// 发送短信
await this.pluginService.invoke(
  'sms-tx',
  'send',
  ['13800138000'], // 手机号数组
  ['1234']         // 参数数组
);
```
