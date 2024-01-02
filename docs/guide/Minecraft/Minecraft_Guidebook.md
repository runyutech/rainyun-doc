---
title: mc服务器部分配置说明
description: mc服务器部分配置说明
sidebar_position: 96
---

## JAVA服务器server.properties配置说明

| 属性                                | 类型               | 默认值                | 描述                                                                                                                                                                                                                                                                                                                                       |
|-----------------------------------|------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allow-flight                      | 布尔值              | false              | 允许玩家在安装添加飞行功能的mod前提下在生存模式下飞行。 允许飞行可能会使恶意破坏者更加常见，因为此设定会使他们更容易达成目的。在创造模式下无作用。  <br/>false - 不允许飞行。悬空超过5秒的玩家会被踢出服务器。 <br/>true - 允许飞行。玩家得以使用任何能飞行的mod飞行。                                                                                                                                                                                    |
| allow-nether                      | 布尔值              | true               | 允许玩家进入下界。 <br/>false - 下界传送门不会生效。 <br/>true - 玩家可以通过下界传送门前往下界。                                                                                                                                                                                                                                                                           |
| broadcast-console-to-ops          | 布尔值              | true               | 向所有在线OP发送所执行命令的输出。                                                                                                                                                                                                                                                                                                                       |
| broadcast-rcon-to-ops             | 布尔值              | true               | 向所有在线OP发送通过RCON执行的命令的输出。                                                                                                                                                                                                                                                                                                                 |
| difficulty                        | 字符串              | easy               | 定义服务器的游戏难度（例如生物对玩家造成的伤害，饥饿和中毒对玩家的影响方式等）。 如果设置了旧的数字ID，则会自动转化为英文的难度名称。  peaceful (0) - 和平 easy (1) - 简单 normal (2) - 普通 hard (3) - 困难                                                                                                                                                                                                      |
| enable-command-block              | 布尔值              | false              | 是否启用命令方块。                                                                                                                                                                                                                                                                                                                                |
| enable-jmx-monitoring             | 布尔值              | false              | 暴露一个具有对象名net.minecraft.server:type=Server的MBean和两个属性averageTickTime和tickTimes用于暴露以毫秒为单位的tick时间。 为了启用JRE的JMX，你需要添加在此处所述的一些JVM标志。                                                                                                                                                                                                          |
| enable-query                      | 布尔值              | false              | 允许使用GameSpy4协议的服务器监听器。用于获取服务器信息。                                                                                                                                                                                                                                                                                                         |
| enable-rcon                       | 布尔值              | false              | 是否允许远程访问服务器控制台。 由于RCON协议传输数据时没有加密，所以不建议把RCON暴露在互联网上。RCON客户端和服务端交换的所有数据（包括RCON密码）都会泄露给正在监听此连接的人。                                                                                                                                                                                                                                          |
| enable-status                     | 布尔值              | true               | 使服务器在服务器列表中看起来是“在线”的。                                                                                                                                                                                                                                                                                                                    |
| enforce-secure-profile            | 布尔值              | true               | 要求玩家必须具有Mojang签名的公钥才能进入服务器。 <br/>true - 不具有Mojang签名的公钥的玩家不能进入服务器。 <br/>false - 不具有Mojang签名的公钥的玩家也可进入服务器。                                                                                                                                                                                                                                 |
| enforce-whitelist                 | 布尔值              | false              | 在服务器上强制执行白名单。 当启用后，不在白名单（前提是启用）中的用户将在服务器重新加载白名单文件后从服务器踢出。  <br/>true - 不在白名单上的用户会被踢出。 <br/>false - 不在白名单上的在线用户不会被踢出。                                                                                                                                                                                                                     |
| entity-broadcast-range-percentage | 整数（10-1000）      | 100                | 此选项控制实体需要距离玩家有多近才会将数据包发送给客户端。更高的数值意味着实体可以在更远的地方就被渲染，同时也可能提高增加延迟的概率。 这个值是以默认值的百分比来表示的。例如：将此值设为50，表示将渲染正常情况下一半距离以内的生物。 此功能模仿了客户端视频设置中的功能，而不像客户端的渲染距离设置一样只能在服务器设置的限制下调整渲染距离。                                                                                                                                                                |
| force-gamemode                    | 布尔值              | false              | 强制玩家加入时为默认游戏模式。 <br/>false - 玩家将以退出前的游戏模式加入 <br/>true - 玩家总是以默认游戏模式加入                                                                                                                                                                                                                                                                    |
| function-permission-level         | 整数（1-4）          | 2                  | 设定函数的默认权限等级。 4个等级的详情见 #op-permission-level。                                                                                                                                                                                                                                                                                              |
| gamemode                          | 字符串              | survival           | 定义默认游戏模式。 如果值是旧用的数字，会静默转换为对应游戏模式的英文名称。  survival (0) - 生存模式 creative (1) - 创造模式 adventure (2) - 冒险模式 spectator (3) - 旁观模式                                                                                                                                                                                                                |
| generate-structures               | 布尔值              | true               | 定义是否能生成结构（例如村庄）。 <br/>false - 新生成的区块中将不包含结构。 <br/>true - 新生成的区块中将包含结构。 注：由于地牢和沙漠水井在技术上属于地物，因而即使此项设为false，其仍然会生成。                                                                                                                                                                                                                         |
| generator-settings                | 字符串              | {}                 | 本属性质用于自定义世界的生成。详见超平坦世界和自定义了解正确的设定及例子。                                                                                                                                                                                                                                                                                                    |
| hardcore                          | 布尔值              | false              | 如果设为 true，服务器难度的设置会被忽略并且设为hard（困难），玩家在死后会自动切换至旁观模式。                                                                                                                                                                                                                                                                                      |
| hide-online-players               | 布尔值              | false              | 如果设为 true，服务端在响应客户端状态请求时不会返回在线玩家列表。                                                                                                                                                                                                                                                                                                      |
| initial-disabled-packs            | 字符串              | 空白                 | 需要在创建世界过程中禁用的数据包名称，以逗号分隔。                                                                                                                                                                                                                                                                                                                |
| initial-enabled-packs             | 字符串              | vanilla            | 需要在创建世界过程中启用的数据包名称，以逗号分隔。特别地，功能数据包必须在此指定才能生效。                                                                                                                                                                                                                                                                                            |
| level-name                        | 字符串              | world              | “level-name”的值将作为世界名称及其文件夹名。你也可以把你已生成的世界存档复制过来，然后让这个值与那个文件夹的名字保持一致，服务器就可以载入该存档。 部分字符，例如 ' （单引号）可能需要在前面加反斜杠号 \ 才能被正常应用。                                                                                                                                                                                                                   |
| level-seed                        | 字符串              | 空白                 | 与单人游戏类似，为你的世界定义一个种子。 这里有一些例子：minecraft，404，1a2b3c。                                                                                                                                                                                                                                                                                       |
| level-type                        | 字符串              | minecraft:normal   | 使用世界预设ID，确定地图所生成的类型。 使用世界预设ID时，需要在其中的“:”前加“\”转义。原版世界预设ID可以省略其前面的“minecraft:”（即命名空间）。  minecraft:normal - 带有丘陵、河谷、海洋等的标准的世界。 minecraft:flat - 一个没有特性的平坦世界，可用generator-settings修改。 minecraft:large_biomes - 如同默认的世界，但所有生物群系都更大。 minecraft:amplified - 如同默认的世界，但世界生成高度提高。 minecraft:single_biome_surface - 单一生物群系世界，可用generator-settings修改。 |
| log-ips                           | 布尔值              | true               | 是否在有新玩家加入游戏时，在服务器日志中记录其IP地址。 <br/>true - 在日志中记录新加入玩家的IP地址。 <br/>false - 在日志中隐藏新加入玩家的IP地址。                                                                                                                                                                                                                                                |
| max-build-height                  | 整数               | 256                | 玩家在游戏中能够建造的最大高度。可能会在该值较小时生成超过该值的地形。                                                                                                                                                                                                                                                                                                      |
| max-chained-neighbor-updates      | 整数               | 1000000            | 限制连锁NC更新的数量，超过此数量的连锁NC更新会被跳过。若为负数则无限制。                                                                                                                                                                                                                                                                                                   |
| max-players                       | 整数（0-2147483647） | 20                 | 服务器同时能容纳的最大玩家数量。请注意，在线玩家越多，对服务器造成的负担也就越大。同样注意，服务器的OP具有在人满的情况下强行进入服务器的能力：找到在服务器根目录下叫ops.json的文件并打开，将需要此能力的OP下的bypassesPlayerLimit选项设置为true即可（默认值为false），这意味着OP将不需要在服务器人满时等待有玩家离开后再加入。过大的数值会使客户端显示的玩家列表崩坏。                                                                                                                                 |
| max-tick-time                     | 整数（0–(2^63 - 1)） | 60000              | 设置每个tick花费的最大毫秒数。超过该毫秒数时，服务器watchdog插件将停止服务器程序并附带上信息：服务器的一个tick花费了60.00秒（最长也应该只有0.05秒）；判定服务器已崩溃，它将被强制关闭。遇到这种情况的时候，它会调用 System.exit(1)。 译者注：如果你监测服务程序的返回代码，此时返回代码会为1。（习惯上，程序正常退出应当返回0）  -1 - 完全停用watchdog插件（这个停用选项在14w32a快照中添加）                                                                                                           |
| max-world-size                    | 整数（1-29999984）   | 29999984           | 设置可让世界边界获得的最大半径值，单位为方块。通过成功执行的命令能把世界边界设置得更大，但不会超过这里设置的最大方块限制。如果设置的max-world-size超过默认值的大小，那将不会起任何效果。 例如：  设置 max-world-size为1000将会有2000×2000的地图边界。 设置 max-world-size为4000将会有8000×8000的地图边界。                                                                                                                                               |
| motd                              | 字符串              | A Minecraft Server | 本属性值是玩家客户端的多人游戏服务器列表中显示的服务器信息，显示于名称下方。 MOTD 支持样式代码。 MOTD 支持特殊符号，比如"♥"。然而，这些符号需要转换为Unicode转义字符。你可以在这里找到一个转换器。 如果MOTD超过59个字符，服务器列表很可能会返回“通讯错误”。                                                                                                                                                                                            |
| network-compression-threshold     | 整数               | 256                | 默认会允许n-1字节的数据包正常发送, 如果数据包为n字节或更大时会进行压缩。所以，更低的数值会使得更多的数据包被压缩，但是如果被压缩的数据包字节太小将反而使压缩后字节更大。 -1&nbsp;- 完全禁用数据包压缩 0&nbsp;- 压缩全部数据包 注：以太网规范要求把小于64字节的数据包填充为64字节。因此，设置一个低于64的值可能没有什么好处。也不推荐让设置的值超过MTU（通常为1500字节）。                                                                                                                                |
| online-mode                       | 布尔值              | true               | 是否让服务器对比Minecraft账户数据库验证登录信息。只有在你的服务器并未与Internet连接时，才将这个值设为false。如果设为false，黑客就能够使用任意假账户连接服务器！如果minecraft.net服务器宕机或不可访问，那么该值设为true的服务器会因为无法验证玩家身份而拒绝所有玩家加入。通常，这个值设为true的服务器被称为“正版服务器”。故意设定该变量为false的服务器称为“破解服务器”（也称离线服务器），这类服务器允许拥有未授权的Minecraft副本的玩家加入。 <br/>true - 启用。服务器会认为自己具有Internet连接，并检查每一位连入的玩家。 <br/>false - 禁用。服务器不会尝试检查玩家。    |
| op-permission-level               | 整数（1-4）          | 4                  | 设定使用/op命令时OP的权限等级。所有存档会从之前的存档继承能力和命令。 1 - OP可以绕过重生点保护。 2 - OP可以使用所有单人游戏作弊命令（除了/publish，因为不能在服务器上使用；/debug也是）并使用命令方块。命令方块和领域服服主/管理员有此等级权限。 3 - OP可以使用大多数多人游戏中独有的命令，包括 /debug，以及管理玩家的命令（/ban，/op等等）。 4 - OP可以使用所有命令，包括 /stop, /save-all, /save-on 和 /save-off。                                                                             |
| player-idle-timeout               | 整数               | 0                  | 如果不为0，服务器将在玩家的空闲时间达到设置的时间（单位为分钟）时将玩家踢出服务器 注：当服务器接受到下列数据包之一时将会重置空闲时间： 点击窗口 附魔物品 更新告示牌 玩家挖掘方块 玩家放置方块 更换拿着的物品 动画（挥动手臂） 实体动作 客户端状态 聊天信息 使用实体                                                                                                                                                                                                 |
| prevent-proxy-connections         | 布尔值              | false              | 如果服务器发送的ISP/AS和Mojang的验证服务器的不一样，玩家将会被踢出。 <br/>true - 启用。服务器将会禁止玩家使用虚拟专用网络或代理。 <br/>false - 禁用。服务器将不会禁止玩家使用虚拟专用网络或代理。                                                                                                                                                                                                                     |
| pvp                               | 布尔值              | true               | 是否允许PvP。也只有在允许PvP时玩家自己的箭才会受到伤害。 <br/>true - 玩家可以互相伤害。 <br/>false - 玩家无法互相造成伤害（也称作玩家对战环境（PvE））。 注：由玩家造成的间接伤害（例如熔岩，火，TNT等，某种程度上还有水，沙子和沙砾）还是会伤害其他玩家。                                                                                                                                                                                        |
| query.port                        | 整数（1-65534）      | 25565              | 设置监听服务器的端口号（参见 enable-query）。                                                                                                                                                                                                                                                                                                            |
| rate-limit                        | 整数               | 0                  | 设置玩家被踢出服务器前，可以发送的数据包数量。 设置为0表示关闭此功能。                                                                                                                                                                                                                                                                                                     |
| rcon.password                     | 字符串              | 空白                 | 设置RCON远程访问的密码（参见enable-rcon）。RCON：能允许其他应用程序通过互联网与Minecraft服务器连接并交互的远程控制台协议。                                                                                                                                                                                                                                                              |
| rcon.port                         | 整数（1-65534)      | 25575              | 设置RCON远程访问的端口号。                                                                                                                                                                                                                                                                                                                          |
| require-resource-pack             | 布尔值              | false              | 当此选项启用（设为true）时，玩家会被提示作出选择（是否启用服务器资源包）。如果玩家拒绝则会被服务器断开连接。 但是，若玩家使用Linux系统加入服务器，游戏目录内的server-resource-packs没有写权限，则会提示“无法应用服务器资源包”“所有依赖自定义资源包的功能都有可能不按预期工作”，并提示玩家“继续”或“断开连接”。若玩家选择“继续”，则仍可在此服务器中游戏。                                                                                                                                         |
| resource-pack                     | 字符串              | 空白                 | 可选选项，可输入指向一个资源包的URI。玩家可选择是否使用该资源包。 注意若该值含":"和"="字符，需要在其前加上反斜线(\)，例如 http\://somedomain.com/somepack.zip?someparam\=somevalue 资源包大小理应不能超过  50 MiB（1.15-pre5前） 100 MiB（1.15-pre5到1.18-pre8） 250 MiB（1.18-rc1起） 注意，下载成功或失败由客户端记录，而非服务器。                                                                                                     |
| resource-pack-prompt              | 字符串              | 空白                 | 可选，用于在使用require-resource-pack时在资源包提示界面显示自定义信息。 与聊天组件语法一致，可以包含多行文本。                                                                                                                                                                                                                                                                       |
| resource-pack-sha1                | 字符串              | 空白                 | 资源包的SHA-1值，必须为小写十六进制，建议填写它。这还没有用于验证资源包的完整性，但是它提高了资源包缓存的有效性和可靠性。                                                                                                                                                                                                                                                                          |
| server-ip                         | 字符串              | 空白                 | 将服务器与一个特定IP绑定。强烈建议留空该属性值！ 留空，或是填入你想让服务器绑定（监听）的IP。                                                                                                                                                                                                                                                                                        |
| server-port                       | 整数（1-65534）      | 25565              | 改变服务器（监听的）端口号。如果服务器在使用NAT的网络中运行，该端口必须被转发（在你有家用路由器/防火墙的前提下）。                                                                                                                                                                                                                                                                              |
| simulation-distance               | 整数（3-32）         | 10                 | 设置服务端可更新实体范围的最大值，即玩家各个方向上的区块数量（是以玩家为中心的半径，不是直径）。超出此范围的实体不会被更新，对玩家也不可见。 默认/推荐设置为10，如果有严重卡顿的话，减少该数值。                                                                                                                                                                                                                                       |
| spawn-animals                     | 布尔值              | true               | 决定动物是否可以生成。 <br/>true - 动物可以正常生成。 <br/>false - 动物生成后会立即消失。 提示：如果你有严重的卡顿，可以设为false。                                                                                                                                                                                                                                                       |
| spawn-monsters                    | 布尔值              | true               | 决定攻击型生物（怪物）是否可以生成。 <br/>true - 启用。怪物会生成于夜晚和黑暗处。 <br/>false - 禁用。不会有任何怪物。 如果difficulty=0（即难度设置为和平）的话，该属性值不会有任何影响。 提示：如果你有严重的卡顿，可以设为false。                                                                                                                                                                                                 |
| spawn-npcs                        | 布尔值              | true               | 决定是否生成村民。 <br/>true - 启用。生成村民。 <br/>false - 禁用。不生成村民。                                                                                                                                                                                                                                                                                    |
| spawn-protection                  | 整数               | 16                 | 通过将该值进行2x+1的运算来决定出生点的保护半径。设置为1会保护以出生点为中心的3×3方块的区域，2会保护5×5方块的区域，3会保护7×7方块的区域，以此类推。这个选项不在第一次服务器启动时生成，只会在第一个玩家加入服务器时出现。如果服务器没有设置OP，这个选项会自动禁用。 设置为0将不会禁用出生点保护，但会保护位于出生点的那一个方块（13w05a前）。 设置为0会禁用出生点保护（13w05a起，参见MC-666）。                                                                                                                      |
| sync-chunk-writes                 | 布尔值              | true               | 启用后区块文件以同步模式写入。                                                                                                                                                                                                                                                                                                                          |
| text-filtering-config             | 字符串              | 空白                 | 服务器中需要被屏蔽的文本。                                                                                                                                                                                                                                                                                                                            |
| use-native-transport              | 布尔值              | true               | 是否使用针对Linux平台的数据包收发优化。此选项仅会在Linux平台上生成。 <br/>true - 启用。启用Linux数据包收发优化。 <br/>false - 禁用。禁用Linux数据包收发优化。                                                                                                                                                                                                                                   |
| view-distance                     | 整数（3-32）         | 10                 | 设置服务端发送给客户端的世界数据量，也就是设置玩家各个方向上的区块数量（是以玩家为中心的半径，不是直径）。它决定了服务端的可视距离。（另见渲染距离） 默认/推荐设置为10，如果有严重卡顿的话，减少该数值。                                                                                                                                                                                                                                   |
| white-list                        | 布尔值              | false              | 启用服务器的白名单。 当启用时，只有白名单上的用户才能连接服务器。白名单主要用于私人服务器，例如提供给相识的朋友、通过应用流程谨慎选择的陌生人等。  <br/>false - 不使用白名单。 <br/>true - 从whitelist.json文件加载白名单。 注: OP会自动被视为在白名单上，所以无需再将OP加入白名单。                                                                                                                                                                      |

