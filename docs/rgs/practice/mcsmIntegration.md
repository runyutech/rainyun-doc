---
title: MCSM面板上传服务端整合包
description: MCSM面板上传服务端整合包
---

# MCSM面板上传服务端整合包

## 确定环境
如果需要上传整合包，需要先确定你的面板运行环境，如游戏版本，Forge版本等与你的整合包一样。

如果不一样，可能会导致整合包无法正常运行，需要在**重装/切换游戏功能**切换到需要的版本。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116151325_7aa1019bd812ade12ffd996dbd3326b1.png)

:::warning
重装会导致服务器数据丢失，请提前备份好数据。
:::

重装好之后，上传你的服务端文件，例如mod文件夹，服务端Jar等，压缩文件ZIP格式，点击上传将压缩包上传到服务器，然后解压到一个文件夹，在将文件移动出来。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116152028_bfe1e45fcfc26368e0a48d476c910d18.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116152304_f3e2d5bae5d4a675d48724aa5cfaaa9c.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116152348_cca1ce55150fe2e1be15248ec95cb361.png)

移动如果报错**Error :Error: dest already exists.**，请先删除原来的文件夹再移动。

移动完成后，我们还需要编辑启动脚本`启动脚本(可修改).sh`。
找到这个文件点击编辑，jar文件名换成你的服务端名字。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240116152909_fdc867fc9900a9694f46acd12f9e50e0.png)

修改之后返回到主页开启实例即可。
