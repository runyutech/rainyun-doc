---
title: 使用AWS SDK for Python连接到对象存储
description: 使用AWS SDK for Python连接到对象存储
---

## 使用AWS SDK for Python连接到雨云对象存储

有时候我们需要使用代码控制使用对象存储，比如上传、下载文件等。如需要使用Python控制对象存储，我们可以使用Boto3框架操作。

有关更多Boto3框架的操作可以参考[AWS SDK for Python (Boto3)](hhttps://boto3.amazonaws.com/v1/documentation/api/latest/index.html)


首先我们需要在Python项目安装并引入bob3包：

```shell
pip install boto3
```


然后我们可以使用以下代码来连接到对象存储：

```python
        import boto3
        endpoint_url = 'https://cn-sy1.rains3.com'
        access_key = '填入雨云对象存储的AccessKey'
        secret_key = '填入雨云对象存储的SecretKey'
        
        s3 = boto3.client('s3',
                          endpoint_url=endpoint_url,
                          aws_access_key_id=access_key,
                          aws_secret_access_key=secret_key)
        #列出所有的存储桶名
        responses = s3.list_buckets()
        buckets = [bucket['Name'] for bucket in responses['Buckets']]
        print(buckets)
```

配置好对象存储的key后，直接运行代码，如果配置正确并且网络通畅，你将会看到输出的存储桶名。



## 生成预签名URL

有时候我们需要生成一个预签名URL，用于临时授权访问对象存储中的文件。我们可以使用以下代码来生成预签名URL：

```python
 url =  s3.generate_presigned_url( ClientMethod='get_object',
    Params={
        'Bucket': '存储桶名',
        'Key': '文件路径'
    },
    ExpiresIn=3600#链接有效时间,单位秒
)
print(url)
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
