
# 雨云游戏云搭建MCSM面板和我的世界Paper服务器

**雨云游戏云VPS服务器用Linux搭建MCSM面板和Minecraft Paper1.20.2服务器教程。**

本教程演示安装的MC服是Paper 1.20.2版，其他版本也可以参考本教程，差别不大。

本教程使用Docker来运行mc服，可以方便切换不同Java版本，方便安装多个mc服版本。

雨云游戏云MCSM面板服使用教程&我的世界Forge服务端开服教程：[https://forum.rainyun.com/t/topic/5727/](https://forum.rainyun.com/t/topic/5727/)

## MCSM9介绍

**分布式，稳定可靠，开箱即用，高扩展性，支持 Minecraft 和其他少数游戏的控制面板。**

MCSManager 面板（简称：MCSM 面板）是一款全中文，轻量级，开箱即用，多实例和支持 Docker 的 Minecraft 服务端管理面板。

此软件在 Minecraft 和其他游戏社区内中已有一定的流行程度，**它可以帮助你集中管理多个物理服务器**，动态在任何主机上创建游戏服务端，并且提供安全可靠的多用户权限系统，可以很轻松的帮助你管理多个服务器。

## 准备

**首先你得有台服务器（已经有的可以忽略），本教程是基于雨云的服务器**

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券，消费后还可获得价值5元的积分返现**

注册完账号后进到雨云控制台，**游戏云**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231018215356_eb70163662fb3d48b9b77554283393a3.png)

点击**购买游戏云**，选择**VPS服务器**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104134838_d9042df12b6d7e7739a931b709640284.png)

接着**选择机型和配置**，VPS服务器目前有13900KF、Ryzen 7950X、5900X、Gold 6146和E5 2666V3这5种配置，开1.20.2之类的高版本服建议选5900X、7950X和13900KF，我这里用7950X演示，**配置建议4核8G及以上**，**系统选择Debian11**，选好后就可以**点右下角的购买**了，年付有7折优惠。可以1元试用1天。

计费模式如果是经常玩的建议选固定计费，不常玩的选动态计费即可。公网IP选择NAT就行，可以开通15个端口，够MC服用了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104135003_f2bbe9caec7fe2101668deee433de1fa.png)

购买后即可在我的游戏云这里看到你买的面板服，点击**管理**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104135526_78541e7249e8482f65dd39c166a18f6c.png)

接着就可以看到面板的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104135647_addddea543ffdc9bb305f49648549efd.png)

## 连接服务器

下载安装并打开ssh客户端软件，ssh客户端软件推荐putty或mobaxterm。

在SSH客户端中输入你的服务器的IP地址或域名（雨云控制台获取），还有SSH端口，然后点击好的或者打开。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104140233_3408a561d0b8619d769b371be01fa0fc.png)

然后输入账号并按回车，账号一般默认为**root**，接着输入密码并按回车确定，输入密码时不会显示出来。

温馨提示：在SSH终端中按住鼠标左键选择文字，然后松开鼠标，再在空白处单击一下，这样就把选中的文字复制了；在SSH终端单击右键即为粘贴。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104140512_b899a62abc04487603141344cacc81f5.png)

## 设置端口映射

点击NAT端口映射

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104140823_3f5cad264b669eb9931e2abde492a81c.png)

新建规则，设置需要映射出去的内网端口，然后点创建映射规则，外网端口不用改，它会随机生成，如果创建提示外网端口被使用你就手动随便输入一个。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104140948_d4a44a65593f82e2f40a4dcb7dd572a1.png)

MCSM需要用到的端口有：23333和24444

我的世界服务器需要用到的端口是：25565

需要把上面这些端口映射出去。记住映射后的公网端口，下面会用到。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104141054_03b02f601b3f7a0e03749618dd427dc8.png)

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

### 脚本快速安装

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

