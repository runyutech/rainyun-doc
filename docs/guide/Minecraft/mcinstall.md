# 在MCSM上安装任意版本的Minecraft Java服务端

如果需要在MCSM上运行我们没有提供的Minecraft Java版本，可以参考文档操作安装搭建。
    
## 切换MCSM运行环境

在雨云管理后台，点击切换/重装，选择纯环境并选择Java，然后选择java21，点击确定即可。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120145157_131053887b7eb6d8e64b8dd81592ebbd.png)
## 获取需要的Minecraft java服务端

需要下载的Minecraft Java服务端可以到[mcversions](https://mcversions.net/)下载。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120145756_06ed3feecd5299cadd12a4c8544a4dda.png)

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120150035_80ad69d6424f3b60ec878e8f4498026f.png)

##  上传核心到MCSM的根目录。

    上传文件方法可以[参考文档操作](https://www.rainyun.com/docs/rgs/practice/mcsmFileManage)。

## 配置启动脚本并运行

上传完成后，进入面板文件管理，并修改启动脚本文件，将命令修改为：

   ```shell
   java -jar server.jar  --installServer 
   ```
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120150707_fbba202d933c53b43f1cbc48a00c7275.png)

## 新增eula.txt文件

在MCSM的根目录下新建一个eula.txt文件，文件内容为：

   ```shell
   eula=true
   ```
![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120150727_fbe5c5cf24ecadaa4fd611bd20e0eff6.png)

## 启动服务器

配置完成后，返回控制台，点击开启即可。


