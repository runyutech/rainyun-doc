# 数据库

在云应用上，不仅可以部署应用、网站等，还可以部署数据库。云应用提供了多种数据库服务，支持不同的数据库类型和版本。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/08/20250805144752_76caedd5a95e6f3372fc9e99606d4ce5.png)

## 管理

在云应用的数据库管理页面，可以操作创建查询数据库、删除数据库等操作。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/08/20250805151047_ef0876486a5b18597c902cfd9e00793c.png)


## 状态
在这里可以查看数据库的状态信息，包括数据库的连接数、流量、查询等，下图以Mysql为准。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/08/20250805151326_4dec6e6f6f2551bfe06bf1722502d987.png)

## 性能参数

如果需要调优据库，对数据库参数进行配置，可以点击“性能参数”按钮进行配置。
:::warning
⚠️注意：如果对数据库参数进行修改，请谨慎操作，错误的配置可能会导致数据库无法正常工作。
:::

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/08/20250805151604_24bc1232c654a3eb93a368b79dadeb3b.png)

## 配置

在这里可以配置数据文件，对数据库进行深度配置，下图以mysql为例。
:::warning
⚠️注意：如果对数据库参数进行修改，请谨慎操作，错误的配置可能会导致数据库无法正常工作。
:::

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/08/20250805154307_ed6c1fc687088162e37a82f51caf5cc5.png)

## 日志

在这里可以查看数据库的日志信息，包括错误日志、慢查询日志等，以便排查问题。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/08/20250805154546_8aa037aa56d63eb594ec930eaaa6df85.png)


## 终端

在应用概述页面的左侧菜单中，可以找到“终端”选项，点击进入后可以使用Shell命令对应用进行操作。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/07/20250727161740_ac1ff5b122380f18b3c8aa1683cb3328.png)

## 服务

在应用概述页面的左侧菜单中，用于设置应用需要对外暴露的服务，将内部端口设置端口转发到公网或者是使用独立ip。

如果是对外网访问端口没有特别要求，可以使用共享ip进行访问，如果是需要特殊端口，例如 80 端口，443 端口等，可以使用独立ip进行访问。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/07/20250728110012_0b1b74bd74e0bfb204ec1b5cc36a6d45.png)


![](https://cn-sy1.rains3.com/rainyun-assets/pic/2025/07/20250728110141_c7e16ff0cd372d096efc8f2959caab8d.png)

