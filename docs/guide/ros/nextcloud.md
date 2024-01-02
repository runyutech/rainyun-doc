
# 雨云服务器使用Docker搭建个人网盘NextCloud并接入雨云对象存储

**雨云服务器使用Docker搭建私有云盘NextCloud并接入雨云对象存储ROS**

## NextCloud简介

NextCloud由原ownCloud联合创始人Frank Karlitschek创建的，继承原ownCloud的核心技术又有不少的创新。在功能上NextCloud和ownCloud差不多，甚至还要丰富一些，在用户使用体验方面，NextCloud安装与使用都非常地顺手，最重要的是NextCloud完全开源免费。

NextCloud不仅是一个私人云网盘平台，也支持多用户同步协作使用。NextCloud支持账号注册，可以为账号开启两步验证，以确保账号安全。同时，NextCloud对于公开分享的文件可以设置有效期，对于上传的视频、音乐、Office文档等直接支持在线预览和播放。

NextCloud还提供了上百种的免费应用和插件，这些NextCloud应用与插件可以将NextCloud打造成为一个在线文档共享与编辑平台、音乐与视频娱乐平台以及文件存储下载平台。当然，如果是自己手动安装的NextCloud的话，那么这些插件也得自己配置好环境才行。

NextCloud服务端开源地址：[https://github.com/nextcloud/server](https://github.com/nextcloud/server)

Docker版开源地址：[https://github.com/nextcloud/all-in-one](https://github.com/nextcloud/all-in-one)

## 准备

**首先需要一台云服务器和一个域名，服务器要有公网IP，推荐雨云的：**

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

雨云账号注册&云服务器购买和使用教程：[https://www.bilibili.com/video/BV1Kj411x7G6/](https://www.bilibili.com/video/BV1Kj411x7G6/)

注册完账号后进到雨云控制台，**云服务器**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231114220844_97e4c0aea639203fa5970e521bb9aa14.png)

点击**购买云服务器**，接着选择服务器区域，如果你域名已备案建议选择宿迁或十堰的，如果你域名没有备案就选择香港或美国，我这里选择香港。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125182948791_9c8f1aed62607cf0123e97b5922af431.png)

配置选择2核2G一般够用了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125183007279_c3ab76b195409256d12dfb1f601aa5fe.png)

系统选择**Debian12**，预安装APP选择**Docker环境**（选了这个可以跳过下面安装Docker的步奏）。如果所选区域没有Debian12就选择Debian11，如果没有预安装Docker就需要执行下面教程安装Docker那步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125183045465_1eca7d59f4284a2c4cbe3fc4cf83b01c.png)

都选好后就可以点击立即购买了，也可以选择1元试用1天。

购买后即可在我的云服务器这里看到你买的云服务器，点击**管理**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125183132564_5214e66216978f328d20cfd46915877e.png)

接着就可以看到云服务器的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125183226547_13c332ddbf422c16be4bf57805882614.png)

等待服务器创建完成以及预安装APP安装完成。

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

## 设置域名解析

将一个域名解析到你服务器IP

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125184944535_26a986b504f0e7c7a32619ae3c26f271.png)

## 安装NextCloud

执行下面命令运行Nextcloud AIO：

```bash
docker run \
    --sig-proxy=false \
    --name nextcloud-aio-mastercontainer \
    --restart always \
    --publish 80:80 \
    --publish 8080:8080 \
    --publish 8443:8443 \
    --volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
    --volume /var/run/docker.sock:/var/run/docker.sock:ro \
    --env NEXTCLOUD_DATADIR=/data/nextcloud \
    nextcloud/all-in-one:latest
```

上面命令中的`/data/nextcloud`是Nextcloud网盘数据文件夹，你可以自行更改放在你想放的地方。

会在以下端口开启服务：

- 80：Nextcloud HTTP服务，用于重定向到HTTPS
- 8080：Nextcloud AIO HTTPS服务，使用自签名证书
- 8443：Nextcloud AIO HTTPS服务，自动签发Let's Encrypt证书

在后续安装时，还会在443端口开启Apache的HTTPS服务，自动签发Let's Encrypt证书。

将域名绑定到**公网IP**后，访问`https://你的域名:8443`进入Nextcloud AIO。如果无法访问或证书错误，请检查80端口是否正常开放。

## 进入NextCloud

复制下面这串密码，这个只会在第一次进入时显示。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125185858429_22484aea14f8a884f1adc608915d16dd.png)

输入刚刚复制的密码然后点`log in`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125185810692_a2a54821b05833e3f297585e27075edd.png)

