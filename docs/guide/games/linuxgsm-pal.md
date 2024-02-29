# 使用LinuxGSM搭建Palworld服务器

## 介绍
[LinuxGSM](https://linuxgsm.com/servers)是一个用于下载安装管理游戏服务器的脚本，支持多款游戏搭建服务器。本文将介绍如何使用LinuxGSM搭建Palworld服务器。

## 1. 安装LinuxGSM

Linux支持多款游戏，而每款游戏脚本依赖以及安装方式大同小异，这边以Palworld为例，我们需要进入[LinuxGSM官网](https://linuxgsm.com/servers)，找到需要部署的游戏服务器
，点击进入，然后按图示操作，将对应系统的安装依赖命令复制到终端执行即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240228150019_8f9dbf403054bc38cd385d0723efa5d6.png)

依赖安装完成之后，我们点击Install，按照页面提示，新建一个用户并设置密码，然后下载执行安装命令。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240228150352_e9e0c1f4adbadc8c5ed27bb8e40f200a.png)

安装之后一路回车，直到提示`Install Complete!`即为安装完成。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240228152039_4e96300f022ad0fbac0762897e25f971.png)

## 2. 配置Palworld服务器

使用LinuxGSM安装的机器一般无需详细配置，我们直接使用`./pwserver start`启动服务器即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240228152757_1b278b960a18eaddbf5943d7823fb205.png)

启动成功后我们可以使用`./pwserver details`查看服务器信息，详细的命令而已早linuxGSM上找到。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240228152857_cb79a52be68fbe84f95d726e086dcfe5.png)

