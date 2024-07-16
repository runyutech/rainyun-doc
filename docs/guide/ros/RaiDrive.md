# 使用RaiDrive挂载存储桶到电脑

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
密钥信息可以在信息与监控找到，详细可以看[凭证信息](/docs/ros/detail/manage#信息监控)
:::

如果链接成功，资源管理器，并且可以看到存储桶里面的文件。
![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701155267_f872cc43739e662d3f17f410a21ce4bb)
:::tip
RaiDrive免费版挂载S3只有只读权限，需要付费才可以读写
:::
