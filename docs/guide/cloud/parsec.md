# 显卡云服务器使用Parsec进行远程游戏

使用显卡云服务器远程串流到主机游玩游戏。

## 0、准备工具
> Windows远程连接
> [Parsec](https://parsec.app/)账号

## 1、购买并机器

可以到雨云官网购买[云服务器](https://app.rainyun.com/apps/rcs/buy)，下面使用标配版作为演示。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240226150717_0739e7dd4409bf29462258f0caed948f.png)

购买机器后，进入管理页面，在页面右边我们可以看到服务器的连接信息，复制对外地址，然后我们使用**Windows远程桌面**连接到机器。
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240226150822_c32c5395d42be4e9ad74a59e60f752c1.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240226150913_0cb34b477f13301a940e4c215f5c3c2c.png)

## 2、安装Parsec
连接到机器后，我们打开[parsec官网](https://parsec.app/)，点击左上角download，点击页面download。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240226151139_38b2e5b74bae198485ef1e3c75caad95.png)

下载完成后，点击打开安装，如图需要勾选虚拟显示器选项，其他默认即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240226151226_4640a8816897035eddfccd57d9c52516.png)

安装完成后打开，并输入自己的邮箱与密码，登陆软件，登陆完成后如果进入到下面界面即完成。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240226151411_a779b56fdbd14fe3d5dfb68fbd90b0a2.png)

## 3、使用parsec连接到服务器

如果已经安装并运行了parsec，可以将Windows自带的远程访问关闭掉，然后在本地计算机下载parsec。

下载安装流程与上面服务器的一致。下载完成后进入到parsec，输入自己的邮箱与密码，登陆软件。找到自己的服务器，点击connect。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240226151718_2fdae1ab32a26dcd96b0351fb503b74a.png)

:::tip
如果出现以下提示可以重新点击connect。
:::
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240226152749_8f5106da7eeb6e5e74969cc8c38bca3a.png)

### 测试运行

连接成功后即可游玩游戏。

<iframe class="iframe_video" src="//player.bilibili.com/player.html?aid=1501180369&cid=1451579814&page=1&autoplay=false&muted=true&highQuality=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 使用手柄远程串流游玩
因为***Windows Server缺少手柄驱动***，所以我们需要额外安装手柄驱动。

### 下载驱动

> [Xbox手柄驱动](https://xbox-360-controller-for-windows.en.lo4d.com/download)<br/ >
> [远程虚拟手柄驱动](https://github.com/nefarius/ViGEmBus/releases/tag/setup-v1.17.333)

### 安装驱动

直接打开下载的驱动，按提示一路安装即可。

### 测试连接

将手柄连接到机器，打开parsec，连接到服务器，等待系统安装驱动后。

打开Parsec，侧边栏点击设置->gamepad，如果显示手柄信息即为成功连接(如下图)。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240227150538_01f98670c3527410cd3552c81796d4ad.png)

### 测试运行

<video class="iframe_video" controls src="https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240227145355_6f95903e99ff4a9228be329a46b16196.mp4"></video>