## 基岩版服务器server.properties配置说明

| 属性名称                            | 可选值                                          | 默认值                            | 何时生效        | 作用                                                        | 备注                                                            |
|---------------------------------|----------------------------------------------|--------------------------------|-------------|-----------------------------------------------------------|---------------------------------------------------------------|
| gamemode                        | survival (0), creative (1), adventure (2)    | survival                       | 总是生效或新玩家进入时 | 设定新玩家的游戏模式。                                               | survival (0) - 生存模式 creative (1) - 创造模式 adventure (2) - 冒险模式  |
| difficulty                      | peaceful (0), easy (1), normal (2), hard (3) | easy                           | 总是生效        | 设置世界的游戏难度。                                                | peaceful (0) - 和平 easy (1) - 简单 normal (2) - 普通 hard (3) - 困难 |
| level-type                      | FLAT, LEGACY, DEFAULT                        | DEFAULT                        | 生成地形时       | 决定生成的地图的类型。                                               | FLAT - 平坦 LEGACY - 旧世界 DEFAULT - 默认                           |
| server-name                     | 任意字符串                                        | Dedicated Server               | 总是生效        | 用作服务器的名称                                                  | 作为服务器在游戏内服务器列表中显示的名称。                                         |
| max-players                     | 正整数                                          | 10                             | 总是生效        | 设置服务器同时能容纳的最大玩家数量。                                        | 这是应该能在服务器上游戏的玩家的最大数量。较高的值可能会影响服务器性能。                          |
| server-port                     | 任意整数                                         | 19132                          | 总是生效        | 设置服务器监听的IPv4端口号。                                          |                                                               |
| server-portv6                   | 任意整数                                         | 19133                          | 总是生效        | 设置服务器监听的IPv6端口号。                                          |                                                               |
| level-name                      | 任意字符串                                        | level                          | 总是生效        | 该值用于世界的名称以及文件夹名。你也可以复制你的存档到这里，并把该值修改成文件夹的名称，以此替换服务器加载的存档。 | 使用/生成的存档名称。每个存档在/worlds中都有单独的文件夹。                             |
| level-seed                      | 任意字符串                                        | 空白（th34f1ju34facjn5f871df312h） | 生成地形时       | 用于将世界随机化                                                  | 为世界定义一个种子。留空将随机选择种子。                                          |
| online-mode                     | true, false                                  | true                           | 总是生效        | 是否身份验证                                                    | 如果为true，则每个连接的玩家都必须与Xbox Live进行身份验证。                          |
| allow-list                      | true, false                                  | false                          | 总是生效        | 是否开启白名单                                                   | 如果为true，则玩家都必须要在allowlist.json文件中才能登录服务器。                     |
| allow-cheats                    | true, false                                  | false                          | 总是生效        | 是否允许作弊                                                    | 如果为true，则服务器将允许作弊行为（例如使用命令）。                                  |
| view-distance                   | 任意整数                                         | 10                             | 总是生效        | 设置玩家可视距离最大值                                               | 单位为区块。较高的值可能会影响服务器性能。                                         |
| player-idle-timeout             | 任意整数                                         | 30                             | 总是生效        | 设置空闲玩家被踢出的时间                                              | 单位为分钟。玩家空闲时间到达设定值后将被踢出，如果设置为0或被移除。                            |
| max-threads                     | 整数                                           | 8                              | 总是生效        | 设置服务器尝试使用的最大线程数                                           | 服务器会尽可能多地使用线程。                                                |
| tick-distance                   | 范围[4, 12]内的整数                                | 4                              | 总是生效        | 设置停止加载区块的距离                                               | 当玩家远离某个区块的距离超过设定值后，该区块会停止加载。较高的值可能会影响服务器性能。                   |
| default-player-permission-level | visitor, member, operator                    | member                         | 总是生效        | 设置新玩家加入时的权限                                               | visitor-新玩家不可破坏方块 member-新玩家正常加入 operator-新玩家加入时即为OP          |
| texturepack-required            | true, false                                  | false                          | 总是生效        | 是否强制加载资源包                                                 | 如果为 true，则当服务器有资源包时，将强制客户端使用。                                 |
| content-log-file-enabled        | true,false                                   | false                          |             | 是否启用错误日志                                                  |                                                               |

