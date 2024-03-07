# 服务端修改配置开启PVP功能

直至1.5.1版本，官方尚未直接对pvp模式做支持，目前只可以修改相关限制开启队友伤害来达到开启pvp功能。

## 服务端修改配置

如需开启友伤等功能，我们需要使用`WorldOption.sav`文件来接管`PalWorldSettings.ini`配置。

PalWorldSettings.ini 中的**某些条目不起作用**（如 BaseCampWorkerMaxNum）。

如果同时存在 `WorldOption.sav` 和 PalWorldSettings.ini 文件，`WorldOption.sav` 将**优先**生效。

使用[幻兽帕鲁服务器配置生成器](https://pal-conf.bluefissure.com/)我们可以迅速设置并转换我们的配置文件。

访问配置生成器，我们先点击右上角将我们页面语言切换为中文。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240307152943_167d90bb3cab965ed46f0b2261d9abb8.png)

切换后我们复制上传我们存档的ini后缀的配置文件。配置文件路径是`Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

上传后我们可以自行调整我们的配置，如需开启pvp，即友伤，我们可以到高级设置开启**玩家对玩家伤害**，**是否PVP**，其他设置可以按需设置，设置完成后我们点击`WorldOption.sav`，再点击下载。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240307153916_9230982e2d70d975fa0fe9cf99b4480f.png)

下载后我们将`WorldOption.sav`文件上传到我们的服务器，路径是`Pal/Saved/SaveGames/0/.../WorldOption.sav`，上传后我们重启服务器即可生效。


