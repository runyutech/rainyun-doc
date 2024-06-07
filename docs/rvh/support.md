---
title: 常见问题
description: 有问题先看这里
sidebar_position: 99
slug: support
---


### 访问网站出现 Kangle is OK!! 提示

如果遇到此问题，一般有以下情况：

1. 域名尚未在EasyPanel面板绑定。
2. 如果您是使用免费二级域名，则选错了解析区域，请注意 目标区域必须是主机所在的区域，比如香港的主机，选择区域则要对应选香港 。
3. 如果您搬迁了虚拟主机，则要重新修改解析到目标区域，如果是免费二级域名，则要删除原解析，新增解析，区域选择到您目前主机所在的区域。


### 我的主机不能访问宝塔面板
请**不要随意升级**您的宝塔面板
访问宝塔面板的信息可以在您管理页面中获取，如果无法连接并且您是公网ip则可以尝试更换公网ip。
如果还未能访问，可以重新安装您的宝塔面板，或者使用修复脚本修复。
如果还不无法访问，请发工单联系我们。

### 虚拟主机SSH终端无法访问
虚拟主机没有公网IP地址，不支持直接使用22端口连接，需要在管理页面获取指定端口后尝试连接。

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


### 宝塔无法连接

#### NAT端口检查
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211102935_73d7758c0da602ce2f3b7c9586cc1727.png)

如果购买的是NAT服务器（没有独立IP）,使用预装宝塔centos系统的话，先检查端口映射，内网端口需要为8889。
然后，使用 对外地址/rainy 来访问宝塔。

如果是其他的方式自行安装的宝塔面板，请确保内网端口与安装宝塔时的一致。

#### 检查防火墙规则

默认情况下，NAT服务器或者是有独立IP的服务器，防火墙规则都是不用去动的。
有独立IP的话，所有端口（除了部分机房限制外）都是开放着的。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211102935_36e5371ad91c9d2d09e9d7c0e76055db.png)

无需新建任何防火墙规则,如果有新建的话，请把他删除(删除后，建议重启一下服务器，然后等几分钟)

然后在[ITDOG][itdog]中的Tcping中测试一下宝塔端口能不能通。

如果非红色，说明通了。

#### 检查面板SSL
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211102936_0db1de3a8b21dc52d4e62ab436c936a1.png)

回想一下，有没有给宝塔面板设置过SSL，如果设置了SSL，是需要使用HTTPS进行访问的。
我们在服务器后台面板单击访问宝塔面板，仍然是使用HTTP访问，需要我们手动用HTTPS访问。

#### 检查服务器IP
搭建宝塔的虚拟主机是非中国内地境内的服务器（美国、香港等）话，国内无法访问面板，国外可以访问。可能是被我们的当地运营商屏蔽了。

虚拟主机：附加独立IP/更换成云服务器。

云服务器：切换一个IP。


### 面板之间可以互相转换吗
不能，如需转换请使用[迁移功能](/docs/support#原有服务器的时长转移到新服务器上)。

### 域名访问不了，400错误
如果您访问页面提示400错误，说明解析已经成功，但是没有在虚拟主机面板进行域名绑定。除了在EP/宝塔面板绑定外，还要在虚拟主机管理面板进行域名绑定。

### 升级宝塔后出现问题
请**不要随意升级宝塔面板**，如果您升级后出现问题，可以尝试使用宝塔面板的修复脚本进行修复，如果还是无法解决，请联系我们。

### EP主机安装WordPress插件提示无法创建目录
因为虚拟主机权限问题，无法读取/写入部分目录，所以会报错，建议升级到云服务器。