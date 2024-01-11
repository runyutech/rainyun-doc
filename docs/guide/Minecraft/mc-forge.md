
# 使用MCSM面板搭建我的世界Forge服务端

[雨云](https://blog.zeruns.tech/tag/雨云/)面板服目前支持一键开服的游戏有：Minecraft Java版、Minecraft 基岩版、泰拉瑞亚、饥荒，还提供纯Java/Linux环境（Docker），方便开自己开其他游戏服。

其中Minecraft Java版支持一键开服的有Arclight、Mohist、CatServer、SpongeForge、Thermos、Uranium、Fabric、Waterfall、BungeeCore、Velocity，forge目前不支持，所以**本篇教程就讲用雨云面板服的纯Java环境开forge1.20.2服务端的教程。**

## 雨云游戏云介绍

无论您是专业腐竹还是开服小白

都可以用游戏云3分钟搭建一台适合自己的游戏服

**对比普通云服务器，游戏云具有更高的性能优势**

- 采用专用高主频CPU
  - 13900K 5.8Ghz
  - 5900X 4.8Ghz
  - E5 2666v3 3.4Ghz
  - Gold 6146 4.2Ghz
- DDR4内存
- 高速SSD NVME硬盘

## VPS和面板的区别和优点

#### VPS

VPS是基于KVM技术创建的云服务器，支持window、linux系统。

可以远程进入，并且像家用电脑一样进行服务端搭建。

性能高，可安装多种程序和服务端多开，可开放15个端口，支持备份。

应用扩展性极强。

#### 面板服

面板服是基于MCSM/翼龙面板创建的服务端容器，全程网页操作，简单快捷，

支持日付（一天一包辣条），

适合新手服主和单端场景。

> 什么？你说这些你都知道？好吧~带你看看不知道的

一个优秀的游戏云服务器，通常需要满足四大条件

- 诚信可靠，服务周到，性能强劲，极速高防

**雨云在此基础上，加入了六大特色**

- 开箱即用，动态计费，按天计费，自研后台，一元试用，七天无理由

#### 开箱即用

雨云为您准备了快捷工具，无论是VPS和面板，无需自行准备，

选好服务端直接开服，同时支持上传自己的服务端、整合包。

#### 动态计费

动态计费是雨云可以保证**性价比和稳定**两者的关键

是一个帮服主省钱的好东西，实现超低租金体验高配主机，

每天根据您的CPU消耗量额外结算余额。

**动态计费和按天计费什么关系？**

两者都是日结，都可以在使用过程中进行开关，都需要账户预留余额。

按日计费是每天定时用余额结算下一天的日租。（面板服专供）

动态计费是每天定时用余额结算上一天的CPU消耗费用。

更多计费明细可阅读主站内的详细介绍。

#### 自研后台，强大功能

所有优秀机制，离不开雨云为用户精心自研的管理系统，

同时提供弹性选配，Nat端口开放，系统切换，自动备份，升级/降级等强大功能。

## MC 1.20更新内容

1.20版本是足迹与故事的首个正式版，也是Java版的一次主要更新，发布于2023年6月7日。此次更新在Minecraft Live 2022期间宣布，主题名称于2023年3月2日的Minecraft Monthly上公布。它的部分特性从22w42a开始以内置数据包的形式开发。
这次更新加入了很多新的方块、物品和生物，例如樱花树、竹马赛克、嗅探兽、锻造模板等。此外，还增加了考古学要素，可以用刷子清理可疑的方块，发现陶片和其他物品。

## Forge介绍

Minecraft [Forge](https://blog.zeruns.tech/tag/forge/)是一个用于Minecraft的模组开发和玩家使用的开源API（应用程序编程接口），它允许开发者创建基于Minecraft的模组，可以添加新物品、方块、实体、合成配方等。

同时，Minecraft Forge API也为玩家提供了一种管理和使用模组的方式。在Minecraft Forge API的支持下，玩家可以自由地分享、下载和使用其他开发者创建的模组，为Minecraft增添不同的内容和玩法。

使用Minecraft Forge API，开发者可以创造自己的方块、物品、实体、合成配方，甚至可以修改游戏核心代码以实现高度自定义化的游戏体验。同时，开发者还可以创建新的维度和世界生成器，增加各种新的游戏机制和功能。

对于玩家来说，Minecraft Forge API能够方便地实现安装和管理模组，玩家只需要下载适合自己Minecraft版本的Minecraft Forge，然后将想要使用的模组放入游戏的mods文件夹中，就能在游戏中使用这些模组了。

## MCSM9介绍

**分布式，稳定可靠，开箱即用，高扩展性，支持 [Minecraft](https://blog.zeruns.tech/tag/mc/) 和其他少数游戏的控制面板。**

[MCSManager](https://blog.zeruns.tech/tag/MCSManager/) 面板（简称：[MCSM](https://blog.zeruns.tech/tag/mcsm/) 面板）是一款开源，分布式，轻量级，快速部署，支持大部分游戏服务端和控制台程序的管理面板。

此软件在 Minecraft 和其他游戏社区内中已有一定的流行程度，**它可以帮助你集中管理多个物理服务器**，动态在任何主机上创建游戏服务端，并且提供安全可靠的多用户权限系统，可以很轻松的帮助你管理多个服务器，一直在为 [Minecraft](https://blog.zeruns.tech/tag/mc/)，Terraria，Steam 游戏服务器管理员，运维人员和个人开发者提供健康的软件支持。

## 购买面板服

首先需要注册个雨云账号

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券，消费后还可获得价值5元的积分返现**

注册完账号后进到雨云控制台，游戏云入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231018215356_eb70163662fb3d48b9b77554283393a3.png)

点击**购买游戏云**，选择**MCSM面板**，选择**纯Java环境**（如果要开的版本在列表里可以直接选择，不需要再看下面的教程了），**Java版本17**（1.16.5版本选Java11，1.17及以上版本选Java17，1.16.5以下版本选Java8）

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023195718682_252930dde94416ca85d61902ba514021.png)

接着**选择机型和配置**，MCSM面板目前有13900KF、5900X、Gold 6146和E5 2666V3这4种配置，开1.20.2之类的高版本服建议选5900X和13900KF，不过目前没货，我这里用Gold 6146演示，**配置建议4核8G及以上**，然后**面板账号那设置一个账号**，选好后就可以**点右下角的购买**了，可以日付、月付、年付，年付有7折优惠。

计费模式如果是经常玩的建议选固定计费，不常玩的选动态计费即可。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023200022911_5722a1797f4b1769c6815a4d882e8f84.png)

购买后即可在我的游戏云这里看到你买的面板服，点击**管理**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023200346985_c7723f0070488a32429fd28546ebd2c4.png)

接着就可以看到面板的信息了，在这里重装/切换游戏服，可以升级配置，点击**进入MCSM管理面板**，还有**记住右边这个端口号**，后面会用上的。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023200647701_a01107d6c0360e6e25d6e7ce8fa8fbd5.png)

