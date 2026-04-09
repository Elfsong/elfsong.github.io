---
layout: post
title: "Contains Duplicate"
date: 2016-01-20T18:59:00
categories: [Aha moments]
tags: [elfsong.cn]
---

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

```
class Solution {
public:
    bool containsDuplicate(vector<int>& nums)
    {
        if(nums.empty())
            return false;
            
        set<int> s;
        vector<int>::iterator itr = nums.begin();
        
        while(itr != nums.end())
        {
            if(s.count(*itr) == 1)
                return true;
            s.insert(*itr);
            itr++;
        }
        return false;
    }
};
```
