---
layout: post
title: "Evaluate Division"
date: 2019-10-03T09:54:39
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Equations are given in the format `A / B = k`, where `A` and `B` are variables represented as strings, and `k` is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return `-1.0`.

**Example:**
Given `a / b = 2.0, b / c = 3.0.`
queries are: `a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .`
return `[6.0, 0.5, -1.0, 1.0, -1.0 ].`

The input is: `vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries `, where `equations.size() == values.size()`, and the values are positive. This represents the equations. Return `vector<double>`.

According to the example above:

```
equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
```

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

```
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        graph = dict()
        
        # Build graph
        for (a, b), value in zip(equations, values):                
            graph[a] = graph.get(a, []) + [(b, value)]
            graph[b] = graph.get(b, []) + [(a, 1/value)]

            
        def check(source, target):   
            # If there is any one number of the query didn't appear in the graph, answer certainly doesn't exist.
            if source not in graph or target not in graph:
                return -1.0
            
            visited = set()
            stack = collections.deque([(source, 1.0)])
            
            while stack:
                front, current = stack.popleft()
                
                if front == target:
                    return current
                
                visited.add(front)
                
                for back, value in graph[front]:
                    if back not in visited:
                        stack.append((back, current * value))
            
            return -1.0
        
        return [check(source, target) for (source, target) in queries]
```
