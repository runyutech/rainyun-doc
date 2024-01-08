# 雨云服务器快速搭建Cloudreve网盘网站并挂载雨云对象存储

雨云服务器快速搭建Cloudreve网盘网站并挂载雨云对象存储的教程。本教程的Cloudreve安装就直接用雨云云服务器的预安装APP功能了，然后安装宝塔面板用于反代，如果不需要域名访问功能也可以直接IP+端口来访问。

## Cloudreve介绍

Cloudreve是一个开源的支持多家云存储驱动的公有云文件系统.


Cloudreve 可以让您快速搭建起公私兼备的网盘系统。Cloudreve 在底层支持不同的云存储平台，用户在实际使用时无须关心物理存储方式。你可以使用 Cloudreve 搭建个人用网盘、文件分享系统，亦或是针对大小团体的公有云系统。

### 特性

- 支持本机、从机、七牛、阿里云 OSS、腾讯云 COS、又拍云、OneDrive (包括世纪互联版)、S3 作为存储端
- 上传/下载 支持客户端直传，支持下载限速
- 可对接 Aria2 离线下载
- 在线 压缩/解压缩、多文件打包下载
- 覆盖全部存储策略的 WebDAV 协议支持
- 拖拽上传、目录上传、流式上传处理
- 文件拖拽管理
- 多用户、用户组
- 创建文件、目录的分享链接，可设定自动过期
- 视频、图像、音频、文本、Office 文档在线预览
- 自定义配色、黑暗模式、PWA 应用、全站单页应用
- All-In-One 打包，开箱即用
- ... ...

## 注册域名

如果你需要通过域名访问你的网盘就需要注册一个域名，如果不需要通过域名访问网盘，你可以直接通过你服务器IP和端口访问你搭建的网盘。

由于雨云现在没有域名注册服务，建议通过[腾讯云](https://curl.qcloud.com/dVdrdEIT)或[阿里云](https://www.aliyun.com/minisite/goods?userCode=jdjc69nf)等平台注册域名，你也可以使用雨云的免费二级域名。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204150957769_f58ee674f30fcc4a59050763faad1c0b.png)

选择域名要选择可以备案的域名，可备案域名后缀列表：[http://www.xinnet.com/service/cjwt/idc/guanli/1589.html](http://www.xinnet.com/service/cjwt/idc/guanli/1589.html)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204151026426_5d5f1abae2e27419e6f82f288733cc04.png)

然后到域名控制台进行实名认证就行。如果你用的内地服务器那还需要进行域名备案。

## 准备

**首先需要一台云服务器，要有公网IP的，推荐雨云的：**

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

雨云账号注册&云服务器购买和使用教程：https://www.bilibili.com/video/BV1Kj411x7G6/

注册完账号后进到雨云控制台，**云服务器**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204150911704_12c5ed5a7475315885fea6d19552e72e.png)

点击**购买云服务器**，接着选择服务器区域，国内用户建议选择内地机房，因为延迟低网络稳定，比如宿迁和十堰，其中推荐十堰，因为IP便宜，如果预算充足选择宿迁更好。但如果你没有备案域名那建议选择香港或美国的服务器，不需要域名访问也可以用国内服务器，可以直接通过IP访问。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204151711005_18528617f3f1c0b6b99fea056522a9d0.png)

配置选择2核2G一般够用了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204152344006_1a38f6e7bde51124fcc36337a31aab1c.png)

系统选择**Debian12**，预安装APP选择 **[网盘系统] Cloudreve。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204152450201_0d9564e02d9f09d296be755bb4d7db04.png)

都选好后就可以点击立即购买了，也可以选择1元试用1天。

购买后即可在我的云服务器这里看到你买的云服务器，点击**管理**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204152610940_05182d8e36467e7a8e45fce54f9afce4.png)

接着就可以看到云服务器的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/%E7%AE%A1%E7%90%86%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%20_%20%E9%9B%A8%E4%BA%91_4dc7709521a637103f7ae42f942013bf.png)

等待服务器创建完成以及预安装APP安装完成。

安装完成后会在下面这里的安装结果输出显示面板默认用户名和默认密码。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204152929341_f413d8861d5ef54264df2dc12a222f6f.png)

## 登陆Cloudreve

在浏览器地址栏输入 `http://[服务器IP]:5212` 来打开Cloudreve面板，然后输入默认账号密码看看能不能正常登陆。

比如我服务器IP是`111.173.106.196`，那面板地址是：`http://111.173.106.196:5212/`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204153250468_17b1d8536aa341246896f63b7ac253d3.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204153306099_75040c956552e0a383fc632c67bd1400.png)

## 安装宝塔面板

如果需要通过域名访问Cloudreve才需要执行下面这个步奏，宝塔面板是用来反代Cloudreve的。

下载安装并打开ssh客户端软件，ssh客户端软件推荐putty或mobaxterm。

我这里用mobaxterm，在SSH客户端中输入你的服务器的IP地址（雨云控制台获取），还有SSH端口（一般默认是22），然后点击好的或者打开。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114230151729_35725a0d39fe81dec3a06f6df7556770.png)

然后输入账号并按回车，账号一般默认为**root**，接着输入密码并按回车确定，输入密码时不会显示出来。

