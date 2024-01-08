---
slug: rainyun-wordpress
title: 掌握雨云虚拟主机技巧，亲手打造炫酷WordPress博客网站！
authors: linyu
tags: [技术干货]
---

# 雨云虚拟主机搭建WordPress博客网站

雨云虚拟主机(RVH)使用教程与宝塔面板搭建WordPress博客网站的教程，本文会讲解用宝塔面板一键部署以及手动安装两种方式来搭建WordPress博客，选其中一种方式即可。

## WordPress

WordPress是使用PHP语言开发的博客平台，用户可以在支持PHP和MySQL数据库的服务器上架设属于自己的网站。全球约34%的网站都在用WordPress、小到兴趣博客、大到新闻网站，国外的学校里甚至都有WordPress相关的课程。在中国WordPress没有在国外那么火，但是依旧力压群雄，国内有不少网站都是用的WordPress，比如数字中国，爱范儿等。另外WordPress有着将近50000个扩展插件和5000个主题模板，使用WordPress甚至可以搭建一个社区或者商城。

## 准备工作

1.域名 （例如 `baidu.com` 就是一个域名，本篇教程就用[雨云](https://www.rainyun.com/ryy_)的免费二级域名）
2.网站服务器（用来存放网站程序、图片等，教程用的是[雨云](https://www.rainyun.com/ryy_)虚拟主机）
3.WordPress程序 （在[http://cn.wordpress.org](http://cn.wordpress.org/)下载，也可以用宝塔面板一键部署）

## 虚拟主机选购

首先需要购买一台虚拟主机用来搭建网站，这里推荐雨云的虚拟主机。

先注册个雨云账号

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券，消费后还可获得价值5元的积分返现**

注册完账号后进到雨云控制台，游戏云入口可以在后台的 **总览** 和 **云产品** 部分找到虚拟主机：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028164417518_d1dc6d54b991620ff3dccab813844e4a.png)

点击购买虚拟主机

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028165357838_e13c9d0ac22c8c0ab8f7680439d0477e.png)

接着选择面板类型，这里推荐选择宝塔面板和香港二区，然后点击立即购买



### 虚拟主机介绍

虚拟主机是用于快速搭建网站服务的轻量级主机

雨云虚拟主机，即**R**ain **V**irtual **H**ost，是一款专门用于开设网站的产品，具有安全、高性能、低价格、弹性扩展等的特点。

我们花了很多时间自研虚拟主机管理系统，使得您可以用一键式操作，利用雨云虚拟主机上传和制作您的网站，而不需要操心基础设施的事情，不用繁琐的环境部署，您只需要专注于您的网站本身。

就算在运维上，也有丰富的管理功能，诸如升级、备份、设置防火墙等，让您用地顺手，怡然自若。

市面上的虚拟主机通常使用的是分销系统，出了问题无法解决。雨云采用深入自研的方式，增加了很多市面上其他厂商没有的功能。

雨云所有虚拟主机产品，无论是EP还是宝塔主机，都支持如下特性：

**优势特性**

- 免费的备份功能，可以设置自动定时备份。
- 支持CC防火墙功能，可以抵御经常遇到的CC攻击。
- 支持DDoS防火墙，遇到攻击会全自动防御，并在结束后切换会直连。
- 支持随时升级到更高的套餐，在一分钟内就可以自动完成。

### 面板选择

#### 宝塔主机

即采用宝塔面板的主机。宝塔面板是国内非常流行的服务器运维面板，可以用非常简单的鼠标操作对服务器进行一键管理。对比EP主机，为独享的环境，即完全掌握主机的权限，数据库亦可以自己安装。支持多种语言编写的web网站，主要支持PHP+Mysql如Golang，Java，Python等。

建议所有用户选购宝塔主机，无论是新手还是老手都能很好地掌握。

宝塔主机有如下特点：

- 任意使用所有函数/完全ROOT权限
- 不限数量网站，不限数据库和域名
- 支持附加独立IP
- 支持SSH/SFTP/MYSQL远程访问
- 支持PHP/Java等各种环境和软件
- 独享完整功能宝塔面板、预装LNMP
- 支持自动备份系统

#### EP主机

全称为EasyPanel主机，EasyPanel是由国内Kangle公司开发的一套虚拟主机管理面板，其web服务器为自家开发的kangle，其性能优秀，bilibili曾经采用kangle作为B站的web服务器。EP主机支持使用PHP+Mysql建站的情况，不支持其他如Java开发的网站。

EP主机有如下特点：

- 单个EP主机限制5个域名绑定
- 支持单个数据库+php7环境
- 支持自动备份系统
- 操作方便,界面简洁

### 可用区域

以下介绍相对于国内访问，各区域的网络优势和特点。

您可以根据您的需求选择对应的区域。

#### 中国香港

离大陆最近的海外区域，延迟相对低，带宽较低。

免备案，采用BGP网络，三网直连，各种网络连接质量都较好。

选购指引：适用于对低延迟有要求的免备案小体量网站业务。

#### 美国洛杉矶1区

国际带宽非常大，延迟较高，适合大流量类型的免备案网站业务（如下载站等）。

选购指引：无域名备案、需要大带宽，经济实惠，建议选择本区域。

#### 中国宿迁

接入三网BGP网络，优化各种地区和运营商的访问，国内访问速度最快，同时配备上百GB的DDoS防御，从容应对各种访问。

位于国内江浙区域，无论速度、带宽、稳定性、防御都比较高，网络质量最好，使用这个区域主机作网站时，需要先对域名进行第三方（如阿里云）备案

选购指引：

已有备案域名、需要高防御，面向国内用户，稳定性要求高建议选择本区域。

#### 美国洛杉矶2区

各类网络条件良好，稳定性较高，是主流免备案网站使用的推荐区域，但目前仅在云服务器提供，尚未支持虚拟主机。

响应速度

- 宿迁>香港>洛杉矶2区>洛杉矶1区

带宽大小

- 洛杉矶1区>宿迁>洛杉矶2区>香港

防御能力

- 洛杉矶2区>宿迁>洛杉矶1区>香港

网络稳定性

- 宿迁>洛杉矶2区>香港>洛杉矶1区

#### 注意

所有区域流量不限，购买大陆（宿迁）主机用作有域名的网站时，

域名均需要先进行第三方（如阿里云）备案，其他海外主机则免备案。

此外，所有主机在使用期间可以进行套餐升级和续费！

## 管理虚拟主机

购买后需要等待系统自动创建，宝塔主机创建时间约在 **1分钟-5分钟** 左右，请耐心等待。

点击卡片进入控制面板

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028171424083_14362e5a3013753d3028284ac83f60ff.png)

