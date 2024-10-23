---
title: 使用JAVA AWS SDK 连接到对象存储
description: 使用JAVA AWS SDK 连接到对象存储
---

## 使用JAVA AWS SDK 连接到对象存储

有时候我们需要使用代码控制使用对象存储，比如上传、下载文件等。这时候我们可以使用JAVA AWS SDK来连接到对象存储。

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
