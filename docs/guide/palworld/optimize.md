---
sidebar_position: 2
---


# 服务端优化

## 非官方修复内存泄漏和高CPU负载的版本
:::info
Bug未知，请自行测试
:::
### 下载地址：
> Github:https://github.com/VeroFess/PalWorld-Server-Unoffical-Fix<br/>
> 哔哩哔哩:https://www.bilibili.com/read/cv30124885

### 使用方法
下载对应的文件，替换即可。

#### Windows：
下载.exe后缀版本，替换下面路径的**PalServer-Win64-Test-Cmd**<br/>
`PalServer\Pal\Binaries\Win64\`

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240126163923_79e56ae6fcdeb7e17fc0be692664b303.png)


#### linux/面板
下载linux文件，替换下面路径的**PalServer-Linux-Test**<br/>
`pal\pal\binaries\linux\`

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240126163646_96e36adf6716d78a2170c3bd7dbf041c.png)


## Windows清理内存
**memreduct下载地址**：https://github.com/henrypp/memreduct/releases

## 多核优化
启动参数添加` -useperfthreads -NoAsyncLoadingThread -UseMultithreadForDS`

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240126163527_c4e5f149e70037bc9651c373102b59f1.png)

## 修改服务器帧率
使用方法：添加下面两行到`PalServer\Pal\Saved\Config\Server\Engine.ini`中。

配置一般的也可以锁垂直同步60帧率，即使serverFps玩下去只有30帧，依然可以减少回溯现象。

> [/Script/OnlineSubsystemUtils.IpNetDriver]
>
> NetServerMaxTickRate =90

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240126171505_9d686695fd338ef13442ab413ecc1b07.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240126171527_03a2a91a266a6c15b73f8e1c72d4de92.png)

