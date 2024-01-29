# 我的世界(MC)整合包开服教程，Pokehaan Craft 2整合包服务器搭建教程

**Minecraft整合包服务器搭建教程，宝可梦/神奇宝贝整合包（Pokehaan Craft 2）开服教程。**

其他整合包也可以参考此教程。要看这个整合包的游戏截图可以翻到文章最底下。

## 什么是整合包

Minecraft的整合包是一种包含了多个模组（mod）和配置文件（config）的游戏版本，可以让玩家体验不同的游戏风格和内容。整合包通常由社区的玩家或团队制作和发布，有些也是官方或合作方推出的。整合包的种类很多，有科技类、魔法类、冒险类、生存类等等，每种整合包都有自己的特色和玩法。

## Pokehaan Craft 2 介绍

Pokehaan Craft 2 (宝可梦工艺 2) (MC 1.16.5) - 由 Kehaan 制作

这个模组包以游戏宝可梦和手机游戏宝可梦 Go 为主题。这个模组包是 “Pokehaan Craft” 的续作。这个更新版本使用了更新的 Minecraft 版本。还有一个新的任务书，里面有很多挑战和任务。与第一个版本相比，那是 Crainer 和 SSundee 玩过的 “Pokemon Craft” 的更新版本。这个版本有一个带有奖励的任务书，还有很多生物群系可以探索。还有很多新的秘密等你发现。这个模组包使用了最新版本的 Pixelmon。你能抓住所有的宝可梦吗？并完成所有的任务吗？

和之前的模组包一样，这个模组包也有 Pokestops，它们可以给你蛋和其他的战利品。这些蛋每个月会改变它们的掉落物，有新一代的宝可梦可以孵化（需要下载新的内容更新才能获得每个月的新掉落物）

> 英文原文：
>
> Pokehaan Craft 2 (Pokéhaan Craft 2) (MC 1.16.5) - by Kehaan
>
> This modpack is centered around the game Pokemon and the mobilegame Pokemon Go. This modpack is a successor to "Pokehaan Craft". This updated version uses a much newer Minecraft version. There is also a new quest book with challenges and lots of quest. Compared to the first one, that was a updated version of "Pokemon Craft" that Crainer and SSundee played. This one have a quest book with rewards, and there is tons of biomes to explore. And many new secrets to discover. This pack is using the newest version of Pixelmon. Can you catch all the Pokémons? And complete all the quest?
>
> As with previous packs this modpack also features Pokestops, which gives you eggs and other loot. These eggs will change their drops every month, with a new generation of pokemons to hatch (New content update is required to be downloaded to get the new drops every month)

