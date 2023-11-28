---
title: 使用实践
description: 来看看大牛如何玩出花
sidebar_position: 98
---
## 使用RaiDrive挂载存储桶到电脑

### RaiDrive是什么

[RaiDrive](https://www.raidrive.com/)可以将云端存储挂载为本地硬盘，让你云盘使用起来就和本地硬盘一样，
可以将Google Drive、Google Team Drive、Google Photos、Dropbox、OneDrive、WebDAV、FTP、 SFTP等挂载成硬盘。

### 操作指南

1. [准备环境](#准备环境)
2. [配置RaiDrive](#配置raidrive)

### 准备环境

* 装有Windows的设备(RaiDrive只支持Windows系统)
* [RaiDrive](https://www.raidrive.com/)客户端
* 雨云对象存储

1. 打开[RaiDrive](https://www.raidrive.com/)官网，下载并安装客户端(如果需要按照环境按提示安装即可)。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155195_fd683a25d83c160f0b7c13cd3d0468bc)

   2.安装成功后打开软件，显示该界面即为安装成功。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155216_ed886164d9caf3726370c6e024f87214)

### 配置RaiDrive

1. 软件打开后，点击右上角添加按钮，选择对象存储。
2. 我们点击Enterprise,然后选择AWS S3 Compatible。
3. 选择要设置的盘符以及设置盘名称
4. 端点处填写雨云的API 端点，密钥ID为雨云的AccessKey，密钥为雨云的SecretKey。
5. 桶需要输入在雨云设置的存储桶名字
6. 点击连接即可完成配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155248_e638ef1e2a7b5ac34f7f0c64b3f8f94e)

:::tip
密钥信息可以在信息与监控找到，详细可以看[凭证信息](/docs/ros/manage#信息监控)
:::

如果链接成功，资源管理器，并且可以看到存储桶里面的文件。
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155267_f872cc43739e662d3f17f410a21ce4bb)
:::tip
RaiDrive免费版挂载S3只有只读权限，需要付费才可以读写
:::

## 使用Rclone挂载存储桶到电脑

### 什么是Rclone

[Rclone](https://rclone.org/downloads/)是一个免费的跨平台命令行程序，用于同步文件和目录到和从云存储服务，比如Google Drive、Amazon Drive、S3、Dropbox、Backblaze B2、One Drive、Swift等等。

### 操作指南

1. [准备环境](#准备环境-1)
2. [配置Rclone](#配置rclone)
3. [测试运行](#测试运行)
4. [Linux环境下部署](#linux环境下部署)

### 准备环境

* 任意设备即可(教程使用Windows版本)
* [Rclone](https://rclone.org/downloads/)客户端
* 雨云对象存储
* [WinFsp](https://github.com/winfsp/winfsp/releases)(Windows环境下需要)

1. 打开[Rclone](https://rclone.org/downloads/)官网，下载适合自己系统的版本(Windows 64位下载红框版本)。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155296_88aee4a3877240b03d12d77ef2987733)

2. 下载完成后我们得到一个压缩包，直接解压即可
3. 解压后进入文件夹，右键空白处，选择在此处打开命令窗口。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155314_ec9018cc0730475a0a459c16cb55e401)

4. 在命令窗口输入`rclone`，然后回车，如果看到以下提示即可运行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155334_33dd461426f01be24fb134ff7ef6d6b4)

5. 前往雨云对象存储，点击信息与监控，找到`API端点`，`AccessKey`，`SecretKey`，备用。

### 配置Rclone

在进入这一步之前你需要先拿到以下的信息：

* API端点
* AccessKey
* SecretKey
* 桶名
* 可运行的[Rclone](https://rclone.org/downloads/)客户端

1. 在命令窗口输入`rclone config`，然后回车。
   会出现：

> e) Edit existing remote  <br/>
> n) New remote<br/>
> d) Delete remote<br/>
> r) Rename remote<br/>
> c) Copy remote<br/>
> s) Set configuration password<br/>
> q) Quit config<br/>
> e/n/d/r/c/s/q><br/>

输入`n`，新建一个，并将该新 remote 命名，假设我们命名为`雨云`。
之后会出现：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155355_b09efe92625f6c06e1663837acebb4bd)

这里需要选择**Amazon S3 Compliant**，不同版本 Rclone 的数字可能不同，我这里的 **Amazon S3 Compliant** 对应的是 5，所以输入 5。

之后会出现：

> Option provider.<br/>
> Choose your S3 provider.<br/>
> Choose a number from below, or type in your own value.<br/>
> Press Enter to leave empty.<br/>
> 29 / Any other S3 compatible provider
> \ (Other)

我们输入`29`(任何其他 S3 兼容提供商)，然后回车，不同版本 Rclone 的数字可能不同，按自己的提示选择输入。

之后会出现：

> Option env_auth.<br/>
> Get AWS credentials from runtime (environment variables or EC2/ECS meta data if no env vars).<br/>
> Only applies if access_key_id and secret_access_key is blank.<br/>
> Choose a number from below, or type in your own boolean value (true or false).<br/>
> Press Enter for the default (false).<br/>
> 1 / Enter AWS credentials in the next step.<br/>
> \ (false)<br/>
> 2 / Get AWS credentials from the environment (env vars or IAM).<br/>
> \ (true)<br/>
> env_auth><br/>

这里直接回车，之后出现

> ption access_key_id.<br/>
> WS Access Key ID.<br/>
> eave blank for anonymous access or runtime credentials.<br/>
> nter a value. Press Enter to leave empty.<br/>

这里输入雨云的`AccessKey`，然后回车。

> Option secret_access_key.<br/>
> AWS Secret Access Key (password).<br/>
> Leave blank for anonymous access or runtime credentials.<br/>
> Enter a value. Press Enter to leave empty.<br/>
> secret_access_key><br/>

这里我们输入雨云的`SecretKey`，然后回车。

> Option region.<br/>
> Region to connect to.<br/>
> Leave blank if you are using an S3 clone and you don't have a region.<br/>
> Choose a number from below, or type in your own value.<br/>
> Press Enter to leave empty.<br/>
> / Use this if unsure.<br/>
> 1 | Will use v4 signatures and an empty region.<br/>
> \ ()<br/>
> / Use this only if v4 signatures don't work.<br/>
> 2 | E.g. pre Jewel/v10 CEPH.<br/>
> \ (other-v2-signature)<br/>
> region> 2<br/>

出现选择region，这里我们输入`2`。

> Option endpoint.<br/>
> Endpoint for S3 API.<br/>
> Required when using an S3 clone.<br/>
> Enter a value. Press Enter to leave empty.<br/>
> endpoint> https://cn-sy1.rains3.com<br/>

这里输入雨云的`API端点`，之后全部默认，我们输入回车即可，来到下面的提示，我们输入`n`。

> Edit advanced config?<br/>
> y) Yes<br/>
> n) No (default)<br/>
> y/n> n<br/>

