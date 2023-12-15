---
title: 连接服务器
description: 连接服务器
sidebar_position: 5
---

# 连接服务器

连接服务器的信息可以在[云服务器](https://app.rainyun.com/apps/rcs/list)页面找到，点击管理，可以获取到服务器相关信息：

使用提供的相关信息即可连接到服务器。
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/img_1701937114_befe187f56277471c822191918972c57)                       |


## 连接到Linux服务器

### 使用SSH连接

我们可以通过SSH的方式连接到Linux服务器，常用工具有Xshell、putty，Termius，系统终端等，这里以系统终端为例。

我们打开系统终端，输入`ssh root@IP地址`，回车后会提示输入密码，输入密码即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215103322_6c8bbc6368b19a68b058e68dc5fc5398.png)

如果没有公网IP，可能需要指定端口，例如`ssh root@IP地址 -p 端口号`，回车后会提示输入密码，输入密码即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215103254_1d6133e4b7943b038b8c2667a056ea04.png)

### 使用VNC连接

如果您的服务器无法通过SSH连接，可以尝试使用VNC连接，我们可以在[云服务器](https://app.rainyun.com/apps/rcs/list)页面找到，点击管理，点击远程连接（VNC），等待加入后，按回车，输入信息即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215103736_38cd4bb11ab1a02e7d56b007dee31a09.png)

## 连接到Windows服务器

### 使用远程桌面连接
如果您是Windows系统，可以使用系统自带的远程桌面连接工具，输入服务器的IP地址，点击连接，输入用户名和密码即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215105217_6304cd84af1d40a8dde9827717a576d1.png)

如果没有公网IP，可能需要指定端口，例如`IP地址:端口号`，点击连接，输入用户名和密码即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215105405_40d715de2d44de265440b7d43165ddcf.png)

### 使用VNC连接

如果您的服务器无法通过远程桌面连接，可以尝试使用VNC连接，我们可以在[云服务器](https://app.rainyun.com/apps/rcs/list)页面找到，点击管理，点击远程连接（VNC），等待加入后，按照页面提示，输入信息即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215105544_f089a47dd53d63b6921b65d5b7e2bc25.png)

## 连接到MacOS服务器

### 使用SSH连接

我们可以通过SSH的方式连接到MacOS服务器，常用工具有Xshell、putty，Termius，系统终端等，这里以系统终端为例。

我们打开系统终端，输入`ssh rainyun@IP地址`，回车后会提示输入密码，输入密码即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215110421_c8d96f7bc2d5626fee0a2fc2dfadc6cb.png)

### 使用VNC连接

除了SSH外，我们可以用VNC的方式连接。

#### 使用访达
如果您的电脑恰巧也是**macOS**，可以使用**访达**直接连接到远程macOS服务器。

打开访达，状态栏点击`前往`，`连接服务器`，输入`vnc://IP地址`，点击连接，输入用户名和密码即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215111001_afa9e9d4774d1d79f2a4921e0d2558bf.png)

#### 使用VNC工具
如果您的电脑**不是macOS**，可以使用**VNC工具**连接到远程macOS服务器，这边使用VNC VIEW演示。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215111740_db170980ffffa19ba8e57c69163a83c6.png)

#### 使用网页版VNC

我们还可以使用控制页面的NO VNC连接，我们可以在[云服务器](https://app.rainyun.com/apps/rcs/list)页面找到，点击管理，点击远程连接（VNC），等待加入后，按照页面提示，输入信息即可连接到服务器。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215111634_cca5b4546bf72398acc3c8a3bb1f0f93.png)



