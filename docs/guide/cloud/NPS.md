---
slug: rainyun-nps
title: 雨云服务器助你轻松搭建内网穿透，解决无公网IP问题。
authors: linyu
tags: [技术干货]
---

# 雨云服务器搭建内网穿透服务器教程，NPS搭建和使用教程

在这个高度互联的时代，我们越来越依赖互联网来实现工作和生活的各种需求。然而，随着一些省份逐步收回家庭用户的公网IPv4地址（目前国内大部分地方都是多个用户共用一个公网IPv4地址），我们无法直接通过公网访问家里的设备和服务，这给我们带来了一定的困扰。但是别担心，内网穿透技术就是解决这个问题的绝佳方案。

在本教程中，我们将介绍一款名为NPS的轻量级内网穿透工具，它不仅支持多平台，包括X86、ARM和MIPS，而且还提供了便捷的WEB管理界面，使得搭建和配置内网穿透服务器变得简单而直观。

## 内网穿透简介

内网穿透是一种将内部网络的服务暴露到公网的技术，使得外部用户可以通过互联网访问内部网络中的服务。它允许在没有公网 IP 地址或端口转发的情况下，通过一个中间代理服务器将内部网络的服务暴露给外部用户。

内网穿透通常用于以下场景：

1. 远程访问：当内部网络中的设备需要被外部用户远程访问时，可以使用内网穿透技术。例如，通过内网穿透可以将家庭网络中的个人电脑、NAS（网络附加存储）等设备暴露给外部用户，实现远程访问和控制。
2. 远程办公：在企业中，员工可能需要从外部网络访问内部网络中的办公应用、文件共享等资源。内网穿透可以提供一种安全的方式，让员工能够远程访问这些资源，实现远程办公。
3. 数据备份和同步：内网穿透可以用于将内部网络中的文件、数据库等数据备份到外部云存储服务或同步到其他设备。这样即使内部网络出现故障，数据仍然可以从外部网络进行恢复和同步。
4. 搭建网站和应用程序：内网穿透可以用于将内部网络中的网站、应用程序等服务暴露给外部用户。通过内网穿透，开发者可以在本地搭建并测试自己的网站或应用程序，而无需购买公网 IP 地址或使用其他复杂的端口转发设置。

常见的内网穿透工具包括 ngrok、frp、nps 等。这些工具提供了简单易用的界面和配置选项，可以帮助用户快速搭建内网穿透环境。然而，需要注意的是，在使用内网穿透技术时，安全性是非常重要的考虑因素，应该采取适当的安全措施来保护内部网络的安全。

## NPS介绍

nps是一款轻量级、高性能、功能强大的**内网穿透**代理服务器。目前支持**TCP、UDP流量转发**，可支持任何**tcp、udp**上层协议（访问内网网站、本地支付接口调试、ssh访问、远程桌面，内网dns解析、游戏私服、我的世界服务器 等等……），此外还**支持内网http代理、内网socks5代理**、**p2p等**，同时支持snappy压缩、站点保护、加密传输、多路复用、header修改等。支持web图形化管理，集成多用户模式。

案例：

1. 做微信公众号开发、小程序开发等----> 域名代理模式
2. 想在外网通过ssh连接内网的机器，做云服务器到内网服务器端口的映射，----> tcp代理模式
3. 在非内网环境下使用内网dns，或者需要通过udp访问内网机器等----> udp代理模式
4. 在外网使用HTTP代理访问内网站点----> http代理模式
5. 搭建一个内网穿透ss，在外网如同使用内网vpn一样访问内网资源或者设备----> socks5代理模式

