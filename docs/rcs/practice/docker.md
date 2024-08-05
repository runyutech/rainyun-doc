---
title: Docker安装
description: Docker安装
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docker安装

如果在服务器遇到安装docker失败，或者想要自己安装docker，可以参考下方教程安装配置。

## 安装Docker

### 连接到服务器

连接服务器教程可以参考[连接服务器教程](/docs/rcs/practice/connect)

### 安装docker

安装docker比较简单，这边以ubuntu 22为例。

连接到机器后我们输入安装指令（不同系统使用指令不同，根据你的系统选择）

<Tabs>
  <TabItem value="Ubuntu / Debian" label="Ubuntu / Debian" default>
1. 添加docker软件源
```shell
sudo apt-get update
sudo apt-get -y install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
```

  <Tabs>
    <TabItem value="Ubuntu" label="Ubuntu" default>
```shell
sudo curl -fsSL https://mirrors.cloud.tencent.com/docker-ce/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://mirrors.cloud.tencent.com/docker-ce/linux/ubuntu/ \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
    </TabItem>
    <TabItem value="Debian" label="Debian" default>
```shell
sudo curl -fsSL https://mirrors.cloud.tencent.com/docker-ce/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://mirrors.cloud.tencent.com/docker-ce/linux/debian/ \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
    </TabItem>
  </Tabs>

2. 安装docker
```shell
sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
3. 运行 Docker。
```shell
systemctl start docker
```
4. 检查安装结果。
```shell
docker info
```
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240718110333_f3160f4bbf5e5edb44aa0bc6876e4903.png)

  </TabItem>
  <TabItem value="Centos / RockyLinux" label="Centos / RockyLinux">
1. 添加 Docker 软件源。
```shell
yum-config-manager --add-repo=https://mirrors.cloud.tencent.com/docker-ce/linux/centos/docker-ce.repo
```
2. 安装 Docker。
```shell
yum install -y docker-ce
```
3. 运行 Docker。
```shell
systemctl start docker
```
4. 检查安装结果。
```shell
docker info
```
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240718110333_f3160f4bbf5e5edb44aa0bc6876e4903.png)

  </TabItem>
</Tabs>


## 配置Hub镜像

由于不可抗力因数，大陆机器可能无法访问到hub，需要尝试配置镜像地址，具体可以参考
https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6