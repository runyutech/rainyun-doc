# 使用雨云NAT云服务器 搭建MCSM面板和Minecraft服务器

**[雨云](https://blog.vpszj.cn/archives/tag/雨云) NAT云服务器 搭建MCSM面板和Minecraft服务器的教程。**

本教程演示安装的MC服是mohist1.16.5版，其他版本也可以参考本教程，差别不大。

本教程使用Docker来运行mc服，可以方便切换不同Java版本，方便安装多个mc服版本。

视频教程：[https://www.bilibili.com/video/BV1Ns4y147Py/](https://www.bilibili.com/video/BV1Ns4y147Py/)

## MCSM9介绍

**分布式，稳定可靠，开箱即用，高扩展性，支持 [Minecraft](https://blog.zeruns.tech/tag/mc/) 和其他少数游戏的控制面板。**

[MCSManager](https://blog.zeruns.tech/tag/MCSManager/) 面板（简称：[MCSM](https://blog.zeruns.tech/tag/mcsm/) 面板）是一款全中文，轻量级，开箱即用，多实例和支持 Docker 的 Minecraft 服务端管理面板。

此软件在 Minecraft 和其他游戏社区内中已有一定的流行程度，**它可以帮助你集中管理多个物理服务器**，动态在任何主机上创建游戏服务端，并且提供安全可靠的多用户权限系统，可以很轻松的帮助你管理多个服务器。

## 准备

**首先你得有台服务器（已经有的可以忽略），本教程是基于[雨云](https://blog.vpszj.cn/archives/tag/雨云)的服务器肯定推荐[雨云](https://blog.vpszj.cn/archives/tag/雨云)：**

**雨云官网地址：**[https://www.rainyun.com/zeruns_](https://www.rainyun.com/zeruns_)

**优惠码：ryy**

**通过上面的链接注册账号可获得一张5元无门槛优惠券，以及消费最高返利20%。**

推荐雨云的游戏云服务器。

![](https://tc.zeruns.tech/images/2023/01/24/image.png)

我的世界Java版1.17及以上版本对单核性能和内存要求较高，建议选择5900X或13900K等高主频高单核性能的服务器，内存建议4G起。如果是1.16.5及以下版本那1核2G也够了，如果是MOD服或人多需要再加。购买后也可以升级，可以先买低配，不够再升级。

我已经买好服务器了，本教程用的是雨云游戏云5900X服务器，**操作系统选择Debian**。

默认账号一般是：root     密码在雨云控制台可以看到。

![](https://tc.zeruns.tech/images/2023/01/24/imageda3ebf82e29000a3.png)

**游戏云区的服务器一般没有独立公网IP，不过提供15条端口映射，足够开服用，如果有需要也可以加钱开通独立公网IP，还可以独享150G的高防服务。**

## 连接服务器

下载安装并打开ssh客户端软件，ssh客户端软件推荐[putty](https://url.zeruns.tech/F2FLO)或mobaxterm。

在SSH客户端中输入你的服务器的IP地址或域名，还有SSH端口，然后点击打开。

![](https://tc.zeruns.tech/images/2023/01/24/imaged2ff88578a597967.png)

如果弹出下图的警告就点**是**

![](https://tc.zeruns.tech/images/2022/07/04/imagef08776ee91a4afcc.png)

然后输入账号并按回车，账号一般默认为**root**，接着输入密码并按回车确定，输入密码时不会显示出来。

温馨提示：在SSH终端中按住鼠标左键选择文字，然后松开鼠标，再在空白处单击一下，这样就把选中的文字复制了；在SSH终端单击右键即为粘贴。

![](https://tc.zeruns.tech/images/2023/01/24/imageadeecee3e3b7663f.png)

## 设置端口映射

点击NAT端口映射

![](https://tc.zeruns.tech/images/2023/01/24/imageb294a3a99a5e541a.png)

新建规则，设置需要映射出去的内网端口，然后点创建映射规则，外网端口不用改，它会随机生成，如果创建提示外网端口被使用你就手动随便输入一个。

![](https://tc.zeruns.tech/images/2023/01/24/image-20230124020037179.png)

MCSM需要用到的端口有：23333和24444

我的世界服务器需要用到的端口是：25565

需要把上面这些端口映射出去。

![](https://tc.zeruns.tech/images/2023/01/24/image0e854004f9f3a73a.png)

然后回到SSH终端输入下面这些命令来关闭系统自带防火墙。

```bash
# 关闭防火墙，依次执行
systemctl stop firewalld
systemctl disable firewalld
service iptables stop
```

我下面命令提示是防火墙本就并没有开启，不过为了保证顺利开服照例执行一遍。

![](https://tc.zeruns.tech/images/2023/01/24/image82106e0ac4d4b505.png)

## 安装MCSM面板

### 脚本快速安装

执行下面两条命令，如果遇到问是否继续的就输入y来确定。

```bash
apt update && apt install wget && apt install git
wget -qO- https://gitee.com/mcsmanager/script/raw/master/setup.sh | bash
```

- 脚本仅适用于 AMD64 架构 Ubuntu/Centos/Debian/ArchLinux）
- 执行完成后，使用 `systemctl start mcsm-{daemon,web}` 即可启动面板服务。
- 使用 `systemctl enable mcsm-{daemon,web}.service` 来开启开机自启
- 面板代码与运行环境自动安装在 `/opt/mcsmanager/` 目录下。

配置文件目录： `data/SystemConfig/config.json`

用户数据文件目录：`data/User/*.json`

远程守护进程配置文件目录：`data/RemoteServiceConfig/*.json`

如果显示下图类似信息就是安装成功了。

![](https://tc.zeruns.tech/images/2023/01/24/image5ed466ff2ee53a68.png)

**安装完成后访问 [http://你服务器的ip或域名:23333/](https://blog.zeruns.tech/) 即可进入面板。**

**因为我这服务器没独立公网IP，所以上面地址中的23333端口需替换成你映射出来公网端口，我上面23333端口映射到的公网端口是46102，每个人的不同，不要照抄我的。**

所以最终面板访问地址是：[http://f.rainplay.cn:46102](https://blog.zeruns.tech/) 你的不一定是这个，根据实际。

进去面板后按照提示设置账号和密码。

接着设置节点，把下图所示节点地址设置成你服务器IP或域名，端口设置成你24444端口映射出来的公网端口，我这里是12312，然后点击右边的更新按钮。

![](https://tc.zeruns.tech/images/2023/01/24/image64c6a0dba23e25e3.png)

### Linux 手动安装MCSM

- 若一键安装不起作用，则可以尝试此步骤手动安装，安装成功就忽略这段。

```bash
# 切换到安装目录，没有此目录请执行 mkdir /opt/
cd /opt/
# 下载运行环境（已有 Node 14+ 可忽略）
wget https://npm.taobao.org/mirrors/node/v14.17.6/node-v14.17.6-Linux-x64.tar.gz
# 解压文件
tar -zxvf node-v14.17.6-Linux-x64.tar.gz
# 链接程序到环境变量中
ln -s /opt/node-v14.17.6-Linux-x64/bin/node /usr/bin/node
ln -s /opt/node-v14.17.6-Linux-x64/bin/npm /usr/bin/npm

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

用apt包管理器来安装：

```bash
# 安装docker，如果遇到问是否继续的就输入y来确定
apt install docker.io

# 设置docker开机自启和启动docker
systemctl enable docker && systemctl start docker

# 检查是否安装成功，若安装成功会显示 Docker version x.x.x
docker -v
```

![](https://tc.zeruns.tech/images/2022/07/04/imagec23a6c6a1a9e4514.png)

若没安装成功就试试下面的安装脚本：

```bash
# 安装docker
curl -sSL https://get.daocloud.io/docker | sh

# 设置docker开机自启和启动docker
systemctl enable docker && systemctl start docker

# 检查是否安装成功，若安装成功会显示 Docker version x.x.x
docker -v
```

如果还是不行就尝试下面链接的手动安装教程吧

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

![](https://tc.zeruns.tech/images/2022/07/04/imagea6f353ac3922aa1e.png)

## 安装JDK镜像

进入面板，找到环境镜像管理点击进去

![](https://tc.zeruns.tech/images/2022/07/04/imaged42ca7b5d567580a.png)

点击 新建镜像，接着点击 创建 OpenJDK 17 环境镜像（1.12.2及以下版本选JDK8；1.17及以上选JDK17），1.16.5的需要JDK11，因为没有JDK11的选项，需要自己改一下，选那个JDK17然后将里面的17都改成11。

![](https://tc.zeruns.tech/images/2022/07/04/imagead7545934f3cb7c9.png)
![](https://tc.zeruns.tech/images/2022/07/15/image.png)

点击确定，然后等待构建完成

![](https://tc.zeruns.tech/images/2023/01/24/image82c380849620d879.png)
![](https://tc.zeruns.tech/images/2023/01/24/image90e99aafc4723eef.png)

## 运行MC服务端

首先要去下载一个服务端核心（.jar 格式），我这里以mohist1.16.5为例。

mohist官网：[https://mohistmc.com/download](https://mohistmc.com/download)

mohist1.16.5百度网盘下载地址：[https://url.zeruns.tech/QisGe](https://url.zeruns.tech/QisGe)

- **其他版本我的世界服务器搭建教程：[https://blog.zeruns.tech/tag/mc/](https://blog.zeruns.tech/tag/mc/)**
- **各种Minecraft服务端介绍和下载：[https://blog.zeruns.tech/archives/626.html](https://blog.zeruns.tech/archives/626.html)**
- **我的世界(Minecraft)服务器添加MOD和插件的教程：[https://blog.zeruns.tech/archives/696.html](https://blog.zeruns.tech/archives/696.html)**

点击 应用实例→新建实例→Java版Minecraft服务端→上传单个服务端软件

![](https://tc.zeruns.tech/images/2022/07/04/image62cb475f0293698e.png)
![](https://tc.zeruns.tech/images/2022/02/22/image8cbc799862b25952.png)
![](https://tc.zeruns.tech/images/2022/02/22/imagea48f89c2ffe1845a.png)

自己输入一个想设置的名称，启动命令输入 `java -Xmx4G -server -Dfile.encoding=UTF-8 -Duser.language=zh -Duser.country=CN -jar ${ProgramName}` ，然后点下面的上传服务端软件选择上面下载的jar文件。

解析一下上面的启动命令：**`-Xmx4G`表示限制最大内存到4G**，你可以自己改成8G或其他数值，建议设置比自己服务器实际内存小一点；**`-jar` 表示运行jar程序，后面填要运行的jar文件名**，后面的`${ProgramName}` 代表你接下来上传的文件名；**`-Dfile.encoding=UTF-8` 指定文件编码为UTF-8**，可以避免中文乱码的问题；**`-Duser.language=zh -Duser.country=CN` 指定语言和地区为中文和中国**，部分插件或服务端会自动切换到中文。

![](https://tc.zeruns.tech/images/2023/01/24/imagec0e6c8c43c0743c1.png)

等待上传完成后点击 前往编辑实例具体参数

![](https://tc.zeruns.tech/images/2022/07/04/imageb0a4e72611aaf559.png)

然后 进程启动方式选择虚拟化容器，环境镜像选择 mcsm-openjdk:11，网络模式选host，选好后点击右下角的保存，你也可以填写右下角的最大内存来限制docker容器最大占用的内存。

![](https://tc.zeruns.tech/images/2023/01/24/image260bca54d1cf231a.png)

接着到实例控制台点**开启实例**即可，出现下图所示信息就需要同意一下eula协议，在命令输入框输入true并按回车即可。

![](https://tc.zeruns.tech/images/2023/01/24/image266cee96452458b9.png)

其他服务端可能需要修改**eula.txt**文件同意一下eula协议，点击文件过来找到**eula.txt**文件，编辑，**将false改成true**，然后保存即可，然后再次开启实例即可。

出现Done或完成则表示服务器开启成功。

![](https://tc.zeruns.tech/images/2023/01/24/imageac12b4ce5f29dc68.png)

点 特定配置→[通用] server.properties ，然后就可以修改服务器的设置，非正版用户记得将 **在线正版验证** 设为否，设置完成后要点保存。如果要修改端口，在这修改完配置文件后还得去雨云控制台设置端口映射。

修改完要重启实例。

![](https://tc.zeruns.tech/images/2022/02/22/imagea035be8adebdff89.png)
![](https://tc.zeruns.tech/images/2022/02/22/image6f3609c29cf032f3.png)

## 进入游戏

在游戏里点击添加服务器，输入你服务器的公网IP或域名，加上端口号，端口号是你上面设置的25565映射出来的公网端口，IP和端口之间用英文冒号分隔，如下图所示。

![](https://tc.zeruns.tech/images/2023/01/24/image596150fb0fca26f2.png)

![](https://tc.zeruns.tech/images/2023/01/24/image73e0dd9483efd6ab.png)



