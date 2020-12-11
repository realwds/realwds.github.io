---
title: 奇技淫巧
date: 2020-12-11 15:35:01
permalink: /more/one
sidebar: auto
article: true
---

## GitHub国内加速访问

#### 1、访问 https://www.ipaddress.com/ip-lookup

#### 2、分别查询以下 5个链接 对应的 IP地址，查询一个之后，在下面的“Perform another IP Lookup”框里可以继续查询。

1. github.com
2. gist.github.com
3. github.global.ssl.fastly.net
4. assets-cdn.github.com
5. raw.githubusercontent.com

assets-cdn.github.com 查询得到如下四个链接，请使用cmd分别ping四个链接，查看访问速度最快的（ctrl+C结束ping）

> 185.199.108.153
>
> 185.199.109.153
>
> 185.199.110.153
>
> 185.199.111.153

#### 3、修改hosts文件，添加内容（因为每个人网络环境不同，请务必自行采用本地查询结果，不要直接复制！！！）

```
140.82.114.4 github.com
140.82.114.3 gist.github.com
199.232.69.194 github.global.ssl.fastly.net
185.199.109.153 assets-cdn.github.com
199.232.96.133 raw.githubusercontent.com
199.232.96.133 gist.githubusercontent.com
199.232.96.133 cloud.githubusercontent.com
199.232.96.133 camo.githubusercontent.com
199.232.96.133 avatars0.githubusercontent.com
199.232.96.133 avatars1.githubusercontent.com
199.232.96.133 avatars2.githubusercontent.com
199.232.96.133 avatars3.githubusercontent.com
199.232.96.133 avatars4.githubusercontent.com
199.232.96.133 avatars5.githubusercontent.com
199.232.96.133 avatars6.githubusercontent.com
199.232.96.133 avatars7.githubusercontent.com
199.232.96.133 avatars8.githubusercontent.com
```

> windows系统的hosts文件的位置如下：`C:\Windows\System32\drivers\etc\host`
>
> mac/linux系统的hosts文件的位置如下：`/etc/hosts`

因为需要管理员权限，无法直接在文件上修改，请复制hosts到桌面，更改之后再复制替换。

#### 4.cmd运行以下代码刷新DNS

```
ipconfig /flushdns
```

#### 5.打开Github进行测试，成功！