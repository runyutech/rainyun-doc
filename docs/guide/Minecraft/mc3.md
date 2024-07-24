# 雨云VPS用win系统搭建Minecraft世界服务器，MC开服教程，小白开服教程

**雨云VPS用Windows系统搭建我的世界世界服务器，Minecraft开服教程，小白开服教程，MC 1.19.4版本服务器搭建教程。**

此教程使用 **Mohist 1.19.4** 服务端，此服务端支持Forge模组和Bukkit/Spigot/Paper插件，如果需要开其他服务端也可参考此教程，操作流程差不多。

5分钟免费开一个MC服！雨云免费服务器领取教程&我的世界开服教程：https://www.bilibili.com/video/BV1oQ4y1E7fE/

## Mohist简介

Mohist是一个出色的Minecraft Forge服务器软件，实现了Bukkit、Spigot和Paper API。通过利用这个强大的组合，您可以创建一个高性能的Minecraft服务器，能够集成模组和插件，确保稳定性和最佳性能。

### Mohist有什么特别之处？

- 增强性能，通过集成Bukkit和Spigot以支持插件，以及Paper以提高性能，即使有大量的模组和插件，也能享受流畅无缝的游戏体验。
- 兼容性，通过Mohist与Bukkit、Spigot和Paper API的集成，解锁无限可能性的模组和插件兼容性。轻松定制您的服务器。
- 社区支持和定期更新，加入Mohist社区获取支持和定期更新！保持与最新的Minecraft版本同步，并获得新功能和改进。

banner官网：[https://new.mohistmc.com/software/mohist](https://new.mohistmc.com/software/mohist)

## 准备

**首先你得有台服务器（已经有的可以忽略），本教程是基于雨云的服务器**

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

雨云账号注册&云服务器购买和使用教程：[https://www.bilibili.com/video/BV1Kj411x7G6/](https://www.bilibili.com/video/BV1Kj411x7G6/)

注册完账号后进到雨云控制台，**游戏云**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231018215356_eb70163662fb3d48b9b77554283393a3.png)

点击**购买游戏云**，选择**VPS服务器**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106165906454_65d7d1886a614863b928436d06df2d62.png)

接着**选择机型和配置**，VPS服务器目前有14900KF、13900KF、Ryzen 7950X、5900X、Gold 6146和E5 2666V3这6种配置，开1.20.2之类的高版本服建议选14900KF、5900X、7950X和13900KF，我这里用5900X演示，**配置建议4核8G以上（Windows自身占用内存较大）**，**系统选择Windows server 2019**，选好后就可以**点右下角的购买**了，年付有7折优惠。可以1元试用1天。

计费模式如果是经常玩的建议选固定计费，不常玩的选动态计费即可。公网IP选择NAT就行，可以开通15个端口，够MC服用了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106170158824_8a7a5ffae3652c811a6355b3920f27a5.png)

购买后即可在我的游戏云这里看到你买的VPS，点击这个卡片或者**管理**键。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106170229818_7d08293084d818af3ed92ffa7fc9789d.png)

接着就可以看到VPS的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106170308166_f808474a28024e789ae941112da40ffb.png)

## 连接服务器

在自己电脑上打开Windows自带的远程桌面软件（RDP）

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106171755387_7402a777a8520fb05de84c72159472b4.png)

输入你服务器的远程连接地址和端口，点击显示选项

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106171933042_72a04a51ee5bab840f9127015a079d7e.png)

用户名输入默认的Administrator，然后点击连接。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106172041064_9f8cb225f275141fa02cda76c9d04d92.png)

接着输入密码并确定。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106172136679_14e9ea4a5722fb2697b32b8f8db35868.png)

如果弹出这个框就直接点是

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106172205316_6c980b30e01c37eb30b86735b9f892ae.png)

然后就连接上服务器了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106172232496_af2b85906f42ade39f583caf20e909a8.png)

## 关闭防火墙

在服务器管理器这里点击 `工具`→`高级安全 Windows Defender 防火墙`。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106173156825_969005896b53c97f29b2533c84836fab.png)

点击`Windows Defender 防火墙属性`，将三个配置文件的防火墙状态改成关闭，然后点确定，雨云的win server2019系统是默认关闭的。

如果你会配置防火墙那可以只开放需要用到的端口会更安全一点。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106173335484_259d89879f5b2bd2bd1e57cfbbb2d6fa.png)

## 设置端口映射

如果你买的带独立公网IP的那可以忽略这一步。

点击NAT端口映射，新建规则，设置需要映射出去的内网端口，然后点创建映射规则，外网端口不用改，它会随机生成，如果创建提示外网端口被使用你就手动随便输入一个。

我的世界服务器需要用到的端口是：25565，需要把这个端口映射出去，记住映射后的公网端口，下面会用到。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106174027091_97c9b4800789bbba9f867cbd67e45077.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106174055702_4b3450f967e05e65044011e4c1ddab76.png)

## 安装JDK/Java

回到服务器远程桌面里，打开浏览器，下载JDK，可以复制下面的地址到浏览器里下载，选一个就行。

1.12.2及以下版本建议用Java8，1.16.5建议用Java11，1.17及以上建议用Java17。

我这里推荐Dragonwell，这是阿里编译的JDK，据说有优化。

