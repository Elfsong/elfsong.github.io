---
layout: post
title: "Google Authenticator"
date: 2017-08-17T17:38:38
categories: [Aha moments]
tags: [elfsong.cn]
---

因为公司的服务器有双因子登录，每次都需要输入Token，这就很麻烦了，于是就打算抽空做一个实体化的Token出来。

话说最核心的部分就是需要利用Secret Key计算出当前时间的Token, Google已经开源了这套算法，看了一下不难，就用python改写了一个出来，打算给树莓派或者MicroPython的板子用。

```
import hmac, base64, struct, hashlib, time
def get_hotp_token(secret, intervals_no):
    key = base64.b32decode(secret, True)
    h = struct.pack(">Q", intervals_no)
    o = hmac.new(key, h, hashlib.sha1).digest()
    t = ord(o[19]) & 15
    p = (struct.unpack(">I", o[t:t+4])[0] & 0x7fffffff) % 1000000
    return p
def get_token(secret):
    return get_hotp_token(secret, intervals_no=int(time.time())//30)
```

其实一直想做一个辉光管的显示器的，但是上某宝看了一下价格后想想还是算了…然后打算找个贴片的数码管做，又觉得效果不会太好。现在想到的方案是用MicroPython来做主控，上个集成的数码管就好。

另外，经过无数次被国产的板子坑的经历，我强烈建议如果你想要入门学习硬件，千万不要图便宜选一个国产的仿制版。真的是一分价钱一分货，我当时因为原装的MicroPython没有办法及时拿到货，就偷懒买了淘宝上的仿制品，结果坑多到让你怀疑人生。
