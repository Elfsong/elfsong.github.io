---
layout: post
title: "Compare Version Numbers"
date: 2016-02-09T14:31:38
categories: [Aha moments]
tags: [elfsong.cn]
---

#### Compare two version numbers *version1* and *version2*.

If *version1* > *version2* return 1, if *version1* < *version2* return -1, otherwise return 0.
#### You may assume that the version strings are non-empty and contain only digits and the `.` character.

The `.` character does not represent a decimal point and is used to separate number sequences.<!--more-->For instance, `2.5` is not “two and a half” or “half way to version three”, it is the fifth second-level revision of the second first-level revision.
#### Here is an example of version numbers ordering:

```
0.1 < 1.1 < 1.2 < 13.37
```

Solving method：

```
class Solution(object):
    def compareVersion(self, version1, version2):
        parts1 = [int(x) for x in version1.split('.')]
        parts2 = [int(x) for x in version2.split('.')]
   
        # fill up the shorter version with zeros ...
        lendiff = len(parts1) - len(parts2)
        if lendiff > 0:
            parts2.extend([0] * lendiff)
        elif lendiff < 0:
            parts1.extend([0] * (-lendiff))
   
        for i, p in enumerate(parts1):
            ret = cmp(p, parts2[i])
            if ret: return ret
        return 0
```
