# 幻兽帕鲁PalWorld服务器搭建教程，1分钟开服，纯小白教程，无需基础

雨云面板服快速开幻兽帕鲁PalWorld服务器的教程，配置文件修改方法和配置项注释。

最近这游戏挺火，很多人想跟朋友联机，如果有专用服务器，就不需要房主一直开着电脑，稳定性也好得多。 

## 幻兽帕鲁简介

《幻兽帕鲁》是一款游戏作品。 它既有类似《宝可梦》的宠物，又有 FPS 战斗系统。在游戏中，玩家可以培养“帕鲁”，使其战斗、繁殖、耕种、制造，还可以出售帕鲁，甚至将其制作成食物。

在广阔的世界中收集神奇的生物“帕鲁”，派他们进行战斗、建造、做农活，工业生产等，这是一款支持多人游戏模式的全新开放世界生存制作游戏。

帕鲁可以进行战斗、繁殖、协助玩家做农活，也可以为玩家在工厂工作。玩家也可以将它们进行售卖，或肢解后食用。

## 准备

这篇教程以雨云面板服为基础，目前雨云面板服已支持幻兽帕鲁的一键开服了。

**雨云优惠注册地址：[https://www.rainyun.com/ryy_](https://www.rainyun.com/ryy_)**

**优惠码：ryy**

**使用优惠码注册后绑定微信可获得5折优惠券**

注册完账号后进到雨云控制台，**游戏云**入口可以在后台的 **总览** 和 **云产品** 部分找到：

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/10/20231018215356_eb70163662fb3d48b9b77554283393a3.png)

点击**购买游戏云**，选择**面板服**，选择游戏类型**幻兽帕鲁**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123030303116_c6bd1756f4e7c2dc8cbae636224c2e29.png)

接着**选择机型和配置**，面板服目前有14900KF、5900X、Gold 6146和E5 2666V3这4种配置，开幻兽帕鲁建议选择5900X、Gold 6146、14900KF这种高性能服务器，我这里用5900X演示，**配置建议选4核8G及以上**（幻兽帕鲁官方推荐服务器配置为4核16G，最低8G，最好32G以上，当然如果只是好友几个玩用不着这么高）。

计费模式如果是经常玩的建议选固定计费，不常玩的选动态计费即可。

选好后就可以**点右下角的购买**了，年付有7折优惠。可以1元试用1天。

**因为这游戏太火了服务器都卖完了，所以截图里都没货，这几天会陆续上架新机器了。**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123031021198_cb76aa5607199286432c89f37563f1ad.png)

购买后即可在我的游戏云这里看到你买的VPS，点击这个卡片或者**管理**键。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123031309668_50d92cdf893303a494aa241cc4c509f0.png)

接着就可以看到面板服的信息了，在这里重装/切换游戏，可以升级配置。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123031443288_8efa261750895c7a74af92c1729103d5.png)

## 开服

点击下图的面板地址，然后输入账号密码进入到面板

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123154223203_65c1627b1d194d3eb8ab6895e575c468.png)

进到面板后点击这个实例右边的管理，如果你买了多个面板服那就有多个实例，左边的实例名称就是你面板服的产品ID。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123154621286_e770667be403a12742dbd39050c442ef.png)

进到实例控制台就点击左边的开启实例

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123154741704_725c43f477bc4053082db129fdd2e7d7.png)

等待片刻，出现如下图所以信息就已经开好了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123154826312_3801006c20dc412c4ce28e9f9ff18183.png)

然后面板控制台右边这里的对外地址和端口就是你服务器地址了，我这里是`hm.rainplay.cn:31740`

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123154936003_f366a5736255ac7341cf864d0d9f77b4.png)

## 进入服务器

进入游戏，点击**加入多人游戏(专用服务器)**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123155119385_849093296426db060992a4ca8c087076.png)

在底下这里**输入你服务器地址和端口**，然后点击**联系**

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123155221509_0f269932c749720651fd5de4169e21e0.png)

然后就进到服务器了，可以开始游戏了，把地址发给别人就可以一起联机了

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123155343094_a44070bdbe480b295dc6e9e3817c8288.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123155552837_ab8d150160aeea22d954e674c847b911.png)

## 修改世界配置文件

点击实例控制台的文件管理

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123161410002_def9545967782dbde22c48b83c372a7d.png)

进入到 `pal/Pal/Saved/Config/LinuxServer/` 这个目录，点击第2页，可以看到 `PalWorldSettings.ini` 这个配置文件，点击编辑就可以修改它了，不过一般是空的，需要将默认配置文件里的内容复制进去。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123165422845_0528b7a185585799cf24b8dfc5813356.png)

进入到 `pal` 目录，可以看到有一个 `DefaultPalWorldSettings.ini` 文件，这个就是默认配置文件，点击编辑，复制里面的内容。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123170607742_1d10b01462e3925ae5d9862a9af0836d.png)

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123170633573_62c64f692e5587c6a9b81d8ebc629584.png)

回到 `pal/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` 文件，编辑，将上面复制的内容粘贴进去并保存。

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123170812345_00d27aba7368f190ca3f424e7674a785.png)

接着就可以修改里面的配置项了，看不懂英文可以按下面这个注释版修改。 修改完保存后重启实例就生效了。

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
    )
```

这里可以修改服务器最大人数和开启PVP

![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2024/01/image-20240123174013491_e2490ee2261bb7d4fef11b95002a3e3f.png)



## 推荐阅读

- 雨云服务器快速搭建Cloudreve网盘网站并挂载雨云对象存储的教程：[https://forum.rainyun.com/t/topic/6201](https://forum.rainyun.com/t/topic/6201)
- PicGo+雨云ROS搭建自己的图床，可配合Typora使用：[https://forum.rainyun.com/t/topic/5659/](https://forum.rainyun.com/t/topic/5659/)
- 雨云游戏云MCSM面板服使用&我的世界Forge服务端开服教程：[https://forum.rainyun.com/t/topic/5727](https://forum.rainyun.com/t/topic/5727)
- 雨云虚拟主机使用教程&WordPress博客网站搭建教程：[https://forum.rainyun.com/t/topic/5769](https://forum.rainyun.com/t/topic/5769)
- 我的世界(MC)整合包开服教程，Pokehaan Craft 2整合包服务器搭建教程：[https://forum.rainyun.com/t/topic/6707](https://forum.rainyun.com/t/topic/6707)
- 雨云服务器搭建内网穿透服务器教程，NPS搭建和使用教程：[https://forum.rainyun.com/t/topic/6008](https://forum.rainyun.com/t/topic/6008)