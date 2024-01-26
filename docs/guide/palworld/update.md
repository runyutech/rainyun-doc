# 服务端更新教程

## 幻兽VPS服务端更新教程

**steam客户端**的可以直接更新。

**steamcmd更新方法**

`steamcmd.exe`所在目录打开命令行输入下面指令(或者新建bat文件里面输入下面命令后双击运行)

```shell
steamcmd +login anonymous +app_update 2394010 validate +quit
```

**面板更新方法:**

文件管理中,`启动脚本`内容改成
```shell
#更新
export HOME=/workspace
bash ~/steamcmd/steamcmd.sh +force_install_dir ~/pal +login anonymous +app_update 2394010 validate +quit
#启动
groupadd pal && useradd pal -g pal -p pal && chown -R pal:pal pal && runuser -l pal -c "export HOME=/workspace/pal && ./pal/PalServer.sh port=8211 -useperfthreads -NoAsyncLoadingThread -UseMultithreadForDS "

```
后续需要更新,直接先在游戏输入/Save并保存成功后,重启实例即可