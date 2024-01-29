## 雨云VPS搭建PalWorld服务器，幻兽帕鲁开服联机教程（Windows），0基础保姆级教程

雨云VPS用Windows系统搭建幻兽帕鲁私服，PalWorld开服联机教程，零基础保姆级教程，本教程使用一键脚本来搭建幻兽帕鲁服务端，并讲了如何配置游戏参数，如何更新服务端等。

最近这游戏挺火，很多人想跟朋友联机，如果有专用服务器，就不需要房主一直开着电脑，稳定性也好得多。

雨云面板服一键部署幻兽帕鲁服务器：[https://forum.rainyun.com/t/topic/6733](https://forum.rainyun.com/t/topic/6733)

## 幻兽帕鲁简介

幻兽帕鲁是Pocketpair开发的一款开放世界生存制作游戏，游戏于2024年1月18日发行抢先体验版本。

游戏结合了类似《精灵宝可梦》的宠物元素以及第一人称射击（FPS）战斗系统。

玩家在游戏中扮演赛博奴隶主的角色，需要收集并培养名为“帕鲁”的神秘生物。这些生物可以进行战斗、繁殖、耕种和制造等多种活动。

玩家可以通过不同的方式与帕鲁互动，如饲养、战斗和工作，从而体验游戏的多元化乐趣。

游戏特点包括：

- 丰富的游戏玩法：玩家可以操控帕鲁进行战斗、繁殖、耕种和制造。
- 开放世界环境：游戏提供了一个广阔的世界供玩家探索和冒险。
- 多人在线功能：支持多个玩家在线联机合作游玩，允许玩家邀请朋友一同体验。
- 个性化发展：随着角色的升级，玩家可以增加自己的属性和技能。
- 多样化设施和工具：游戏提供了多种建筑、武器和道具来帮助玩家更好地管理和战斗。

## 准备

首先需要一台云服务器，这里推荐雨云的游戏云VPS：

**雨云优惠注册地址：[https://www.rainyun.com/ryy_?s=zhihu](https://www.rainyun.com/ryy_?s=zhihu)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

注册完账号后进到雨云控制台，**游戏云**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231018215356_eb70163662fb3d48b9b77554283393a3.png)

点击**购买游戏云**，选择**VPS服务器**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106165906454_65d7d1886a614863b928436d06df2d62.png)

接着**选择机型和配置**，VPS服务器目前有14900KF、13900KF、Ryzen 7950X、5900X、Gold 6146和E5 2666V3这6种配置，选哪个都可以，幻兽帕鲁对CPU性能要求不高，**配置建议4核8G以上（幻兽帕鲁官方推荐服务器配置为4核16G，最低8G，最好32G以上，当然如果只是好友几个玩用不着这么高）**。

计费模式如果是经常玩的建议选固定计费，不常玩的选动态计费即可。

系统选择**Windows 2019**。

选好后就可以**点右下角的购买**了，年付有7折优惠。可以1元试用1天。

**因为这游戏太火了服务器都卖完了，所以截图里都没货，这几天会陆续上架新机器了。**

下面教程我都用香港的云服务器演示，操作流程跟游戏云的一样。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127164128897_6e204dc9ea4f19df3e6e7da661f29fc1.png)

购买后即可在我的游戏云这里看到你买的VPS，点击这个卡片或者**管理**键。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127170022734_75a4723c3c3bea1e839e6af1cac1d419.png)

接着就可以看到VPS的信息了，在这里重装/切换系统，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127170107267_e096bd4a9e5a07e0fc3724a453ed08b7.png)

## 连接服务器

在自己电脑上打开windows自带的远程桌面软件（RDP）

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106171755387_7402a777a8520fb05de84c72159472b4.png)

输入你服务器的远程连接地址和端口（一般远程桌面的默认端口是3389，因为我选的NAT模式，共用公网IP，所以3389端口被映射到39029），点击显示选项。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127170635007_b39de9a0d9084d902c168c45d83c3872.png)

用户名输入默认的Administrator，然后点击连接。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127170608759_23933123259eac405a6bc7608a046d59.png)

接着输入密码并确定。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127171216249_d2978d21366dcbd90e1e23aff2f40d56.png)

