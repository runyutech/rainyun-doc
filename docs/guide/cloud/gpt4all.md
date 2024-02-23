# 雨云GPU云服务器搭建"ChatGPT"—GPT4All本地部署

雨云GPU云服务器搭建自己的"ChatGPT"—GPT4All本地部署，大语言模型搭建教程。雨云GPU云服务器使用教程。

## 什么是GPT4All

GPT4All是Nomic AI公司开源的一个类似ChatGPT的模型，它是基于MetaAI开源的LLaMA微调得到的其最大的特点是开源，并且其4-bit量化版本可以在CPU上运行！GPT4All是在大量干净数据上训练的一个开源聊天机器人的生态系统。它不用科学上网！甚至可以不联网！本地就能用。接下来咱们就是实战一下如何体验GPT4All。支持的系统包括Mac/OSX、Windows、Ubuntu市面上常用的所有操作系统。

GPT4All模型是一个3GB - 8GB的文件，您可以下载并插入GPT4All开源生态系统软件。特别强调是GPT4All是遵循非商业化协议，所以不能用于商业用途。

## 准备

首先需要一台GPU云服务器，这里推荐雨云的GPU云服务器：

**雨云优惠注册地址：[https://www.rainyun.com/ryy_?s=zhihu](https://www.rainyun.com/ryy_?s=zhihu)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

雨云P40显卡云服务器上线了！8核8G内存 4G显存 25兆 仅需168元/月：[https://forum.rainyun.com/t/topic/7003](https://forum.rainyun.com/t/topic/7003)

注册完账号后进到雨云控制台，**云服务器**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221004620394_9a9505ca3dd7b718ec693f2009fbfe23.png)

点击**购买云服务器**，区域选择**江苏宿迁**，配置选择**Tesla P40**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221005026806_df95000577ce578cb28eda5d386302cc.png)

套餐建议选择**旗舰版**，因为很多AI模型要求最少8G内存/显存，系统选**Windows**。

选好后点**立即购买**，也可以点试用，显卡云可以5元试用一天。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221005320392_450b51b1d906866da5475903cfb0df44.png)

购买后即可在我的云服务器这里看到你买的VPS，点击这个卡片或者**管理**键。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221005612405_f57f310908428c2954c0387cb4f7d65b.png)

接着就可以看到云服务器的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221005658828_a765bff21970ab4ec8376a9a2968111e.png)

## 连接服务器

在自己电脑上打开windows自带的远程桌面软件（RDP）

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106171755387_7402a777a8520fb05de84c72159472b4.png)

输入你服务器的远程连接地址和端口（一般远程桌面的默认端口是3389，因为我选的NAT模式，共用公网IP，所以3389端口被映射到56966，你的不一定是这个端口，根据自己实际情况输入），点击显示选项。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221010103304_a47a95e2f9c7fcf5cb0d698b31f68316.png)

用户名输入默认的Administrator，然后点击连接。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221010206693_28efb1955e5b37df574317069a871199.png)

接着输入密码并确定。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221010231375_22312aa0ff90a9b6b28500d3e415930c.png)

如果弹出这个框就直接点是

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127171235760_c40775d64372bf6827e4f4aa0e21135f.png)

然后就连接上服务器了



## GPT4All安装和使用

首先需要下载安装包到服务器里：

GPT4All官网：[https://gpt4all.io](https://gpt4all.io)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221004041686_e72d61f15607ff76e39a64bebc67d65e.png)

我这里下载了Windows版的安装包放网盘里了，如果进不去官网可以在这个链接下载：[https://www.123pan.com/s/2Y9Djv-dMcvH.html](https://www.123pan.com/s/2Y9Djv-dMcvH.html)

下载好后双击打开安装包，点击下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220024556581_dd0a9f4d349a9159a6af4d8fe9c2ae38.png)

选择安装目录，默认就行，点击下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220024612054_1e9d40772913af64b8b88e1adf5d04f3.png)

选择组件，直接点击下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220024629142_108cb13b33aff6a57ea8dd6d696b4e92.png)

点击接受许可协议，下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220024647069_c8cba1eca2983da059630a762ef27f82.png)

直接点击下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220024702802_372c098f795f9d7b6878c144a3461d8d.png)

点击安装。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220024719202_259cdb52c6b80276da9060b3d001cf45.png)

安装完成后点击下一步，再点击完成就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220024800684_46dd75b6fdf8c99f960ce796453ca529.png)

双击打开桌面这个GPT4All的图标

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220024835682_f2c5d2b48587330959c103e220dd29ca.png)

勾选这两个Yes

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220025303323_d26724f58184751373279fd273ca57ae.png)

选择一个模型来下载，我这里选择`GPT4AII Falcon`。

注意：由于国内网络问题，所以需要你自己科学上网才能下载模型（只有获取模型列表时需要科学上网，模型列表加载出来后下载模型时可以关掉科学上网）。

也可以到官网自己下一个别的模型导入进去。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220025842230_b5c87f243ef18619065c56aa093d03c6.png)

下载完成后关闭下载模型的窗口就可以看到聊天框了，聊天框上方可以选择要运行的模型。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220141727478_663f9046f04fde0dee7f9dfd0ceb0369.png)

由于`GPT4AII Falcon`模型需要8G显存跑（也可以用CPU+内存来跑，不过速度慢很多），而我购买的机型是4G显存的，所以我这里改成选择`Mini Orca(small)`模型，这个模型仅需4G显存。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220135515897_3d4bda956878498dbfff565394d2d389.png)

用CPU+内存跑`GPT4AII Falcon`模型。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240220141418243_26a222923a687ab2eab41d7b8cc37c7f.png)