再点击进入面板，输入用户和密码，然后登陆

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023200817382_e33f4618ddb36ef97e58081223731972.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023201124638_010c046884a6dc197cb650f89e0963ff.png)

我这里有2台面板服，实例名称就是你在雨云控制台的游戏云ID，点击你要管理的面板服的右边的管理，进入到面板

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023202513238_adeb33911ac278359f4f7a502dd71562.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023202711176_aa443b216f1e67da299fd26a90eac20a.png)

## 运行服务端

首先要去下载一个服务端核心（.jar 格式），我这里以forge1.20.2为例。

forge官网：[https://files.minecraftforge.net/](https://files.minecraftforge.net/)

forge-1.20.2-48.0.30 [雨云ROS](https://forum.rainyun.com/t/topic/5573/)下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/forge-1.20.2-48.0.30-installer_2caf03190ac999ba8a68f7b368e53da4.jar](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/forge-1.20.2-48.0.30-installer_2caf03190ac999ba8a68f7b368e53da4.jar)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231019000044509_e147f4e407d06f83a5e9a43401cc00c8.png)

点击**文件管理**→**上传文件**，将刚刚下载的jar文件上传到服务器

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023203036756_85e45e41ac30293a17f86cdd46884b17.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023203119475_61d0768dd1b8b7d69a0c94005484c02d.png)

在文件管理页面，点击 `启动脚本(可修改).sh` 文件右边的编辑，然后将启动命令改成 `java -Xms128M -XX:MaxRAMPercentage=95.0 -Dfile.encoding=UTF-8 -Duser.language=zh -Duser.country=CN -jar forge-1.20.2-48.0.30-installer.jar --installServer` 这里面的 **`forge-1.20.2-48.0.30-installer.jar` 改成你jar文件的文件名**。

解析一下上面的启动命令：

- `-jar` **表示运行jar程序，后面填要运行的jar文件名**；
- `--installServer` 表示安装服务端；
- `-Dfile.encoding=UTF-8` 指定文件编码为UTF-8，可以避免中文乱码的问题；
- `-Duser.language=zh -Duser.country=CN` 指定语言和地区为中文和中国，部分插件或服务端会自动切换到中文；
- `-XX:MaxRAMPercentage=95.0` 指定了JVM可以使用系统可用内存的百分比，95.0就是限制可以用95%的内存；
- `-Xms128M`  是一个Java虚拟机（JVM）的启动参数，用于设置JVM的初始堆内存大小。

这个启动命令是安装命令，高版本的forge、fabric服务端需要先运行安装；官方服务端不需要先运行安装，可以直接运行，把命令后面的`--installServer`去掉就行。

修改完保存文件即可。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023203846709_5817b96cc0dc8bb8a13106164fc95a0f.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023203833860_29b608b299536715c77bb201dfa5a176.png)

