---
layout: post
title: "Excel Sheet Column Title"
date: 2016-01-21T22:55:33
categories: [Aha moments]
tags: [elfsong.cn]
---

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

> ```
>     1 -> A
>     2 -> B
>     3 -> C
>     ...
>     26 -> Z
>     27 -> AA
>     28 -> AB
> ```

这题看起来不难，但居然做了我两个小时。其中还是有很多值得注意一下的地方的。

```
def convertToTitle2(n):
    ret = ""
    while(n):
        ret = chr( (n-1)%26 + 65 ) + ret
        n = (n-1)/26 #核心
    return ret
```

先贴一下最后AC的代码。我之前用了很长的代码去判断字符进位的情况，但效果都不理想。
