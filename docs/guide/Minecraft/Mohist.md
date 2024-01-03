# 用雨云VPS搭建我的世界Mohist1.20.2版服务器

**雨云游戏云VPS服务器用Linux搭建MCSM面板和Minecraft Mohist 1.20.2服务器教程，我的世界MOD和插件服开服教程。**

本教程演示安装的MC服是Mohist 1.20.2版，其他版本也可以参考本教程，差别不大。

本教程使用Docker来运行mc服，可以方便切换不同Java版本，方便安装多个mc服版本。

## MCSM9介绍

**分布式，稳定可靠，开箱即用，高扩展性，支持 Minecraft 和其他少数游戏的控制面板。**

MCSManager 面板（简称：MCSM 面板）是一款全中文，轻量级，开箱即用，多实例和支持 Docker 的 Minecraft 服务端管理面板。

此软件在 Minecraft 和其他游戏社区内中已有一定的流行程度，**它可以帮助你集中管理多个物理服务器**，动态在任何主机上创建游戏服务端，并且提供安全可靠的多用户权限系统，可以很轻松的帮助你管理多个服务器。

## Mohist简介

Mohist是一个出色的Minecraft Forge服务器软件，实现了Bukkit、Spigot和Paper API。通过利用这个强大的组合，您可以创建一个高性能的Minecraft服务器，能够集成模组和插件，确保稳定性和最佳性能。

### Mohist有什么特别之处？

- 增强性能，通过集成Bukkit和Spigot以支持插件，以及Paper以提高性能，即使有大量的模组和插件，也能享受流畅无缝的游戏体验。
- 兼容性，通过Mohist与Bukkit、Spigot和Paper API的集成，解锁无限可能性的模组和插件兼容性。轻松定制您的服务器。
- 社区支持和定期更新，加入Mohist社区获取支持和定期更新！保持与最新的Minecraft版本同步，并获得新功能和改进。

## 准备

**首先你得有台服务器（已经有的可以忽略），本教程是基于雨云的服务器**

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

雨云账号注册&云服务器购买和使用教程：[https://www.bilibili.com/video/BV1Kj411x7G6/](https://www.bilibili.com/video/BV1Kj411x7G6/)

注册完账号后进到雨云控制台，**游戏云**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231018215356_eb70163662fb3d48b9b77554283393a3.png)

点击**购买游戏云**，选择**VPS服务器**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217203254550_0cb2006d6b65231b57567c900e212f44.png)

接着**选择机型和配置**，VPS服务器目前有14900KF、13900KF、Ryzen 7950X、5900X、Gold 6146和E5 2666V3这6种配置，开1.20.2之类的高版本服建议选14900KF、5900X、7950X和13900KF，我这里用14900KF演示，**配置建议4核8G及以上**，**系统选择Debian11**，选好后就可以**点右下角的购买**了，年付有7折优惠。可以1元试用1天。

计费模式如果是经常玩的建议选固定计费，不常玩的选动态计费即可。公网IP选择NAT就行，可以开通15个端口，够MC服用了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217203137655_4d04f87899db2fb907a4347f6daa6a67.png)

购买后即可在我的游戏云这里看到你买的VPS，点击这个卡片或者**管理**键。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217203435841_f633590f577f0951d28f5b808a00a9e3.png)

接着就可以看到VPS的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217203505753_7d29c4899dd49d596312fec681cb1dbe.png)

## 连接服务器

下载安装并打开ssh客户端软件，ssh客户端软件推荐putty或mobaxterm。

我这里用mobaxterm，在SSH客户端中输入你的服务器的IP地址或域名（雨云控制台获取），还有SSH端口，然后点击好的或者打开。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217211754901_0f25834ac9d7667b3f7597ec29e9dd09.png)

然后输入账号并按回车，账号一般默认为**root**，接着输入密码并按回车确定，输入密码时不会显示出来。

温馨提示：在SSH终端中按住鼠标左键选择文字，然后松开鼠标，再在空白处单击一下，这样就把选中的文字复制了；在SSH终端单击右键即为粘贴。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217211912191_c64025ad9202046dd0e231657a5ff9a3.png)

## 设置端口映射

点击NAT端口映射

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104140823_3f5cad264b669eb9931e2abde492a81c.png)

新建规则，设置需要映射出去的内网端口，然后点创建映射规则，外网端口不用改，它会随机生成，如果创建提示外网端口被使用你就手动随便输入一个。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104140948_d4a44a65593f82e2f40a4dcb7dd572a1.png)

MCSM需要用到的端口有：23333和24444

我的世界服务器需要用到的端口是：25565

需要把上面这些端口映射出去。记住映射后的公网端口，下面会用到。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217212055865_88445a795ff3c2575519e0d5b54caf07.png)

然后回到SSH终端输入下面这些命令来关闭系统自带防火墙（也可以不关闭防火墙，只需你自己配置开放所需要的端口即可，这样更安全，不过这里不细讲了）。

