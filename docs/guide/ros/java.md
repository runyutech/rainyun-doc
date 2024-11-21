---
title: 使用AWS SDK for Java连接到对象存储
description: 使用AWS SDK for Java连接到对象存储
---

## 使用AWS SDK for Java 连接到对象存储

有时候我们需要使用代码控制使用对象存储，比如上传、下载文件等。这时候我们可以使用AWS SDK for Java来连接到对象存储。

有关更多S3协议的操作可以参考[ AWS SDK for Java 1](https://docs.aws.amazon.com/zh_cn/sdk-for-java/v1/developer-guide/examples-s3.html)

首先我们需要在maven中引入AWS SDK的依赖：

```xml
<dependency>
    <groupId>com.amazonaws</groupId>
    <artifactId>aws-java-sdk-s3</artifactId>
    <version>1.12.777</version>
</dependency>
```

然后我们可以使用以下代码来连接到对象存储：

```java
        String accessKey = "填入雨云对象存储的AccessKey";
        String secretKey = "填入雨云对象存储的SecretKey";
        String endpoint = "https://cn-sy1.rains3.com";

        AWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey);
        ClientConfiguration clientConfig = new ClientConfiguration();
        clientConfig.setProtocol(Protocol.HTTP);

        AmazonS3 amazonClient = AmazonS3ClientBuilder.standard()
        .withClientConfiguration(clientConfig)
        .withCredentials(new AWSStaticCredentialsProvider(credentials))
        .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endpoint, ""))
        .withPathStyleAccessEnabled(true)
        .build();

        System.out.println("Connection established successfully");

        //列出所有的bucket
        List<Bucket> buckets = amazonClient.listBuckets();
        for (Bucket bucket : buckets) {
        System.out.println("存储桶名：" + bucket.getName());
        }
        
```

如果配置正确并且网络通畅，你将会看到输出的存储桶名。


## 生成预签名URL

有时候我们需要生成一个预签名URL，用于临时授权访问对象存储中的文件。我们可以使用以下代码来生成预签名URL：

```java
            // 设置过期时间为1小时
    java.util.Date expiration = new java.util.Date();
    long expTimeMillis = expiration.getTime();
    expTimeMillis += 1000 * 60 * 60;// 1小时
            expiration.setTime(expTimeMillis);
    
    String bucketName = "存储桶名";
    String path = "文件位置";
    
    //生成预签名URL
    GeneratePresignedUrlRequest generatePresignedUrlRequest =
            new GeneratePresignedUrlRequest(bucketName,path )
                    .withMethod(HttpMethod.GET)
                    .withExpiration(expiration);
    URL url = amazonClient.generatePresignedUrl(generatePresignedUrlRequest);
    
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
