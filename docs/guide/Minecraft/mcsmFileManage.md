---
title: MCSM面板文件管理
description: 文件管理
sidebar_position: 6
---

## MCSM文件管理

需要配置服务器文件，例如上传mod、存档等操作，可以使用文件管理功能。

点击文件管理，进入服务器文件列表。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231219163857_101d8b38ca62c90e02194dde30c542ed.png)

获取到文件之后自行操作即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231219163918_c4119ba0134d291b241b1eb907d49205.png)

:::tip
上传的压缩包需要是`ZIP格式`才可以在线解压。
:::

除了MCSM自带的文件管理外，我们还支持使用SFTP协议进行文件管理。

## 使用SFTP管理MCSM面板

要使用SFTP管理你的面板文件，我们可以使用WINSCP，FileZilla等软件进行连接。
首先我们需要获取到MCSM的SFTP连接信息，连接信息可以到管理页面获取到

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/05/20240528115903_4ed48f0dc81bb3ac8bf44eea3afd4888.png)


> * 服务器地址：`sftp://******` 使用这里的地址连接
> * 用户名：使用图上自己管理页面所展示的用户名
> * 密码：密码和你的MCSM面板访问密码一致
> * 端口：22

### WINSCP

下载安装好winscp后，我们配置按照上方获取到的信息填入软件

* 协议选择SFTP
* 主机名：填入获取到的服务器地址
* 端口：22
* 用户名：填入获取到的用户名
* 密码：填入面板密码

配置好之后点击登录即可

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/05/20240528120247_d6db6fb8b1c615f472c6e4f96664d0c3.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/05/20240528120452_cb41be366b83fa2034271801a928c7ca.png)

### forklift
如果你的机器是其他系统，可能无法使用WINSCP，我们可以使用forklift等软件进行连接。

我们使用forklift为例，按照下方填入你的连接信息，点击connect，提示证书问题再次点击连接即可连接到你的MCSM面板文件。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/05/20240528121724_f7d2fb44bc3b5b413f30c64a3c033b36.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/05/20240528121822_11eae540533f22ca4a615234efa738a3.png)



