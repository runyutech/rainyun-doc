# 雨云GPU云服务器搭建SD(Stable Diffusion)的教程，搭建自己的AI绘画网站，AIGC

雨云GPU云服务器搭建Stable Diffusion的教程，搭建自己的AI图片生成网站，AIGC

## Stable Diffusion是什么

Stable Diffusion是一种基于潜在扩散模型（Latent Diffusion Models）的文本到图像生成模型，由CompVis、Stability AI和LAION的研究人员和工程师共同创建。该模型首先将图像压缩到潜空间（latent space）中，然后在潜空间中应用扩散过程来生成新的图像。它能够从文本描述中生成详细的图像，并可用于图像修复、图像绘制、文本到图像和图像到图像等多种任务。

Stable Diffusion使用来自LAION-5B数据库子集的512x512图像进行训练，能够生成包括人脸在内的任何图像。此外，由于该模型是开源的，用户也可以在自己的机器上运行它。该模型的一个主要优点是能够将“图像生成”过程转换为逐渐去除噪声的“扩散”过程，从随机高斯噪声开始，经过训练逐步去除噪声，直到不再有噪声，最终输出更贴近文本描述的图像。

然而，Stable Diffusion也存在一些缺点，例如扩散模型在像素空间中运行，特别是在生成高分辨率图像时，去噪过程的时间和内存消耗都非常昂贵，这会使进程变慢，并消耗大量内存。

总的来说，Stable Diffusion是一种强大的文本到图像生成模型，能够根据任意文本输入生成高质量、高分辨率、高逼真的图像，但也有一些限制和需要改进的地方。

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

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221233649274_3b88519d078a529a8f7123218f58f406.png)

接着就可以看到云服务器的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221233747673_e9ad3770f19c6f6c97970a08b72c12ab.png)

## 连接服务器

在自己电脑上打开Windows自带的远程桌面软件（RDP）

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

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221171753918_9a00f118fcb0a63460e5ea1cca2db913.png)

## 扩容硬盘

默认硬盘大小是60GB的，需要自己升级扩容。

到雨云控制台点击 **弹性硬盘**→**扩容**，接着选择扩容硬盘到多大，这里建议最小150GB，选好后点立即扩容。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221234135286_041f588b4b832e051e8c3e0ce9d1373c.png)

回到远程桌面，右键点击左下角的WIN键，点击磁盘管理。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221173937793_1265d5196ce4c6677af833d3325cf03e.png)

可以看到右边有段黑色的未分配的硬盘空间，可以右键点击它新建一个盘，我这里就将它并入到C盘，扩容C盘。

右键点击C盘，点击扩展卷。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221173935044_7d4d2b95f351e18b8acd6795a6bea19f.png)

点击下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221174003207_34023fbfbed714d71b055d9092f761b6.png)

继续点击下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221174021365_98803d00418beba99170defe802be309.png)

点击完成。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221174034470_34918b9eb29d194288fa7678647e4019.png)

现在就将C盘扩容好了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221174047889_a7fe025a5d954c1f53f88cae6b30ae19.png)

## 安装和使用Stable Diffusion

首先需要下载Stable Diffusion，我这里打包好了，直接下载这个压缩包并解压出来就行。

Stable Diffusion下载地址：[https://www.123pan.com/s/2Y9Djv-qIcvH.html](https://www.123pan.com/s/2Y9Djv-qIcvH.html)     提取码:DtL7

在服务器上下载这个压缩包，下载好后右键点击它，点击全部解压缩。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221190651759_c945e166872b8df9aec1ac4f905409d5.png)

点击浏览选择要解压到的目录，我这里放在桌面，然后点击提取。

建议自己下载个别的解压软件，系统自带的解压速度非常慢。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221190735749_b26c04074eaac4256daae3414e351111.png)

进入到刚刚解压出来的目录，双击打开启动器。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221205640797_f5a9193e974baff7e00fbd7d747e0044.png)

弹出这个提示要安装.NET6.0依赖，直接点击是。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221205659854_fbec18c2dfb84eedfaa8c4fa7fc3fa28.png)

会跳转到一个网站并自动下载了一个exe文件，点击打开文件。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221205732385_7efa5de6f84ea4f54e9c50cd9f4c4f62.png)

点击安装。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221205746611_e3a7dbaa9ce9e839814cf8f42088acf0.png)

安装完后点击关闭。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221205814579_46ff000f3cc8a20258bf2f0b07de8fa2.png)

再次双击打开启动器。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221205837398_82f49d4016c0b8478cb1a25be36dc376.png)

出现下面提示就点是。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221205900664_b114f81a87735127f3f6383ca1c0b73b.png)

再次双击打开启动器，然后点击一键启动。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221213621002_58b597e0b26980e5f5f5b15c262c0c04.png)

启动成功后会自动打开浏览器跳转到控制台`http://127.0.0.1:7860/`，接着你就可以输入关键词来生成图片。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221214116000_1fed6a64cbdc4ed3b4e5caa103a7b8f5.png)

现在还只能在服务器里打开，还需要设置一下，回到启动器，点击高级选项→监听设置→开放远程连接。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221214440346_19af90d31baaa0f774ea453851755aff.png)

接着点击控制台，点击终止进程，然后再点击一键启动。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221214516429_25edb4698b893efb04bf16a4a06c8aab.png)

回到雨云控制台，点击NAT端口映射，新建规则，内网端口输入7860，外网端口随便输一个，点击创建映射规则。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221214803140_d82ba9b43aca1a9905ef837d52e391d6.png)

然后复制刚刚创建的端口映射规则的公网地址到浏览器打开，你就可以在自己电脑打开Stable Diffusion的控制台了，我这里是`218.93.206.88:38160`。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221214904363_9f1e728d994df59cae029b3ac9590d56.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221215253892_c118d66c417548d9232e61f5248d9052.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/02/image-20240221220440408_9c6fc1e42f270aa8c7c36a238a43e0c8.png)

更多功能你们可以自己慢慢摸索。