## Spigot.yml配置说明

### settings

| 参数                                    | 说明                                                                          |
|---------------------------------------|-----------------------------------------------------------------------------|
| settings/debug                        | 调试模式                                                                        |
| settings/timeout-time                 | 连接超时时间                                                                      |
| settings/restart-on-crash             | 崩溃时是否自动重启                                                                   |
| settings/restart-script               | 重启时执行的脚本名（如./start.sh）                                                      |
| settings/save-user-cache-on-stop-only | 是否只有停止时才准缓存用户数据                                                             |
| settings/sample-count                 | 控制将鼠标悬停在客户端服务器列表中的玩家计数上时显示的(随机选择的)样本玩家数量。                                   |
| settings/bungeecord                   | 是否开启集群模式（还需要更多辅助软件与配置结合使用）                                                  |
| settings/player-shuffle               | 每隔多少ticks（20ticks/1s）刷新玩家在数据遍历中的顺序，可以有效调整玩家在内存中顺序，在PvP服务器上有些帮助，低于100会导致性能问题 |
| settings/user-cache-size              | 用户缓存大小                                                                      |
| settings/moved-wrongly-threshold      | 控制“错误移动”检查的阈值                                                               |
| settings/moved-too-quickly-multiplier | 判断移动速度太快的倍数阈值                                                               |
| settings/netty-threads                | Netty通信线程数                                                                  |
| settings/attribute/maxHealth/max      | 服务器最大的生命值上限                                                                 |
| settings/attribute/movementSpeed/max  | 服务器最大的速度上限                                                                  |
| settings/attribute/attackDamage/max   | 服务器最大的伤害上限                                                                  |
| settings/log-villager-deaths          | 是否记载村民死亡                                                                    |