Pokehaan Craft 2整合包介绍和下载地址：[https://www.curseforge.com/minecraft/modpacks/pokehaan-craft-2](https://www.curseforge.com/minecraft/modpacks/pokehaan-craft-2)

这个整合包是英文的（不是全部英文，部分MOD支持中文的，游戏切换到中文后宝可梦信息和商店等都是中文的，NPC对话和任务书这些则还是英文），如果需要中文可以自己下载汉化包安装，搜一下就有。

## 准备

首先需要准备一个MC整合包（**要带有服务端的！**），可以在国内各个平台下载，也可以到curseforge下载。

curseforge：[https://www.curseforge.com/minecraft/search?page=1&pageSize=20&sortBy=total+downloads&class=modpacks](https://www.curseforge.com/minecraft/search?page=1&pageSize=20&sortBy=total+downloads&class=modpacks)

我这里选择Pokehaan Craft 2作为演示，首先需要下载并安装好整合包客户端，然后下载整合包的服务端。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240120170627466_7c308f30b00c90cac83a666c6c494aad.png)

使用PCL2启动器的Pokehaan Craft 2整合包客户端下载地址：[https://pan.baidu.com/s/1HP4gBgIGl3BeqzCqOzbo8Q?pwd=yzrd](https://pan.baidu.com/s/1HP4gBgIGl3BeqzCqOzbo8Q?pwd=yzrd)    提取码：yzrd

Pokehaan Craft 2服务端一键开服包百度网盘下载地址：[https://pan.baidu.com/s/1HM0MO78cxdCSUJmTQz1j_Q?pwd=rvnf](https://pan.baidu.com/s/1HM0MO78cxdCSUJmTQz1j_Q?pwd=rvnf)  提取码：rvnf

Pokehaan Craft 2服务端一键开服包 雨云[ROS](https://forum.rainyun.com/t/topic/5573)下载地址：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/PokehaanCraft2-1.4.2-ServerFiles-一键开服包.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/PokehaanCraft2-1.4.2-ServerFiles-一键开服包.zip)

这个一键开服包已经内置了win和Linux的JDK11了，可以直接运行`LaunchServer.bat`或`LaunchServer.sh`脚本文件就可以一键开服。上面的整合包客户端也是内置了JDK的，可以直接运行。

准备好服务端后接着需要一台云服务器/VPS来开服，这里建议用雨云的游戏云VPS：

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

注册完账号后进到雨云控制台，**游戏云**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231018215356_eb70163662fb3d48b9b77554283393a3.png)

点击**购买游戏云**，选择**VPS服务器**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106165906454_65d7d1886a614863b928436d06df2d62.png)

接着**选择机型和配置**，VPS服务器目前有14900KF、13900KF、Ryzen 7950X、5900X、Gold 6146和E5 2666V3这6种配置，开1.17以上的高版本服或者较大的MOD服建议选14900KF、5900X、7950X和13900KF，我这里用5900X演示，**配置建议4核8G以上（Windows自身占用内存较大）**，**系统选择Windows server 2019**，选好后就可以**点右下角的购买**了，年付有7折优惠。可以1元试用1天。

计费模式如果是经常玩的建议选固定计费，不常玩的选动态计费即可。公网IP选择NAT就行，可以开通15个端口，够MC服用了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106170158824_8a7a5ffae3652c811a6355b3920f27a5.png)

购买后即可在我的游戏云这里看到你买的VPS，点击这个卡片或者**管理**键。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106170229818_7d08293084d818af3ed92ffa7fc9789d.png)

接着就可以看到VPS的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106170308166_f808474a28024e789ae941112da40ffb.png)

## 连接服务器

在自己电脑上打开windows自带的远程桌面软件（RDP）

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106171755387_7402a777a8520fb05de84c72159472b4.png)

输入你服务器的远程连接地址和端口，点击显示选项。

**由于游戏云VPS全卖完没货了（过几天上架新机），所以我这里实际用的香港云服来演示。**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121162447531_27027b4d7cdf79d66f2a8dd2f72c7588.png)

用户名输入默认的Administrator，然后点击连接。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121162625838_6413d54afd459c0429d24691b7a7db9e.png)

接着输入密码并确定。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121162721391_ec231abc531dca3110a09db8e41d256e.png)

如果弹出这个框就直接点是

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106172205316_6c980b30e01c37eb30b86735b9f892ae.png)

然后就连接上服务器了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106172232496_af2b85906f42ade39f583caf20e909a8.png)

## 关闭防火墙

在服务器管理器这里点击 `工具`→`高级安全 Windows Defender 防火墙`。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106173156825_969005896b53c97f29b2533c84836fab.png)

点击`Windows Defender 防火墙属性`，将三个配置文件的防火墙状态改成关闭，然后点确定，雨云的win server2019系统是默认关闭的。

如果你会配置防火墙那可以只开放需要用到的端口会更安全一点。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106173335484_259d89879f5b2bd2bd1e57cfbbb2d6fa.png)

## 设置端口映射

如果你买的带独立公网IP的那可以忽略这一步。

点击NAT端口映射，新建规则，设置需要映射出去的内网端口，然后点创建映射规则，外网端口不用改，它会随机生成，如果创建提示外网端口被使用你就手动随便输入一个。

我的世界服务器需要用到的端口是：25565，需要把这个端口映射出去，记住映射后的公网端口，下面会用到。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121200656574_2e2e0a9bee1608791ac9bf4b4909fc06.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121200710365_f65ff7261394ba80005f01b89319074e.png)

## 安装JDK/Java

回到服务器远程桌面里，打开浏览器，下载JDK，可以复制下面的地址到浏览器里下载，选一个就行。

1.12.2及以下版本建议用Java8，1.16.5建议用Java11，1.17及以上建议用Java17。