**安装完成后访问 [http://你服务器的ip或域名:23333/](https://blog.zeruns.tech/) 即可进入面板。**

**因为我这服务器没独立公网IP，所以上面地址中的23333端口需替换成你映射出来公网端口，我上面23333端口映射到的公网端口是15128，每个人的不同，不要照抄我的。**

所以最终面板访问地址是：[http://m.rainplay.cn:15128](https://blog.zeruns.tech/) 你的不一定是这个，根据实际。

进去面板后按照提示设置自己的账号和密码。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104144840_5c62767a8fed0d255634e3214cf07c3f.png)

接着到**节点管理**那设置节点，把下图所示**节点地址设置成你服务器IP或域名**，**端口设置成你24444端口映射出来的公网端口**，我这里是15228，localhost改成服务器公网IP或域名，然后点击右边的更新按钮。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104145130_8809eb1625016900b356ad7d7e99a078.png)

### Linux 手动安装MCSM

- 若一键安装不起作用，则可以尝试此步骤手动安装，安装成功就忽略这段。

```bash
# 切换到安装目录，没有此目录请执行 mkdir /opt/
cd /opt/
# 下载运行环境（已有 Node 14+ 可忽略）
wget https://npm.taobao.org/mirrors/node/v14.17.6/node-v14.17.6-linux-x64.tar.gz
# 解压文件
tar -zxvf node-v14.17.6-linux-x64.tar.gz
# 链接程序到环境变量中
ln -s /opt/node-v14.17.6-linux-x64/bin/node /usr/bin/node
ln -s /opt/node-v14.17.6-linux-x64/bin/npm /usr/bin/npm

# 准备安装目录
mkdir /opt/mcsmanager/
cd /opt/mcsmanager/

# 下载面板端（Web）程序
git clone https://github.com/MCSManager/MCSManager-Web-Production.git
# 重命名文件夹并进入
mv MCSManager-Web-Production web
cd web
# 安装依赖库
npm install --registry=https://registry.npm.taobao.org

# 返回上级目录
cd ..
# 下载守护进程（Daemon）程序
git clone https://github.com/MCSManager/MCSManager-Daemon-Production.git
# 重命名文件夹并进入
mv MCSManager-Daemon-Production daemon
cd daemon
# 安装依赖库
npm install --registry=https://registry.npm.taobao.org

# 安装nano编辑器
apt install nano
```

**接着是配置 Systemd 服务**

运行命令 `nano /etc/systemd/system/mcsm-web.service` 来编辑web面板的服务，输入下面的内容，然后按 Ctrl + O 再按回车来保存，接着按 Ctrl + X 来退出。

```bash
# /etc/systemd/system/mcsm-web.service
[Unit]
Description=MCSM 9 Web

[Service]
WorkingDirectory=/opt/mcsmanager/web
ExecStart=/usr/bin/node app.js
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
Environment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

[Install]
WantedBy=multi-user.target
```

运行命令 `nano /etc/systemd/system/mcsm-daemon.service` 来编辑web面板的服务，输入下面的内容，然后按 Ctrl + O 再按回车来保存，接着按 Ctrl + X 来退出。

```bash
# /etc/systemd/system/mcsm-daemon.service
[Unit]
Description=MCSM 9 Daemon

[Service]
WorkingDirectory=/opt/mcsmanager/daemon
ExecStart=/usr/bin/node app.js
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
Environment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

[Install]
WantedBy=multi-user.target
```

**接着是启动服务和设置开机自启**

```bash
# 重新载入变更
systemctl daemon-reload

# 设置开机自启
systemctl enable mcsm-{daemon,web}.service

# 启动服务
systemctl start mcsm-{daemon,web}.service

# 停止服务，正常情况不要运行此命令
systemctl stop mcsm-{web,daemon}.service

# 显示运行状况和日志
systemctl status mcsm-web.service
systemctl status mcsm-daemon.service -l

# 默认情况下，面板端会自动扫描 daemon 文件夹并且自动连接到守护进程。
```

如果登陆面板后没有看到守护进程，可以运行下面的命令来获取密钥，然后按下图所示手动添加到面板。

```bash
cat /opt/mcsmanager/daemon/data/Config/global.json
```