点击**前往宝塔管理面板**，并输入弹窗所示的用户名和密码**登陆面板**。



![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028172318084_d18f437675c61205b8c58954b03bdcaa.png)

接着去[宝塔官网](https://www.bt.cn/?invite_code=M191a2pjZnQ=)注册一个账号（已有账号的不用再注册）：[https://www.bt.cn/?invite_code=M191a2pjZnQ=](https://www.bt.cn/?invite_code=M191a2pjZnQ=)

绑定你的宝塔账号。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028172806742_439d0accdb90289fd970c62999dba6a4.png)

## 注册域名

网站需要一个域名，目前雨云还没上线域名注册服务，建议去其他厂商注册域名。或者使用雨云的免费二级域名。

下面是雨云免费二级域名使用教程，到雨云控制台**总览**或**云产品**处找到**域名服务**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028173225995_bb50d9493944efba759b98717dc1c244.png)

类型选择CNAME，子域名自己输入一个（自己喜欢什么名字就什么，只要没被使用的都可以），主域名随便选一个，解析目标选择雨云产品，雨云产品ID选择刚刚购买的虚拟主机，选好后点击立即创建。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028173459091_dce298058c124cce73768905379889d2.png)

创建完成后会显示在这里

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028173853564_94ebaaf1e0804dcf61283293b7d64b3d.png)

## 绑定域名

回到虚拟主机控制台，在右侧的域名管理这里绑定你要使用的域名，我这里就使用上面创建的雨云免费二级域名

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028174223811_50f0464e45b8deec8284b9e93c791922.png)

**如果是其他域名提供商，需要在您的域名提供商处将您的域名CNAME记录解析到此处显示的地址(以新网为例)**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028182534582_dc8e7f9e7c2b5cbf0aef712a225fe7c3.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028182612985_9378cb07a23220dcd7edd3d48555bb42.png)

## 创建网站，搭建WordPress博客

### 一键部署

点击**软件商店→一键部署**，找到WordPress点击右边的一键部署

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028174558607_4e89a10426e7e124d38af9cfc0566e78.png)

接着输入您的域名，这里用雨云免费二级域名作为例子，其他按照默认的即可，点击提交

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028174937373_008fb7c74404cc0e172fea401df81790.png)

然后到下面的网站配置步奏继续。

### 手动安装

点击宝塔左侧的网站，然后添加站点，然后输入您的域名，这里用雨云免费二级域名作为例子，选择创建数据库，PHP版本选择PHP-74，其他按照默认的即可，点击提交

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028175838499_7856121cfc6e52abb856cc249bd204be.png)

前往 WordPress官网（[https://cn.wordpress.org/download/](https://cn.wordpress.org/download/)） 下载WordPress程序

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028180040051_06391685c357d0d346ac73a641076f50.png)

回到宝塔面板，点击目录进入文件管理

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028181829189_2347f9f3705c1cca40c83ac56bf79acd.png)

选择刚刚下载的zip文件，上传上去

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028181927832_33f2b5b86067cdaa497c72c7263a594f.png)

鼠标放到压缩包上，点击**解压**功能

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028182028195_aab916e8701dc45973c347527800f961.png)

按照默认的设置解压即可

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028182052020_a74f360d5175e256391e6dc440ee045b.png)

解压后发现文件被解压到wordpress目录内，进入目录，全选文件，点击剪切

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028182319956_3063992348b3a2de7648069e6643b1d8.png)

回到上一级目录，点击粘贴

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028182349238_cbe73b6e648d3a31d1871d56c93ce036.png)

现在可以删除wordpress目录了，至此，文件准备部分已经完工

## 网站配置

接着在浏览器地址栏输入你的域名打开，按照提示安装

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028182927552_d15283156d816005710587809e05bf12.png)

在宝塔面板点击左侧数据库，然后复制用户名和密码

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028183133538_40dc86d88758a9076978518e52a3003a.png)

在安装程序内输入，地址仍然使用 **localhost**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028183217654_eef87fb2ee1624140ced96ff82ecc6cb.png)

完成后输入您的个性化信息，点击安装

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028183347403_a7ee12563484d0b9de5c581ddaa858a9.png)

至此，您的博客已准备完毕。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/image-20231028183518479_f50bd5663d47811c11c24d2e8b5ee3dd.png)

你可以自己登陆后台设置主题和插件，WordPress拥有丰富的主题。