接着点击**回到控制台**，然后点击**开启实例**，等待安装完成，国内服务器因为国内特殊的网络环境原因有下载失败的概率。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023204220002_9552cec385b537b6a6c6d8df23654d5f.png)

如果下载安装失败的就下载下面链接的压缩包，这个压缩包我已经运行过安装了，把这压缩包上传到服务器然后解压，将解压出来的文件复制到根目录，接着继续下面编辑run.sh文件的步奏。

forge-1.20.2-48.0.30 下载好库文件的压缩包：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/forge-1.20.2-48.0.30_3fd0d399eb06c8ccb5c9a317ef9c43b4.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/forge-1.20.2-48.0.30_3fd0d399eb06c8ccb5c9a317ef9c43b4.zip)

如果下载安装成功，终端会显示如下信息`The server installed successfully`，点**文件**这里也会出现`run.sh`文件，如下图所示：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023204932759_127c51982310dfbd14a8629f6262d50d.png)

到**文件管理**那编辑 `run.sh` 文件，删掉 `@user_jvm_args.txt` ，然后在下图所示位置输入 `-Xms128M -XX:MaxRAMPercentage=95.0 -Dfile.encoding=UTF-8 -Duser.language=zh -Duser.country=CN` 注意空格分隔。输入完后点击保存内容。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023205213266_9b708df2993d9db5a2f7e06427b6e58e.png)

然后继续编辑 `启动脚本(可修改).sh` 文件，将**启动命令**改成 `bash run.sh` ，接着回到**控制台**点击**开机**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023205327522_8e448c7fd7a6f88b21b7fa6e057b8b1c.png)

如果出现下图这行信息`You need to agree to the EULA` 就需要修改**eula.txt**文件同意一下eula协议。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023205518350_7b9e7c4ceb92c3981f5aea41f7664dfe.png)

点击**文件管理**，点击**eula.txt**右边的编辑按钮进入编辑

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023205658131_3e64080e64fbd809f02f7e341b4f1c3d.png)

将`eula=false`改成`eula=true`，然后保存

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023205722947_98dbfaaefbd027ad6b9715863dff2f9a.png)

**回到控制台**再次**开启实例**，出现Done则表示服务器开启成功。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023210036088_f21273ca53954c8e70f7c3ccd43191dd.png)

如果想修改服务器设置，比如关闭正版验证，可以点击文件管理，然后点击 `server.properties` 编辑里面的设置项，具体什么对应什么功能可以自己百度一下，将里面的`online-mode=true`改成`online-mode=false`后保存内容，然后重启服务器即可关闭正版验证。

**还有将端口修改为你服务器端口（就是控制台右上角显示的地址的冒号后面的数字，比如我的是20058），将`server-port=25565`改成`server-port=22293` ，这里的20058要改成你自己的端口号！（就是前面让你记住的端口号）这一步是必须的，修改好后重启服务器。**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023210541249_07d05162c9dc719c2976a836e2396ba2.png)

MOD安装看这篇文章：[https://blog.zeruns.tech/archives/696.html](https://blog.zeruns.tech/archives/696.html)



## 进入游戏

在游戏里点击添加服务器，输入雨云控制台上显示的地址，比如我的是`dm.rainplay.cn:22293`，如下图所示。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023210735667_7bb660a2c53efbe923276df48a71e3f4.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023210808759_86befc1e776d7375b31c5cf5acde05a1.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231023210938520_f2d421f0cfc76328dec8d76701a4277a.png)

## 视频教程
<iframe class="iframe_video" src="//player.bilibili.com/player.html?aid=535120572&cid=1310057813&page=1&autoplay=false&muted=true&highQuality=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