登录之后AIO会提示输入域名，这里输入你的域名就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125194020947_86a98743d6a2ba0b8c5149a6475d85b3.png)

到达下一步container页面后，我们先把时区改成上海的。 输入Asia/Shanghai 提交即可。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125194205367_75f0532aec1a5475ed399d6b7e994aee.png)

然后是安装你所需要的插件，如果不安装，则直接点击**下载并且启动容器**，如果要安装的话，请确保符合最低配置要求。下面有写：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125194348064_999ade7c1dc900ea0aa9b13ae1d72a7d.png)

看到这个页面就是搭建成功了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125203225448_3991106ffe607a92c90ad0ed8458e23f.png)

点击`Open your Nextcloud `跳转到登陆页面，输入刚刚页面显示的初始账号密码，然后登陆。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125203352920_6fae9da707ce0f41d44bf8adf393fb03.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125204011293_5c28430f3d21ec4b0b5316d7e0141cb0.png)

## 创建对象存储存储桶

雨云对象存储介绍：[https://forum.rainyun.com/t/topic/6107](https://forum.rainyun.com/t/topic/6107)

回到雨云控制台，点击**云产品**，点击**对象存储右边的立即购买**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125210152616_4bbcb9654feb2df8efe037a4f0e833f9.png)

选择一个套餐并购买，目前雨云对象存储刚发布一周内活动价5折。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125211102510_4d5e721eb4e056facf263bab0064bd5f.png)

接着进到对象存储控制台，点击**创建存储桶**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125211357530_e27c2757abff4df7107e41052b62af40.png)

接着输入要创建的存储桶名称，选择刚刚购买的实例，点击创建。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125211530419_60997bd307b3f093a83c9d74e1cac15f.png)

点击存储桶右边的管理按钮，进入的存储桶的管理页面

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125212408812_d989743e2ca8c70a2236dc34e6e8d00f.png)

点击**信息与监控**，这里的信息等会要用到

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125212439572_988e536b23de2fab7b8f77e6a06a1545.png)

## 挂载雨云对象存储ROS

点击右上角**头像**，点击**应用**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125205908323_0aa7a5f90ecdb5f0049d393bc091708e.png)

在精选应用这里找到`External storage support`（外部存储支持），点击启用。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125205804916_e779e758d01b7891bcdbfcbbe25ac08b.png)

点击头像，点击**管理设置**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125212532609_e5464a0328080c69fd02fe5f9a715e62.png)

点击左边栏这里的外部存储

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125212643226_42ad5a14d780be4a0fb79f6b2544b751.png)

选择存储类型Amazon S3

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125212718506_0097b31b84a37168de51aaae4fb92277.png)

参照下面图片填写，

- 目录名称自己定一个，
- 认证选Access key，
- Bucket填你刚刚创建的存储桶的桶名称，
- 主机名填对象存储控制台显示的API端点，只用填域名就行，前面的https和后门的桶名称不用填进去，
- 勾选启用SSL
- 勾选启用Path Style
- 如果需要所有用户都能访问这个文件夹就勾选所有用户

点击最右边的钩√

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125212837103_69da58a5b250e452d376610836573445.png)

点击文件这里就可以看到刚刚挂载的目录

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125213437383_869fffa348fb59b4f80bf3b51af99a4d.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125213516429_b326b2c818a333513c2cc92d143d08e3.png)

## 推荐阅读

- 雨云OSS服务介绍和使用教程，Chevereto图床使用雨云OSS的教程：[https://forum.rainyun.com/t/topic/5573/](https://forum.rainyun.com/t/topic/5573/)
- PicGo+雨云ROS搭建自己的图床，可配合Typora使用：[https://forum.rainyun.com/t/topic/5659/](https://forum.rainyun.com/t/topic/5659/)
- 雨云游戏云MCSM面板服使用&我的世界Forge服务端开服教程：[https://forum.rainyun.com/t/topic/5727](https://forum.rainyun.com/t/topic/5727)
- 雨云虚拟主机使用教程&WordPress博客网站搭建教程：[https://forum.rainyun.com/t/topic/5769](https://forum.rainyun.com/t/topic/5769)
- 雨云游戏云VPS搭建MCSM面板和我的世界Paper服务器教程：[https://forum.rainyun.com/t/topic/5836](https://forum.rainyun.com/t/topic/5836)
- 雨云服务器搭建内网穿透服务器教程，NPS搭建和使用教程：[https://forum.rainyun.com/t/topic/6008](https://forum.rainyun.com/t/topic/6008)