### messages

| 参数                       | 说明                              |
|--------------------------|---------------------------------|
| messages/whitelist       | 当玩家被白名单阻止时显示的文本内容               |
| messages/unknown-command | 当玩家执行未知命令时所提示的文本内容              |
| messages/server-full     | 当服务器满人时的提示文本                    |
| messages/outdated-client | 当客户端版本过低时，提示的文本内容，其中{0}为服务器版本变量 |
| messages/outdated-server | 当服务器版本过低时，提示的文本内容，其中{0}为客户端版本变量 |
| messages/restart         | 当服务器重启时玩家进入服务器的文本提示             |

### commands

| 参数                                   | 说明                                            |
|--------------------------------------|-----------------------------------------------|
| commands/replace-commands            | 禁用Bukkit对所列命令的实现，并启用它们的原始行为，支持多项且使用英文逗号分隔     |
| commands/log                         | 是否开启日志输出                                      |
| commands/tab-complete                | 控制是否允许玩家按下TAB键来自动完成命令。-1为关闭，0为立即，1为第一个字母，以此类推 |
| commands/send-namespaced             | 是否发送命令命令空间                                    |
| commands/spam-exclusions             | 垃圾排除,支持多项且使用英文逗号分隔                            |
| commands/silent-commandblock-console | 屏蔽命令方块的控制台输出                                  |

### world-settings/default

| 参数                                                                     | 说明                                                                                             |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| world-settings/default/merge-radius/item                               | 物品距离多少时会互相合并吸引                                                                                 |
| world-settings/default/merge-radius/exp                                | 经验球距离多少时会互相合并吸引                                                                                |
| world-settings/default/view-distance                                   | 控制所有玩家最远视距，最低为1，最高为15，调整到8左右可以显著提升服务器性能                                                        |
| world-settings/default/mob-spawn-range                                 | 怪物生成范围                                                                                         |
| world-settings/default/item-despawn-rate                               | 控制在地面上的项目实体删除之前所需的Tick(s)（20Ticks=1s）                                                          |
| world-settings/default/dragon-death-sound-radius                       | 末地龙死亡声音范围                                                                                      |
| world-settings/default/seed-village                                    | 生成村庄的种子码                                                                                       |
| world-settings/default/seed-desert                                     | 生成沙漠的种子码                                                                                       |
| world-settings/default/seed-igloo                                      | 生成小屋的种子码                                                                                       |
| world-settings/default/seed-jungle                                     | 生成丛林的种子码                                                                                       |
| world-settings/default/seed-swamp                                      | 生成沼泽的种子码                                                                                       |
| world-settings/default/seed-monument                                   | 生成遗迹的种子码                                                                                       |
| world-settings/default/seed-shipwreck                                  | 生成船骸的种子码                                                                                       |
| world-settings/default/seed-ocean                                      | 生成海洋的种子码                                                                                       |
| world-settings/default/seed-outpost                                    | 生成守护者前哨的种子码                                                                                    |
| world-settings/default/seed-endcity                                    | 生成末地城的种子码                                                                                      |
| world-settings/default/seed-slime                                      | 生成黏液区块的种子码                                                                                     |
| world-settings/default/seed-mansion                                    | 生成宅邸的种子码                                                                                       |
| world-settings/default/seed-fossil                                     | 生成化石的种子码                                                                                       |
| world-settings/default/seed-portal                                     | 生成传送门的种子码                                                                                      |
| world-settings/default/hunger/jump-walk-exhaustion                     | 跳跃跑步动作时消耗的饥饿度                                                                                  |
| world-settings/default/hunger/jump-sprint-exhaustion                   | 跳跃冲刺动作时消耗的饥饿度                                                                                  |
| world-settings/default/hunger/combat-exhaustion                        | 战斗时消耗的饥饿度                                                                                      |
| world-settings/default/hunger/regen-exhaustion                         | 回复时消耗的饥饿度                                                                                      |
| world-settings/default/hunger/swim-multiplier                          | 游泳时消耗的饥饿度倍率                                                                                    |
| world-settings/default/hunger/sprint-multiplier                        | 仅冲刺时消耗的饥饿度倍率                                                                                   |
| world-settings/default/hunger/other-multiplier                         | 其他动作消耗的饥饿度倍率                                                                                   |
| world-settings/default/max-tnt-per-tick                                | 每Tick刷新时最大更新的TNT数量                                                                             |
| world-settings/default/max-tick-time/tile                              | 分配给Tile的最大Tick时间                                                                               |
| world-settings/default/max-tick-time/entity                            | 分配给实体的最大Tick时间                                                                                 |
| world-settings/default/arrow-despawn-rate                              | 箭消失距离                                                                                          |
| world-settings/default/trident-despawn-rate                            | 三叉戟消失距离                                                                                        |
| world-settings/default/zombie-aggressive-towards-villager              | 是否准许生成僵尸村民                                                                                     |
| world-settings/default/nerf-spawner-mobs                               | 启用后，由怪物生成的新怪物将不会有任何AI                                                                          |
| world-settings/default/enable-zombie-pigmen-portal-spawns              | 是否启用僵尸猪人入口生成                                                                                   |
| world-settings/default/wither-spawn-sound-radius                       | 生成凋灵的声音范围                                                                                      |
| world-settings/default/end-portal-sound-radius                         | 下界传送门声音范围                                                                                      |
| world-settings/default/hanging-tick-frequency                          | 每Tick的更新频率                                                                                     |
| world-settings/default/growth/cactus-modifier                          | 仙人掌生长速度                                                                                        |
| world-settings/default/growth/cane-modifier                            | 甘蔗速度                                                                                           |
| world-settings/default/growth/melon-modifier                           | 西瓜速度                                                                                           |
| world-settings/default/growth/mushroom-modifier                        | 蘑菇速度                                                                                           |
| world-settings/default/growth/pumpkin-modifier                         | 南瓜速度                                                                                           |
| world-settings/default/growth/sapling-modifier                         | 树苗生长速度                                                                                         |
| world-settings/default/growth/beetroot-modifier                        | 甜菜根生长速度                                                                                        |
| world-settings/default/growth/carrot-modifier                          | 胡萝卜生长速度                                                                                        |
| world-settings/default/growth/potato-modifier                          | 马铃薯生长速度                                                                                        |
| world-settings/default/growth/wheat-modifier                           | 小麦生长速度                                                                                         |
| world-settings/default/growth/netherwart-modifier                      | 地狱疣生长速度                                                                                        |
| world-settings/default/growth/vine-modifier                            | 藤曼生长速度                                                                                         |
| world-settings/default/growth/cocoa-modifier                           | 可可豆生长速度                                                                                        |
| world-settings/default/growth/bamboo-modifier                          | 柱子生长速度                                                                                         |
| world-settings/default/growth/sweetberry-modifier                      | 甜莓生长速度                                                                                         |
| world-settings/default/growth/kelp-modifier                            | 海藻生长速度                                                                                         |
| world-settings/default/entity-activation-range/animals                 | 动物最大激活范围                                                                                       |
| world-settings/default/entity-activation-range/monsters                | 怪物最大激活范围                                                                                       |
| world-settings/default/entity-activation-range/raiders                 | 突袭最大激活范围                                                                                       |
| world-settings/default/entity-activation-range/misc                    | 物品最大激活范围                                                                                       |
| world-settings/default/entity-activation-range/tick-inactive-villagers | 是否更新不活跃的村民                                                                                     |
| world-settings/default/entity-tracking-range/players                   | 实体AI追踪玩家的最大范围，调小此值可轻微节约服务器计算资源                                                                 |
| world-settings/default/entity-tracking-range/animals                   | 实体AI追踪动物的最大范围，调小此值可轻微节约服务器计算资源                                                                 |
| world-settings/default/entity-tracking-range/monsters                  | 实体AI追踪怪物的最大范围，调小此值可轻微节约服务器计算资源                                                                 |
| world-settings/default/entity-tracking-range/misc                      | 实体AI追踪物品的最大范围，调小此值可轻微节约服务器计算资源                                                                 |
| world-settings/default/entity-tracking-range/other                     | 实体AI追踪其他的最大范围，调小此值可轻微节约服务器计算资源                                                                 |
| world-settings/default/ticks-per/hopper-transfer                       | 漏斗推/拉/接收物品与漏斗推/拉更多物品之间的时间，在服务器每个Tick中更新8个行为                                                    |
| world-settings/default/ticks-per/hopper-check                          | 自上次尝试后，漏斗尝试推/拉物品。例如，值8表示空料斗每隔8个刻度查找上方的物料实体、上方的库存等。值0或1反映原版行为。当HOPPER-ALT-TICKING设置为"是"时，此选项被禁用 |
| world-settings/default/hopper-amount                                   | 控制漏斗在漏斗Tick周期中接收/发出的最大物品数量。最好与每个漏斗转移和检查的更高Tick结合使用以将动作合二为一                                     |
| world-settings/default/verbose                                         | 是否在服务器启动时在控制台/日志中显示每个世界的详细报告和配置。可以全局禁用/启用，也可以按世界禁用/启用                                          |

