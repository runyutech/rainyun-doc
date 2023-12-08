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



[itdog]: https://www.itdog.cn/tcping
[Microsoft Remote Desktop]: https://apps.microsoft.com/detail/9WZDNCRFJ3PS?activetab=pivot%3Aoverviewtab&hl=en-us&gl=US