如果弹出这个框就直接点是

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127171235760_c40775d64372bf6827e4f4aa0e21135f.png)

然后就连接上服务器了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127171649518_dae3a99d76690d67d30f1c984f84a15c.png)

## 关闭防火墙

在服务器管理器这里点击 `工具`→`高级安全 Windows Defender 防火墙`。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106173156825_969005896b53c97f29b2533c84836fab.png)

点击`Windows Defender 防火墙属性`，将三个配置文件的防火墙状态改成关闭，然后点确定，雨云的win server2019系统是默认关闭的。

如果你会配置防火墙那可以只开放需要用到的端口会更安全一点。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240106173335484_259d89879f5b2bd2bd1e57cfbbb2d6fa.png)

## 设置端口映射

如果你买的带独立公网IP的那可以忽略这一步。

点击NAT端口映射，新建规则，设置需要映射出去的内网端口，然后点创建映射规则，外网端口不用改，它会随机生成，如果创建提示外网端口被使用你就手动随便输入一个。

幻兽帕鲁服务器需要用到的端口是：8211，需要把这个端口映射出去，记住映射后的公网端口，下面会用到。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127171922314_03a94eb42ba92c871302b4e9d94a9563.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127171941718_a0fd9865308aba00a4484d73be380839.png)

## 开服

### 前置知识：PowerShell

Windows的一键部署需要借助 PowerShell 来完成。PowerShell是一种任务自动化和配置管理框架，它提供了一个命令行Shell和脚本语言，用于管理和控制Windows操作系统和相关应用程序。那么要如何找到 PowerShell ？方法如下：

| **方法**           | **描述**                                                     |
| :----------------- | :----------------------------------------------------------- |
| 使用开始菜单       | 点击Windows开始按钮，然后在搜索框中输入"PowerShell"。你应该能够看到"Windows PowerShell"或"PowerShell"的搜索结果。点击该结果即可打开PowerShell。 |
| 使用运行对话框     | 按下Win + R键组合，打开运行对话框。在对话框中输入"powershell"，然后点击"确定"按钮即可打开PowerShell。 |
| 使用文件资源管理器 | 打开文件资源管理器（Windows资源管理器），导航到所需的目录，然后在地址栏中输入"powershell"并按下回车键。这将在当前目录中打开PowerShell。 |

右键单击左下角的开始菜单键，点击"Windows PowerShell"

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127172024341_dcb605477da162cf8444da0b863dd9c0.png)

### 操作步骤

这里有参考官方教程封装好的一键部署幻兽帕鲁服务端的脚本，并且上传到云端，您仅需要登录服务器，然后在 PowerShell 中运行如下命令，即可完成幻兽帕鲁的部署。

```powershell
iex (irm ' https://tc2.zeruns.tech/other/pal-server-install.ps1 ')
```

注意：如果您使用中国内地地域的服务器运行一键部署脚本，则有可能因为网络原因导致脚本运行失败，建议您多次重试或换个时间段再次部署。此处的原因主要是安装过程中需要请求Steam的服务器，网络状况不稳定。