我这里推荐Dragonwell，这是阿里编译的JDK，据说有优化。

Dragonwell11下载地址：[https://github.com/dragonwell-project/dragonwell11/releases](https://github.com/dragonwell-project/dragonwell11/releases)

Alibaba_Dragonwell_Extended_11.0.21.18.9_x64_windows版 雨云[ROS](https://forum.rainyun.com/t/topic/5573)下载地址（如果上面链接打不开可以直接使用此链接下载）：[https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/Alibaba_Dragonwell_Extended_11.0.21.18.9_x64_windows.zip](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/Alibaba_Dragonwell_Extended_11.0.21.18.9_x64_windows.zip)

Adoptium JDK下载地址：[https://mirrors.tuna.tsinghua.edu.cn/Adoptium/](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121171956961_244396a902df2b58c8b96826d6d3f369.png)

将压缩包里的目录解压出来，选一个地方放，我这里放在桌面

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121174247879_19653bf97cec67f4df48ca4485d99076.png)

打开控制面板→系统和安全→系统

![](C:\Users\67667\Desktop\资料\博客文章\我的世界(MC)整合包开服教程.assets\image-20240121181056293.png)

点击 高级系统设置→高级→环境变量，点击下面系统变量里的Path然后点击编辑。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121181354391_a5a1938920d7157de6700019ce48a510.png)

雨云的游戏云VPS的win系统预装了jdk8了，将环境变量中的`%JAVA_HOME%\bin`这条删掉，云服务器的WIN系统就没有。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106183327357_54fbf3da7a1c2ace2a41fcf9e056498b.png)

然后点新建，将你上面解压出来的JDK目录的bin目录的路径复制进去，接着点确定就行。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121181557239_0b7b334d97bd99ee06c969f3b01b5b35.png)

打开CMD，输入`java -version`，看看有没有安装成功，如果能显示版本号就说明安装成功了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121181633879_949bbbfa5b91600891c44106b189fc83.png)



## 搭建Minecraft服

首先需要在服务器里下载好你的整合包服务端，或者将你下载到自己电脑的服务端传到服务器上（可以通过FTP或者直接复制粘贴，RDP支持直接复制粘贴传文件，但可能速度较慢）。

Pokehaan Craft 2 的curseforge下载地址：[https://edge.forgecdn.net/files/5045/425/PokehaanCraft2-1.4.2-ServerFiles.zip](https://edge.forgecdn.net/files/5045/425/PokehaanCraft2-1.4.2-ServerFiles.zip)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121172949876_badbaf65c5f52f90f3d6a304d2196745.png)

将服务端整合包解压出来，放一个你喜欢的目录，我这里就放桌面了。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121181713673_b3b79fdefa9e0ca08c2d777ab2f20f98.png)

打开这个目录，可以看到有一个.bat后缀的脚本文件，用记事本打开它，可以看到一段写好的启动命令，java目录参数`javapath`写的`java`，因为我们设置好环境变量，可以直接用java命令，所以这样写就没问题了，如果没有设置环境变量的可以直接将java.exe文件的路径填进去也可以，然后最大内存这里设置了4G，这个可以改的。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121193209075_0c3c3c795ee828b13d6b23636b39ec82.png)

如果没有自带启动脚本的可以自己写一个，在这个目录里新建一个txt文本文件，打开这个文本文件，输入下面的启动命令，然后保存。

 ```bash
java -Xms128M -XX:MaxRAMPercentage=95.0 -Dfile.encoding=UTF-8 -Duser.country=CN -jar forge-1.16.5-36.2.39.jar --nogui
pause
 ```

解析一下上面的启动命令：

- `-jar` **表示运行jar程序，后面填要运行的jar文件名**；
- `forge-1.16.5-36.2.39.jar` 表示你要运行的jar文件；
- `-Dfile.encoding=UTF-8` 指定文件编码为UTF-8，可以避免中文乱码的问题；
- `-Duser.country=CN` 指定地区为和中国，部分插件或服务端会自动切换到中文并从国内镜像源下载资源（如果支持）；
- `-XX:MaxRAMPercentage=95.0` 指定了JVM可以使用系统可用内存的百分比，95.0就是限制可以用95%的内存；
- `-Xms128M`  是一个Java虚拟机（JVM）的启动参数，用于设置JVM的初始堆内存大小。
- `--nogui` 是一个Java虚拟机（JVM）的启动参数，用于关闭图形界面，只使用命令行模式运行服务端。这样可以节省一些内存和CPU资源，提高服务端的性能。

