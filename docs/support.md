---
title: 常见问题
description: 有问题先看这里
sidebar_position: 98
slug: support
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

这里整理了许多用户常见的问题，如果您在使用我们的产品时遇到困难，建议您首先在这里查找可能的解决方法。您可以方便地使用**搜索功能**`CTRL+F、Command+F`来寻找特定问题的解决方案。如果在此处**找不到**您遇到的问题，可以根据您的产品类型**进入相应的二级类目**并尝试找到解决方案。如果问题仍未解决，请发工单联系我们，我们将协助解决您的问题。

### 我的服务器访问不了宝塔面板 
请**不要随意升级**您的宝塔面板
访问宝塔面板的信息可以在您管理页面中获取，如果无法连接并且您是公网ip则可以尝试更换公网ip。
如果还未能访问，可以重新安装您的宝塔面板，或者使用修复脚本修复。
如果还不无法访问，请发工单联系我们。

### 宿迁地区服务器无法正常连接
可以先尝试更换IP，如果仍然无法访问，请发工单给我们。

### 系统重装后备份没了
重装会导致所有数据丢失，包括全部**备份文件**，且无法找回，所有设置还原为默认，请慎重操作。

### 我的主机不能访问PHPMyAdmin
访问phpmyadmin管理面板时，如果**没有附加独立IP**，请替换管理面板入口链接中的888端口为雨云面板配置信息中显示phpmyadmin的端口（
该链接可在宝塔内点击跳转数据库管理时获得），假如还是无法访问，请在宝塔软件商店内**升级phpmyadmin**到5.2版本并设置其php版本为7.4

### 服务器无法远程访问MYSQL
如果您的机器**没有公网**ip，可以在管理页面中NAT端口映射中添加3306端口，然后使用对外地址进行连接。<br/>
如果您的机器**拥有公网**ip,可以使用[itdog]测试服务器是否可以正常连通，如果无法连通，请检查防火墙规则是否有误，如果有误，请删除防火墙规则，然后重启服务器，等待几分钟后再次测试。<br/>

