---
title: 使用宝塔搭建网站
description: 使用宝塔搭建网站
sidebar_position: 3
---

# 使用宝塔搭建网站

## 零、搭建准备

* SSH工具：推荐使用Termius、Xshell，系统终端等。
* 域名：注册域名，如果使用国内机器的话还需要备案。
* 服务器：雨云云服务器(干净环境)。

## 一、购买服务器

准备服务器可以到雨云云服务器购买，购买访问可以查看我们的[快速开始](/docs/rcs/start)。

## 二、安装宝塔

### 使用重装功能安装

在雨云，您可以直接使用重装功能安装宝塔，重装功能可以在[控制台](https://app.rainyun.com/apps/rcs/list)里找到您的服务器，点击管理
，在里面重装时选择安装宝塔即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240115103305_f34c7208bc62bf53d07621c899b37f47.png)
安装成功后回显示访问地址与账号密码。
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240115105430_a08d14885b3c528a2f8959f511594242.png)


### 使用脚本安装

#### 1.远程连接服务器

如果不喜欢使用重装功能，可以使用远程连接到服务器使用脚本安装，连接服务器可以参考我们的[连接服务器](/docs/rcs/connect)。<br/>
这边使用系统自带的终端连接服务器，输入命令`ssh root@服务器IP`，然后输入密码即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240115111308_71df3b86bb5c5671142ba9958b22c64a.png)

#### 2.执行安装脚本
连接到服务器之后执行以下脚本，即可安装宝塔面板。
```shell
if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec
```

### 访问宝塔面板

使用安装之后获取到的访问地址与账号密码，登陆后绑定宝塔账号。
绑定之后我们安装必要环境。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240115112636_dcc42203d59582fcb2bc68200b89d48e.png)

## 三、安装必要环境

安装成功后我们就可以使用宝塔面板了，在网页页面添加网站绑定域名即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116100134_e8060dbbd5435e5b24e7932228d4a2f4.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116100421_440c9a8bb61e12ee390776848e94bf4e.png)

测试访问，如果看到下面界面即为安装成功，可以将自己的网站文件上传覆盖到刚刚设置的网站路径：

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116100514_6a7aa9f9bece4d4f41b03c0adef02286.png)