### 其他

| 参数                   | 说明                     |
|----------------------|------------------------|
| config-version       | 配置版本号，一般情况无需修改         |
| stats/disable-saving | 如果启用，则服务器将不保存玩家统计数据或成就 |

## bukkit.yml

### settings

| 参数                  | 说明                                          |
|---------------------|---------------------------------------------|
| allow-end           | 是否开启末地                                      |
| warn-on-overload    | 服务器过载警告                                     |
| permissions-file    | 自定义权限文件的名字                                  |
| update-folder       | 插件更新文件夹，放进新版本插件的文件夹名字，这个文件夹会在服务器重新启动时自动更新插件 |
| plugin-profiling    | 允许使用命令/timings。用于测量插件为事件所花费的时间              |
| connection-throttle | 客户端在最近一次连接尝试后，在允许再次连接之前的间隔                  |
| query-plugins       | 在MCSM内置控制台查询时，服务器是否返回插件列表                   |
| deprecated-verbose  | 当插件注册已弃用事件时，服务器是否显示警告                       |
| shutdown-message    | 服务器关闭后游戏客户端提示的信息                            |

### spawn-limits

| 参数            | 说明                    |
|---------------|-----------------------|
| monsters      | 每个世界可以产生的怪物数量         |
| animals       | 每个世界可以产生的动物数量         |
| water-animals | 每个世界可以产生的水生动物的数量      |
| ambient       | 可以按世界生成的周围生物（又名蝙蝠）的数量 |

### chunk-gc

| 参数              | 说明               |
|-----------------|------------------|
| period-in-ticks | 每个大区块垃圾回收之间的Tick |

### ticks-per

| 参数             | 说明                                                                  |
|----------------|---------------------------------------------------------------------|
| animal-spawns  | 每Tick尝试生成一次动物，值为400表示服务器将尝试在每400Ticks尝试生成一次动物，值小于0将重置为Minecraft的默认值 |
| monster-spawns | 每Tick尝试生成一次怪物，同上                                                    |
| autosave       | 自动保存，值6000表示服务器将尝试每5分钟自动保存一次世界。注:过小可能会导致服务器卡顿                       |

### aliases

| 参数      | 说明     |
|---------|--------|
| aliases | 简化指令文件 |

## paper-global.yml

### collisions

| 参数                                        | 说明                                                              |
|-------------------------------------------|-----------------------------------------------------------------|
| enable-player-collisions                  | 设置服务器是否允许玩家碰撞。与记分板交互的插件可能会破坏此选项。如果你在使用此选项时遇到问题，请尝试不要安装插件。       |
| send-full-pos-for-hard-colliding-entities | 尝试通过发送涉及冲突的实体的精确位置来缓解这种不同步。启用此功能将使用更多带宽；然而，在大多数情况下，这是一个值得权衡的选择。 |

### commands

| 参数                                             | 说明                                   |
|------------------------------------------------|--------------------------------------|
| fix-target-selector-tag-completion             | 解决客户端错误，防止实体类型标记建议在目标选择器中发挥作用。       |
| suggest-player-names-when-null-tab-completions | 设置服务器在选项卡完成时，如果没有其他完成项可用，则返回玩家列表。    |
| time-command-affects-all-worlds                | /time命令是否作用于所有世界？false则只作用于发送者当前的世界。 |

### console

| 参数                            | 说明                           |
|-------------------------------|------------------------------|
| enable-brigadier-completions  | 在服务器控制台中启用Mojang的准将（高级）命令完成。 |
| enable-brigadier-highlighting | 在服务器控制台中启用Mojang的准将突出显示。     |
| has-all-permissions           | 控制台命令是否拥有所有权限。               |

### item-validation

| 参数                         | 说明                                          |
|----------------------------|---------------------------------------------|
| book/author                | 书本作者的最大长度（以字符为单位）                           |
| book/page                  | 一本书页面的最大长度（以字符为单位）                          |
| book/title                 | 书名的最大长度（以字符为单位）                             |
| display-name               | 物品显示名称的最大长度。（以字符为单位）                        |
| lore-line                  | 物品lore的最大长度。（以字符为单位）                        |
| resolve-selectors-in-books | 是否解析书中的选择器。启用此功能后，获得创造模式的玩家将能够以另一种方式使服务器崩溃。 |

### logging

| 参数                      | 说明                                                    |
|-------------------------|-------------------------------------------------------|
| deobfuscate-stacktraces | 是否将Spigot映射的堆栈跟踪重新映射到日志记录中的Mojang映射。对Mojang映射服务器没有影响。 |

### messages

| 参数                               | 说明                                 |
|----------------------------------|------------------------------------|
| kick/authentication-servers-down | 当Mojang的身份验证服务器无法访问时发送给玩家的消息。      |
| kick/connection-throttle         | 当玩家由于连接受到限制而无法加入时发送给玩家的消息。         |
| kick/flying-player               | 发送给被检测到飞行的玩家的消息。                   |
| kick/flying-vehicle              | 发送给被检测到乘坐飞行器的玩家的消息。                |
| no-permission                    | 当玩家没有足够的权限进行操作时发送给玩家的消息            |
| use-display-name-in-quit-message | 服务器是否应该在退出消息中使用玩家的显示名称（由插件设置）或实际名称 |