NPS项目Github地址：[https://github.com/yisier/nps](https://github.com/yisier/nps)

NPS官方中文文档：[https://ehang-io.github.io/nps/#/](https://ehang-io.github.io/nps/#/)

### 特点

- 协议支持全面，兼容几乎所有常用协议，例如tcp、udp、http(s)、socks5、p2p、http代理...
- 全平台兼容(linux、windows、macos、群辉等)，支持一键安装为系统服务
- 控制全面，同时支持服务端和客户端控制
- https集成，支持将后端代理和web服务转成https，同时支持多证书
- 操作简单，只需简单的配置即可在web ui上完成其余操作
- 展示信息全面，流量、系统信息、即时带宽、客户端版本等
- 扩展功能强大，该有的都有了（缓存、压缩、加密、流量限制、带宽限制、端口复用等等）
- 域名解析具备自定义header、404页面配置、host修改、站点保护、URL路由、泛解析等功能
- 服务端支持多用户和用户注册功能

## 准备

**首先需要一台云服务器，要有公网IP的，推荐雨云的：**

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

雨云账号注册&云服务器购买和使用教程：[https://www.bilibili.com/video/BV1Kj411x7G6/](https://www.bilibili.com/video/BV1Kj411x7G6/)

注册完账号后进到雨云控制台，**云服务器**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231114220844_97e4c0aea639203fa5970e521bb9aa14.png)

点击**购买云服务器**，接着选择服务器区域，国内用户建议选择内地机房，因为延迟低，比如宿迁和十堰，其中推荐十堰，因为IP便宜，如果预算充足选择宿迁更好。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231114222311_811e2ff33e8d5b7e5955ba32d1082667.png)

配置选择2核2G一般够用了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114222533312_7868bb8cec0bc5bd5fdc641c09d4d161.png)

系统选择**Debian12**，预安装APP选择**Docker环境**（选了这个可以跳过下面安装Docker的步奏）。如果所选区域没有Debian12就选择Debian11，如果没有预安装Docker就需要执行下面教程安装Docker那步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114222751234_bc7fbc8bad1f3670433baac7f736bf96.png)

都选好后就可以点击立即购买了，也可以选择1元试用1天。

购买后即可在我的云服务器这里看到你买的云服务器，点击**管理**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114223339447_3927b766ebead0835bf0a3ce47481bbe.png)

接着就可以看到云服务器的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114223526703_50554c5331f7143f1601e71870821136.png)

## 连接服务器

下载安装并打开ssh客户端软件，ssh客户端软件推荐putty或mobaxterm。

我这里用mobaxterm，在SSH客户端中输入你的服务器的IP地址（雨云控制台获取），还有SSH端口（一般默认是22），然后点击好的或者打开。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114230151729_35725a0d39fe81dec3a06f6df7556770.png)

然后输入账号并按回车，账号一般默认为**root**，接着输入密码并按回车确定，输入密码时不会显示出来。

温馨提示：在SSH终端中按住鼠标左键选择文字，然后松开鼠标，再在空白处单击一下，这样就把选中的文字复制了；在SSH终端单击右键即为粘贴。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114230247490_7a4601d09764193903a7dd65a83a7e3a.png)

## 安装Docker

**如果选择了预安装Docker环境就直接跳过安装这一步，直接Docker换国内源那一步。**

在ssh终端，输入下面的指令。

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

docker手动安装教程：https://www.runoob.com/docker/ubuntu-docker-install.html

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

## 搭建NPS服务端

**安装NPS服务端：**

```bash
# 创建 /opt/nps 目录存放配置文件
mkdir /opt/nps

# 安装wget并且下载配置文件
apt install -y wget && wget https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/conf_1b8df8f61551218f81065d9b20288371.zip

# 解压配置文件到 /opt/nps 目录
apt install unzip && unzip conf_1b8df8f61551218f81065d9b20288371.zip -d /opt/nps

# 拉取 yisier1/nps 镜像
docker pull yisier1/nps

# 运行 nps 容器，配置文件夹 conf 在 /opt/nps/conf 目录下
docker run -d --name=nps --restart=always --net=host -v /opt/nps/conf:/conf yisier1/nps

# 查看日志
docker logs nps

```

