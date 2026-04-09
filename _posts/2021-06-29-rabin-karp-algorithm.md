---
layout: post
title: "Rabin–Karp algorithm"
date: 2021-06-29T13:57:24
categories: [Aha moments, Atypical programmer, Leetcode]
tags: [elfsong.cn]
---

I know it have been a long while that I do not update my website. Even missed the entire May…

Actually, I am confused about my future path during these two months. I got a bunch of offers from different places. However, I don’t even know where should I go ultimately.  

So I just try to learn some new stuff as I can to kill the time…

Rabin-Karp is a kind of string searching algorithm which created by [Richard M. Karp](https://en.wikipedia.org/wiki/Richard_M._Karp) and [Michael O. Rabin](https://en.wikipedia.org/wiki/Michael_O._Rabin). It uses the rolling hash to find an exact match of pattern in a given text. Of course, it is also able to match for multiple patterns.

```
def search(pattern, text, mod):
    # Let d be the number of characters in the input set
    d = len(set(list(text)))
    
    # Length of pattern     
    l_p = len(pattern)
    
    # Length of text
    l_t = len(text)
    
    p = 0
    t = 0
    h = 1
    
    # Let us calculate the hash value of the pattern
    # hash value for pattern(p) = Σ(v * dm-1) mod 13 
    #                           = ((3 * 102) + (4 * 101) + (4 * 100)) mod 13 
    #                           = 344 mod 13 
    #                           = 6     
    for i in range(l_p - 1):
        h = (h * d) % mod

    # Calculate hash value for pattern and text
    for i in range(l_p):
        p = (d * p + ord(pattern[i])) % mod
        t = (d * t + ord(text[i])) % mod

    # Find the match
    for i in range(l_t - l_p + 1):
        if p == t:
            for j in range(l_p):
                if text[i+j] != pattern[j]:
                    break

            j += 1
            if j == l_p:
                print("Pattern is found at position: " + str(i+1))

        if i < l_t - l_p:
            t = (d*(t-ord(text[i])*h) + ord(text[i+l_p])) % mod

            if t < 0:
                t += mod

text = "ABCCCDCCDDAEFG"
pattern = "CDD"
search(pattern, text, 13)
```