如果还是无法连接，先检查宝塔面板是否已经放行端口。
![图片](https://forum.rainyun.com/uploads/default/original/1X/c553c179223cf63d09ea5b9590568790ef83c0d2.png)
如果检查上述均正常，可以尝试检查mysql是否允许远程访问，设置远程连接方法如下：

#### 设置mysql允许远程访问

##### 控制台操作：
进入服务器控制台，输入以下命令：
```shell
mysql -u root -p
## 输入密码
## 看到mysql提示符后输入以下命令(mysql>)
## 输入以下命令
## 选择你要操作的数据库
use mysql;
## 给root账户授权（root默认只有本机访问的权限，要通过其他机器访问，必须授权）
GRANT ALL PRIVILEGES ON *.* TO'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION;
## 最后刷新数据库服务
flush privileges;
```

##### 宝塔面板操作：
1. 在宝塔面板找到你的数据库管理面板，找到你要远程访问的数据库选择权限管理=>选择所有人或（如果有独立IP可以选择指定IP访问）=>点击提交
![图片](https://forum.rainyun.com/uploads/default/original/1X/412fc25bb9d7b97a39c7af8f8ec343c25ae9fea6.png)
![图片](https://forum.rainyun.com/uploads/default/original/1X/54b048d96f1751281fbe9bb6b11bf182a80f85c1.png)
2. 找到你的用户名和密码
![图片](https://forum.rainyun.com/uploads/default/original/1X/930463302592042e7cf69d189c5ac8f168965490.png)

3. 打开你的数据库连接工具，输入你的数据库连接信息，点击连接.
4. 输入你的数据库地址、用户名、密码点击测试连接检查是否成功.
:::tip
如果您的服务器没有公网ip，则需要到管理页面获取MYSQL的对外地址以及端口，然后使用对外地址进行连接。
:::
![图片](https://forum.rainyun.com/uploads/default/original/1X/e2ec9ab905aef335abafc864187050d8c957c147.png)

### 无法远程连接Linux服务器
如果购买的是NAT服务器（没有独立IP）的话，先检查端口映射，内网端口需要为22。 然后，使用对外地址来远程服务器。<br/>
如果您的服务器拥有公网IP，您可以使用[itdog]测试一下ip是否可以Ping通，如果不通，可以尝试更换公网IP后稍等10-20分钟后重试。<br/>

如果还是无法连接，请发送工单联系我们。

### 我想升级我的服务器配置，会影响我的数据吗
不会，升级配置不会影响您的数据，但是会重启服务器，重启后您的服务器会变成新的配置。

### 我的服务器被封禁了，怎么办
如果您的服务器被封禁了，可以发工单联系我们，查看具体情况。

### 服务器页面访问不了，提示被拦截

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701161679_39678b258e8e8e96588650e2cc11dc67)

如果您使用**ip:端口**形式访问，需要更换为域名访问，请**绑定域名**后重试。<br/>
如果您使用的是域名访问，请按以下步骤检查：<br/>

1. 请检查域名是否已经**解析到服务器的ip**或指定cname地址
2. 如果已经解析，请检查该域名是否已经**绑定到服务器**。
3. 如果已经绑定，请检查该域名是否已经**备案**。
4. 如果已经备案，请检查该域名是否在雨云上添加为**白名单**。

如果上述均正常，可以发工单联系我们，我们为您检查修复。

### 备份能不能转移
备份均不能转移，请手动进行数据迁移。

### 主机创建超过 5 分钟，还是卡在创建中
可以发工单联系我们解决。

### 服务器买错了配置
我们的服务均支持7天无理由退款，您可以退款后重新购买。
详情可以查看我们的[退款政策](/docs/account/expense/refund)

### 主机续费后公网ip丢失
如果您的机器过期三天后仍然不续费，系统将自动释放公网IP,释放后无法找回。<br/>
如果您的机器过期三天内续费，公网IP将会保留。

### 为什么我访问我的页面提示不安全
提示不安全是因为您没有配置或正确配置SSL证书，您可以在宝塔面板中配置SSL证书，或者使用我们的免费SSL证书。

### 登录宝塔面板提示密码错误
访问宝塔请使用我们管理页面预留的信息尝试登录，如果仍然无法访问，可以**SSH连接**到服务器之后输入`BT`，按提示修改信息。

### 提示域名未绑定
1. 请检查域名是否已经**解析到服务器的ip**或指定cname地址
2. 如果已经解析，请检查该域名是否已经**绑定到服务器**。
3. 如果已经绑定，请检查该域名是否已经**备案**。
4. 如果已经备案，请检查该域名是否在雨云上添加为**白名单**。

如果上述均正常，可以发工单联系我们，我们为您检查修复。

### 香港独立IP地址查询为美国IP
因为香港IP是美国的广播IP，但实际上是香港

### 服务器支持25端口吗
目前仅湖北十堰支持，其他区域上层封锁且无法解封。

### 服务器支持SMTP吗
目前仅湖北十堰支持。


### 领取过产品积分后不能清空积分然后退订产品
领取产品积分或者超过退订时间已经明确提示用户是确认消费的行为，不再支持退订，因为系统已经确认这笔消费是有效消费，记录在日志和财务系统中，这是不可撤销的，而且如果有推荐人，在确认消费的时候已经将对应的返利给到用户。而且所有产品的退订操作都是要用户自行操作，不存在客服“帮忙退订”的情况，后台压根没这种功能。

### 可以更换IP吗
如果您是公网ip，可以直接在管理页面进行更换，**免费**更换。<br/>
更换之后您可以在这里查看ip是否已经改变，如果没有您可以在此尝试点击更换。<br/>
如果ip已经改变，可能需要等待十到二十分钟才能连接上<br/>

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701243981_a99390b999c13d435a63afb94dbe878b)

### 海外WINDOWS服务器无法访问google等网站
可能是因为Windows服务器的DNS默认被设置为114.114.114.114<br/>
右键任务栏右边，屏幕右下角的网络图标，打开网络与共享中心->更改适配器选项，找到以太网卡右键配置，IPv4配置，更改DNS服务器为8.8.8.8即可

### 硬盘扩容后，空间还是显示原来的大小

#### Windows

:::tip
如果是新加的硬盘需要右键硬盘然后点击联机

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709113353_145cc45eafba9a1f969135bcdf23de67.png)
:::

##### 扩容硬盘

进入**计算机管理**，磁盘管理，找到要扩展的分区，右键扩展卷，按提示完成操作即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/02/20240229102129_2a3d92054b6611a0a1f0654d764608ef.png)

##### 增加一个分区

如果需要新**增加一个分区**，可以右键未分配的空间，新建卷，按提示完成操作即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709111930_693df968c0ad4a9db02592d8fe9685c1.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709112428_91f9f447ab8048f3cd4fae9954229db4.png)

