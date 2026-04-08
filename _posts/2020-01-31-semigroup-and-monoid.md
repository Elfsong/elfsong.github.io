---
layout: post
title: "Semigroup and Monoid"
date: 2020-01-31T05:57:09
categories: [Aha moments]
tags: [elfsong.cn]
---

Credit to reminder – My sweet piggy

Today is the last day of January. It would be my last chance to complete this blog, otherwise I will miss this lovely month. 

In this month, I have went to a new company as a FTE, and simultaneously happened to meet an epic epidemic that overwhelming in Mainland China. The government suggests citizens stay at home, so I am suddenly aware of that I can enjoy this great time at home and read some books.

Semigroup is a fancy concept in math and programming. Let’s say there is a set S and a binary operation ✕ on this set: S ✕ S ➞ S, if ✕ meets the binding law, that is ∀ x, y, z ∈ S, (x ✕ y) ✕ z = x ✕ (y ✕ z). Then the ordered pair (S, ✕) is called a semigroup.

For example, S = {1,2,3,4,5, …}, (2 + 3) + 4 = 2 + (3 + 4) = 9.

```
infix operator <> : AdditionPrecedence

protocol Semigroup {
    static func <> (lhs: Self, rhs: Self) -> Self
}
```

Protocol semigroup declares a calculation method of that two arguments and the return value achieve an identical semigroup type. We called this method as Append. Following is the specific achievements of String and Array.

```
extension String: Semigroup {
    static func <> (lhs: String, rhs: String) -> String {
        return lhs + rhs
    }
}

extension Array: Semigroup {
    static func <> (lhs: [Element], rhs: [Element]) -> [Element] {
        return lhs + rhs
    }
}

func test() {
    let hello = "Hello "
    let world = "world"
    let helloWorld = hello <> world
    
    let one = [1,2,3]
    let two = [4,5,6,7]
    let three = one <> two
}
```

Next, we are moving to the Monoid part. 

Monoid is a kind of semigroup, with an extra attribute named Identity, that is an element E on the set S of the semigroup. Any element A in the set S conforms to A ✕ E = E ✕ A = A.

e.g. 0 + x = x in the natural number set.

```
protocol Monoid: Semigroup {
    static var empty: Self { get }
}

extension String: Monoid {
    static var empty: String { return "" }
}

extension Array: Monoid {
    static var empty: [Element] { return [] }
}

func test() {
let str = "Hello world" <> String.empty // Always "Hello world"
let arr = [1,2,3] <> [Int].empty // Always [1,2,3]
}
```

This article is not finish, stay tuned.
