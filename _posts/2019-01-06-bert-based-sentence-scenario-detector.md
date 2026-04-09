---
layout: post
title: "BERT based sentence scenario detector"
date: 2019-01-06T08:29:00
categories: [Aha moments, Atypical programmer, MicroSoft Time]
tags: [elfsong.cn]
---

前两天用简单的多层感知器搭建了一个Word-level的detector模型。在模型的最后一次是用来Softmax，将Output Layer进行了分类。

对于场景识别这个问题，我目前先规定了可选的类别（比如Forest/ Ocean/ River/ College/ Suburb/ etc.）。这样一方面来说，可以简化detector的工作流程，另外也比较适应我们组目前的资源情况（识别场景之后需要提取事先准备好的Background，如果提取出了新的element也是无法获取到background resource的）。

上周我的想法是先使用Word embedding将Sentence转化为Sequence，然后使用Bi-LSTM或者直接使用Linear CRF对Sequence进行Sequence Tagging，以提取Sentence中涉及场景的Word。最后通过Word-level detector分析所选的Word，得到Sentence-level Scenario。

不过经过实验我发现，由于我手上只有不到500个短篇的儿童故事，还是没有标注的那种。就算我全部拿来进行标注，也只能生成不到5000个Phases。因为Labeler的资源比较紧张，我先用第一版的词表Detector模型生成了Labeling data，丢到CRF里面之后发现出了Person-entities，其他的类别基本无法有效识别出来。

于是这种方法暂时宣告失败。

周五晚上在公司发呆，突然觉得可以试一试力大砖飞的方法，直接使用Sentence-level embedding来作为Input。在这个模型里加入了CNN Layer，但其实单靠Dense Full connect Layer就已经可以在这个数据集上达到同样的效果了。

```
# 模型构建
model = Sequential([
    Conv1D(filters=5, kernel_size=5, strides=1, padding='valid', input_shape=(768, 1), name="Convolution_Layer_1"),
    AveragePooling1D(pool_size=5, strides=1, padding="valid", name="Pooling_Layer_1"),

    Conv1D(filters=5, kernel_size=5, strides=1, padding='valid', name="Convolution_Layer_2"),
    AveragePooling1D(pool_size=5, strides=1, padding="valid", name="Pooling_Layer_2"),

    Flatten(name="Flatten_Layer"),

    Dense(256, input_dim=3760, name="Dense_Layer_1"),
    Activation('relu'),
    Dropout(0.1),

    Dense(32, input_dim=256, name="Dense_Layer_2"),
    Activation('relu'),
    Dropout(0.1),

    Dense(11, input_dim=32, name="Dense_Layer_3"),
    Activation('softmax'),
])
```
