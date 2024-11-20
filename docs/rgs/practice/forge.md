# 在MCSM上为Minecraft服务器安装指定版本Forge


## 安装到目前已有的MC版本

如果需要在我们已经提供了原生服务端的mc但并没有提供Forge服务端的mc上安装Forge服务端，可以通过以下步骤进行：

### 在雨云控制台更换为需要的原生服务端版本

   ![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120120532_40d97fdb7fbed273f605a7c2f7d24d26.png)

### 下载需要的forge版本
   到[forge官网](https://files.minecraftforge.net/net/minecraftforge/forge/)下载需要的Forge安装程序。

   ![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120120730_79a2aec653c7f3a1642a67ea8e750799.png)

###  使用面板或者SFTP将下载的Forge安装程序上传到MCSM的根目录。

    上传文件方法可以[参考文档操作](https://www.rainyun.com/docs/rgs/practice/MCSMFileManage)。

### 修改启动版本并运行

   上传完成后，进入面板文件管理，并修改启动脚本文件，将命令修改为：
    
   ```shell
   java -jar forge-******.jar  --installServer 
   ```

   其中`forge-******.jar`为你上传的forge安装程序的文件名。

![](https://cn-sy1.rains3.com/rainyun-assets/pic/2024/11/20241120123457_26845a8ee866344ab9ab7ed05876259b.png)


保存修改后，点击启动即可安装forge服务端，安装完成后程序会自动停止，日志会提示“success”。

 再次修改启动脚本文件，将命令修改为：

   ```shell
   sh ./run.sh
   ```
   保存后运行即可。

## 安装到我们没有提供的MC版本

可以参考[在MCSM上安装任意版本的Minecraft java服务端](https://www.rainyun.com/docs/rgs/practice/mcinstall)

安装成功搭建并运行后，继续按照上方文档操作搭建即可。