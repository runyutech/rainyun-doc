# 雨云服务器搭建Typecho个人博客网站，保姆级建站教程

**使用Linux和宝塔面板搭建Typecho博客网站的教程，网站搭建教程，超详细的纯小白教程。还有模板/主题更换，插件安装的教程。**

本文使用的博客程序是Typecho，你也可以换用其他，比如WordPress、Z-Blog、emlog等等，搭建的流畅都差不多的，参照本教程然后自己再摸索一下就会了。

WordPress博客网站搭建教程：[https://forum.rainyun.com/t/topic/5769](https://forum.rainyun.com/t/topic/5769)

## 什么是个人博客

个人博客是一种在互联网上发布自己的文章、图片、视频等内容的平台，通常以文字为主要形式，但也可以包含其他媒体。

个人博客的用途非常广泛。它可以用来记录博主的日常生活、分享自己的知识和经验、展示自己的作品和技能，以及交流自己的观点和看法。通过个人博客，博主可以与读者建立联系，分享自己的见解和体验，同时也可以从读者那里获得反馈和建议。

博客最初的名称是Weblog，由web和log两个单词组成，按字面意思就为网络日记，后来喜欢新名词的人把这个词的发音故意改了一下，读成we blog，由此，blog这个词被创造出来。中文意思即网志或网络日志，不过，在中国大陆有人往往也将Blog本身和blogger（即博客作者）均音译为“博客”。

## Typecho简介

Typecho是一款轻量级的开源博客程序，由type和echo两个词合成而来，这个名称源自开发团队的头脑风暴。其中，“Type”具有打字的意思，象征着博客是一个通过打字在网络上表达自己的平台；“Echo”则意味着回声、反馈、共鸣，同时它也是PHP中最常见、最重要的函数之一。

Typecho基于PHP开发，可以运行在各种平台上，同时支持多种数据库，如Mysql、PostgreSQL、SQLite等。此外，Typecho在GPL version 2许可证下发行，是一款内核强健、扩展方便、体验友好且运行流畅的博客程序，能帮助用户搭建独一无二个人网络日志发布平台，享受创作的快乐。

**主要功能**

- 支持多种数据库（MySQL, SQLite, PostgreSQL）
- 支持Markdown语法
- 支持插件
- 支持主题 
- 支持自定义字段 
- 支持自定义页面

**要求**

- PHP 7.2.0或更高版本
- 数据库（MySQL, SQLite, PostgreSQL）
  - MySQL 5.5.3或更高版本
  - SQLite 3.7.11或更高版本
  - PostgreSQL 9.1或更高版本

Typecho开源链接：https://github.com/typecho/typecho

Typecho文档：https://docs.typecho.org/doku.php



## 搭建流程概述

1. 注册域名
2. 域名备案（如果不使用内地服务器可以忽略）
3. 购买云服务器
4. 安装宝塔面板
5. 创建网站和上传网站源码
6. 配置网站

## 域名注册

**什么是域名？**

域名可以通俗地理解为互联网上的“门牌号码”或“地址”。每个网站在互联网上都有一个唯一的地址，这个地址就是域名。比如，人们常常访问的“baidu.com”，“taobao.com”等都是域名。它们由一串字符组成，通常包括字母、数字和连接符“-”，并由“.”分隔成几部分。域名的作用是让人们能够更容易地访问和记住网站，而不需要记住复杂的IP地址。同时，域名也具有一定的商业价值，可以作为企业或个人在互联网上的标识和品牌形象。

**注册域名**

由于目前雨云还没上线域名注册服务（已经在做了），所以还是建议先去[腾讯云](https://curl.qcloud.com/dVdrdEIT)或[阿里云](https://www.aliyun.com/minisite/goods?userCode=jdjc69nf)等平台注册域名，当然你也可以使用雨云的免费二级域名。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204150957769_f58ee674f30fcc4a59050763faad1c0b.png)

选择域名要选择可以备案的域名，可备案域名后缀列表：[http://www.xinnet.com/service/cjwt/idc/guanli/1589.html](http://www.xinnet.com/service/cjwt/idc/guanli/1589.html)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204151026426_5d5f1abae2e27419e6f82f288733cc04.png)

然后到域名控制台进行实名认证就行。如果你用的内地服务器那还需要进行域名备案。

备案的流程就不细说，自己去了解一下就行。

## 准备

**首先需要一台云服务器，要有公网IP的，推荐雨云的：**

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

雨云账号注册&云服务器购买和使用教程：https://www.bilibili.com/video/BV1Kj411x7G6/

注册完账号后进到雨云控制台，**云服务器**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204150911704_12c5ed5a7475315885fea6d19552e72e.png)

点击**购买云服务器**，接着选择服务器区域，国内用户建议选择内地机房，因为延迟低网络稳定，比如宿迁和十堰，其中推荐十堰，因为IP便宜，如果预算充足选择宿迁更好（防御高，BGP线路）。但如果你没有备案域名那建议选择香港或美国的服务器。

我域名已经备案了，所以可以选择内地的服务器，我这里选了湖北十堰的。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204151711005_18528617f3f1c0b6b99fea056522a9d0.png)

配置选择2核2G一般够用了，如果你网站用户多就选高点的配置，也可以后期升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204152344006_1a38f6e7bde51124fcc36337a31aab1c.png)