这个脚本会将服务端安装到 `C:\Program Files\PalServer\steam\steamapps\common\PalServer\` 这个目录下，如需更改安装目录可以自己修改脚本。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127172829488_e70a51ede8e864663b2949795df5fb59.png)

出现下图所示`PalServer deploy success!`就成功了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174054456_30de6f77d9bea1e5930ea1f924c986a7.png)

这个脚本会自动创建一个任务在后台运行幻兽帕鲁的服务端，开机也会自动启动，如果需要重启服务端就直接重启服务器就行。

## 进入服务器

进入游戏，点击**加入多人游戏(专用服务器)**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174214769_f87b399958214260dd63b1a68315ade5.png)

在底下这里**输入你服务器地址和端口**，然后点击**联系**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174249458_006c396c6c399c2dd2412fa0ed3d1aa9.png)

然后就进到服务器了，可以开始游戏了，把地址发给别人就可以一起联机了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174342999_5ef3462c96c35c731bd4985b29b4e6fd.png)

由于演示用的香港服，所以延迟略高了一点，但也是能玩的。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174436686_922ed6d297061c94d6258dc7042ed512.png)

## 手动配置游戏参数（可选）

> 建议您通过本文的一键部署教程幻兽帕鲁。其他部署方式可能在配置文件的路径上会有不同。

### 复制幻兽帕鲁默认配置文件

Windows操作系统的默认配置文件存放在以下目录中：

```powershell
C:\Program Files\PalServer\steam\steamapps\common\PalServer\DefaultPalWorldSettings.ini
```

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174703410_67413eb6b3761a9d7460437a2450a0ed.png)

如您的幻兽帕鲁部署路径不为`C:\Program Files\PalServer`，推荐您直接使用文件名`DefaultPalWorldSettings.ini`，在Windows的文件夹内进行搜索。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174735555_1e460eab536731323d20735d265f7f68.png)

选中该文件，并将文件复制到`WindowsServer`文件夹中，路径如下：

```powershell
C:\Program Files\PalServer\steam\steamapps\common\PalServer\Pal\Saved\Config\WindowsServer
```

如果您无法在上述路径下找到`WindowsServer`文件夹，那么依然推荐您进行搜索。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174755913_cb07925c16ac969b7482dc0393a6c417.png)

复制该文件至WindowsServer目录下：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174835072_588ffc1b719455e86750a8e5932b905e.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127174930692_6135eae8dbd2e02a3a64dfa0c4e779ad.png)

粘贴完成之后，删除WindowsServer目录内原有的`PalWorldSettings.ini`文件，并将刚刚复制的文件名修改为`PalWorldSettings.ini`。

> 默认情况下，PalWorldSettings.ini文件是空的，手动配置的门槛很高，因此我们推荐在默认配置文件的基础上进行修改。

### 配置参数

用记事本打开`PalWorldSettings.ini`文件，参照下面的注释修改对应参数

```ini
; 这个配置文件是默认服务器设置的一个样例。 
; 对这个文件的修改不会影响服务器。 
; 要改变服务器设置，请修改 Pal/Saved/Config/LinuxServer/PalWorldSettings.ini 文件。 
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None, ; 难度，None 或 Difficulty 
    DayTimeSpeedRate=1.000000, ; 白天流逝速度倍率 
    NightTimeSpeedRate=1.000000, ; 夜晚流逝速度倍率 
    ExpRate=1.000000, ; 经验值倍率 
    PalCaptureRate=1.000000, ; 捕捉概率倍率 
    PalSpawnNumRate=1.000000, ; 帕鲁出现数量倍率 
    PalDamageRateAttack=1.000000, ; 帕鲁攻击伤害倍率 
    PalDamageRateDefense=1.000000, ; 帕鲁承受伤害倍率 
    PlayerDamageRateAttack=1.000000, ; 玩家攻击伤害倍率 
    PlayerDamageRateDefense=1.000000, ; 玩家承受伤害倍率 
    PlayerStomachDecreaceRate=1.000000, ; 玩家饱食度降低倍率 
    PlayerStaminaDecreaceRate=1.000000, ; 玩家耐力降低倍率 
    PlayerAutoHPRegeneRate=1.000000, ; 玩家生命值自然恢复倍率 
    PlayerAutoHpRegeneRateInSleep=1.000000, ; 玩家睡眠时生命恢复倍率 
    PalStomachDecreaceRate=1.000000, ; 帕鲁饱食度降低倍率 
    PalStaminaDecreaceRate=1.000000, ; 帕鲁耐力降低倍率 
    PalAutoHPRegeneRate=1.000000, ; 帕鲁生命值自然恢复倍率 
    PalAutoHpRegeneRateInSleep=1.000000, ; 帕鲁睡眠时生命恢复倍率 
    BuildObjectDamageRate=1.000000, ; 对建筑物伤害倍率 
    BuildObjectDeteriorationDamageRate=1.000000, ; 建筑物劣化速度倍率 
    CollectionDropRate=1.000000, ; 可采集物品掉落倍率 
    CollectionObjectHpRate=1.000000, ; 可采集物品生命值倍率 
    CollectionObjectRespawnSpeedRate=1.000000, ; 可采集物品生成速率 
    EnemyDropItemRate=1.000000, ; 敌方掉落物品倍率 
    DeathPenalty=All, ; 死亡惩罚，None 不掉落，Item 只掉物品不掉装备，ItemAndEquipment 掉物品和装备，All 全都掉 
    bEnablePlayerToPlayerDamage=False, ; 启用玩家对玩家伤害功能 
    bEnableFriendlyFire=False, ; 启用友军伤害功能 
    bEnableInvaderEnemy=True, ; 启用袭击事件功能 
    bActiveUNKO=False, ; 启用 UNKO 功能 
    bEnableAimAssistPad=True, ; 启用手柄瞄准辅助功能 
    bEnableAimAssistKeyboard=False, ; 启用键盘瞄准辅助功能 
    DropItemMaxNum=3000, ; 掉落物品最大数量 
    DropItemMaxNum_UNKO=100, ; 掉落物品最大数量_UNKO 
    BaseCampMaxNum=128, ; 大本营最大数量 
    BaseCampWorkerMaxNum=15, ; 大本营工人最大数量 
    DropItemAliveMaxHours=1.000000, ; 掉落物品存在最大时长（小时） 
    bAutoResetGuildNoOnlinePlayers=False, ; 自动重置没有在线玩家的公会 
    AutoResetGuildTimeNoOnlinePlayers=72.000000, ; 无在线玩家时自动重置公会的时间（小时） 
    GuildPlayerMaxNum=20, ; 公会玩家最大数量 
    PalEggDefaultHatchingTime=72.000000, ; 帕鲁蛋默认孵化时间（小时） 
    WorkSpeedRate=1.000000, ; 工作速度倍率 
    bIsMultiplay=False, ; 是否为多人游戏 
    bIsPvP=False, ; 是否为 PvP 游戏 
    bCanPickupOtherGuildDeathPenaltyDrop=False, ; 是否可以拾取其他公会的死亡掉落物 
    bEnableNonLoginPenalty=True, ; 是否启用不登录惩罚 
    bEnableFastTravel=True, ; 是否启用快速旅行 
    bIsStartLocationSelectByMap=True, ; 是否通过地图选择起始位置 
    bExistPlayerAfterLogout=False, ; 是否在登出后保留玩家 
    bEnableDefenseOtherGuildPlayer=False, ; 是否启用对其他公会玩家的防御 
    CoopPlayerMaxNum=4, ; 合作玩家最大数量 
    ServerPlayerMaxNum=32, ; 服务器玩家最大数量 
    ServerName="Default Palworld Server", ; 服务器名称 
    ServerDescription="", ; 服务器描述 
    AdminPassword="", ; 管理员密码 
    ServerPassword="", ; 服务器密码 
    PublicPort=8211 ; 公共端口 
    
