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