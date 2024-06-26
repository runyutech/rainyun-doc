# 添加解析

想象一下，互联网就像一本巨大的电话簿，每个网站都有一个独特的“电话号码”——那就是它的IP地址。但是，我们人类更善于记住像“example.com”这样的名字，而不是一串串长长的数字。所以，域名解析就像是那个帮你找到对应电话号码的服务。  
 
A记录：类似于直接写明电话号码，明确指出域名指向哪个IP地址；    <br/>
CNAME记录：相当于给某个人起个昵称，例如将子域名 "www.example.com" 指向主域名 "example.com"；  <br/>
MX记录：告诉别人发邮件到这个域名时应该去找哪个邮箱服务器；  <br/>
NS记录：说明谁是保管这个域名信息的“大管家”（也就是指定哪台DNS服务器负责解析这个域名）。  <br/>


需要添加域名解析，我们可以到域名管理页面：https://app.rainyun.com/apps/domain/list/manage

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240325145009_57de6dee19f8693fc151db01dfda2b53.png)

点击之后我们点击添加解析记录：

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240325145422_97482e2c4628bfcbd93efb04f12553c6.png)

点击之后我们来到添加解析记录页面：

> * 主机记录设置需要设置的值<br/>
> * 如果记录添加的域名解析的主机记录为 @ 时，意味着您可以直接通过域名访问部署的网站。
> * 例如：主机名为 @.example.com，则您可以通过 example.com 访问网站。<br/>
> * 解析目标**如果有雨云的产品**可以选择对应的产品，如果没有可以选择自定义解析<br/>
> * 如果选择自定义，解析值需要填入有效的ip/域名等。<br/>
> * TTL默认即可<br/>

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240325145514_7e9f8ec13bc8550e2fc2de7e892c0cad.png)

点击“添加”按钮，解析记录就访问成功了 <br/>
点击解析记录的右边“操作”可以删除或者编辑解析

## 添加SRV解析
如果你的域名需要解析到例如Minecraft服务器等游戏服务器，你可以添加SRV解析记录。
例如我们现在有一个aaa.com的域名，要将这个域名使用SRV解析到我们的游戏云上，我们应该设置：
> * 主机名称填入 **_minecraft._tcp**
> * 记录值(优先级 权重 端口 主机名)，填入 **0 0 端口 域名**
> * 其中端口为我们在游戏云获取到的对外地址的端口，例如我们游戏云的对外地址为game.rainyun.com:26653,则填入**0 0 26653 game.rainyun.com**。
> * TTL与线路默认即可
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/05/20240506151014_331c132c26cfdc82b4c16a77c1276705.png)

设置完成后等待解析生效，生效后即可通过域名访问到游戏云。