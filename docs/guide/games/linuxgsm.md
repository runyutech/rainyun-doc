# 使用LinuxGSM部署并管理游戏服务器，支持上百款游戏

## 介绍

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240306121335_80cde90db39cb1313b921ed16f8257b6.png)

LinuxGSM是一个开源的脚本，可以在Linux上部署和管理游戏服务器。它支持超过100款游戏，包括Minecraft、Counter-Strike: Global Offensive、Rust等。

此外，LinuxGSM还提供了一些额外的功能，如监控、备份、更新等。它还支持Docker，可以在容器中运行游戏服务器。

## 环境准备

在开始之前，你需要准备一台安装了Linux操作系统的服务器。你可以选择任何一款发行版，如Ubuntu、Debian、CentOS等。

因为游戏服务器性能消耗比较大，这边使用[雨云游戏云VPS服务器(点击进入购买)](https://app.rainyun.com/apps/rgs/buy)进行演示。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240306121933_41e3d41a84284984c7521d061b9b6763.png)

## 安装LinuxGSM

我们需要连接到服务器之后才可以安装LinuxGSM。你可以使用SSH工具连接到服务器，详细连接方法以及连接工具可以参考[连接到游戏云服务器](/docs/rgs/detail/connect)。

连接到服务器之后，我们需要安装一些依赖，以便LinuxGSM可以正常工作。安装的依赖需要访问[LinuxGSM支持游戏列表](https://linuxgsm.com/servers/)，
找到需要部署的游戏服务器，点击进入，然后点击`Dependencies`，选择自己的系统并将命令复制到服务器执行。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240306122916_d4a6019515e11918e40267833bdb3173.png)

安装完依赖之后，点击Install，按照网页说明新建用户，并下载执行安装命令。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240228150352_e9e0c1f4adbadc8c5ed27bb8e40f200a.png)

## 配置游戏服务器

安装成功之后，我们点击页面上的`Basic Usage`，这里详细说明当前游戏的配置指令，可以使用这些命令进行对服务器的操作。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240307144453_55af090d77b349890e0a55abfd725d00.png)

## 游戏列表