整合包目录里一般有两个jar文件，一个以Minecraft开头的，这个是官方原版服务端，如果你启动这个就运行不了MOD，一般启动另一个java文件，一般都是以forge、fabric、mohist、catserver、paper等等开头，这些是MOD/插件服的服务端。**将上面启动命令中的`forge-1.16.5-36.2.39.jar`改成你自己整合包里对应的服务端jar文件。**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121194043023_66d27a66fff40ae40c5d86565a9a78f1.png)

将改好的txt文件重命名为`run.bat`，然后双击打开这个脚本。如果有自带启动脚本的就直接双击打开自带的。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121194156421_4462169db6b816f1ad79bb10f3cf09e5.png)

如果出现如下图所示语句就需要修改eula.txt文件来同意EULA协议

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121194259220_97d3295e1dcce5d1fc8ad46e8f00fe12.png)

用记事本打开`eula.txt`文件，将`eula=false`改成`eula=true`，然后保存，再次双击运行启动脚本，等待服务端启动。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121194406857_d181092eac6fbd9026ec553bee20dab3.png)

如果出现`Done`就表示服务器开好了可以进服了，部分整合包可能还在加载MOD中，还需要再等一会才能进服。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121195112826_6ec2f8ef459683df0750b443e329c987.png)

如果要修改服务器配置（比如关闭正版验证、修改端口等），在服务端目录里找到`server.properties`文件，用记事本打开。

需要关闭正版验证就在这配置文件里找到`online-mode=true`，改成`online-mode=false`，修改后保存。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121200349609_a8d49c4a1068e7c1d31e3fbc6e6232b1.png)

修改完配置文件后需要重启服务端，建议在CMD窗口里输入`stop`命令来停止服务端（强制关闭有概率导致地图/存档损坏），然后再双击`run.bat`脚本来启动服务端。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121200424659_b33cb20c9b899786cba4f373433ec9e8.png)

到此服务器就开好了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121201127175_fbcac5e74cd67f2c2ccfaa092570ced2.png)

## 进入服务器

打开客户端，点击多人游戏，添加服务器，输入你上面将25565端口映射出去的公网地址和端口，比如我的是`154.3.0.8:28823`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121200842197_4bea208daa22add5a6242b0c36cabe96.png)

进入服务器

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121201213989_44fe9b03e8c3588604fd81e68be79452.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121201312157_e318d465b7ef2d8b06b4a9b7eb148436.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121201535777_08b04dbdf95075e0be25db59de5aebd5.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121201611698_1be7a251c17eb05ade7e28b94720a0cf.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240121201649544_8269b539f2eb2100e91e47264ae1ea64.png)

## 推荐阅读

- 雨云服务器快速搭建Cloudreve网盘网站并挂载雨云对象存储的教程：[https://forum.rainyun.com/t/topic/6201](https://forum.rainyun.com/t/topic/6201)
- PicGo+雨云ROS搭建自己的图床，可配合Typora使用：[https://forum.rainyun.com/t/topic/5659/](https://forum.rainyun.com/t/topic/5659/)
- 雨云游戏云MCSM面板服使用&我的世界Forge服务端开服教程：[https://forum.rainyun.com/t/topic/5727](https://forum.rainyun.com/t/topic/5727)
- 雨云虚拟主机使用教程&WordPress博客网站搭建教程：[https://forum.rainyun.com/t/topic/5769](https://forum.rainyun.com/t/topic/5769)
- 雨云游戏云VPS搭建MCSM面板和我的世界Paper服务器教程：[https://forum.rainyun.com/t/topic/5836](https://forum.rainyun.com/t/topic/5836)
- 雨云服务器搭建内网穿透服务器教程，NPS搭建和使用教程：[https://forum.rainyun.com/t/topic/6008](https://forum.rainyun.com/t/topic/6008)