系统选择**Debian11**，预安装APP选择 **[服务器运维面板] 宝塔面板 最新版** ，你也可以不选预安装APP，后面教程有教怎么安装宝塔，选了预安装就会自动帮你装好，然后通过雨云控制台显示的面板地址和账号密码直接登陆就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224153331690_6979ce44128361a5f030b1c2ecd07554.png)

都选好后就可以点击立即购买了，也可以选择1元试用1天。

购买后即可在我的云服务器这里看到你买的云服务器，点击**管理**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224153515402_39de4b0a1bd1f738c75297929cf3d116.png)

接着就可以看到云服务器的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224153543684_cfd37cb4ea45cf33e7a0d8138c8bb08f.png)

等待服务器创建完成以及预安装APP安装完成。

## 安装宝塔面板 

**首先需要通过SSH客户端连接服务器**

下载安装并打开ssh客户端软件，ssh客户端软件推荐putty或mobaxterm，还有用win自带的终端或CMD也行。

如果用mobaxterm，在SSH客户端中输入你的服务器的IP地址（雨云控制台获取），还有SSH端口（一般默认是22），然后点击好的或者打开。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114230151729_35725a0d39fe81dec3a06f6df7556770.png)

然后输入账号并按回车，账号一般默认为**root**，接着输入密码并按回车确定，输入密码时不会显示出来。

温馨提示：在SSH终端中按住鼠标左键选择文字，然后松开鼠标，再在空白处单击一下，这样就把选中的文字复制了；在SSH终端单击右键即为粘贴。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114230247490_7a4601d09764193903a7dd65a83a7e3a.png)

我这里用windows的终端

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224155409873_982f2fecb7a7d46f6ce98ebd4d62bbe6.png)

**安装宝塔面板**

注册宝塔账号（下面登陆宝塔需要绑定宝塔账号）：[https://www.bt.cn/?invite_code=M191a2pjZnQ=](https://www.bt.cn/?invite_code=M191a2pjZnQ=)

在终端中输入以下命令安装宝塔面板：

```bash
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh ed8484bec
```

然后输入y再按回车确定

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224155553899_58888b9b4623f3201f12e76aaa43890a.png)

安装完成后记下登陆地址和账号密码

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224160001557_edc27367f4fca523d84968ba365c1c8f.png)

在浏览器地址栏输入登陆地址登陆进去。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224160111321_cfcad1d31dc83a2933ba5d5b8201b1b2.png)

安装LNMP套件，PHP版本选择7.4，其他默认即可，安装方式生产环境建议选择编译安装，但编译安装时间较长。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224160304648_a457ea7faece3d957ccba6369364d750.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224160324108_6f5515abefe19d5ef709ca565cc6461f.png)

然后等待安装完成即可进行下一步。

**我这里用AI生成了一段关于nginx、PHP和MySQL的作用解析，你们可以了解一下：**

网站服务器中的Nginx、PHP和MySQL各自扮演着不同的角色，下面简要解析它们的区别和作用：

