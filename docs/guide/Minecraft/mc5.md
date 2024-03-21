# 使用MCSM搭建Minecraft Java/基岩服务器 支持Forge，Fabric等

## 1. 介绍

[雨云MCSM](https://docs.mcsmanager.com/#/zh-cn/)面板目前支持一键开服的游戏有：Minecraft Java版、Minecraft 基岩版、泰拉瑞亚、饥荒，还提供纯Java/Linux环境（Docker），方便开自己开其他游戏服。

## 2.购买服务器
购买服务器流程可以参考图片：
选择服务器类型选择适合自己的核心，版本等等

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240321113139_b26d67875fc59f878e1abd62fb1327e7.png)


## 3.访问MCSM面板

购买后，等待机器创建，创建完成后我们点击进入MCSM面板，复制好账号密码后，点击进入。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240321113910_9079101e84206655b2d74d752e79aeac.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240321114033_5d3ad99e550eb12f67d0b10dec2e9ec6.png)

## 4.开启服务器

进入mcsm服务器后，找到自己的机器，点击右边管理，进入后点击开启实例。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240321115649_0ce84727f38fd3a4b9fdede91e28ea79.png)

启动完成后输入help，如果出现相关提示即开启成功。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240321120811_3e021c19a77e472cc884e6f4ba79723a.png)

然后我们回到雨云管理页面，右边找到nat地址，复制地址，然后游戏内访问这个地址即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240321121010_b18ff97c6112d182c2fa548155e79afe.png)

## 上传自己的整合包

:::tip
上传之前，请确认服务端可以在自己电脑上运行。
:::

如果需要上传整合包，需要先确定你的面板运行环境，如游戏版本，forge版本等与你的整合包一样。

如果不一样，可能会导致整合包无法正常运行，需要在**重装/切换游戏功能**切换到需要的版本。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116151325_7aa1019bd812ade12ffd996dbd3326b1.png)

:::warning
重装会导致服务器数据丢失，请提前备份好数据。
:::

重装好之后，上传你的服务端文件，例如mod文件夹，服务端Jar等，**压缩文件ZIP格式**，点击上传将压缩包上传到服务器，然后解压到一个文件夹，在将文件移动出来。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116152028_bfe1e45fcfc26368e0a48d476c910d18.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116152304_f3e2d5bae5d4a675d48724aa5cfaaa9c.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116152348_cca1ce55150fe2e1be15248ec95cb361.png)

移动如果报错**Error :Error: dest already exists.**，请先删除原来的文件夹再移动。

移动完成后，我们还需要编辑启动脚本`启动脚本(可修改).sh`。
找到这个文件点击编辑，jar文件名换成你的服务端名字。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116152909_fdc867fc9900a9694f46acd12f9e50e0.png)

修改之后返回到主页开启实例即可。