### misc

| 参数                                     | 说明                                                                         |
|----------------------------------------|----------------------------------------------------------------------------|
| fix-entity-position-desync             | 固定实体位置同步。                                                                  |
| load-permissions-yml-before-plugins    | 是否在插件加载之前加载bukkit的permission.yml文件，允许他们在启用时立即检查那里的设置信息                     |
| max-joins-per-tick                     | 设置一次可以加入服务器的最大玩家数量。如果有更多玩家加入，他们将被推迟到稍后的ticks加入，但不会被踢出。这与bukkit.yml中的连接限制无关 |
| region-file-cache-size                 | 区域文件缓存的最大大小。                                                               |
| use-alternative-luck-formula           | 是否使用替代运气公式，允许将运气应用于没有定义质量的项目。对钓鱼公式进行了重大更改。                                 |
| use-dimension-type-for-custom-spawners | 幻翼、流浪商人等是否应该能够在自定义世界中生成                                                    |

### packet-limiter

| 参数                          | 说明                                                 |
|-----------------------------|----------------------------------------------------|
| all-packets/action          | 一旦违反限制就采取的行动。可能的值DROP将忽略超过限制的数据包，并且KICK将踢出超过限制的玩家。 |
| all-packets/interval        | 应用的时间间隔。（单位为秒）                                     |
| all-packets/max-packet-rate | 间隔内每个玩家允许的数据包数。                                    |
| kick-message                | 玩家因发送太多数据包而被踢的消息。                                  |

### player-auto-save

| 参数           | 说明                    |
|--------------|-----------------------|
| max-per-tick | 一个tick内最多可以保存多少名玩家数据。 |
| rate         | 玩家数据应该多久保存一次。         |

### proxies

| 参数                      | 说明                                                                  |
|-------------------------|---------------------------------------------------------------------|
| bungee-cord/online-mode | 设置为与你的bungee-cord的online-mode相同。                                    |
| proxy-protocol          | 服务器是否应该处理代理协议消息。这与Velocity或BungeeCord完全无关。仅当你使用HAProxy或类似工具时才启用此功能。 |
| velocity/enabled        | 服务器是否应该接受Velocity代理。                                                |
| velocity/online-mode    | 设置为与你的Velocity的online-mode相同。                                       |
| velocity/secret         | 由Velocity代理和此服务器共享的密钥字符串。这需要与你的Velocity的forwarding-secret设置相同。      |

### scoreboards

| 参数                          | 说明                      |
|-----------------------------|-------------------------|
| save-empty-scoreboard-teams | 设置服务器是否应自动删除那些空的队伍的计分板。 |
| track-plugin-scoreboards    | 服务器是否应该跟踪只有虚拟目标的插件的记分牌。 |

### spam-limiter

| 参数                        | 说明                                  |
|---------------------------|-------------------------------------|
| incoming-packet-threshold | 设置服务器认为传入数据包是垃圾邮件并忽略它们的阈值。          |
| recipe-spam-increment     | 当玩家按下配方时，配方垃圾计数器增加的数字。              |
| recipe-spam-limit         | 在服务器将玩家踢出                           |
| tab-spam-increment        | 当玩家在聊天窗口中按下选项卡时，内部选项卡垃圾邮件计数器增加的数量。  |
| tab-spam-limit            | 在服务器将玩家踢出垃圾邮件之前，内部标签垃圾邮件计数器可以达到的数量。 |

### timings

| 参数                    | 说明                                     |
|-----------------------|----------------------------------------|
| enabled               | 是否启用Timings                            |
| hidden-config-entries | 要隐藏在Timings报告中的配置条目。                   |
| history-interval      | Timings报告中各个点之间的间隔。（以秒为单位）             |
| history-length        | 为单个报告保留的数据总量。此值在服务器端经过验证。超过这个数的报告将被拒绝。 |
| server-name           | 设置Timings输入服务器名称的内容。                   |
| server-name-privacy   | 设置Timings是否在报告中隐藏服务器名称。                |
| url                   | 设置Timings Viewer的服务器的URL。              |
| verbose               | 设置Timings是否在其报告中提供更具体的信息。              |

### unsupported-settings

| 参数                                   | 说明                          |
|--------------------------------------|-----------------------------|
| allow-headless-pistons               | 服务器是否允许创建无头活塞。              |
| allow-permanent-block-break-exploits | 是否可以通过普通漏洞破坏不可破坏的方块。        |
| allow-piston-duplication             | 是否允许复制TNT、地毯和铁轨。这不能控制沙子的复制。 |
| perform-username-validation          | 是否允许名称中包含特殊字符的玩家加入。         |

### watchdog

| 参数                  | 说明                            |
|---------------------|-------------------------------|
| early-warning-delay | 在服务器开始挂起后看门狗线程开始打印线程转储之前的毫秒数。 |
| early-warning-every | 服务器挂起时打印线程转储之间的间隔。（以毫秒为单位）    |

## paper-world-defaults.yml

### anti cheat

| 参数                         | 说明                                                                |
|----------------------------|-------------------------------------------------------------------|
| anti-xray/enabled          | 是否开启反矿透。（Anti-Xray）                                               |
| anti-xray/engine-mode      | Anti-Xray 引擎模式。                                                   |
| anti-xray/lava-obscures    | 是否混淆接触岩浆的方块。                                                      |
| anti-xray/max-block-height | Anti-Xray 操作的最大高度。只接受 16 的整数倍。                                    |
| anti-xray/update-radius    | 当客户端与方块交互时，将发送包含真实方块数据的方块更新的半径。只可以设置 0、1和2。（0 仅用于测试目的，不要在生产环境中使用） |
| anti-xray/use-permission   | 是否允许有 paper.antixray.bypass 权限的玩家绕过 Anti-Xray。                    |

### anticheat/obfuscation/items

| 参数              | 说明                              |
|-----------------|---------------------------------|
| hide-durability | 是否将耐久度信息发送给其他玩家的客户端。            |
| hide-itemmeta   | 是否应将作弊客户端中的不必要的物品信息发送给其他玩家的客户端。 |

### chunks

| 参数                                  | 说明                        |
|-------------------------------------|---------------------------|
| auto-save-interval                  | 以 Tick 为单位配置世界自动保存间隔。     |
| delay-chunk-unloads-by              | 设置区块延迟卸载的时间。              |
| max-auto-save-chunks-per-tick       | 自动保存系统将在每 Tick 中保存的最大区块数。 |
| prevent-moving-into-unloaded-chunks | 是否阻止玩家进入未加载的区块。           |

### collisions

| 参数                                   | 说明                     |
|--------------------------------------|------------------------|
| allow-vehicle-collisions             | 交通工具是否能够碰撞。            |
| fix-climbing-bypassing-cramming-rule | 攀爬是否绕过实体填塞限制。          |
| max-entity-collisions                | 设置服务器在达到此值后停止处理碰撞。     |
| only-players-collide                 | 是否仅当玩家是两个碰撞实体之一时才计算碰撞。 |

### entities/armor-stands

| 参数                          | 说明                              |
|-----------------------------|---------------------------------|
| do-collision-entity-lookups | 盔甲架实体是否进行实体碰撞检查。                |
| tick                        | 禁用以防止盔甲架 Ticking。（可以提高许多盔甲架的性能） |

### entities/behavior

