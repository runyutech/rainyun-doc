---
title: 常见问题
description: 有问题先看这里
sidebar_position: 99
slug: support
---


### 怎么重新安装系统
如需重装系统，可以在管理页面，配置信息里点击红框内图标，选择喜欢的系统，点击安装即可。
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701249886_0dec36326206b962a7b2044f3ce99a22)
:::warning
重装系统会**清空所有数据以及数据备份**，请谨慎操作。
:::

### 怎么重置密码
如果您忘记了密码，可以在管理页面，点击重置密码，点击确定即可。
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701156333_0f562151f41e1c2da201bd7954ffc1bd)

### 服务器SSH连接不上，PING不通
如果您的服务器拥有公网ip，可以先尝试更换IP后等待10-20分钟后重试。<br/>
如果仍然无法解决，请发工单联系我们。

### 服务器安装应用报错
如果您是使用的国内服务器，可能因为运营商阻断等原因导致无法访问，可以改为国内改为国内镜像地址后重试。
#### CentOS修改镜像源为阿里云：

1. 先备份原有的 CentOS-Base.repo 文件

```shell
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```
2. 下载阿里云的 CentOS  的 repo 文件

```shell
sudo wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

3. 生成缓存
```shell
sudo yum clean all
sudo yum makecache
```
#### Ubuntu修改镜像源

1. 备份 /etc/apt/sources.list
```shell
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

2. 编辑 /etc/apt/sources.list
```shell
vi /etc/apt/sources.list
```
将以下内容覆盖 sources.list 原内容
```shell
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
```

3、更新源
```shell
sudo apt-get update
```
4、更新软件
```shell
sudo apt-get upgrade 
```

### 购买新服务器能否选择服务器节点
服务器节点是随机分配的，无法手动选择。

### 服务器节点连接慢，能否更换节点
服务器节点是随机分配的，无法手动选择。

### Windows无法连接。

在使用Windows服务器系统时，我们可能会遇到下面这些问题：

:::info
我们没有经过任何设置，为什么远程桌面无法连接？

新买的服务器，为什么远程连接不上？

我们重装了几次系统，为什么还是无法连接上服务器？
:::


#### 检查方案

##### 方法1.NAT端口检查
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211112856_11f407941a88006c0e01078eb706f6c5.png)

如果购买的是NAT服务器（没有独立IP）的话，先检查端口映射，内网端口需要为3389。
然后，使用对外地址来远程服务器。

##### 方法2.防火墙规则

默认情况下，NAT服务器或者是有独立IP的服务器，防火墙规则都是不用去动的。
有独立IP的话，所有端口（除了部分机房限制外）都是开放着的。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211102935_36e5371ad91c9d2d09e9d7c0e76055db.png)

无需新建任何防火墙规则,如果有新建的话，请把他删除(删除后，建议重启一下服务器，然后等几分钟)。

然后在[ITDOG][itdog]中的Tcping中测试一下能不能通。

NAT服务器：使用对外地址进行测试。

独立IP：使用独立IP:3389进行测试。

如果非红色，说明通了。

#### 解决方案
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211112857_e11185b6e35c1b767174dc988aa0f179.png)

##### 方法1.更换远程工具

系统自带的远程工具有时候会因为网络原因导致无法正常连接到服务器。

1. 可以更换成微软的远程工具 [Microsoft Remote Desktop][Microsoft Remote Desktop]来远程到服务器。

2. 使用服务器面板自带的远程工具 VNC 进来连接。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231215105544_f089a47dd53d63b6921b65d5b7e2bc25.png)

如果觉得每次使用VNC不方便，可以在服务器安装一下向日葵远程连接工具。

##### 方法2.更换IP

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701243981_a99390b999c13d435a63afb94dbe878b)

:::caution
这个方法，只限于有独立IP的服务器。
:::

当上面两者检查方法都试过后，仍然无效的，请尝试切换一个IP，然后重启一下服务器，等待几分钟后再试。

### 云服务器的每月消耗流量有限制吗。
不限制流量。

### 域名绑定宝塔登不上去

#### 可能的原因
1. 您没有将此域名或IP绑定到对应站点！<br/>
2. 配置文件未生效！

#### 如何解决
1. 检查是否已经绑定到对应站点，若确认已绑定，请尝试重载Web服务；<br/>
2. 检查端口是否正确；<br/>
3. 若您使用了CDN产品，请尝试清除CDN缓存；<br/>
4. 普通网站访客，请联系网站管理员；<br/>

### 云服务器无法连接
可以检查宝塔，雨云防火墙等是否放行相关端口/ip。

