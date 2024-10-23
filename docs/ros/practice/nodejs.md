---
title: 使用NodeJS AWS SDK 连接到对象存储
description: 使用NodeJS AWS SDK 连接到对象存储
---

## 使用NodeJS AWS SDK 连接到对象存储

有时候我们需要使用代码控制使用对象存储，比如上传、下载文件等。这时候我们可以使用NodeJS AWS SDK来连接到对象存储。

首先我们需要在Nodejs项目安装中引入AWS SDK包：

```shell
npm i @aws-sdk/client-s3
```


然后我们可以使用以下代码来连接到对象存储：

```javascript
        const S3 = require("@aws-sdk/client-s3");
        const {ListBucketsCommand} = require("@aws-sdk/client-s3");
        const { S3Client, PutObjectCommand } = S3;
        const region = "rainyun";
        const s3Client = new S3Client({
            region,
            endpoint: `https://cn-sy1.rains3.com`,
            credentials: {
                accessKeyId: "填入雨云对象存储的AccessKey",
                secretAccessKey: "填入雨云对象存储的SecretKey",
            },
        })

        s3Client.send(new ListBucketsCommand({})).then(data=>console.log(data));
        
```

配置好对象存储的key后，直接运行代码，如果配置正确并且网络通畅，你将会看到输出的存储桶名。



## 生成预签名URL

有时候我们需要生成一个预签名URL，用于临时授权访问对象存储中的文件。我们可以使用以下代码来生成预签名URL：

```javascript
const {GetObjectCommand} = require("@aws-sdk/client-s3");
const presigner = require("@aws-sdk/s3-request-presigner");
const command = new GetObjectCommand({ Bucket: "存储桶名", Key: "文件路径" });
const exp_time = 60 * 60//设置有效期一小时
presigner.getSignedUrl(s3Client,command,exp_time).then(data=> console.log(data))
```
