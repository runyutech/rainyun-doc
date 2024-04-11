# 1panel面板

## [1panel面板](https://1panel.cn/docs/)是什么？
[1panel面板](https://1panel.cn/docs/) 开源，现代化 新一代的 Linux 服务器运维管理面板

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240409150826_5cc21e45cd825a2ee162144f829b9a92.png)


## 产品优势

高效管理：用户可以通过 Web 图形界面轻松管理 Linux 服务器，实现主机监控、文件管理、数据库管理、容器管理等功能；

快速建站：深度集成开源建站软件 WordPress 和 Halo，域名绑定、SSL 证书配置等操作一键搞定；

应用商店：精选上架各类高质量的开源工具和应用软件，协助用户轻松安装并升级；

安全可靠：基于容器管理并部署应用，实现最小的漏洞暴露面，同时提供防火墙和日志审计等功能；

一键备份：支持一键备份和恢复，用户可以将数据备份到各类云端存储介质，永不丢失。

## 安装部署

### 预安装

目前雨云直接支持预安装1panel面板，只需要在购买/重装时选择1panel面板即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240311103038_49c9dd47f8b2aac1c0bbf083de61ddb3.png)

预安装的1panel面板可能没有显示密码，需要您手动连接到服务器重置密码,**修改密码可执行命令：1pctl update password**。

### 手动安装

如果您需要自己手动安装1panel面板，可以连接到服务器之后执行下面安装命令，安装完成后会显示面板的登录地址和初始密码，安装脚本请选择对应的系统执行即可。

> **RedHat / CentOS**
> ```bash
> curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
> ```

> **Ubuntu**
> ```bash
> curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
> ```
> **Debian**
> ```bash
> curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
> ```

安装成功后，控制台会打印面板访问信息，可通过浏览器访问 1Panel： <br/>
`http://目标服务器 IP 地址:目标端口/安全入口`<br/>
如果使用的是云服务器，请至安全组开放目标端口。<br/>
ssh 登录 1Panel 服务器后，执行 1pctl user-info 命令可获取安全入口（entrance）<br/>

更多教程可以查询[1panel官方文档](https://1panel.cn/docs/)或者[雨云官方论坛](https://forum.rainyun.com/search?q=1panel)。

## 常见问题

如果在使用过程中1panel遇到问题，可以到[1panel文档](https://1panel.cn/docs/faq/faq/)查询一下，如果未能解决，可以到1panel官方社区提问。