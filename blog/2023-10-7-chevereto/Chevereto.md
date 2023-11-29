---
slug: rainyun-ros-chevereto
title: 雨云对象存储花样玩法：搭建Chevereto图床指南！
authors: linyu
tags: [技术干货]
---


# 雨云ROS服务介绍和使用教程，以及Chevereto图床使用雨云ROS的教程

**雨云ROS（对象存储）服务介绍和使用教程，以及Chevereto图床程序使用雨云ROS的教程**

雨云ROS（对象存储）是一种基于S3协议的云端数据存储服务，它可以帮助你将数据安全、高效地存储在云端，并且可以随时访问和管理这些数据。无论你是个人用户还是企业用户，都可以通过雨云ROS轻松地管理和存储你的大量数据。

## 什么是对象存储？

**对象存储(Object Storage Service)是一种数据存储技术，它将数据以对象的形式存储在云端，每个对象都包含一个唯一的标识符，即对象键（Object Key）。同时，对象存储还支持元数据（Metadata）的存储和管理，包括对象类型、大小、创建时间、最后修改时间等信息。**

与传统的文件系统不同，对象存储通过给每个文件分配一个唯一的标识符来管理数据，而不是通过文件名和路径来定位数据。这样可以避免文件系统的限制和复杂性，提高数据的可访问性和可扩展性。

**雨云ROS是基于S3（Amazon Simple Storage Service）协议的对象存储服务**，它与S3协议兼容，可以使用S3协议提供的API来访问和管理雨云ROS上的数据。这意味着很多网站和程序都支持使用雨云ROS作为数据存储服务，不需要再额外做开发。

S3协议是一种数据存储技术，它是由亚马逊公司开发的，用于将数据以对象的形式存储在云端。S3协议提供了一套丰富的API，可以用来访问和管理S3上的数据。S3协议与S3接口兼容，因此很多云存储服务都支持S3协议，如阿里云的ROS、腾讯云的COS、华为云的OBS等。S3协议可以帮助你实现高可靠性、高可扩展性和低成本的数据存储和管理。

## 雨云ROS优点？

雨云ROS具有很多优点，例如：

- **高可靠性**：雨云ROS通过数据复制和冗余存储来防止数据丢失，保证数据的完整性和可用性。
- **高可扩展性**：雨云ROS可以根据你的数据量和访问需求自动调整存储空间和带宽，无需你关心硬件设备的维护和扩展。
- **低成本**：雨云ROS按照实际使用量收费，无需预付费或固定费用，你只需要为你实际使用的存储空间和流量付费，也可以购买存储包，更加划算。
- **易用性**：雨云ROS提供了简单易用的控制台和API，你可以通过它们上传和下载文件、创建和管理存储桶（类似于文件夹）、设置访问权限等。
- **灵活性**：雨云ROS支持多种类型的文件和数据，如图片、视频、文档等。你还可以通过雨云ROS提供的API来集成它到自己的应用程序中，实现自动化的数据存储和管理。

雨云ROS是一个方便、可靠和高效的对象存储服务，适用于各种场景，如数据备份、网站托管、多媒体存储等。

## 对象存储服务能做什么？

- 做图床，比如写 Markdown 笔记时可以结合 [PicGo](https://github.com/Molunerfinn/PicGo) 等工具 一键上传图片
- 做文件备份，比如用 [rclone](https://rclone.org/) [Duplicacy](https://duplicacy.com/), [syncthing](https://syncthing.net/) 等工具多端同步备份
- 个人网盘，比如可以接入 [alist](https://alist.nn.ci/zh/) 等工具和其他网盘一起管理
- 做网站的附件和图片存储，比如用 [Discuz!X](https://www.discuz.vip/) 搭建论坛网站时可以用ROS存储用户上传的图片和附件

等等等，还有更多的功能等待您的探索！

## 如何使用雨云ROS？

要使用雨云对象存储，你需要先注册一个账号，并且创建一个或多个存储桶。每个存储桶都有一个唯一的名称，用来区分不同的数据集合。你可以在一个或多个存储桶中上传和下载文件，并且设置不同的访问权限。

**雨云优惠注册地址：[https://www.rainyun.com/zeruns_](https://www.rainyun.com/zeruns_)**

**优惠码：zeruns**

**通过上面的链接注册账号可获得一张5元无门槛优惠券，以及消费最高返利20%，还有额外9折优惠。**

1. 注册完账号后进到雨云控制台，对象存储功能入口可以在后台的 **总览** 和 **云产品** 部分的最下面找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/69cafabea5abe7403310528e190ef31f.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/b6a1c7f7a65ce30473d7fe073d35bcb4.jpeg)

2. 进入面板后点击**创建存储桶**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/f35bd360d8b3068ec8937ad3f4cd88fd.png)

3. 输入桶信息后按**确认**，名称自己定

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/1826c6e7cb90b3b681470bfded4d8db4.png)

4. 点击**管理**可以设置你的存储桶

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/7b2915f228eff3bae034eae5b637e562.png)

5. 点击**文件管理**，可以跳转到在线的文件管理页面

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/4986620923c2d7246a5e3e30bd479159.png)

