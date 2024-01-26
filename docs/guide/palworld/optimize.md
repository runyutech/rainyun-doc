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

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240126163601_3ef7d1c4e0be2133b59a5164d1c4877e.png)


#### linux/面板
下载linux文件，替换下面路径的**PalServer-Linux-Test**<br/>
`pal\pal\binaries\linux\`

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240126163646_96e36adf6716d78a2170c3bd7dbf041c.png)


## Windows清理内存
**memreduct下载地址**：https://github.com/henrypp/memreduct/releases

## 多核优化
启动参数添加` -useperfthreads -NoAsyncLoadingThread -UseMultithreadForDS`

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/01/20240126163527_c4e5f149e70037bc9651c373102b59f1.png)