**安装完后在浏览器打开：[http://你服务器IP:8080](https://blog.zeruns.tech/)**

**使用用户名和密码登陆（默认admin/123，正式使用一定要更改，修改`/opt/nps/conf/nps.conf`配置文件中的web_password）**

**修改密码：**

```shell
# 安装nano编辑器，编辑nps.conf文件
apt install nano && nano /opt/nps/conf/nps.conf

# 找到web_password这一项，修改密码，修改完后按Ctrl+O，然后回车保存，接着按Ctrl+X退出编辑器
# 建议将public_vkey设置为空

# 修改完后重启NPS容器
docker restart nps
```

服务端配置文件解析：

| 名称                | 含义                                                         |
| ------------------- | ------------------------------------------------------------ |
| web_port            | web管理端口                                                  |
| web_password        | web界面管理密码                                              |
| web_username        | web界面管理账号                                              |
| web_base_url        | web管理主路径,用于将web管理置于代理子路径后面                |
| bridge_port         | 服务端客户端通信端口                                         |
| https_proxy_port    | 域名代理https代理监听端口                                    |
| http_proxy_port     | 域名代理http代理监听端口                                     |
| auth_key            | web api密钥                                                  |
| bridge_type         | 客户端与服务端连接方式kcp或tcp                               |
| public_vkey         | 客户端以配置文件模式启动时的密钥，设置为空表示关闭客户端配置文件连接模式 |
| ip_limit            | 是否限制ip访问，true或false或忽略                            |
| flow_store_interval | 服务端流量数据持久化间隔，单位分钟，忽略表示不持久化         |
| log_level           | 日志输出级别                                                 |
| auth_crypt_key      | 获取服务端authKey时的aes加密密钥，16位                       |
| p2p_ip              | 服务端Ip，使用p2p模式必填                                    |
| p2p_port            | p2p模式开启的udp端口                                         |
| pprof_ip            | debug pprof 服务端ip                                         |
| pprof_port          | debug pprof 端口                                             |
| disconnect_timeout  | 客户端连接超时，单位 5s，默认值 60，即 300s = 5mins          |

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115000816788_0b16874072311c516e48574da55c28d8.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115000941365_43a275b1bb26eb2431680934fe97d3ab.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115001235356_8a59bdc4dbeac28fd94659acbccb782a.png)



## 客户端安装使用

首先登陆进来NPS服务端的WEB管理页面，找到【客户端】，点击【新增】。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115001439355_46bb556c956eb19f8f24041f27705914.png)

备注这里就根据需要写，其他的看着来就行。最后点击【新增】

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115001707046_f594c78a2c3ab126c6a29ad133c6ad0a.png)

刷新一下就能看到我们添加的客户端了，目前是处于离线状态。左边有一个小加号，点击可以展开。下面的客户端命令我们一会要用。下面是各种客户端安装方法，选一种适合的就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115001805628_744438ab41dba88e7414d8c4d3de869a.png)

### Windows

首先下载Windows版的客户端：

github下载地址：[https://github.com/yisier/nps/releases](https://github.com/yisier/nps/releases)

雨云ROS下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/windows_amd64_client.tar.gz](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/windows_amd64_client.tar.gz)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115002039348_2fe8000fcbf3365beaa669c4d947929f.png)

我在需要运行NPS客户端的Windows设备的C盘根目录下建立一个名字叫【npc】的目录，将刚才下载的NPS客户端的文件解压后放到里面。这里注意，我们只要【npc.exe】文件即可。

然后以管理员身份运行命令提示符，输入 `cd /npc` 跳转到npc目录下，输入以下命令：

```shell
npc.exe install 客户端命令（记得不要复制./npc 只要后边的）
```

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115003815434_c2ce2f782ade151becbd71052ad05425.png)

这样我们的npc就添加到系统服务里了，再找到 控制面板 - 管理工具 - 服务 里找到【nps内网穿透客户端】，找到【恢复】选项卡，按照下图中设置即可。设置完成后就可以启动服务了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115003948001_4b9939acbddec1a252587523bdb1f09d.png)

