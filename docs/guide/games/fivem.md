# 使用游戏云安装部署GTA V fivem服务器

## 0. 准备工作
[cfx.re账号](https://forum.cfx.re/)
[雨云游戏云VPS服务器(点击进入购买)](https://app.rainyun.com/apps/rgs/buy)

## 1.远程连接到服务器
连接到Windows服务器可以参考[连接到游戏云服务器](/docs/rgs/detail/connect)。

## 2.安装环境

我们到FiveM官网[下载服务器文件](https://docs..net/docs/server-manual/setting-up-a-server-txadmin/)，下载完成后解压压缩包。

解压后打开`FXServer.exe`。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308145558_76f4905f10a19963ae19aa0b8f7b9e84.png)

打开后浏览器会打开一个网站打开。确保 PIN 码已填写，然后单击Link Account，在此选项卡中登录您在Cfx.re上的帐户，然后单击Yes, Allow。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308145736_c9779025beec3fcc3ea099378624c0e6.png)

设置密码以登录服务器的管理页面。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308145816_342558cd61c01725a9cb48f0e271e84a.png)

点击下一步

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308145834_785d0c9c2425dc463327dfb88fdf26e9.png)

输入您的服务器的名称，然后单击“下一步”。

选择第一个

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308145857_0c9bc815d237fb83893e7f5247d3ba36.png)

选择默认模版

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308145914_3baaaf19fa2ee033a77a870b24bc1c88.png)

单击“保存”或选择其他路径，然后跳转到部署程序，确定部署程序配置文件无误，在“开始之前”步骤中输入您刚刚在 Keymaster 上创建的密钥，然后单击“运行”。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308150024_1755a2ab12bed0d17e528d8ed369dcf6.png)

部署安装完成后即可点击安装运行。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308150045_33248e796f8682db9513a178d10d6212.png)

如果购买的服务器没有公网地址，需要手动设置nat端口映射，在终端获取到服务器端口后，到雨云管理页面设置，内网端口为服务器端口，外网端口为任意端口。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308150846_aa906b5c42087462021ac941c1e20658.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240308150936_f4ee863cd9e601e83c4ceecd82962319.png)