在这个页面会自动登录您的账号，就可以查看桶内所有文件了，可以上传和下载文件，也可以创建文件夹和删除文件。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/c585c77c1af2b1dd91db436377d6b27c.png)

6. 开启公共访问权限

存储桶默认权限是公共不可访问的，如果需要让有链接的人能看到该资源的话，需要开启公共访问权限，可以在管理面板中的如下图所示位置开启：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/def05f7172a72e5a80dfd845717d5edd.png)

7. 通过公共链接访问存储桶内文件

开启公共访问后可以用控制台里这个API端点的链接加上存储桶名称来访问里面的文件，比如说我存储桶的根目录下有一个 `tx.jpg` 的文件，那么我可以通过 `https://cn-sy1.rains3.com/zeruns-test/tx.jpg` 这个链接来访问这个文件，其中 `https://cn-sy1.rains3.com` 这个链接不同节点是不同的，不要直接复制我的，不过目前雨云只有一个节点，`zeruns-test` 换成你的存储桶的名称，`tx.jpg` 是要访问的文件。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/abac3ddcb8910cc77b8020de9dae237f.png)

8. 如何删除存储桶？

在删除桶之前，请确保重要数据都已备份，而且**桶内无任何文件**，否则无法执行删除操作。删除操作按钮位置：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/b4e02bf7fbd42d52abb72817b4633a43.png)



## Chevereto添加雨云ROS存储

Chevereto是目前最好的图床之一。功能非常强大。其免费版和收费版的区别，在于收费版多了硬盘扩展，社交分享功能和技术支持。硬盘扩展指的是你可以通过sftp、ROS等方式把上传的文件储存在其他服务器上。而且Chevereto的安装也非常简单，并且支持中文。

登陆你的管理员账号，点击**仪表盘**，点击**设置**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/d2d0aa955ae5f36d82762da3eb036483.png)

找到**外部存储**设置项，点击**添加存储**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/7358fc64cb48bb8dce2482699330317f.png)

然后按如下图所示格式填写，

- 名称自己定一个，
- API就选择**S3 compatible**，
- 区域就填写你雨云对象存储上创建存储桶的区域，
- Bucket就填你的存储桶名称，
- 访问密钥ID填你的存储桶的Access Key，
- 私有访问密钥就填你的存储桶的Secret Key，
- Endpoint就填你存储桶的API端点地址，
- 存储容量可填可不填，不填就是不限制
- URL填你的存储桶的API端点地址+存储桶名称，例如我的是 `https://cn-sy1.rains3.com/zeruns-test`

填写完后点提交就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/f435303eb5242fe76321a7d8b6eb5437.png)

接着将刚刚设置的外部存储激活，点击这个**活动**，把它勾选上

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/706a208d0b9ce5977faeeefa9db1e5a0.png)

设置完就可以上传图片了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/4472241c516169b76b54282c6ae145ae.png)



## 结语

教程到这里就结束了，后面我会再出一期PicGo、Cloudreve、Nextcloud等软件使用雨云对象存储的教程。



**雨云服务器搭建MCSM面板和我的世界服务器教程：[https://forum.rainyun.com/t/topic/2828](https://forum.rainyun.com/t/topic/2828)**