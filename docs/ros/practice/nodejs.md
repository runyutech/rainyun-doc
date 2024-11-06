---
title: 使用AWS SDK for JavaScript连接到对象存储
description: 使用AWS SDK for JavaScript连接到对象存储
---

## 使用AWS SDK for JavaScript连接到对象存储

有时候我们需要使用代码控制使用对象存储，比如上传、下载文件等。这时候我们可以使用NodeJS AWS SDK来连接到对象存储。

有关更多S3协议的操作可以参考[ AWS SDK for JavaScript](https://docs.aws.amazon.com/zh_cn/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html)


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


## 其他语言

如果需要使用其他编程语言使用S3协议，可以参考以下链接：

|     语言     |                                                                          访问地址                                                                          | SDK 版本  |
|:----------:|:------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------:|
|    .NET    |                                    [dotnetv3/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/dotnetv3)                                     |  3.5+   |
|    .NET    |                                      [dotnet/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/.dotnet)                                      |   3.5   |
|    C++     |                                         [cpp/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/cpp)                                          |    1    |
|     Go     |                                        [gov2/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/gov2)                                         |    2    |
|     Go     |                                          [go/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/go)                                           |    1    |
|    Java    |                                      [javav2/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javav2)                                       |    2    |
|    Java    |                                        [java/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/java)                                         |    1    |
| JavaScript |                                [javascriptv3/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3)                                 |    3    |
| JavaScript |                                  [javascript/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascript)                                   |    2    |
|   Kotlin   |                                      [kotlin/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/kotlin)                                       |    1    |
|    PHP     |                                         [php/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/php)                                          |    3    |
|   Python   |                                      [python/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/python)                                       |    3    |
|    Ruby    |                                        [ruby/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/ruby)                                         |    3    |
|    Rust    |                                      [rustv1/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/rustv1)                                       |    1    |
|   Swift    |                                       [swift/](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/swift)                                        | preview |
