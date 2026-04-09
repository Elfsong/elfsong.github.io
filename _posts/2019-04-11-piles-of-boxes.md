---
layout: post
title: "Piles of Boxes"
date: 2019-04-11T05:56:47
categories: [Aha moments]
tags: [elfsong.cn]
---

Several days ago, I’ve joined a Hackathon that sponsored by Facebook. 

As qualifying people to this event, they hand out an easy algorithm question. Shortly, you need to calculate how less time to move a bunch of boxes in same heigh.

Here is a solution for reference:

<hr class="wp-block-separator"/>

```
import collections

def box(boxesInPiles):
    sortBoxes = collections.OrderedDict(sorted(collections.Counter(boxesInPiles).items()))
    count = 0
    for index, key in enumerate(sortBoxes):
        count += index * sortBoxes[key]
    return count

print(box([4, 5, 5, 2, 4]))
```
