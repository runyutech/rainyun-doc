---
title: 服务器IP
description: 服务器IP
sidebar_position: 5

---

# 服务器ip

在管理页面，你可以看到你的服务器的公网IP地址，这个IP地址是你的服务器的唯一标识，你可以通过这个IP地址访问你的服务器。

如果你没有购买独立IP，你的服务器的公网IP地址是共享的，也就是Nat地址。NAT地址会出现无法直接使用域名访问80端口等服务。


![](https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/12/img_1701661988_3f0b4e2e213d316cacfc74053f87aa69)

## 添加公网ip

按照图片的指引，我们点击添加，然后输入需要购买的数量，点击添加，确认价格后确认添加即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240717114343_f05ab9a6cc0c9cacb98a77971b75d9ce.png)

## 更换公网ip

:::danger
更换公网IP后，ip1分钟后生效，原ip将无法找回。
:::

选择你需要更换的公网ip，点击更换即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240717114639_37dd2be6b67bf7ac0ae800cc31e4bd4d.png)


## 丢弃公网ip

:::danger
丢弃公网IP，原ip将无法找回。<br/>
如果你的ip只有一个，丢弃ip后机器将会变为Nat网络。
:::

选择你需要丢弃的公网ip，点击丢弃即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240717114733_7f4e54a360ac1bf87555ce6822ca9185.png)

## 公网ip切换为Nat ip

:::danger
当你的机器没有公网ip，机器将会被切为NAT ip<br/>
丢弃公网IP，原ip将无法找回。
:::

只需将你的机器所有的公网ip丢弃，即可切换为NAT，部分地区机器不支持NAT环境。

## NAT ip切换为公网ip

可以在页面新购一个公网ip，新购后NAT ip将会切换为公网ip。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/07/20240717114343_f05ab9a6cc0c9cacb98a77971b75d9ce.png)