| 参数                                           | 说明                                                                                    |
|----------------------------------------------|---------------------------------------------------------------------------------------|
| baby-zombie-movement-modifier                | 修改小僵尸移动的速度，0.5 比基本速度快 50%，-0.4 慢 40%。                                                 |
| disable-chest-cat-detection                  | 箱子上坐着一只猫时是否可以打开箱子。                                                                    |
| disable-creeper-lingering-effect             | 是否禁用随机苦力怕，并留下一个挥之不去的区域效果云。                                                            |
| disable-player-crits                         | 是否禁用暴击。                                                                               |
| door-breaking-difficulty/husk                | 尸壳可以破门的难度。                                                                            |
| door-breaking-difficulty/vindicator          | 卫道士可以破门的难度。                                                                           |
| door-breaking-difficulty/zombie              | 僵尸可以破门的难度。                                                                            |
| door-breaking-difficulty/zombie_villager     | 僵尸村民可以破门的难度。                                                                          |
| door-breaking-difficulty/zombified_piglin    | 僵尸猪灵可以破门的难度。                                                                          |
| ender-dragons-death-always-places-dragon-egg | 末影龙是否总是在死亡时掉落龙蛋。                                                                      |
| experience-merge-max-value                   | 设置服务器单个经验球最大值，防止它们全部合并为 1 个经验球。                                                       |
| mobs-can-always-pick-up-loot/skeletons       | 骷髅是否总是能够拾取战利品。                                                                        |
| mobs-can-always-pick-up-loot/zombies         | 僵尸是否总是能够拾取战利品。                                                                        |
| nerf-pigmen-from-nether-portals              | 从通过下界传送门传送的猪灵身上移除 AI。                                                                 |
| parrots-are-unaffected-by-player-movement    | 是否防止鹦鹉在玩家移动时从玩家的肩膀上掉下来。                                                               |
| phantoms-do-not-spawn-on-creative-players    | 是否在创造模式下禁止生成幻翼。                                                                       |
| phantoms-only-attack-insomniacs              | 是否防止幻翼攻击已经睡觉的玩家。                                                                      |
| piglins-guard-chests                         | 猪灵在被激怒时是否应该保护箱子。                                                                      |
| pillager-patrols/disable                     | 是否禁用掠夺者巡逻和相关的 AI。                                                                     |
| pillager-patrols/spawn-chance                | 修改掠夺者的生成几率。                                                                           |
| should-remove-dragon                         | 如果没有传送门存在，是否移除末影龙。                                                                    |
| zombie-villager-infection-chance             | 设置村民转换为僵尸村民的变化几率。如果基于游戏难度变化就设置为 1.0。（设置为 0.0 则始终让村民在被僵尸杀死时死亡，设置为 100.0 则始终将村民转化为僵尸村民） |
| zombies-target-turtle-eggs                   | 设置僵尸和僵尸猪灵是否会自动寻找并破坏海龟蛋。                                                               |

### entities/mob-effects

| 参数                                      | 说明               |
|-----------------------------------------|------------------|
| immune-to-wither-effect/wither-skeleton | 凋灵骷髅是否免疫凋零效果。    |
| spiders-immune-to-poison-effect         | 蜘蛛是否免疫中毒效果。      |
| undead-immune-to-certain-effects        | 亡灵生物是否免疫再生和中毒效果。 |

### entities/spawning

| 参数                                             | 说明                                                                                                                    |
|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| all-chunks-are-slime-chunks                    | 是否将所有区块设置为史莱姆区块，允许史莱姆在任何区块中生成。（这实际上可能会减少你遇到史莱姆的机会，因为它们现在有更大的潜在生成区域。）                                                  |
| alt-item-despawn-rate/enabled                  | 设置物品是否具有不同的消失率。                                                                                                       |
| alt-item-despawn-rate/items/cobblestone        | 圆石消失的概率。                                                                                                              |
| count-all-mobs-for-spawning                    | 是否将刷怪蛋生成的怪物和其他杂类生物计入全局生物限制。                                                                                           |
| creative-arrow-despawn-rate                    | 玩家在创造模式下射出的箭消失的速率，以 Tick 为单位。                                                                                         |
| despawn-ranges/axolotls/hard                   | 美西螈距离玩家的方块数，超过这个距离将被强制消失。                                                                                             |
| despawn-ranges/axolotls/soft                   | 美西螈距离玩家的方块数，超过这个距离将被随机消失。                                                                                             |
| despawn-ranges/creature/hard                   | 动物距离玩家的方块数，超过这个距离将被强制消失。                                                                                              |
| despawn-ranges/creature/soft                   | 动物距离玩家的方块数，超过这个距离将被随机消失。                                                                                              |
| despawn-ranges/misc/hard                       | 杂物距离玩家的方块数，超过这个距离将被强制消失。                                                                                              |
| despawn-ranges/misc/soft                       | 杂物距离玩家的方块数，超过这个距离将被随机消失。                                                                                              |
| despawn-ranges/monster/hard                    | 怪物距离玩家的方块数，超过这个距离将被强制消失。                                                                                              |
| despawn-ranges/monster/soft                    | 怪物距离玩家的方块数，超过这个距离将被随机消失。                                                                                              |
| despawn-ranges/underground_water_creature/hard | 水下生物距离玩家的方块数，超过这个距离将被强制消失。                                                                                            |
| despawn-ranges/underground_water_creature/soft | 水下生物距离玩家的方块数，超过这个距离将被随机消失。                                                                                            |
| despawn-ranges/water_creature/hard             | 水中动物距离玩家的方块数，超过这个距离将被强制消失。                                                                                            |
| despawn-ranges/water_creature/soft             | 水中动物距离玩家的方块数，超过这个距离将被随机消失。                                                                                            |
| disable-mob-spawner-spawn-egg-transformation   | 是否阻止玩家用刷怪蛋改变刷怪笼的类型。                                                                                                   |
| duplicate-uuid/mode                            | 指定服务器用来解析具有重复 UUID 的实体的方法。（SAFE_REGEN：为实体重新生成一个 UUID，如果它们关闭，则将其删除。DELETE: 删除实体。SILENT: 什么都不做，不打印日志。WARN: 什么都不做，打印日志。） |
| iron-golems-can-spawn-in-air                   | 铁傀儡是否可以在空中生成。                                                                                                         |
| non-player-arrow-despawn-rate                  | 非玩家实体射出的箭头消失的速率（以 Tick 为单位）                                                                                           |
| per-player-mob-spawns                          | 设置是按玩家还是整个服务器计算暴民限制。启用此设置会产生大致相同数量的生物，但分布更均匀，可防止一个玩家使用整个生物上限并提供更像单人游戏的体验。                                             |
| skeleton-horse-thunder-spawn-chance            | 设置“骷髅陷阱”（4 个骷髅骑士）在雷暴中生成的几率。                                                                                           |
| slime-spawn-height/slime-chunk/maximum         | 设置史莱姆区块中自然生成史莱姆的最大 Y 位置。                                                                                              |
| slime-spawn-height/surface-biome/maximum       | 设置沼泽生物群系中自然生成史莱姆的最大 Y 位置。                                                                                             |
| slime-spawn-height/surface-biome/minimum       | 设置沼泽生物群系中自然生成史莱姆的最小 Y 位置。                                                                                             |
| wandering-trader/spawn-chance-max              | 生成流浪商人的最大几率。                                                                                                          |
| wandering-trader/spawn-chance-min              | 生成流浪商人的最小几率。                                                                                                          |
| wandering-trader/spawn-day-length              | 生成流浪商人的时间间隔。                                                                                                          |
| wateranimal-spawn-height/maximum               | 水生动物产卵的最大高度。                                                                                                          |
| wateranimal-spawn-height/minimum               | 水生动物产卵的最小高度。                                                                                                          |

### environment

