---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "位元運算"
subtitle: ""
summary: ""
authors: ["Chia-An Lee"]
tags: ["coding"]
categories: ["elegant programming", "elegant code"]
date: 2022-03-23T07:48:37+08:00
lastmod: 2022-03-23T07:48:37+08:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

最近迷上有趣的位元運算，發現原來有很多可玩的地方，所以就簡單紀錄一下
這裡幾乎都是以 32 bit 為主，若 64 bit 請自行擴充

## ABS
取絕對值
```c=
int abs(int n) {
  return ((n >> 31) ^ n) - (n >> 31);
}
```

## Count 1
計算 1 存在的數量
```c=
int count_1(uint32_t n) {
    n = (n & 0x55555555) + ((n & 0xAAAAAAAA) >> 1);
    n = (n & 0x33333333) + ((n & 0xCCCCCCCC) >> 2);
    n = (n & 0x0F0F0F0F) + ((n & 0xF0F0F0F0) >> 4);
    n = (n & 0x00FF00FF) + ((n & 0xFF00FF00) >> 8);
    n = (n & 0x0000FFFF) + ((n & 0xFFFF0000) >> 16);
    return n;
}
```

或用 `Brian Kernighan's Algorithm`，此算法主要是由觀察 `n` 與 `n-1` 的 `&` 會把最小非零位元歸零 `x..x10..0 & x..x01..1 = x..x00..0`
```c=
int count_1(uint32_t n) {
  int distance = 0;
  while (n != 0) {
    distance += 1;
    // remove the rightmost bit of '1'
    n &= n - 1;
  }
  return distance;
}
```

# Pow of 2
簡單來說就是檢查 `Count 1 == 1`，所以可以用前面的方法。

但 `Brian Kernighan's Algorithm` 的想法延伸可以找到更簡單作法，
`n` 與 `n-1`，如果 `n` 呈現為 `xx...x10...0`，而 `n-1` 為 `xx..x01...1`，相 `&` 後為 `xx...x00...0`，及 n 的最低位非 0 以下都會被壓縮成 0。
```c=
bool isPowerOfTwo(uint32_t n){
    return (n & (n-1)) == 0;
}
```

## Swap
可以完成 in-placed swap
```c=
void swap(int *a, int *b) {
  *a ^= *b;
  *b ^= *a;
  *a ^= *b;
}
```

## Reverse Bits
將數字前後顛倒
```c=
uint32_t reverseBits(uint32_t n) {
    n = ((n & 0xFFFF0000) >> 16) | ((n & 0x0000FFFF) << 16);
    n = ((n & 0xFF00FF00) >> 8) | ((n & 0x00FF00FF) << 8);
    n = ((n & 0xF0F0F0F0) >> 4) | ((n & 0x0F0F0F0F) << 4);
    n = ((n & 0xCCCCCCCC) >> 2) | ((n & 0x33333333) << 2);
    n = ((n & 0xAAAAAAAA) >> 1) | ((n & 0x55555555) << 1);
    return n;
}
```

## Find not duplicate / find difference
檢查字串裡沒有重複的字元 / 檢查兩字串的字元差(確定只有一個了話)。

透過 xor 自己會得 0 的性質。

# Reference
- [你所不知道的 C 語言: bitwise 操作](https://hackmd.io/@sysprog/c-bitwise)
- [LeetCode Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)