1. Nginx：
   - 作用：Nginx是一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMTP代理服务器。它可以作为Web服务器，也可以用作反向代理、负载均衡器和HTTP缓存等。
   - 区别：与其他Web服务器（如Apache）相比，Nginx更注重性能和效率，采用事件驱动（异步）架构，能够处理高并发连接。此外，Nginx配置灵活，资源消耗低。
2. PHP：
   - 作用：PHP是一种创建动态交互性站点的强有力的服务器端脚本语言。它可以生成动态页面内容、处理表单数据、访问数据库等。PHP通常与Web服务器结合使用，通过特定的模块或FastCGI等方式与服务器通信。
   - 区别：PHP不同于HTML，它是一种脚本语言，可以嵌入到HTML中，并由服务器解释执行。这使得PHP能够动态生成网页内容，实现用户与网站的交互。
3. MySQL：
   - 作用：MySQL是一个关系型数据库管理系统，用于存储和管理网站的数据。它可以提供数据的持久化存储、查询、更新和删除等功能。MySQL支持多种存储引擎，可以根据需求选择不同的存储引擎以获得最佳性能。
   - 区别：MySQL与其他数据库系统（如Oracle、SQL Server等）相比，具有开源、免费、易于使用和管理的优势。此外，MySQL支持大量的并发连接，具有良好的稳定性和可靠性。

总结起来，Nginx主要负责处理Web请求和提供静态资源，PHP用于生成动态页面内容，而MySQL则负责存储和管理网站数据。这三者通常协同工作，为用户提供丰富的网站功能和良好的性能体验。

## 设置域名解析

到域名解析控制台，添加记录，主机记录自己输入一个名字，比如输入blogblog，访问网站的时候就是blogblog.zeruns.tech，输入@，访问网站就直接访问zeruns.tech，记录值输入自己服务器的IP。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224165149601_6d5c8b1dc5b3c8388fff57a968776f9d.png)

也可以使用雨云的免费二级域名。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204155328223_6053ffd70223f5709a0b0049c5dd4f26.png)

选择类型A，子域名自己输入一个喜欢的，主域名如果你用内地服务器就只能选那个备案域名。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204155516886_6e90bc7015972f6341d207f440a36b17.png)

创建后在下面可以看到，取消勾选CF代理。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204155827149_5893d9efe5a2323e803a2e5a837ab4cd.png)

## 创建网站

首先需要下载网站源码

Typecho官方下载地址：[https://typecho.org/download](https://typecho.org/download)

Typecho v1.2.1版本 雨云ROS下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/typecho_d222ab99241015257e06411f6cbf226d.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/typecho_d222ab99241015257e06411f6cbf226d.zip)

到宝塔面板添加一个站点，输入你自己的域名，数据库选择MySQL，数据库账号密码可以自己设置，但建议默认，PHP版本选7.4，然后点提交。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224170544953_a36cb20e56262d87cd2f06196dfd4308.png)

点击这里进到网站根目录。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224172000878_da84108a058c829018487353a983ecd9.png)

将刚刚下载的Typecho网站源码压缩包上传上去。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224172035529_a42ff0bf584dd0f15500fcb13f9d9a0f.png)

将上传的压缩包解压出来

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224172139685_e192076ff008c4cdb4b3779bc8fd8a0a.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224172202230_e9086fea5d9472a06097fc55e9f79119.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224173823307_f3adc5afc0afae3d77eb50246323fe28.png)

## 网站配置

### 网站安装

接着在浏览器地址栏输入你的域名打开，按照提示安装

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224173931803_ed67ed76406b20ddca0486107d774aba.png)

数据库适配器选择MySQL，然后输入数据库用户名、密码、库名等信息，这些可以在宝塔面板的数据库页面查询。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224174140480_14625ed3186d3c0cff74bb5dcca4eb74.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224174115296_c4036b387fb1603abc87608ae2074de2.png)

接着输入你要设置的管理员账号密码。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224174256309_32e348f5a7bdfd063ed6e49c586b00e8.png)

这样就安装完成了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224174344877_93f7b54cbbf0a4bc1761a1caa93a8358.png)

登陆后可以在这里进入博客后台。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224174505972_b8c39a0aff7db88d107a9c640e7c9747.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224174645168_4208431261de7715b9cf58c22c20806b.png)

