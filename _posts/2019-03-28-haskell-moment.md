---
layout: post
title: "Haskell moment"
date: 2019-03-28T14:12:43
categories: [Aha moments, Atypical programmer]
tags: [elfsong.cn]
---

Here are some Haskell code chunks, which both are simple recursion algorithms.

Quicksort is a sort of poster child for Haskell because everyone does it to showcase how elegant Haskell is.

```
quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
let smallerSorted = quicksort [a | a <- xs, a <= x]
    biggerSoted = quicksort [a | a <- xs, a > x]
in smallerSorted ++ [x] ++ biggerSoted
```

```
maximum' :: (Ord a) => [a] -> a
maximum' [] = error "List is empty!"
maximum' [x] = x
maximum' (x:xs) = (max x (maximum' xs))

replicate' :: Int  -> b -> [b]
replicate' n x
    | n <= 0 = []
    | otherwise = (x:(replicate' (n-1) x))

take' :: Int -> [a] -> [a]
take' n (x:xs)
    | n <= 0 = []
    | otherwise = x:(take' (n-1) xs)

reserve' :: [a] -> [a]
reserve' [] = []
reserve' (x:xs) = (reserve' xs) ++ [x]
```
