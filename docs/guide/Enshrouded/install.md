# Windows服务器搭建雾锁王国服务器

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240314102044_56b505e7943133671ec500de50df38b2.png)


## 前提准备：部署雾锁王国服务器前提条件
由于是在雨云部署雾锁王国服务器，所以你需要有一个雨云账号，并且账号完成实名认证，否则无法使用。详细教程如下：
1、注册并实名雨云账号
2、购买雨云游戏云服务器

## 步骤一：下载购买游戏云服务器

购买雨云游戏云服务器可以到[雨云官网](https://app.rainyun.com/apps/rgs/buy)购买，系统选择**Windows 2019**。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240312171425_d47c44b0a7e7da886987e7a9bcb68c29.png)

## 步骤二：连接到服务器

连接服务器教程可以参考[Windows服务器连接教程](/docs/rgs/detail/connect#连接到windows服务器)。

## 步骤三：下载雾锁王国服务器

下载雾过王国服务器之前，我们需要使用下载SteamCMD工具，下载地址：[SteamCMD](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

下载之后我们点击打开，等待下载完成后显示：

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240313155029_d2b90da9e92dffe70ce0f4fcb778948b.png)

之后我们输入命令：
> login anonymous<br/>
> 
> app_update 2278520 validate

等待下载完成之后，我们进入目录：`\steamapps\common\EnshroudedServer`，打开**enshrouded_server.exe**。
打开后等待启动完成，并观察目录是否已经生成**enshrouded_server.json**的配置文件，生成后关掉开服的窗口，编辑开服配置，修改完成后重新打开**enshrouded_server.exe**即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240313155528_66846d8f3b48f894dcff96765d6b0138.png)

看到类似画面即为开服成功

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240313160847_0ddd152b5399a80bcd857657c3707f43.png)


## NAT机器设置
如果您的机器，没有公网ip，需要修改服务器配置的两个端口，然后在管理页面设置端口转发。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240313161023_0b104c4897d30e549adead08612c01a8.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240313161056_5f2efa802e52fd38ace45eb73e3ae052.png)