| 参数                                      | 说明                                         |
|-----------------------------------------|--------------------------------------------|
| disable-explosion-knockback             | 是否阻止因爆炸而被击退。                               |
| disable-ice-and-snow                    | 是否禁用冰雪生成。                                  |
| disable-teleportation-suffocation-check | 是否禁用服务器在传送玩家之前执行的卡墙检查。                     |
| disable-thunder                         | 是否禁用雷暴。                                    |
| frosted-ice/delay/max                   | 应用结霜冰效果的最大 RNG 值。                          |
| frosted-ice/delay/min                   | 应用结霜冰效果的最小 RNG 值。                          |
| frosted-ice/enabled                     | 是否启用结霜的冰块。                                 |
| generate-flat-bedrock                   | 基岩是否生成为单层。（类似于超平坦）                         |
| nether-ceiling-void-damage-height       | 玩家在地狱受到虚空伤害的等级。                            |
| optimize-explosions                     | 服务器是否在爆炸期间缓存实体查找，而不是在整个过程中重新计算。            |
| portal-create-radius                    | 服务器在生成新传送门时尝试创建传送门的最大半径。                   |
| portal-search-radius                    | 服务器将用于查找现有下界传送门的最大半径。如果在该范围内找不到一个，将生成一个新的。 |
| water-over-lava-flow-speed              | 设置水流过岩浆时的速度。                               |

### feature-seeds

| 参数                            | 说明                          |
|-------------------------------|-----------------------------|
| generate-random-seeds-for-all | 是否为尚未设置种子的所有可用功能启用随机种子自动填充。 |

### fishing-time-range

| 参数      | 说明                   |
|---------|----------------------|
| maximum | 钓到一条鱼所需的最大 RNG Tick。 |
| minimum | 钓到一条鱼所需的最小 RNG Tick。 |

### fixes

| 参数                               | 说明                                 |
|----------------------------------|------------------------------------|
| falling-block-height-nerf        | 方块从高空掉落超过多少个方块时会被服务器移除。（< 1则禁用此功能） |
| fix-items-merging-through-walls  | 是否防止物品通过墙壁合并。                      |
| prevent-tnt-from-moving-in-water | 是否阻止已启动的 TNT 实体在流动的水中移动。           |

### hopper

| 参数                      | 说明                                                |
|-------------------------|---------------------------------------------------|
| cooldown-when-full      | 在漏斗装满时是否有短暂的冷却时间，而不是不断尝试吸新物品。                     |
| ignore-occluding-blocks | 漏斗是否会忽略遮挡方块内的容器，例如沙子内的漏斗矿车。启用此功能将提高漏斗检查流入物品位置的性能。 |

### maps

| 参数                                | 说明                                         |
|-----------------------------------|--------------------------------------------|
| item-frame-cursor-limit           | 每个地图允许的光标（标记）数量。                           |
| item-frame-cursor-update-interval | 更新物品展示框中地图上的光标的时间间隔。（将此设置为小于 1 的数字将完全禁用更新） |

### max-growth-height

| 参数         | 说明             |
|------------|----------------|
| bamboo/max | 竹子自然会长到的最大高度。  |
| bamboo/min | 竹子自然会长到的最低高度。  |
| cactus     | 仙人掌块的自然生长最大高度。 |
| reeds      | 甘蔗自然生长的最大高度。   |

### misc

| 参数                                    | 说明                      |
|---------------------------------------|-------------------------|
| disable-end-credits                   | 是否在离开游戏结束时永远不要发送游戏结束点数。 |
| disable-relative-projectile-velocity  | 是否在计算射箭速度时忽略射手速度。       |
| disable-sprint-interruption-on-attack | 玩家冲刺时受到攻击是否会被打断。        |
| light-queue-size                      | 设置每个世界的主线程的光照更新队列有多大。   |
| max-leash-distance                    | 配置拴绳的最大距离。              |
| random-tick-speed                     | 随机刻速度。                  |
| spawn-egg-timeout                     | 刷怪蛋生成生物的时间。             |
| spectator-auto-fill-slot              | 在旁观者模式下，是否自动填充槽位。       |
| track-command-executions              | 是否启用命令执行的跟踪。            |

### scoreboards

| 参数                            | 说明                   |
|-------------------------------|----------------------|
| enable-snowman-death-counter  | 是否启用计算雪人死亡次数的记分板计数器。 |
| enable-villager-death-counter | 是否启用计算村民死亡次数的记分板计数器。 |
| spawn-location/break          | 破坏生成位置方块是否更改床的生成点。   |
| spawn-location/place          | 放置生成位置方块是否更改床的生成点。   |


### spawn

| 参数                                  | 说明                   |
|-------------------------------------|----------------------|
| spawn-cap/mob                       | 每个区块生成的最大动物数量。       |
| spawn-cap/monster                   | 每个区块生成的最大怪物数量。       |
| spawn-cap/ambient                   | 每个区块生成的最大环境生物数量。     |
| spawn-cap/water                     | 每个区块生成的最大水生生物数量。     |
| spawn-cap/water-ambient             | 每个区块生成的最大水下环境生物数量。   |
| spawn-cap/underground_water         | 每个区块生成的最大地下水生生物数量。   |
| spawn-cap/underground_water-ambient | 每个区块生成的最大地下水下环境生物数量。 |

### tick-rates

| 参数                                     | 说明                       |
|----------------------------------------|--------------------------|
| advancement-conversion-delay           | 以秒为单位设置进度提示转换延迟。         |
| anti-xray/block-hit-delay              | 破坏方块后多久判定是否是作弊。          |
| anti-xray/block-replacement-max-radius | 替换作弊方块的最大半径。             |
| anti-xray/block-replacement-radius     | 替换作弊方块的半径。               |
| anti-xray/fake-block-update-radius     | 发送假方块更新的最大半径。            |
| anti-xray/initial-block-replacement    | 是否在玩家加入时替换作弊方块。          |
| block-light-updates-per-tick           | 每 Tick 之间执行的方块光照更新的数量。   |
| block-light-updates-random-delay       | 方块光照更新的最大随机延迟。           |
| entity-activation-range                | 实体激活半径。                  |
| fire-light-updates-per-tick            | 每 Tick 之间执行的火光照更新的数量。    |
| fire-light-updates-random-delay        | 火光照更新的最大随机延迟。            |
| liquid-updates-per-tick                | 每 Tick 之间执行的液体更新的数量。     |
| liquid-updates-random-delay            | 液体更新的最大随机延迟。             |
| max-auto-save-chunks-per-tick          | 每 Tick 之间执行的自动保存区块的最大数量。 |
| max-block-drops-per-tick               | 每 Tick 之间执行的方块掉落的最大数量。   |
| max-chunk-gc-time                      | 每 Tick 之间执行的区块垃圾回收的最大时间。 |
| max-entity-collisions                  | 每 Tick 之间执行的实体碰撞的最大数量。   |
| max-entity-despawn-rate                | 每 Tick 之间执行的实体消失的最大数量。   |
| max-entity-lookups-per-tick            | 每 Tick 之间执行的实体查找的最大数量。   |
| max-entity-tracking-chunks-per-tick    | 每 Tick 之间执行的实体追踪区块的最大数量。 |
| max-fall-height                        | 一个实体可以掉落的最大高度。           |
| max-spawn-radius                       | 生成区块的最大半径。               |
| max-tnt-explosion-radius               | TNT 爆炸的最大半径。             |
| max-world-size                         | 服务器的最大世界大小。              |
| mob-spawn-range                        | 刷怪笼生成生物的最大范围。            |
| player-collision                       | 玩家碰撞范围。                  |
| random-light-updates-per-tick          | 每 Tick 之间执行的随机光照更新的数量。   |
| random-light-updates-random-delay      | 随机光照更新的最大随机延迟。           |
| save-structure-info-per-tick           | 每 Tick 之间执行的保存结构信息的数量。   |
| tile-light-updates-per-tick            | 每 Tick 之间执行的块实体光照更新的数量。  |
| tile-light-updates-random-delay        | 块实体光照更新的最大随机延迟。          |
| villager-activation-range              | 村民激活半径。                  |
| weather-light-updates-per-tick         | 每 Tick 之间执行的天气光照更新的数量。   |
| weather-light-updates-random-delay     | 天气光照更新的最大随机延迟。           |

### unsupported-settings

| 参数                   | 说明               |
|----------------------|------------------|
| disable-ice-and-snow | 是否禁用冰雪生成。        |
| spawn-cap/ambient    | 每个区块生成的最大环境生物数量。 |