```bash
# 关闭防火墙，依次执行
systemctl stop firewalld
systemctl disable firewalld
service iptables stop
```

我下面命令提示是防火墙本就并没有开启，不过为了保证顺利开服照例执行一遍。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104141151_237ccdd2db806c3facc276bb243838c8.png)

## 安装MCSM面板

**脚本快速安装**

执行下面两条命令，如果遇到问是否继续的就输入y来确定。

```bash
apt update && apt install wget && apt install git
wget -qO- https://gitee.com/mcsmanager/script/raw/master/setup_cn.sh | bash
```

- 脚本仅适用于 AMD64 架构 Ubuntu/Centos/Debian/Archlinux）
- 执行完成后，使用 `systemctl start mcsm-{daemon,web}` 即可启动面板服务。
- 使用 `systemctl enable mcsm-{daemon,web}.service` 来开启开机自启
- 面板代码与运行环境自动安装在 `/opt/mcsmanager/` 目录下。

配置文件目录： `data/SystemConfig/config.json`

用户数据文件目录：`data/User/*.json`

远程守护进程配置文件目录：`data/RemoteServiceConfig/*.json`

如果显示下图类似信息就是安装成功了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104144705_ab0e8daabd23a9c578d508100128a6a4.png)

**安装完成后访问 [http://你服务器的ip或域名:23333/](https://www.rainyun.com/ryy_) 即可进入面板。**

**因为我这服务器没独立公网IP，所以上面地址中的23333端口需替换成你映射出来公网端口，我上面23333端口映射到的公网端口是23355，每个人的不同，不要照抄我的。**

所以最终面板访问地址是：[http://p.rainplay.cn:23355](https://www.rainyun.com/zeruns_) 你的不一定是这个，根据实际。

进去面板后按照提示设置自己的账号和密码。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104144840_5c62767a8fed0d255634e3214cf07c3f.png)

接着到**节点管理**那设置节点，把下图所示**节点地址设置成你服务器IP或域名**，**端口设置成你24444端口映射出来的公网端口**，我这里是24466，localhost改成服务器公网IP或域名，然后点击右边的更新按钮。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217212740048_aa38b2c0aea69b5f13a1f35a2537f0a6.png)

## 安装Docker

回到ssh终端，输入下面的指令。

**用apt包管理器来安装：**

```bash
# 安装docker，如果遇到问是否继续的就输入y来确定
apt install docker.io

# 设置docker开机自启和启动docker
systemctl enable docker && systemctl start docker

# 检查是否安装成功，若安装成功会显示 Docker version x.x.x
docker -v
```

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104145335_3c4bd30bd3b0584594259e1b41067dfc.png)

**若没安装成功就试试下面的安装脚本：**

```bash
# 安装docker
curl -sSL https://get.daocloud.io/docker | sh

# 设置docker开机自启和启动docker
systemctl enable docker && systemctl start docker

# 检查是否安装成功，若安装成功会显示 Docker version x.x.x
docker -v
```

**如果还是不行就尝试下面链接的手动安装教程吧**

docker手动安装教程：[https://www.runoob.com/docker/ubuntu-docker-install.html](https://www.runoob.com/docker/ubuntu-docker-install.html)

**Docker换国内源**

```bash
# 创建或修改 /etc/docker/daemon.json 文件
apt install nano && nano /etc/docker/daemon.json

# 然后输入下面内容:（输入完后按Ctrl+O，然后回车保存，接着按Ctrl+X退出编辑器）
{
  "registry-mirrors": ["https://docker.nju.edu.cn"]
}

# 重启docker服务
systemctl restart docker.service
```

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104145422_db9ba3a39bae45cea80760eed7cfaaa6.png)

## 安装JDK镜像

进入面板，在**节点管理**这找到**镜像管理**点击进去

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104145516_9cd22ea27090fc9ead5270126522f5c4.png)

点击 新建镜像，接着点击 创建 OpenJDK 17 环境镜像（1.12.2及以下版本选JDK8；1.16及以上选JDK17）。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104145621_7631683e7bd8aeceacc729c3d1a6d043.png)
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104145649_604ff3c9b7a63aaa989dce9f356ba2c9.png)

点击确定，然后等待构建完成

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104145723_25db0e8c96f27c2893e735072a9ec677.png)
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104150212_075ff9fe98b6fbc06ffc25cf999deffb.png)

## 搭建Minecraft服务端

首先要去下载一个服务端核心（.jar 格式），我这里以mohist1.20.2为例。

Paper官网：[https://new.mohistmc.com/software/mohist](https://new.mohistmc.com/software/mohist)

mohist-1.20.2-122 [雨云ROS](https://forum.rainyun.com/t/topic/5573/)下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/mohist-1.20.2-122-server_e28095b9cbbedcbb6895018c7fa6e158.jar](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/mohist-1.20.2-122-server_e28095b9cbbedcbb6895018c7fa6e158.jar)

点击 应用实例→新建实例→Java版Minecraft服务端→上传单个服务端软件

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104150611_cdda4a07240911eee126827f3df01416.png)
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104150643_1292d51dad77a34f237803d7c14ab3a4.png)
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104150711_8e742a17878471adacf5bb64a2de324e.png)

