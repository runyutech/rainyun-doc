# 云服务器数据备份转移

## 局域网

如果转出数据的机器与转入机器的内网可以相通，那我们可以使用局域网高效传输数据而不用经过互联网。

局域网传输文件等，我们可以使用[LocalSend](https://localsend.org/#/)传输文件，windows环境下我们可以直接下载安装，然后直接打开。

:::tip
如果无法打开可以尝试安装Visual Basic/C++ Redistributable 运行库
:::

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401163158_5cef0897c0c149799f1ee08fbcf56e56.png)


两台机器同时打开安装后，我们在需要发送的机器上点击发送，然后点击文件，选择需要发送的文件之后我们点击设备。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401163252_c7977824ac757bb0f751d75b539428b7.png)

点击发送后，接收端点击接受即可，接收的文件一般会在系统下载目录当中。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401163411_083e83b507d4236225bf7be34c118c40.png)

## 公网

如果两台机器无法直接通过内网访问，可以在主机上搭建FTP，S3这类的服务，然后接收端通过公网直接下载。

这边推荐使用[alist](https://alist.nn.ci/zh/guide/)搭建。

我们来到[下载页面](https://github.com/alist-org/alist/releases)，选择对应系统版本的程序，这边我们使用windows演示则选择Windows。

下载后我们使用命令行运行，输入`alist.exe server`即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401165956_ca369772a9ee0a1df8cdd54aae63e9e5.png)

然后本地可以通过 http://127.0.0.1:5244 访问，打开后，用户名我们输入admin，密码需要在刚才运行的窗口里获取，复制粘贴到页面。

登录后我们点击管理。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401170156_16eaa8041613c6c83b4e7616b03a8c49.png)

点击后，点击存储，添加，驱动选择本地存储，路径设置需要设置的路径。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401170233_a26848cf8e5ff5c6545d5d97e5330e0a.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401170354_20b1944f289c571f458faa9d91873048.png)

设置后我们返回访问地址，即可查询到已经设置的路径里的文件。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401170609_8f5638cad7bba474777aef762984ba25.png)

然后我们接收服务器即可访问http://公网地址:5244 下载我们的文件。

:::tip
如果机器上nat机器，需要设置nat端口映射将5244映射到任意公网端口然后使用，http://nat地址:端口访问
:::


## 宝塔一键迁移

迁移教程可以参考宝塔论坛：https://www.bt.cn/bbs/thread-33070-1-1.html

##  1Panel备份

备份以及转移教程可以参考1panel论坛：https://1panel.cn/docs/user_manual/websites/website_backup