Dragonwell17下载地址：[https://github.com/dragonwell-project/dragonwell17/wiki/Mirrors-for-download-(下载镜像)](https://github.com/dragonwell-project/dragonwell17/wiki/Mirrors-for-download-(下载镜像))

Alibaba_Dragonwell_Standard_jdk-17.0.8.0.8+7_x64_Windows版 雨云[ROS](https://forum.rainyun.com/t/topic/5573)下载地址（如果上面链接打不开可以直接使用此链接下载）：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/Alibaba_Dragonwell_Standard_17.0.8.0.8.7_x64_Windows_d94cd0f46d2ba43d97cd085d98f6cca1.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/Alibaba_Dragonwell_Standard_17.0.8.0.8.7_x64_Windows_d94cd0f46d2ba43d97cd085d98f6cca1.zip)

Adoptium JDK下载地址：[https://mirrors.tuna.tsinghua.edu.cn/Adoptium/](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106181601661_24a1392925963728d796cd994904a440.png)

将压缩包里的目录解压出来，选一个地方放，我这里放在D盘

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106182633293_d6230543beeb21ec73da3d438f24d599.png)

右键 我的电脑→属性→高级系统设置→高级→环境变量，点击下面系统变量里的Path然后点击编辑。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106182845231_86286225b6b15df8170dea1296e96d59.png)

雨云的win系统预装了jdk8了，将环境变量中的`%JAVA_HOME%\bin`这条删掉。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106183327357_54fbf3da7a1c2ace2a41fcf9e056498b.png)

然后点新建，将你上面解压出来的JDK目录的bin目录的路径复制进去，接着点确定就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106183411855_8f36579b7529bfeb142ac738bbbd1f23.png)

打开CMD，输入`java -version`，看看有没有安装成功，如果能显示版本号就说明安装成功了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106183542791_9a1cf5a01902a7748c9289ef01de88d0.png)



## 搭建Minecraft服

首先需要在服务器里下载好服务端。

Mohist官方下载地址：[https://new.mohistmc.com/downloadSoftware?project=mohist](https://new.mohistmc.com/downloadSoftware?project=mohist)

mohist-1.19.4-192版 雨云[ROS](https://forum.rainyun.com/t/topic/6201)下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/mohist-1.19.4-192-server.jar](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/mohist-1.19.4-192-server.jar)

在想放服务端的地方新建一个文件夹用来开服，我这里在D盘新建了一个叫mc的文件夹，然后将上面下载的服务端jar文件放到文件夹里。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106210018869_38cbe5ab370f5d624769c3e15d926fc1.png)

在这个目录里新建一个txt文本文件，打开这个文本文件，输入下面的启动命令，然后保存。

 ```bash
 java -Xms128M -XX:MaxRAMPercentage=95.0 -Dfile.encoding=UTF-8 -Duser.country=CN -jar mohist-1.19.4-192-server.jar
 pause
 ```

解析一下上面的启动命令：

- `-jar` **表示运行jar程序，后面填要运行的jar文件名**；
- `banner-1.19.4-392-server.jar` 表示你要运行的jar文件，可以改成自己上面下载的jar文件的文件名；
- `-Dfile.encoding=UTF-8` 指定文件编码为UTF-8，可以避免中文乱码的问题；
- `-Duser.country=CN` 指定地区为和中国，部分插件或服务端会自动切换到中文并从国内镜像源下载资源（如果支持）；
- `-XX:MaxRAMPercentage=95.0` 指定了JVM可以使用系统可用内存的百分比，95.0就是限制可以用95%的内存；
- `-Xms128M`  是一个Java虚拟机（JVM）的启动参数，用于设置JVM的初始堆内存大小。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106210151439_e19c2f1f5f97482c1bd2ad3891547b31.png)

将改好的txt文件重命名为`run.bat`，然后双击打开这个脚本。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106210220566_06dfbbd1321933b32b27524e0344e1a9.png)

等待下载安装，待出现`你需要同意EULA才能继续启动服务器。输入“true”同意`这句话时在cmd窗口输入true然后回车。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106210506545_fa9a7915242db2a676339a98fab401a9.png)

等待出现`Done`就表示服务器开好了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106210639876_9a71cc8ce2266716d3edcfa893ad5888.png)

如果要修改服务器配置（比如关闭正版验证、修改端口等），在服务端目录里找到`server.properties`文件，用记事本打开。

需要关闭正版验证就在这配置文件里找到`online-mode=true`，改成`online-mode=false`，修改后保存。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240107040248133_c4e2d7a8a99dde3ada4df043d45df575.png)

修改完配置文件后需要重启服务端，建议在CMD窗口里输入`stop`命令来停止服务端（强制关闭有概率导致地图/存档损坏），然后再双击`run.bat`脚本来启动服务端。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240107040521564_d77d6095b97ca3daaf741189b6896ca4.png)

到此服务器就开好了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240107040736502_6481bb4037b96e8f31f6e94e2abe2027.png)

## 进入服务器

打开客户端，点击多人游戏，添加服务器，输入你上面将25565端口映射出去的公网地址和端口，比如我的是`f.rainplay.cn:38426`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240107041033052_3bb51c9c87d3a6f3fece5f12464af3cf.png)

然后就可以进入服务器了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240107041118857_b5ec5cd7fb284e67869b69abffc41795.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240107041201842_78f0b82f06fd870ba78e89c8d2bfc8d0.png)

可以在CMD窗口里用op指令给自己op权限

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240107041257462_1e9c41d079b28fff0f0b347cad96c36e.png)
