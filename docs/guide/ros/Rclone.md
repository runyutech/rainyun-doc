# 使用Rclone将阿里云对象存储迁移至雨云对象存储

使用Rclone将[阿里云](https://www.aliyun.com/minisite/goods?userCode=jdjc69nf)对象存储(OSS)的文件全部迁移至雨云对象存储(ROS)的教程，其他的对象存储也可以参照本教程。

## Rclone简介

Rclone 是一个用于和同步云平台同步文件和目录命令行工具。采用 Go 语言开发。

它允许在文件系统和云存储服务之间或在多个云存储服务之间访问和同步文件，它具有单向同步功能，使目录完全相同，它具有加密、缓存和联合后端，支持 Fuse 安装，并且可以通过 HTTP、WebDAV、FTP、SFTP 或 DLNA 服务本地或远程文件。

它支持超过 40 种不同的云存储服务，包括 Amazon S3, Google Drive, Dropbox, Microsoft OneDrive, Google Cloud Storage, Amazon Drive, OpenStack Swift, Backblaze B2, Yandex Disk, SFTP, WebDAV, FTP, SFTP, Minio, Wasabi, Alibaba OSS,, SwiftStack, Tencent COS, Wasabi, Yandex.Disk, Yandex.Files等等。

rclone 支持多种文件传输方式，包括复制，同步，移动，删除文件。它还支持文件加密和压缩，支持分块上传和分块下载，可以暂停和恢复传输，支持文件的校验和合并。

rclone 的主要优势在于它的灵活性和可扩展性。它可以用来做很多事情，包括备份，文件同步，数据迁移等。它可以在各种平台上运行，包括 Windows，macOS，Linux，FreeBSD，NetBSD 等。

rclone 的配置简单，可以使用命令行或者配置文件来配置。使用 rclone 可以非常方便的操作云存储，支持的命令也非常丰富，使用起来非常方便。

简单来讲，主要的功能如下：

- 将文件备份（和加密）到云存储
- 从云存储还原（和解密）文件
- 将云数据镜像到其他云服务或本地
- 将数据迁移到云，或在云存储供应商之间迁移
- 将多个、加密、缓存或不同的云存储挂载为磁盘
- 使用 lsf、ljson、size、ncdu 分析和核算云存储上保存的数据
- 将文件系统合并在一起，将多个本地和/或云文件系统呈现为一个

## 准备

### 注册账号并创建存储桶

首先需要注册个雨云账号并新建一个存储桶。

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

雨云账号注册&云服务器购买和使用教程：https://www.bilibili.com/video/BV1Kj411x7G6/

存储桶创建教程可以参考这篇文章：[https://forum.rainyun.com/t/topic/6201](https://forum.rainyun.com/t/topic/6201)

### 下载安装Rclone

Rclone官方下载地址：https://rclone.org/downloads/

window版雨云对象存储下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/rclone-v1.65.0-Windows-amd64_f23f79a27f93b504a2c9b4938c376e6e.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/rclone-v1.65.0-Windows-amd64_f23f79a27f93b504a2c9b4938c376e6e.zip)

本篇教程用Windows版，如果你会Linux也可以用Linux，rclone指令都是一样的。

将下载的Windows版压缩包解压到你要安装的目录，然后将这个目录路径添加到系统环境变量中，如下图所示。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210023526702_67442c6f784c9cf093eb35d9fb76a05f.png)

然后打开CMD，输入命令 `rclone --version` 来看看有没有安装成功，出现如下图信息就是成功了。

如果不行也可以使用`cd`命令进入到这个目录，然后用 `./rclone --version` 命令

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210153042673_012af60d3cf90954951ad8f499802417.png)

### Rclone常见命令

```bash
rclone config - 以控制会话的形式添加rclone的配置，配置保存在.rclone.conf文件中。
rclone copy - 将文件从源复制到目的地址，跳过已复制完成的。
rclone sync - 将源数据同步到目的地址，只更新目的地址的数据。
rclone move - 将源数据移动到目的地址。
rclone delete - 删除指定路径下的文件内容。
rclone purge - 清空指定路径下所有文件数据。
rclone mkdir - 创建一个新目录。
rclone rmdir - 删除空目录。
rclone check - 检查源和目的地址数据是否匹配。
rclone ls - 列出指定路径下所有的文件以及文件大小和路径。
rclone lsd - 列出指定路径下所有的目录/容器/桶。
rclone lsl - 列出指定路径下所有文件以及修改时间、文件大小和路径。
rclone md5sum - 为指定路径下的所有文件产生一个md5sum文件。
rclone sha1sum - 为指定路径下的所有文件产生一个sha1sum文件。
rclone size - 获取指定路径下，文件内容的总大小。.
rclone version - 查看当前版本。
rclone cleanup - 清空remote。
rclone dedupe - 交互式查找重复文件，进行删除/重命名操作。
```

## 配置对象存储

查看雨云对象存储的信息，还有要迁移的对象存储的信息。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210153252036_13620898e01e9b6f7993578021201381.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210155043652_e27c0a44257478633107aa47ded6bc3b.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210173352602_ed5befc2d79e906f335831acc1abac74.png)

### 配置雨云对象存储ROS

在CMD输入命令 `rclone config` 来进入交互式配置选项，进行添加、删除、管理对象存储等操作。