之后会出现我们的配置信息：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155377_7d106ff5911023a4e7a1f7993f640cbf)

确认信息无误后，输入`y`，然后输入`q`退出，至此我们完成Rclone配置。

### 测试运行

在Windows环境下，我们还需要借助[WinFsp](https://github.com/winfsp/winfsp/releases)才能挂载到本地，所以我们需要先安装[WinFsp](https://github.com/winfsp/winfsp/releases)。
安装好后，我们打开命令窗口，输入`rclone mount 配置名:桶名 挂载盘符`，然后回车。
提示`The service rclone has been started.`即为挂载成功。
:::tip
这样只是将存储桶临时挂载到本地，关闭命令窗口后会自动卸载。
:::
成功后在资源管理器中可以看到挂载的盘符，可以像本地硬盘一样使用。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155390_88c64def6601f9cbce68e3c215c93277)


双击进入即可看到桶内的文件。
这时我们可以新建一个文件并保存，然后在雨云对象存储中查看，可以看到我们新建的文件已经同步到云端了。

### Linux环境下部署

在Linux环境下主要区别在于只在如何安装Rclone，配置与挂载Rclone与Windows环境下一致，这边不再重复。

#### 安装Rclone

```shell
apt install rclone
```
或者
```shell
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

安装好后输入`rclone config`，按上方Windows步骤一样配置。


## 在雨云服务器上使用Docker搭建NextCloud并接入雨云对象存储

请阅读我们的[博客](/blog/rainyun-NextCloud)

## 使用雨云ROS搭建Chevereto图床

请阅读我们的[博客](/blog/rainyun-ros-chevereto)