```

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127175122890_bfc3a405b8adc3ef05b6c53ca0cbf976.png)

修改完成后保存文件，然后重启服务器，重启后就生效了。

## 管理员命令

如果要使用命令，需要设置管理员密码后并使用 `/AdminPassword 密码` 命令在聊天框获取管理权限。

|            命令格式             |               作用               |
|:---------------------------:|:------------------------------:|
| /shutdown 「S」 「messageText」 | 服务器**后关闭 将收到您的 MessageText 的通知 |
|           /DoExit           |            强制停止服务器             |
|  /Broadcast 「MessageText」   |         向服务器中的所有玩家发送消息         |
|    /KickPlayer 「SteamID」    |           将玩家从服务器上踢出           |
|    /BanPlayer 「SteamID」     |           将玩家从服务器上封禁           |
| /TeleportToPlayer 「SteamID」 |          传送到目标玩家的当前位置          |
|   /TeleportToMe 「SteamID」   |         目标玩家传送到您当前的位置          |
|        /ShowPlayers         |          显示所有已连接玩家的信息          |
|            /Info            |            显示服务器信息             |
|            /Save            |            保存服务器数据             |

## 内存优化（可选）

> 收到大量玩家反馈，开服后在进行一段时间的游戏后会出现内存不足的情况，这里为大家提供一些缓解内存不足的方案作参考： 1、配置虚拟内存 2、按条件重启服务器。

打开服务器的控制面板。可以通过开始菜单或在搜索框内运行命令"control"来打开控制面板。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/57ae3cc659bea91fdca6246e976d6b13_ab352128199f8b8b8858f50f71a90888_b953f4a0e155a778546c63de924a1b38.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/a460118afbbf16e59d62a52157a5a013_22e0a341ef91196fec5aa48acc42b5a5_b9340a731d785d3cee23c13d5633a87e.png)

在控制面板中，选择"系统和安全"，然后选择"系统"。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/bc9d072efff93e5e8226f210b7ce3717_7bcce26c4f13a14bb9cb221cef9f04f5_9760751785e02cf78c22c2e42721a1b2.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/dcedfcae07c6465452f2f5d4d861e808_98c907ed2de0ae898db89acb5505cfe9_d83ff2e3ef6e35bf802f2656d6130958.png)

在系统窗口中，找到并单击"高级系统设置"。

在系统属性窗口中，切换到"高级"选项卡，并在"性能"部分点击"设置"按钮。

在性能选项窗口中，切换到"高级"选项卡，并在"虚拟内存"部分点击"更改"按钮。

在虚拟内存窗口中，首先取消选中"自动管理所有驱动器的分页文件大小"的复选框。

然后，选择服务器上的一个驱动器，并选择"自定义大小"选项。

输入初始大小和最大大小的值。通常，初始大小应设置为物理内存的1.5倍，最大大小应设置为物理内存的3倍。例如，如果服务器有8GB的物理内存，可以将初始大小设置为12GB，最大大小设置为24GB。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127175438719_14183c356bcadc6a81d9c1820821630a.png)

## 为幻兽帕鲁服务器配置自动重启

> 由于游戏程序本身存在内存泄露的问题，因此在您进行一段时间的游戏后，也可以通过在服务器内重启游戏的方式来清理内存。

本小节将为您提供配置按照内存占用比例重启服务的脚本，您配置完成后，**当服务器内存占用比例超过 90% 时，将自动为您重启游戏**，以释放内存占用。

**注意：**

**1、您需要使用前文一键部署的方式部署幻兽帕鲁，才能使用以下自动重启的教程。**

**2、当您再次登录游戏之后，游戏会回档 10 秒左右的时间。**

在 Windows 的 PowerShell 运行如下命令，监控内存占用并在占用比例达到 90% 时自动重启：

```powershell
iex (irm '  https://tc2.zeruns.tech/other/auto_restart_on_high_memory.ps1  ')
```

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127175557433_69338cdc66fb99d9c03850f1604d30e5.png)

## 更新服务端

在 Windows 的 PowerShell 运行如下命令（仅适用于以前文一键部署方式安装的）

```powershell
iex (irm ' https://tc2.zeruns.tech/other/pal-server-update.ps1 ')
```

执行完后等待更新完成，然后重启服务器即可。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240127175629102_5a22df943daaae53f9413d3cd6527eee.png)

## 推荐阅读

- 雨云服务器快速搭建Cloudreve网盘网站并挂载雨云对象存储的教程：[https://forum.rainyun.com/t/topic/6201](https://forum.rainyun.com/t/topic/6201)
- PicGo+雨云ROS搭建自己的图床，可配合Typora使用：[https://forum.rainyun.com/t/topic/5659/](https://forum.rainyun.com/t/topic/5659/)
- 雨云游戏云MCSM面板服使用&我的世界Forge服务端开服教程：[https://forum.rainyun.com/t/topic/5727](https://forum.rainyun.com/t/topic/5727)
- 雨云虚拟主机使用教程&WordPress博客网站搭建教程：[https://forum.rainyun.com/t/topic/5769](https://forum.rainyun.com/t/topic/5769)
- 我的世界(MC)整合包开服教程，Pokehaan Craft 2整合包服务器搭建教程：[https://forum.rainyun.com/t/topic/6707](https://forum.rainyun.com/t/topic/6707)
- 雨云服务器搭建内网穿透服务器教程，NPS搭建和使用教程：[https://forum.rainyun.com/t/topic/6008](https://forum.rainyun.com/t/topic/6008)

