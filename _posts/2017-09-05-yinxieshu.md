---
layout: post
title: "隐写术"
date: 2017-09-05T22:29:59
categories: [Aha moments]
tags: [elfsong.cn]
---

我们知道，图片上的每一个像素点都是由（r, g, b）三个颜色通道组成的，轻微的改动其中的像素值肉眼并无法察觉。利用这一点，我们就可以在图片中隐写大量的信息。

[![](/assets/img/blog/2017/09/1.png)](http://www.elfsong.cn/1111/1-2/)

在the First Lady of the Internet的图片中，三个通道都隐写了信息，我们可以通过python的Pillow库进行图片处理，从而得到隐写的内容。

BTW， 女神[原图](http://www.lenna.org/full/l_hires.jpg)有福利 (~.~)

```
from PIL import Image
import matplotlib.pyplot as plt
img = Image.open('1.png')
pix = img.load()
for i in range(img.size[0]):
    for j in range(img.size[1]):
        (r, g, b) =  pix[i, j]
        pix[i, j] = (0, 0, r%2*255)
img.show()
```

最后，放一张鹅厂Alloy Team女神小兰的图吧，至于福利怎么找，我猜你应该懂的。

[![](/assets/img/blog/2017/09/xiaolan.png?resize=256%2C256)](/assets/img/blog/2017/09/xiaolan.png)
