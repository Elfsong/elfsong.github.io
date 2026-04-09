---
layout: post
title: "Increment One"
date: 2019-09-28T10:02:41
categories: [Uncategorized]
tags: [elfsong.cn]
---

```
__asm
{
        moveax,  dword ptr[i]
        inc eax
        mov dword ptr[i], eax
}
```

```
lock inc dword ptr[i]
```
