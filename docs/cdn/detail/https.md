# https配置

## 配置https

可以配置是否使用https访问，开启https前，需要绑定你的证书，支持[手动上传](https://app.rainyun.com/apps/ssl/list/ssl-order)或者直接申请。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/10/20241016163809_4a77dd4fdcfcefef80e4f40a8ec4e47d.png)

## 强制https

开启后将强制将用户访问重定向到HTTPS，并在跳转时默认携带location头。如果域名未配置证书，HTTPS请求将使用默认证书进行访问。为了安全性，建议在配置SSL证书后再启用此功能。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/10/20241016163848_a9fbc97b35bc8376826f365cf466ba74.png)