温馨提示：在SSH终端中按住鼠标左键选择文字，然后松开鼠标，再在空白处单击一下，这样就把选中的文字复制了；在SSH终端单击右键即为粘贴。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231114230247490_7a4601d09764193903a7dd65a83a7e3a.png)

注册宝塔账号（下面登陆宝塔需要绑定宝塔账号）：[https://www.bt.cn/?invite_code=M191a2pjZnQ=](https://www.bt.cn/?invite_code=M191a2pjZnQ=)

在终端中输入以下命令安装宝塔面板：

```bash
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh ed8484bec
```

然后输入y再按回车确定

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204154129381_e89d423148c001f6b622bac4e6867833.png)

安装完成后记下登陆地址和账号密码

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204154508317_77a6423574a179a2e9a4745e959c0104.png)

在浏览器地址栏输入登陆地址登陆进去，然后安装LNMP套件，不需要安装MySQL，取消勾选MySQL和PHPmyadmin，安装方式生产环境建议选择编译安装，但编译安装时间较长。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204154836559_e8b5e31f5afe385224691a2edf71e0cb.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204154932944_d6b67c7f8ad77c9808cd22d47686d561.png)

然后等待安装完成即可进行下一步。

## 设置域名解析

添加记录，主机记录自己输入一个名字，比如输入pan，访问网站的时候就是pan.zeruns.tech，输入@，访问网站就直接访问zeruns.tech，记录值输入自己服务器的IP。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204155245102_fe1386512bb1cdcb0b2a2297011fec0d.png)

我这里用雨云的免费二级域名。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204155328223_6053ffd70223f5709a0b0049c5dd4f26.png)

选择类型A，子域名自己输入一个喜欢的，主域名如果你用内地服务器就只能选那个备案域名。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204155516886_6e90bc7015972f6341d207f440a36b17.png)

创建后在下面可以看到，取消勾选CF代理。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204155827149_5893d9efe5a2323e803a2e5a837ab4cd.png)

## 设置反向代理

登陆宝塔面板，添加网站，域名输入你自己注册的域名。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204210758323_e32577652f393166fe05cc9670af67d6.png)

设置反代，目标URL输入`http://127.0.0.1:5212`，然后保存。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204210939527_1e5ce8672be2d425987ab8d6aafc54e8.png)

接着就可以通过域名访问Cloudreve了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204211153896_e72548d58e99257357e2b7ee788578ea.png)

## 创建对象存储存储桶

雨云对象存储介绍：[https://forum.rainyun.com/t/topic/6107](https://forum.rainyun.com/t/topic/6107)

回到雨云控制台，点击**云产品**，点击**对象存储右边的立即购买**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125210152616_4bbcb9654feb2df8efe037a4f0e833f9.png)

选择一个套餐并购买，目前雨云对象存储刚发布一周内活动价5折。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125211102510_4d5e721eb4e056facf263bab0064bd5f.png)

接着进到对象存储控制台，点击**创建存储桶**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125211357530_e27c2757abff4df7107e41052b62af40.png)

接着输入要创建的存储桶名称，选择刚刚购买的实例，点击创建。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125211530419_60997bd307b3f093a83c9d74e1cac15f.png)

点击存储桶右边的管理按钮，进入的存储桶的管理页面

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/image-20231125212408812_d989743e2ca8c70a2236dc34e6e8d00f.png)

点击**信息与监控**，这里的信息等会要用到，**开启公共访问**。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204211515422_c37b5c4875dd0a800d7ec933fd594b76.png)

## 挂载雨云对象存储ROS

点击右上角**头像**，点击**管理面板→存储策略→添加存储策略**。

选择**AWS S3**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204231956233_120d1a68b3a0b60b57a79490db6076c4.png)

参照下面图片填写，

- Bucket名称填你存储桶名称
- 空间类型选允许公共读取
- EndPoint填API端点链接，去掉链接后面的存储桶名称
- 存储桶区域默认就行

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204232308424_62676711bdb3c0f2ea066ba81b713463.png)

AccessKey和SecretKey填雨云对象存储控制台里的，存储策略名称自己定一个，填好直接下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204232142538_2dd63da6c78da567c0f5c2a061f30135.png)

上传路径设置默认就行，直接下一步，直连设置改成允许，然后一直下一步。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204232338495_402f9fdbdde7719f6e4fb70993a8da61.png)

最后点跳过就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204232410113_9f03df7b6c3cd87e5fb0032c57ff308b.png)

到用户组设置那将用户组的存储策略改成刚刚添加的存储策略。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204232612110_d5acb9d7baeac44d1dac5928fb7656b3.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204232638158_06f6b6eee101f37915eea62833b8cde7.png)

## 测试功能

回到首页点击右下角的上传按钮上传一个文件测试能不能成功上传。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204232726736_d1deaeb206201b89365ce4ee6917e09a.png)

可以看到文件已经成功上传到存储桶里了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204233021826_60415be059320104d877bae02d475ca6.png)

刚刚上传的PDF文件可以正常地在线打开。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/image-20231204232930554_9197e01a7f0b5e4216d7b34e34b9160f.png)

## 视频教程
<iframe class="iframe_video" src="//player.bilibili.com/player.html?aid=706941702&cid=1358303908&page=1&autoplay=false&muted=true&highQuality=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
