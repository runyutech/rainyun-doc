# 在MCSM上安装任意版本的Minecraft 基岩版本

## 下载对应的基岩服务端

修改下载链接，*号**替换为对应的版本号**，版本号必须精确，例如1.21.44.01

`https://www.minecraft.net/bedrockdedicatedserver/bin-linux/bedrock-server-******.zip`

## 切换MCSM运行环境

在雨云管理后台，点击切换/重装，选择纯环境并选择Linux环境，点击确定即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120155609_4c1f25e6b507d8c4f0fa88d10590189c.png)

##  上传服务端到MCSM的根目录。

    上传文件方法可以[参考文档操作](https://www.rainyun.com/docs/rgs/practice/MCSMFileManage)。

## 解压服务端

上传完成之后，找到上传的服务端压缩包，点击解压。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120155829_29c0a1ce1ccd25e1618cdf5fb39a9571.png)

## 配置启动脚本并运行

解压完成后，配置`启动脚本(可修改).sh`文件，将命令修改为：

```shell
LD_LIBRARY_PATH=. ./bedrock_server
```

配置完成后保存，然后回到控制台点击开启即可。