---
title: 常见问题
description: 有问题先看这里
sidebar_position: 98
slug: support
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 出现身份验证错误。要求的函数不受支持
可以参考一下设置，Windows运行运行`gpedit.msc`

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/12/20241219104519_34e714622dd5367869f8574a671d8542.png)

## 添加多ip地址
### linux
连接到机器上，输入以下命令即可
`sudo ip addr add 新ip/25 dev eno2`

### windows
打开网络共享中心，选择适配器，右键属性，选择ipv4，点击高级，然后添加ip地址，网关255.255.255.128，然后逐步确认即可 。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/12/20241219151422_2728b4efef16fe2de47bfeae13713f1f.png)



