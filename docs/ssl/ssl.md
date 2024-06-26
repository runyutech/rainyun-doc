---
title: 雨云SSL证书
description: 免费申请SSL证书
sidebar_position: 2
---

# SSL证书

为什么会需要SSL证书？

:::info
保证用户信息安全：防止信息泄露、被篡改或窃取。

验证网站真实性：帮助用户识别假冒网站，避免中间人攻击，保护企业健康发展。

提高网站排名：有助于提高网站在搜索引擎中的排名。

提高网站的可信度：使用户更信任安全的网站，提高网站的访问量以及交易的成功率。
:::

## 如何申请SSL证书？

首先进入[免费SSL证书申请页面](https://app.rainyun.com/apps/ssl/list/free-ssl)

然后，在域名列表输入我们的域名 比如 ab.tingyu.icu

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401110214_83d0f4b3353e3b8b50ca1742c98d5b55.png)


然后进入我们的域名DNS界面，下面以阿里云的为例

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211102959_b3bf60b851ebaeb2768b01a32e2ef32f.png)

:::tip
1、记录类型 选择 TXT

2、主机记录，输入 _acme-challenge.二级部分  例如我的是 _acme-challenge.ab 

3、把记录值复制过去即可
:::

最后，等一两分钟，再单击一下 “我已完成解析” 这样就成功创建SSL证书了。

## 如何上传自己的SSL证书？

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/04/20240401110241_d3cb06c2db3f2e47f8ac95e007c804c6.png)


1、单击“上传证书”

2、SSL证书（注意！Nginx格式）
  
   证书内容（.crt）

   密钥内容（.key）

   请直接打开对应文件，全选复制所有内容，然后粘贴到指定的框内，最后单击“保存证书”。

## 常见问题

## 未成功被证书提供商验证成功，请稍后再试

这种情况一般都是因为DNS解析还未生效，或者设置错误。

例如申请的域名列表的是a.abc.com和b.abc.com，需要添加_acme-challenge.a和_acme-challenge.b两个主机头的DNS解析，而不是直接_acme-challenge

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240311153931_723493bbbc8715d7135cc28057ecf950.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/03/20240311153041_09530fb0f8605a74482dc50c1fd1d272.png)
