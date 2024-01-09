# 云服务器宝塔相关

## 安装宝塔
如需要在服务器上安装宝塔，可以前往[宝塔官网](https://www.bt.cn/new/download.html)，选择Linux版本，
然后找到适合您的系统版本，复制命令到SSH运行即可。

:::note
**Centos**:
```shell
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```
**Ubuntu/Deepin**
```shell
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh ed8484bec
```
**Debian**
```shell
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh ed8484bec
```
**万能安装脚本**
```shell
if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec
```
:::


![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240109153907_3820684e7f7b8b06c39e75bc84c94064.png)

复制脚本后，连接到服务器，运行后访问给出的连接地址，输入账号密码，然后绑定宝塔面板即可。

连接服务器可以参考[连接服务器](/docs/rcs/connect).

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240109155553_76318aac553d369b45be124fb92b840f.png)


:::note
注意：必须为没装过其它环境如Apache/Nginx/php/MySQL的新系统,推荐使用**centos 7.X**的系统安装宝塔面板

推荐使用**Chrome、火狐、edge浏览器**，国产浏览器请使用极速模式访问面板登录地址

如果不确定使用哪个Linux系统版本的，可以使用**万能安装脚本**

如果您的机器**没有公网IP**，需要设置一下**端口转发**转发到宝塔给出的端口才可以访问
:::

### 视频演示

<video class="iframe_video" controls src="https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240109164942_6920626369b1f05844f5e3d6f93b5f6e.mp4"/>

## 降级宝塔

```shell
1.下载离线包
curl -L https://github.com/weiwang3056/baota_release/blob/main/LinuxPanel/LinuxPanel-7.7.0.zip\?raw\=true > LinuxPanel-7.7.0.zip
2.解压
unzip LinuxPanel-*
3.切换到降级包目录
cd panel
4.执行脚本
bash update.sh
5.删除降级包
cd .. && rm -f LinuxPanel-*.zip && rm -rf panel
```

:::tip
工单暂不处理有关宝塔相关问题，有疑问可以访问[宝塔论坛](https://www.bt.cn/bbs/)反馈
:::