#### Linux
如果是Linux需要操作，因为各个系统不同，可以参考以下步骤：

##### 扩容硬盘
**使用 `fdisk -l `命令根据大小及其他信息查看要扩容的云盘**，本例子中要扩容的分区为/dev/sda 1

输入命令请确保命令正确，部分命令需要输入空格部分不需要


![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709114226_b0d9e5ddf3524ad1553054c827bad4a0.png)

<Tabs>
 <TabItem value="CentOS 7" label="CentOS 7" default>
SSH进入服务器后执行以下命令：

```shell
yum install cloud-utils-growpart gdisk xfsprogs e2fsprogs

growpart /dev/sda 1

resize2fs /dev/sda1
```

</TabItem>

 <TabItem value="centos 8 / rockyLinux 8 / rockyLinux 9" label="centos 8 / rockyLinux 8 / rockyLinux 9" default>
SSH进入服务器后执行以下命令：

```shell
yum install cloud-utils-growpart gdisk xfsprogs e2fsprogs

growpart /dev/sda 1

xfsprogs  /dev/sda1 或者 xfs_growfs /dev/sda1
```

</TabItem>

 <TabItem value="Ubuntu/Debian" label="Ubuntu/Debian" default>
SSH进入服务器后执行以下命令：

```shell
apt install cloud-guest-utils
apt install xfsprogs

growpart /dev/sda 1
resize2fs /dev/sda1
```

</TabItem>

</Tabs>

:::tip
运行growpart命令时，如果提示unexpected output in sfdisk --version [sfdisk，来自 util-linux x.x.x]

这是因为中文版操作系统使用了非en_US.UTF-8的字符编码类型，请在执行前运行下方命令
```
LANG=en_US.UTF-8
```

由于win硬盘格式ntfs，win的盘换系统到ubuntu后，可能会产生一定识别问题
:::

#### 新增硬盘并挂载

**使用 `fdisk -l `命令根据大小及其他信息查看要新增的云盘**，本例子中要新建的加的硬盘为 /dev/sdb

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709145058_5ffbab9e30555f143144d1c04f1fc699.png)

1. 输入命令`fdisk /dev/sdb`
2. 到这个页面后输入**N**，然后所有全部选项按回车默认即可
   ![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709145556_0441d3f0476eb0c215c517c5a4d428d4.png)
   3.回到上图界面后输入**W**

操作完成后输入`fdisk -l`即可看到新加的设备，

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240709150053_15bbbe3246ae3e9e0ed6bd27b6189a05.png)

然后输入`mkfs.xfs /dev/sdb1`格式化。

格式化之后就可以使用命令`mount 硬盘 挂载的路径`挂载硬盘到指定的路径

如需机器开机默认挂载可以修改**/etc/fstab**文件



### Windows系统无法远程链接
#### 如果您的主机有公网IP：
##### 方法1.检查防火墙规则
默认情况下，防火墙规则都是不用去动的。 有独立IP的话，所有端口（除了部分机房限制外）都是开放着的。
##### 方法2.测试能否PING通
使用[itdog]测试一下能不能PING通服务器，如果不能，请尝试更换IP。

