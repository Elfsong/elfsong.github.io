---
layout: post
title: "Implement Trie (Prefix Tree)"
date: 2019-10-03T08:07:31
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

我今天是打算去维妈买螃蟹的。

因为昨天自行车放在学校没有骑回家，所以今天是坐电车去学校的。上车的时候，算了一下边际成本，愉快的刷了卡。

到了州立图书馆之后，本来是说要去吃DonDon的，但是想到学校旁边的Don Tojo就突然想吃点别的了。于是找了一家网红店吃了一份鳗鱼饭。

吃完饭，捋了捋自己狂放不羁的头发，顺道去了一趟理发店。理完发，神清气爽的去了维妈。

发现没开门。

之后回学校坐定开始学校，打算随手水道题，于是瞄了一眼问题列表，选了Trie Tree。

以前写Trie都是要写好久的，但是这次居然五分钟不到就一次性Bug Free了，蛮开心的。

↓Code inside ↓

<!--more-->

```
class TreeNode():
    def __init__(self, val):
        self.val = val
        self.children = dict()
        self.isWord = False

class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TreeNode("#")
        

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        temp = self.root
        
        for c in word:
            if c in temp.children:
                temp = temp.children
            else:
                temp.children = TreeNode(c)
                temp = temp.children
        
        temp.isWord = True
        

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        temp = self.root
        
        for c in word:
            if c in temp.children:
                temp = temp.children
            else:
                return False
        
        return temp.isWord
        

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        temp = self.root
        
        for c in prefix:
            if c in temp.children:
                temp = temp.children
            else:
                return False
            
        return True

        
# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```