![](https://tc.zeruns.tech/images/2022/04/14/image.png)

下图里的 127.0.0.1 应该改成 你服务器公网IP或域名 ，端口也改成你24444端口映射出去的公网端口。

![](https://tc.zeruns.tech/images/2022/04/14/imagea25c46d942474795.png)

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

docker手动安装教程：[https://url.zeruns.tech/docker](https://url.zeruns.tech/docker)

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

## 运行MC服务端

首先要去下载一个服务端核心（.jar 格式），我这里以paper1.20.2为例。

Paper官网：[https://papermc.io/downloads/paper](https://papermc.io/downloads/paper)

paper-1.20.2-263 [雨云ROS](https://forum.rainyun.com/t/topic/5573/)下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/paper-1.20.2-263_9c9c9461be4441f107824c243402c161.jar](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/paper-1.20.2-263_9c9c9461be4441f107824c243402c161.jar)

点击 应用实例→新建实例→Java版Minecraft服务端→上传单个服务端软件

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104150611_cdda4a07240911eee126827f3df01416.png)
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104150643_1292d51dad77a34f237803d7c14ab3a4.png)
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104150711_8e742a17878471adacf5bb64a2de324e.png)

自己输入一个想设置的名称，启动命令输入 `java -Xms128M -XX:MaxRAMPercentage=95.0 -Dfile.encoding=UTF-8 -Duser.language=zh -Duser.country=CN -jar ${ProgramName}` ，然后点下面的上传服务端软件选择上面下载的jar文件。

解析一下上面的启动命令：

- `-jar` **表示运行jar程序，后面填要运行的jar文件名**；
- `${ProgramName}` 代表你接下来上传的文件名，只在这个页面可用，上传完文件后会自动把`${ProgramName}`替换成你上传的文件的文件名；
- `-Dfile.encoding=UTF-8` 指定文件编码为UTF-8，可以避免中文乱码的问题；
- `-Duser.language=zh -Duser.country=CN` 指定语言和地区为中文和中国，部分插件或服务端会自动切换到中文；
- `-XX:MaxRAMPercentage=95.0` 指定了JVM可以使用系统可用内存的百分比，95.0就是限制可以用95%的内存；
- `-Xms128M`  是一个Java虚拟机（JVM）的启动参数，用于设置JVM的初始堆内存大小。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104151135_5e343e5ab0c04e076c8f20d9a1673296.png)

等待上传完成后点击 前往编辑实例具体参数

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104151212_bb7e971611dda5e3742081167888c059.png)

然后 进程启动方式选择**虚拟化容器**，**环境镜像选择 `mcsm-openjdk:17`**，**网络模式选host**，选好后点击右下角的**保存**，你也可以填写右下角的最大内存来限制docker容器最大占用的内存，保存后点控制台。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104151434_5b0e35443e9e558ab7094ea2ff2bdc0a.png)

接着到实例控制台点**开启实例**即可，出现下图所示信息就需要同意一下eula协议

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152036_72995f399f128fe6175b8bcce2343d8f.png)

点击控制台左边的**服务端配置文件**，eula.txt那一项点击浏览，将eula改为是，然后保存。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152210_a0da656aa7e6c1641c660c4c0817b490.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152234_94fdf6d6b2b38d29cbaf936a15199a76.png)

接着回到控制台，再次点击开启实例，出现Done或完成则表示服务器开启成功。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152416_489efb4d0b1ad588ad2bdb1083f32ddb.png)

点 **服务端配置文件→[通用] server.properties** ，然后就可以修改服务器的设置，非正版用户记得将 **在线正版验证** 设为否，设置完成后要点保存。如果要修改端口，在这修改完配置文件后还得去雨云控制台设置端口映射。

修改完要重启实例。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152525_ee1ec38dae199514bf07387ce6b672a1.png)
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152608_aa1fe93e165a685b1c441a0febed0c07.png)

## 进入游戏

在游戏里点击多人游戏→添加服务器，输入你服务器的公网IP或域名，加上端口号，端口号是你上面设置的25565映射出来的公网端口，IP和端口之间用英文冒号分隔，如下图所示。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152821_b94c68c12e6fcd2c880482e06ebfc144.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104152848_0865bc9806554fd057c4e75b420fb258.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/20231104153022_b59fcd10b494427c6d92300f4ec891ec.png)

## 视频教程
<iframe class="iframe_video" src="//player.bilibili.com/player.html?aid=620555052&cid=1322382432&page=1&autoplay=false&muted=true&highQuality=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