自己输入一个想设置的名称，启动命令输入 `java -Xms128M -XX:MaxRAMPercentage=95.0 -Dfile.encoding=UTF-8 -Duser.country=CN -jar ${ProgramName}` ，然后点下面的上传服务端软件选择上面下载的jar文件。

解析一下上面的启动命令：

- `-jar` **表示运行jar程序，后面填要运行的jar文件名**；
- `${ProgramName}` 代表你接下来上传的文件名，只在这个页面可用，上传完文件后会自动把`${ProgramName}`替换成你上传的文件的文件名；
- `-Dfile.encoding=UTF-8` 指定文件编码为UTF-8，可以避免中文乱码的问题；
- `-Duser.country=CN` 指定地区为和中国，部分插件或服务端会自动切换到中文并从国内镜像源下载资源（如果支持）；
- `-XX:MaxRAMPercentage=95.0` 指定了JVM可以使用系统可用内存的百分比，95.0就是限制可以用95%的内存；
- `-Xms128M`  是一个Java虚拟机（JVM）的启动参数，用于设置JVM的初始堆内存大小。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104151135_5e343e5ab0c04e076c8f20d9a1673296.png)

等待上传完成后点击 前往编辑实例具体参数

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104151212_bb7e971611dda5e3742081167888c059.png)

然后 进程启动方式选择**虚拟化容器**，**环境镜像选择 `mcsm-openjdk:17`**，**网络模式选host**（"host"表示容器与宿主机共享同一网络接口，容器的端口与宿主机的端口直接一一对应，无需进行端口映射），选好后点击右下角的**保存**，你也可以填写右下角的最大内存来限制docker容器最大占用的内存，保存后点控制台。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104151434_5b0e35443e9e558ab7094ea2ff2bdc0a.png)

接着到实例控制台点**开启实例**即可，出现下图所示信息就需要同意一下eula协议，在下面命令框里输入`true`并回车。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217220101095_954918bd6b701b66663f6ddb01b2e048.png)

接着等待服务器开启，出现Done或完成则表示服务器开启成功。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217220221519_3ca07da2c578ccf8b1cde83be8bf7ebe.png)

点 **服务端配置文件→server.properties** ，然后就可以修改服务器的设置，非正版用户记得将 **在线正版验证** 设为否（建议购买正版），设置完成后要点保存。如果要修改端口，在这修改完配置文件后还得去雨云控制台设置NAT端口映射。

**修改完要重启实例**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217220306512_15cd25c6f25243376a4338e23f703c42.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152525_ee1ec38dae199514bf07387ce6b672a1.png)
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152608_aa1fe93e165a685b1c441a0febed0c07.png)

在状态查询这里输入服务器地址和端口可以监控在线人数。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217221725989_54ffffa89d0889b7d77e89710ac41064.png)

## 进入游戏

在游戏里点击**多人游戏**然后点击**添加服务器**，输入你的服务器的**公网IP或域名**，**加上端口号**，端口号是你上面设置的25565映射出来的公网端口，IP和端口之间用**英文冒号**分隔，如下图所示（不要照抄我输入的，按照你自己实际的来）。

例如我的是：p.rainplay.cn:11599

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217221559437_23a4f8bc9bc8af4a9e095ec3b64e160b.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217221627027_673a9bc30f37d3debbf4aff14e110d7c.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231217221824896_4230123d0a9f46bc40b874cda4540e67.png)

## 视频教程

<iframe class="iframe_video" src="//player.bilibili.com/player.html?aid=750124703&cid=1374895803&page=1&autoplay=false&muted=true&highQuality=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


## 推荐阅读

- 雨云服务器快速搭建Cloudreve网盘网站并挂载雨云对象存储的教程：[https://forum.rainyun.com/t/topic/6201](https://forum.rainyun.com/t/topic/6201)
- PicGo+雨云ROS搭建自己的图床，可配合Typora使用：[https://forum.rainyun.com/t/topic/5659/](https://forum.rainyun.com/t/topic/5659/)
- 雨云游戏云MCSM面板服使用&我的世界Forge服务端开服教程：[https://forum.rainyun.com/t/topic/5727](https://forum.rainyun.com/t/topic/5727)
- 雨云虚拟主机使用教程&WordPress博客网站搭建教程：[https://forum.rainyun.com/t/topic/5769](https://forum.rainyun.com/t/topic/5769)
- 雨云游戏云VPS搭建MCSM面板和我的世界Paper服务器教程：[https://forum.rainyun.com/t/topic/5836](https://forum.rainyun.com/t/topic/5836)
- 雨云服务器搭建内网穿透服务器教程，NPS搭建和使用教程：[https://forum.rainyun.com/t/topic/6008](https://forum.rainyun.com/t/topic/6008)