### apache,phpmyadmin等提示权限不足
如果出现以下情况：

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240118112639_9e39e455a2e7111801ba38c8f02c443b.png)

可以SSH连接到服务器，设置路径权限
```shell
chmod -R 777 /www/wwwroot/网站目录
```

### 1panel获取不到密码
如图这种情况可以SSH连接到服务器输入`1pctl update password`更新密码。连接服务器方式可以看[这里](/docs/rcs/practice/connect)。
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240118144312_8eba0107aace2bbef2db883044fb01ef.png)

### 宝塔无法获取ssl证书
如图，如果使用雨云提供的免费域名获取ssl证书，可能会提示创建过多，建议更换其他二级域名。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240223114402_bf2075c41b42903af7eda254fede08f7.png)



[itdog]: https://www.itdog.cn/tcping
[Microsoft Remote Desktop]: https://apps.microsoft.com/detail/9WZDNCRFJ3PS?activetab=pivot%3Aoverviewtab&hl=en-us&gl=US


### 网络带宽是指M还是Mbps
如无特殊说明一般指Mbps，即兆比特每秒。

### 雨云是否支持搭建代理
不支持。

### 是否支持挖矿等操作
禁止。

### 机器支持长时间占用带宽吗
为了保证其他用户体验，目前在售所有机器均不支持长时间占用带宽。


### 为什么我的机器无法看到NAT设置
如果你的机器没有NAT设置，你的机器就可能拥有公网ip，拥有公网ip可以不需要设置转发，直接设置的端口规则即可。

### 硬盘扩容后，空间还是显示原来的大小
可以参考我们的[文档操作](/docs/guide/cloud/disk)一下

### 可以更换IP吗
如果您是公网ip，可以直接在管理页面进行更换，**免费**更换。<br/>
更换之后您可以在这里查看ip是否已经改变，如果没有您可以在此尝试点击更换。<br/>
如果ip已经改变，可能需要等待十到二十分钟才能连接上<br/>

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701243981_a99390b999c13d435a63afb94dbe878b)

### 香港独立IP地址查询为美国IP
因为香港IP是美国的广播IP，但实际上是香港

### 服务器支持25端口吗
目前仅湖北十堰支持，其他区域上层封锁且无法解封。

### 服务器支持SMTP吗
目前仅湖北十堰支持。

### 提示域名未绑定/未备案
1. 请检查域名是否已经**解析到服务器的ip**或指定cname地址
2. 如果已经解析，请检查该域名是否已经**绑定到服务器**。
3. 如果已经绑定，请检查该域名是否已经**备案**。
4. 如果已经备案，请检查该域名是否在雨云上添加为**白名单**。
   如果上述均正常，可以发工单联系我们，我们为您检查修复。

### 服务器买错了配置
我们的服务均支持7天无理由退款，您可以退款后重新购买。
详情可以查看我们的[退款政策](/docs/account/expense/refund)

### 主机续费后公网ip丢失
如果您的机器过期三天后仍然不续费，系统将自动释放公网IP,释放后无法找回。<br/>
如果您的机器过期三天内续费，公网IP将会保留。

### 无法远程连接Linux服务器
如果购买的是NAT服务器（没有独立IP）的话，先检查端口映射，内网端口需要为22。 然后，使用对外地址来远程服务器。<br/>
如果您的服务器拥有公网IP，您可以使用[itdog]测试一下ip是否可以Ping通，如果不通，可以尝试更换公网IP后稍等10-20分钟后重试。<br/>

如果还是无法连接，请发送工单联系我们。

### 我想升级我的服务器配置，会影响我的数据吗
不会，升级配置不会影响您的数据，但是会重启服务器，重启后您的服务器会变成新的配置。

### Ubuntu系统在没有网络并且没有netplan如何修复

先通过 cat /etc/netplan/01-netcfg.yaml 命令查看本机网络配置，根据自己机器的网络配置来临时设定。

如图中的例子，本机地址应该配置为 172.16.4.129，网关是 172.16.0.1，网卡名是ens18。

根据上面获得的信息，执行如下命令，即可临时恢复网络，理论上也适用于其他系统。

#### 如果ifconfig命令还存在

```shell
ifconfig ens18 172.16.4.129 up
route add default gw 172.16.0.1
```

#### 如果ifconfig命令不存在

```shell
ip address add 172.16.4.129/16 dev ens18
ip link set ens18 up
ip route add 172.16.0.1 dev ens18
ip route add default via 172.16.0.1
```


### 机器切换套餐流量变为了0
如果机器从不限制流量套餐切换为流量限制型，默认不会补充流量，需要等到31天后才会补充流量的。

