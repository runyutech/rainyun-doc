---
title: VPS机器操作硬盘扩容
description: VPS机器操作硬盘扩容
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

如果在机器上扩容了硬盘或者是新加盘但是没有生效，可以参考以下步骤：

## Windows

:::tip
如果是新加的硬盘需要右键硬盘然后点击联机

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709113353_145cc45eafba9a1f969135bcdf23de67.png)
:::

### 扩容硬盘

进入**计算机管理**，磁盘管理，找到要扩展的分区，右键扩展卷，按提示完成操作即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240229102129_2a3d92054b6611a0a1f0654d764608ef.png)

### 增加一个分区

如果需要新**增加一个分区**，可以右键未分配的空间，新建卷，按提示完成操作即可。
 
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709111930_693df968c0ad4a9db02592d8fe9685c1.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709112428_91f9f447ab8048f3cd4fae9954229db4.png)

## Linux
如果是Linux需要操作，因为各个系统不同，可以参考以下步骤：

### 扩容硬盘
**使用 `fdisk -l `命令根据大小及其他信息查看要扩容的云盘**，本例子中要扩容的分区为/dev/sda 1

输入命令请确保命令正确，部分命令需要输入空格部分不需要


![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709114226_b0d9e5ddf3524ad1553054c827bad4a0.png)


<Tabs>
 <TabItem value="CentOS 7" label="CentOS 7" default>
SSH进入服务器后执行以下命令：

```shell
yum install cloud-utils-growpart gdisk xfsprogs e2fsprogs

growpart /dev/sda 1

resize2fs /dev/sda1
```

</TabItem>

 <TabItem value="centos 8 / rockyLinux 8 / rockyLinux 9" label="centos 8 / rockyLinux 8 / rockyLinux 9" default>
SSH进入服务器后执行以下命令：

```shell
yum install cloud-utils-growpart gdisk xfsprogs e2fsprogs

growpart /dev/sda 1

xfsprogs  /dev/sda1 或者 xfs_growfs /dev/sda1
```

</TabItem>

 <TabItem value="Ubuntu/Debian" label="Ubuntu/Debian" default>
SSH进入服务器后执行以下命令：

```shell
apt install cloud-guest-utils
apt install xfsprogs

growpart /dev/sda 1
resize2fs /dev/sda1
```

</TabItem>

</Tabs>

:::tip
运行growpart命令时，如果提示unexpected output in sfdisk --version [sfdisk，来自 util-linux x.x.x]

这是因为中文版操作系统使用了非en_US.UTF-8的字符编码类型，请在执行前运行下方命令
```
LANG=en_US.UTF-8
```

由于win硬盘格式ntfs，win的盘换系统到ubuntu后，可能会产生一定识别问题
:::

### 新增硬盘并挂载

**使用 `fdisk -l `命令根据大小及其他信息查看要新增的云盘**，本例子中要新建的加的硬盘为 /dev/sdb

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709145058_5ffbab9e30555f143144d1c04f1fc699.png)

1. 输入命令`fdisk /dev/sdb`
2. 到这个页面后输入**N**，然后所有全部选项按回车默认即可
 ![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709145556_0441d3f0476eb0c215c517c5a4d428d4.png)
3.回到上图界面后输入**W**

操作完成后输入`fdisk -l`即可看到新加的设备，

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709150053_15bbbe3246ae3e9e0ed6bd27b6189a05.png)

然后输入`mkfs.xfs /dev/sdb1`格式化。

格式化之后就可以使用命令`mount 硬盘 挂载的路径`挂载硬盘到指定的路径

如需机器开机默认挂载可以修改**/etc/fstab**文件
