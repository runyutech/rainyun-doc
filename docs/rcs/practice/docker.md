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
```shell
sudo apt-get update
sudo apt-get install docker.io
```
  </TabItem>
  <TabItem value="Centos / RockyLinux" label="Centos / RockyLinux">
```shell
sudo yum install docker
```
  </TabItem>
</Tabs>


输入指令后，输入Y

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240717111817_4f1d461833beb18580d39bbd37921a0a.png)

等待安装完成后，输入`docker`，如果出现提示即安装完成。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240717113430_ac4a6b81960c215256c2158583d78652.png)

## 配置Hub镜像

由于不可抗力因数，大陆机器可能无法访问到hub，需要尝试配置镜像地址，具体可以参考
https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6