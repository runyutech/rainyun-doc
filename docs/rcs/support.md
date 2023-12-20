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
如果仍然无法解决，可以尝试

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

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211112857_36e5371ad91c9d2d09e9d7c0e76055db.png)

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

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211112857_7ac69cf2e1141a19ecc0355519d41d43.png)

如果觉得每次使用VNC不方便，可以在服务器安装一下向日葵远程连接工具。

##### 方法2.更换IP

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211112858_957b527bcfbad2e80f58d20683931435.png)

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

[itdog]: https://www.itdog.cn/tcping
[Microsoft Remote Desktop]: https://apps.microsoft.com/detail/9WZDNCRFJ3PS?activetab=pivot%3Aoverviewtab&hl=en-us&gl=US
