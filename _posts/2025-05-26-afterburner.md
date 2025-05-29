---
layout: post
title: Afterburner
date: 2024-01-26 16:03:00
description: By Humans, Beyond Humans.
tags: math
categories: academia
chart:
  echarts: true
---

{
    "title": {
        "text": "Model Performance Over Iterations",
        "subtext": "Venus - Subset Pass@1"
    },
    "responsive": true,
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "top": "50px",
        "data": ["Base Model", "Afterburner 3B-SFT", "Afterburner 3B-DPO", "Afterburner 3B-GRPO"]
    },
    "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "3%",
        "containLabel": true
    },
    "toolbox": {
        "feature": {
        "saveAsImage": {}
        }
    },
    "xAxis": {
        "type": "category",
        "boundaryGap": false,
        "data": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    "yAxis": {
        "type": "value",
        "name": "Pass@1"
    },
    "series": [
        {
            "name": "Base Model",
            "type": "line",
            "data": [27.99, 28.33, 28.67, 28.67, 29.00, 29.08, 29.17, 29.24, 29.33, 29.33, 29.33]
        },
        {
            "name": "Afterburner 3B-SFT",
            "type": "line",
            "data": [46.00, 46.00, 46.33, 47.00, 48.33, 48.33, 48.67, 48.67, 48.67, 48.67, 48.67]
        },
        {
            "name": "Afterburner 3B-DPO",
            "type": "line",
            "data": [43.00, 50.00, 51.33, 51.50, 51.67, 51.67, 51.67, 51.67, 51.67, 51.67, 51.67]
        },
        {
            "name": "Afterburner 3B-GRPO",
            "type": "line",
            "data": [47.33, 50.33, 52.00, 54.50, 57.00, 58.17, 59.34, 60.50, 61.18, 61.67, 61.67]
        }
    ]
}