#### 如果您的主机没有公网IP：
##### 方法1.检查NAT端口

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701156570_c5b0dc50b71d26e3faa8f6b88f903f4b)

如果购买的是NAT服务器（没有独立IP）的话，先检查端口映射，内网端口需要为3389。 然后，使用对外地址来远程服务器。
#####  方法2.检查防火墙规则
默认情况下，NAT服务器或者是有独立IP的服务器，防火墙规则都是不用去动的。 有独立IP的话，所有端口（除了部分机房限制外）都是开放着的。
无需新建任何防火墙规则,如果有新建的话，请把他删除(删除后，建议重启一下服务器，然后等几分钟)。
然后在[ITDOG][itdog]中的Tcping中测试一下能不能通。
NAT服务器：使用对外地址进行测试。
独立IP：使用独立IP:3389进行测试。
如果非红色，说明通了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701156661_46c0ee109c2c13b14f6e3c46a4e862d2)

##### 方法3.更换工具
系统自带的远程工具有时候会因为网络原因导致无法正常连接到服务器。

1. 可以更换成微软的远程工具 [Microsoft Remote Desktop][Microsoft Remote Desktop]来远程到服务器。
2. 使用服务器面板自带的**远程工具 VNC** 进来连接。

##### 最终方法
如果各种方法尝试均无效，可以发工单联系我们，我们会帮您解决。

### 免费机器什么时候补货
每晚八点。

### 会员等级超过100%
如果您等级目前是2级的话，有可能是您的账号尚未实名，需要实名后才可以升级。

### 原有服务器的时长转移到新服务器上
雨云支持这样的操作，可访问[迁移页面](https://app.rainyun.com/expense/other)后按以下步骤操作。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/img_1701851501_ae4e6c9544b126072901b6e0c0abb1ce)

:::caution
* 折算迁移产品剩余时长到目标产品，会根据各产品的续费价进行等价折算，如10元每月的产品剩余一个月折算到20元每月的产品，则意味着给目标产品+15天。<br/>
* 操作成功后，旧产品默认会保留3天供迁移数据用，之后将自动回收。（旧产品的数据不会直接传到新产品上）。<br/>
* 用户每月只能进行2次产品折算迁移操作。<br/>
:::

### VNC提示401 No Ticket，无法连接

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240105144844_d027cc12fb46980a31f9979916bdcdff.png)

#### 原因
因为浏览器禁止了第三方Cookie所致。

#### 解决方法
**Chrome**
访问：chrome设置`chrome://settings/cookies?search=cookie`(复制到地址栏打开)<br/>
点击**允许第三方cookie**

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240105145600_88da196eee188ce88bdbdd1ec7d46eb1.png)

或者按照序号点击。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240105151847_14ff565a18217f9f3b5942c72138735a.png)

### 宝塔访问缓慢，无法访问等问题
可以执行一下命令更新到最新版本后重试一下，如果仍然出现访问缓慢等问题可以在[宝塔论坛反馈](https://www.bt.cn/bbs/)。

```shell
curl https://download.bt.cn/install/update_panel.sh|bash
```

### 网络带宽是指M还是Mbps
如无特殊说明一般指Mbps，即兆比特每秒。

### 雨云是否支持搭建代理
不支持。

### 是否支持挖矿等操作
禁止。

### 积分商城兑换机器有货但提示库存不足
积分商城的商品数量还上架着有显示库存，但是仓库中其实已经卖完了，所以才会出现这种情况。

### Windows家庭版无法使用远程连接
因为Windows版本限制原因，可以使用[rdpwrap](https://github.com/stascorp/rdpwrap)启用远程连接服务.

### 机器支持长时间占用带宽吗
为了保证其他用户体验，目前在售所有机器均不支持长时间占用带宽。


[itdog]: https://www.itdog.cn/tcping
[Microsoft Remote Desktop]: https://apps.microsoft.com/detail/9WZDNCRFJ3PS?activetab=pivot%3Aoverviewtab&hl=en-us&gl=US
