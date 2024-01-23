
# 存档转移

:::warning
* 在对存档操作之前，一定要保存并关闭服务端，不然有可能导致存档损坏。
* 在操作之前一定要按前置操作备份您的存档！
:::

## 前置操作

**Windows/Linux/面板**
关于幻兽帕鲁存档转移的方法：
进入服务端文件夹，按照一下路径找到这两个文件夹，压缩下载备份。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123160529_8ed6f8730cab7bf3aab41d5c944e3b3f.png)

## 面板存档转移到Windows

按**前置操作**保存好文档后，在新的vps机器安装steam，然后找到图上的服务端，

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123160837_dcc4cc71d5bdfad7fbfb892dce58886f.png)


下载安装，安装后启动，选择第一个，启动后关闭刚才打开的窗口。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123160905_788998b90826f7bce5f7707d6aac3ec9.png)

关闭后点击右键，管理，浏览本地文件。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123160935_00664ee3e482ac34db531da3fa6a9a8b.png)

打开文件夹后，进入`PalServer\Pal\Saved`，删除`config文件夹与savedgames文件夹`，解压您的存档到这个文件夹，然后**进入config文件夹**，将LinuxServer，改为WindowsServer，然后启动服务端即可。

:::info
一定要在steam开启这个服务端
:::

## Windows转移到面板
由于Windows环境下在steamCMD下载的的服务端与在steam客户端下载的服务端steamAPPID不一致，需要转一次id。<br/>

按**前置操作**保存好文档后，在新的vps机器安装steam，然后找到图上的服务端，

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123160837_dcc4cc71d5bdfad7fbfb892dce58886f.png)

下载安装，安装后启动，选择第一个，启动后关闭刚才打开的窗口。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123160905_788998b90826f7bce5f7707d6aac3ec9.png)

关闭后点击右键，管理，浏览本地文件。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123160935_00664ee3e482ac34db531da3fa6a9a8b.png)

打开文件夹后，进入`PalServer\Pal\Saved`，删除`config文件夹与savedgames文件夹`，解压您的存档到这个文件夹，然后**再按上面步骤启动steam幻兽服务端**。
启动之后关闭。再次点击右键，管理，浏览本地文件，找到刚刚存放文档的地方，压缩。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123164133_a540f8a2bcfc885780dea06a1d7b0baf.png)

进入面板后，上传刚才的压缩包，解压，文件夹名字随意，解压后进入刚才的文件夹，剪切移动到上个存档的文件夹。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240123164647_e1e964958d063f96a3a51aa58d249939.png)

## 本地/合作模式存档迁移到服务器

操作步骤：

对于本地/合作模式存档迁移到服务器：

1. 通过 SteamCMD 创建一个专用服务器。
2. 运行服务器一次。
3. 登录服务器，使其创建一个玩家文件夹和 .sav 文件。
- 我的看起来像是 "EE256A5000000000000000000000000.sav"，这是你稍后在脚本中需要的文件名(不包括 .sav)。
4. 停止服务器。
5. 备份所有文件以防万一。
6. 将 C:\Users\domin\AppData\Local\Pal\Saved\SaveGames\Your Steam ID\BUNCH OF LETTERS AND NUMBERS\ 文件夹中的内容复制过来。
7. 确保安装了最新版本的 Python，从 Nul 下载脚本和 UEsave 可执行文件。
8. 用正确的参数运行命令行。
- 例如，对我来说是 "python fix-host-save.py F:\Fixit\uesave.exe F:\Palworld\Server_1\Pal\Saved\SaveGames\0\8A15EB32440279628FB4587AF7718787 EE256A5000000000000000000000000"
9. 稍等片刻，这可能需要一些时间。
10. 复制所有文件和文件夹，覆盖原有文件。
11. 启动服务器。
12. 理论上你现在应该可以开始了。
    如果你使用的是云/游戏主机：

- 运行你的新服务器。
- 登录服务器，使其创建一个玩家文件夹和 .sav 文件。
- 停止你的服务器。
- 通过 FTP 连接到你的服务器，并找到保存游戏的目录(这个文件夹包含了所有的存档数据)。
- 将文件下载到你的电脑上，这样你才能运行脚本，因为在主机提供商那里是无法做到的。
  = 你也可以通过为 sav 文件创建一个文件夹来使其更加整洁。
- 现在你可以按照上面 #7 提到的其余步骤进行操作。
- 脚本运行完后，你可以将文件上传回服务器，然后启动。


链接：

Nul 的脚本：https://github.com/xNul/palworld-host-save-fix
UESave 扩展：https://github.com/trumank/uesave-rs
Python 下载：https://www.python.org/downloads/

额外选项，如果你想手动将文件从 sav 转换为 json 反之亦然，这些脚本可以帮助你。
https://gist.github.com/cheahjs/300239464dd84fe6902893b6b9250fd0

https://gist.github.com/Toakan/3 ... erver-community-faq

另一种选择：https://www.reddit.com/r/Palworl ... ile_incl/?rdt=55658