### 更换模板/主题

在官方社区找一个喜欢的主题下载下来：[https://forum.typecho.org/viewforum.php?f=5](https://forum.typecho.org/viewforum.php?f=5)

我这里选择了MeaWord主题

MeaWord介绍地址：[https://forum.typecho.org/viewtopic.php?t=24996](https://forum.typecho.org/viewtopic.php?t=24996))

MeaWord下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/Typecho-Theme-MeaWord-main_13b41a6c52c61f49f74b4372bbe939cd.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/Typecho-Theme-MeaWord-main_13b41a6c52c61f49f74b4372bbe939cd.zip)

到宝塔面板的文件管理处，进入到网站的主题目录 `/www/wwwroot/你网站文件夹名/usr/themes` ，将下载的主题压缩包上传到这个目录，并将压缩包解压。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224175332362_1cf120e4b11076cd510b18f95dfc125c.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224192555725_b7510bc981747c32f92d4902307d9e56.png)

接着到博客后台，点击 **控制台→外观**，可以看到刚刚上传的主题已经显示在这里了，点击启用。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224192733576_39970c963a8a99a89d9afd0bcdf2de3c.png)

到博客首页看，主题已经成功被启用了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224192800037_cd07fc9fa8b02c5ace00f48ef16011e5.png)

### 安装插件

在官方社区选你喜欢的插件下载下来：[https://forum.typecho.org/viewforum.php?f=6](https://forum.typecho.org/viewforum.php?f=6)

我这里选择了TeStore：https://forum.typecho.org/viewtopic.php?t=11097

TeStore 雨云ROS下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/1226007143_4cfbb30391a6adc3b26176fddc1b2fbe.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/1226007143_4cfbb30391a6adc3b26176fddc1b2fbe.zip)

TeStore是一个非官方的插件仓库插件，安装了就可以在后台一键下载安装其他插件，你也可以单独下载其他插件安装。

到宝塔面板的文件管理处，进入到网站的插件目录 `/www/wwwroot/你网站文件夹名/usr/plugins` ，将下载的插件压缩包上传到这个目录，并将压缩包解压。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224193520592_07925a2167b805cf2ce6ce4fff58ac89.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224193540786_0c9c54813735780fa9313f7449190454.png)

接着到博客后台的 **控制台→插件**，可以看到刚刚上传的插件已经显示在这里了，点击启用。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224193635392_12582bc228c14b65ccc7ce3a42489b6c.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224194503358_057b0a7ed1c317b893e5223a2af1c568.png)

### 启用SSL/HTTPS

按下面图片操作申请SSL证书，也可以到雨云控制台申请SSL证书然后手动填进去。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224195145829_bf25f34b7e3d2a99b26a6ffedb8ec2f3.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224195244396_3769ccf5c97a2922a34aecd8593471d0.png)

部署好SSL证书后就可以通过HTTPS来访问网站了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231224195349902_344c3ff48ddd1fa8cf9b3c2942e852eb.png)

教程到此结束了，更多功能和细节请自己探索。

## 推荐阅读

- 雨云服务器快速搭建Cloudreve网盘网站并挂载雨云对象存储的教程：[https://forum.rainyun.com/t/topic/6201](https://forum.rainyun.com/t/topic/6201)
- PicGo+雨云ROS搭建自己的图床，可配合Typora使用：[https://forum.rainyun.com/t/topic/5659/](https://forum.rainyun.com/t/topic/5659/)
- 雨云游戏云MCSM面板服使用&我的世界Forge服务端开服教程：[https://forum.rainyun.com/t/topic/5727](https://forum.rainyun.com/t/topic/5727)
- 雨云VPS用Linux搭建我的世界Mohist服务器教程，MOD和插件服开服教程：[https://forum.rainyun.com/t/topic/6353](https://forum.rainyun.com/t/topic/6353)
- 雨云游戏云VPS搭建MCSM面板和我的世界Paper服务器教程：[https://forum.rainyun.com/t/topic/5836](https://forum.rainyun.com/t/topic/5836)
- 雨云服务器搭建内网穿透服务器教程，NPS搭建和使用教程：[https://forum.rainyun.com/t/topic/6008](https://forum.rainyun.com/t/topic/6008)

