---
slug: rainyun-ros-picgo
title: PicGo+雨云ROS，轻松搭建个人图床，与Typora完美搭配！
authors: linyu
tags: [技术干货]
---


# PicGo+雨云ROS搭建自己的图床，可配合Typora使用

**本文将手把手带你使用`PicGo+雨云对象存储ROS(Rain Object Storage)`搭建自己专属的免费图床，并且可以配合Typora使用。**

雨云对象存储服务介绍和使用教程：[https://forum.rainyun.com/t/topic/5573](https://forum.rainyun.com/t/topic/5573)

目前雨云对象存储是公测阶段，暂时是免费的。

## PicGo是什么

**PicGo是一个用于快速上传图片并获取图片 URL 链接的工具**

**特色功能：**

- 支持拖拽图片上传
- 支持快捷键上传剪贴板里第一张图片
- Windows 和 macOS 支持右键图片文件通过菜单上传 (v2.1.0+)
- 上传图片后自动复制链接到剪贴板
- 支持自定义复制到剪贴板的链接格式
- 支持修改快捷键，默认快速上传快捷键：`command+shift+p`（macOS）| `control+shift+p`（Windows\Linux)
- 支持插件系统，已有插件支持 Gitee 等第三方图床
  - 更多第三方插件以及使用了 PicGo 底层的应用可以在 [Awesome-PicGo](https://github.com/PicGo/Awesome-PicGo) 找到。欢迎贡献！
- 支持通过发送 HTTP 请求调用 PicGo 上传（v2.2.0+)
- 更多功能等你自己去发现，同时也会不断开发新功能
  - 开发进度可以查看 [Projects](https://github.com/Molunerfinn/PicGo/projects)，会同步更新开发进度

**如果第一次使用，请参考应用 [使用文档](https://picgo.github.io/PicGo-Doc/zh/guide/getting-started.html)。遇到问题了还可以看看 [FAQ](https://github.com/Molunerfinn/PicGo/blob/dev/FAQ.md) 以及被关闭的 [issues](https://github.com/Molunerfinn/PicGo/issues?q=is%3Aissue+is%3Aclosed)。**

## Node.js下载安装

### 下载

Node.js下载地址：https://nodejs.org/zh-cn

建议下载红色框中的版本。稳定。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/64457ad8a652d663ae2e12c8acee1979.png)

### 安装

然后**一路安装就行，不要更改任何配置，保存路径为默认最好**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/1c5ca9f4b032e96043a4a52c91fbb44d.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/69458e8509d171b95422b69e47cd09d5.png)

### 检验是否安装成功

**安装完成后，可能会弹出一个命令窗口，关掉；然后win+r打开cmd，输入`node -v`：显示 node.js版本号，说明已安装成功。输入`npm -v`，输入这个命令时，可能会卡一下。显示nmp版本号，说明自带的nmp也安装成功。**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/3c937bd7f95debcbb9ddc75e63a0d371.png)

## PicGo下载安装

picgo下载链接：[https://github.com/Molunerfinn/PicGo/releases](https://github.com/Molunerfinn/PicGo/releases)

山东大学镜像站：[https://mirrors.sdu.edu.cn/github-release/Molunerfinn_PicGo/](https://mirrors.sdu.edu.cn/github-release/Molunerfinn_PicGo/)

我下载的是beta版本，测试版，相对正式版不稳定。windows系统的就选择这种exe后缀的。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/32ee0c33368428d1432345b12eede732.png)

安装包下载完成后，我们双击打开安装包，进入图形化安装界面，一直点击下一步安装即可，安装位置可以自己更改。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/6007bf6519d6525abda1483bbe9e7b80.png)

## 创建存储桶

首先注册个雨云账号。

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy   使用优惠码可获得5折优惠券，消费后还可获得价值5元的积分返现**

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

## 配置PicGo

打开刚装好的picgo，打开会自动隐藏到右下角的系统托盘，需要点击一下让它出来。

### 下载插件

点击**插件设置**，在搜索框输入**S3**，点击下图所示的**安装**按钮安装S3插件。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/a4eb33ed469b831832a7f2d8e1332150.png)

如果搜索不出也可到下面的插件开源地址下载插件源码，将下载的压缩包解压出来，然后点击右上角的导入本地插件选择刚刚解压出来的目录。

插件开源地址：[https://github.com/wayjam/picgo-plugin-s3](https://github.com/wayjam/picgo-plugin-s3)

插件国内下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/e46e2a53d2578b9b65edd0868f0b7716.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/e46e2a53d2578b9b65edd0868f0b7716.zip)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/02ff1493507ad302dc9ea9df41b8334b.png)

### 配置图床[ROS]

点开**图床设置**，点击**Amazon S3**，点击**编辑按钮**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017174813_6ca1c803adca9af2abcf711023f2d070.png)

按照下图所示配置插件，

- 图床配置名自己定一个，
- 桶名就填你的存储桶名称，
- 应用密钥ID填你的存储桶的Access Key，
- 应用密钥就填你的存储桶的Secret Key，
- 自定义节点就填你存储桶的API端点地址，
- 文件路径可以默认不用改，你也可以参照插件开源地址里的说明来修改，
- 开启ForcePathStyle

填写完后点确定就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017175419_547e80e100df84e3e043667abd17a7da.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017175455_a30f108b3865671d8ba1f6eaacb8b2b6.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017175520_5e1fb5a3b76f62098bb3b79a170d334a.png)

点击**上传区**，更改图片上传图床为**Amazon S3**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017180236_44418ec8eb60eb77b4c9ec073da40b20.png)

接下来，我们上传一张照片来测试一下是否配置成功，上传成功后，`PicGo`会自动把图片的链接复制到粘贴板中，同时我们也可以在`相册`中查看，因为上传成功后会有记录，这里可以复制图片的链接、修改图片的链接和删除图片。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017180426_b5afab9538bcdbb03e8f15ecf603b1bf.png)

在`PicGo设置`中我们可以对图床进行管理，我这里就只保留了`Amazon S3`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017180506_551b20af4b6949682abb2cd1e762cffa.png)

## 配置Typora

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231017180948021_b048504f4548f175ba4b513dac17be54.png)

- PicGo路径：是你自己下载的PicGo保存的路径。可以打开PicGo查看属性。
  1. 找到你picgo的安装路径，要找到那个`.exe`文件的部分，再点击那个验证图片上传选项，成功以后就是完成配置了
  2. **复制目标路径，粘贴到PicGo路径，即可**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231017181102108_e65e6408f9053135c253a2499f113088_e65e6408f9053135c253a2499f113088.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017181253_c6fda8bf0f9bc8cfc688701864c1c700_c6fda8bf0f9bc8cfc688701864c1c700.png)

**点击验证图片上传选项，弹出以下窗口，显示绿色字体部分，就是配置成功了！**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017180759_7aef644b41bf28f249e3c51e9c48e445.png)

## Typora上传图片到ROS

编辑文章时可以直接将图片复制到Typora里，**编辑完文章后点击Typora格式，选择图像，选择上传所有本地图片！**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017181748_0cf9ac2d269d9fdd46951af9ee38b0f5.png)

**上传成功：此时就彻底配置成功啦，上传完后会自动替换链接地址**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231017181851_73d2539902353186b338103cd2ef7e8c.png)

文章到此结束。