这样客户端就连接到了NPS的服务端了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115004042765_e29944816b44564eb0089c083db6c6c7.png)

### Linux Docker

首先需要安装Docker，安装教程看上面。

Docker方式是支持多平台的，x86、ARM都可以，NAS用户可以通过这个方法安装客户端，一般NAS系统都支持docker。

**安装NPS客户端NPC：**

```bash
# 拉取 yisier1/npc 镜像
docker pull yisier1/npc

# 运行 npc 容器，按提示改好命令，如下图所示
docker run -d --name=npc --restart=always --net=host yisier1/npc -server=<ip:port> -vkey=<web界面中显示的密钥> <以及一些其他参数>

# 查看日志
docker logs npc

```

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115005306527_d58a83cb64e7dcf36c967e5a205e7287.png)

这样NPS客户端就算安装完成了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115005320429_bef18f39ddc4313659fb1b65f1d7da57.png)

### Linux 安装包方式

如果需要安装在ARM或MIPS架构上，到这复制对应版本的下载链接替换下面的链接：[https://github.com/yisier/nps/releases](https://github.com/yisier/nps/releases)

```shell
# 安装wget并且下载NPC服务端并重命名为 npc.tar.gz ，可根据自己系统将apt替换为yum或其他
apt install -y wget && wget --no-check-certificate -O npc.tar.gz https://github.com/yisier/nps/releases/download/v0.26.16.1/linux_arm64_client.tar.gz

# 创建一个名为npc的目录并且解压NPC服务端文件到此目录下，并且进入到npc这个目录下
mkdir /opt/npc && tar -zxvf npc.tar.gz -C /opt/npc && cd /opt/npc

# 安装NPC并启动，按提示改好命令，如下图所示
./npc install -server=<ip:port> -vkey=<web界面中显示的密钥> <以及一些其他参数>

# 启动NPC
sudo npc start

```

这样NPS客户端就算安装完成了

### 建立内网穿透隧道

按照上面的方法安装好客户端后就可以新建内网穿透隧道了，我这里以Windows的远程桌面服务为例，需要将TCP 3389端口映射出去，所以新建一个TCP隧道，你们根据自己实际需要选择TCP还是UDP。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115005727908_fba14e328216ac4e35c2046782b413c6.png)

客户端ID填写你上面添加的客户端的ID，服务端端口填写想映射到服务器的哪个端口，目标IP端口填写你客户端想要映射的端口，IP填127.0.0.1表示本机，也可以填局域网内的其他设备的IP，可将局域网内的其他设备端口映射出去，我这里就填了本机的3389端口，填好后点击新增就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115005859406_86201521bfe472764338524edfbf0847.png)

接着你就可以通过这个服务器的这个端口访问到你内网的机器

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231115010037963_d9a49899a00f24c3d1fede3b0a30c7e4.png)


## 视频教程

<iframe class="iframe_video" src="//player.bilibili.com/player.html?aid=278528764&cid=1335309655&page=1&autoplay=false&muted=true&highQuality=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>




## 推荐阅读

- 雨云OSS服务介绍和使用教程，Chevereto图床使用雨云OSS的教程：[https://forum.rainyun.com/t/topic/5573/](https://forum.rainyun.com/t/topic/5573/)
- PicGo+雨云ROS搭建自己的图床，可配合Typora使用：[https://forum.rainyun.com/t/topic/5659/](https://forum.rainyun.com/t/topic/5659/)
- 雨云游戏云MCSM面板服使用&我的世界Forge服务端开服教程：[https://forum.rainyun.com/t/topic/5727](https://forum.rainyun.com/t/topic/5727)
- 雨云虚拟主机使用教程&WordPress博客网站搭建教程：[https://forum.rainyun.com/t/topic/5769](https://forum.rainyun.com/t/topic/5769)
- 雨云游戏云VPS搭建MCSM面板和我的世界Paper服务器教程：[https://forum.rainyun.com/t/topic/5836](https://forum.rainyun.com/t/topic/5836)

