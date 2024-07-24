---
title: 防火墙
description: 防火墙
sidebar_position: 6
---

# 防火墙

防火墙是一种网络安全系统，用于监控和控制网络通信，它根据一组预定义的安全规则，允许或阻止进出网络的流量。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211155803_174a295ed8557ff98040bc8046d72961.png)

| 字段 | 优先级	     | 动作    | 源地址	 | 端口	  | 协议	  | 启用   | 操作   |
|----|----------|-------|------|------|------|------|------|
| 说明 | 优先级高的先执行 | 允许/拒绝 | 入站地址 | 入站端口 | 入站协议 | 是否启用 | 操作策略 |
:::info
* 动作为**允许**相当于加入**白名单**,丢弃则相当于黑名单 <br/>
* 除了直接写ip之外,源地址还支持**CIDR**/**范围**/**逗号分割**(`不能混用`)<br/>
  - 源地址规则： 0.0.0.0/0(代表所有IP)或0.0.0.0-255.255.0.0或114.114.114.114,191.191.191.191<br/>
* 端口支持范围格式和逗号分割(范围和逗号不能混用)<br/>
  - 如: 1000:2000(代表1到2千的端口)或22,80,443分割格式
:::


## 防火墙规则

### 创建规则
1. 找到您的产品，进入服务器管理页面。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211150725_4c020bcca55c07770891dca49ada518b.png)
2. 点击防火墙。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211155445_5246fa4a29305c491feaf530c665bca5.png)
3. 按上方介绍填入规则。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211160702_61bf545db1db5c17b3ce4c8c4fb35851.png)

### 调整优先级
在规则列表里拖动规则即可调整优先级。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211160824_d17b08585c999003f10b550a204f23e7.png)

### 编辑规则
在规则列表里点击对应按钮即可编辑规则。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2023/12/20231211160915_0e403f0f437ccfdf6f392cc1e5e7c0d2.png)