然后输入`n`来新建一个存储，按照提示输入雨云对象存储的信息。

首先时输入存储名，这里可以自己设置一个，我输入`ROS`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210161641857_eb0358a82dc687646f2bc72d19ae0b16.png)

选择存储类型，雨云是兼容S3协议的，所以选择`5 / Amazon S3`，输入序号`5`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210163041576_f95c208413ff710e4d613244c2f607a5.png)

选择服务商，这里选择其他`31 / Any other S3 compatible provider`，输入序号`31`

接着是设置认证方式，其中的`env_auth`选项用于指定从哪里获取AWS凭证（Access Key ID和Secret Access Key），这里选择第一个手动输入，输入序号`1`

然后设置`Access Key ID`和`Secret Access Key`，输入雨云控制台显示的Access Key和Secret Key

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210163527117_b1a08a619eb430851b89bf96948a7e45.png)

- region> ：输入序号`1`
- endpoint> ：输入雨云对象存储控制台显示的API端点地址，将地址后面的存储桶名称去掉，例如`https://cn-sy1.rains3.com`
- location_constraint> ：留空，直接回车

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210164730133_5834c314b6c3a2c079832af01636e522.png)

acl> ：输入序号`1`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210165246087_2df286d47bd4c18f02293a1352f08924.png)

- 是否编辑高级配置，输入`n`表示否
- 确认信息有没有错，输入`y`表示没错
- 最后输入`q`退出编辑

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210165652265_2315d8f25eeb2a42044da37bf3ecb872.png)

验证一下有没有添加成功，信息有没有错，先在雨云对象存储的存储桶上上传个文件，然后在CMD输入命令 `rclone ls ROS:zeruns-test2` 来列出存储桶的目录和文件，如果有你上传的文件就表示成功了，命令中的`ROS`替换成你上面设置存储名时输入的，`zeruns-test2`替换成你自己的存储桶名称。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210171258034_2ac175413cf2f943263144e8f4e49de3.png)

### 配置阿里云OSS

在CMD输入命令 `rclone config` 来进入交互式配置选项。

然后输入`n`来新建一个存储，按照提示输入阿里云对象存储的信息。

首先时输入存储名，这里可以自己设置一个，我输入`OSS`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210172447638_31c1251fa6a813c3eae26b1f2ff44536.png)

选择存储类型，阿里云是兼容S3协议的，所以选择`5 / Amazon S3`，输入序号`5`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210163041576_f95c208413ff710e4d613244c2f607a5.png)

选择服务商，这里选择阿里云`2 / Alibaba Cloud Object Storage System (OSS) formerly Aliyun`，输入序号`2`

接着是设置认证方式，其中的`env_auth`选项用于指定从哪里获取AWS凭证（Access Key ID和Secret Access Key），这里选择第一个手动输入，输入序号`1`

然后设置`Access Key ID`和`Secret Access Key`，输入从阿里云控制台获取的AccessKey ID和AccessKey Secret。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210173622655_de1f4e7ef594fae2769386d04fb2d6d0.png)

选择对象存储endpoint，我创建的阿里云OSS区域选的是`华北6(乌兰察布)`，所以选择`9 / North China 6 (Ulanqab)`，输入序号`9`，你们根据自己实际情况选。也可以手动输入阿里云控制台显示的`Endpoint（地域节点）`

acl> ：输入序号`1`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210174133442_451c1343d357a2a757427f3404b279e3.png)

- 选择存储类型，我创建OSS存储桶(Bucket)时选的是标准存储，所以输入序号`2`，选项1是默认，选项3是归档存储，选项4是低频访问存储.

- 是否编辑高级配置，输入`n`表示否
- 确认信息有没有错，输入`y`表示没错
- 最后输入`q`退出编辑

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210174803125_0c641ffb9716099b1a2b584cb8dfb413.png)

验证一下有没有添加成功，信息有没有错，先在阿里云对象存储的存储桶上上传个文件，然后在CMD输入命令 `rclone ls OSS:zeruns-alioss` 来列出存储桶的目录和文件，如果有你上传的文件就表示成功了，命令中的`OSS`替换成你上面设置存储名时输入的，`zeruns-alioss`替换成你自己的存储桶名称。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210175002262_f58017328c925280af24f01be18d859d.png)

## 迁移数据

在CMD输入下面的命令将数据从阿里云OSS同步到雨云ROS

```bash
rclone sync OSS:zeruns-alioss ROS:zeruns-test2 --progress
# 命令格式：rclone sync 源（配置文件名称）: 源数据Bucket  目标源名称：目标bucket （这句是注释，不用输入）
```

上面命令中的`OSS`替换成你上面设置阿里云OSS时输入存储名的，`zeruns-alioss`替换成你自己的阿里云OSS存储桶名称，`ROS`替换成你上面设置雨云对象存储时输入存储名的，`zeruns-test2`替换成你自己的雨云ROS存储桶名称。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210180249746_575a7c499f20a79409872bcabe24ce65.png)

等待同步完成即可在雨云对象存储控制台看到文件已经同步过来了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231210180353266_bf08ce1dd255b5c45ee103a4ef60db09.png)

你也可以使用这个工具将本地文件夹同步到对象存储里。

教程到此结束了。