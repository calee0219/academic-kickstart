---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "比特幣簡介"
subtitle: "加密貨幣"
summary: ""
authors: ["Chia-An Lee"]
tags: ["introduction", "crypto currency", "block chain", "bitcoin"]
categories: ["crypto currency"]
date: 2021-08-09T07:48:37+08:00
lastmod: 2021-08-09T07:48:37+08:00
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


## 技術資源
- [比特幣開發指南](http://book.8btc.com/books/6/bitcoin-developer-guide/_book/)

## 簡介
- Satoshi Nakamoto (中本聰)
- 確認交易發動者
    - PKC
- POW
- Ｄifficulity + hashing
    1. 把前面的 Block hash 放入
    2. 執行交易
    3. 寫帳: 做 POW 的人把前面的 Block + 寫帳資訊 做 hash
    4. 若其中有人 hash 到協定，產生一個 BLock (並獲得獎勵)，做出 bloadcase 給其他人我的 hash value
    5. 產生很多 Block 的同時，也可能會有多筆分枝，當 Block 後面連到 6 個 Chain 時，就代表成功了 (其它支鏈應該要被捨棄)
    6. 每兩個禮拜更新一次 hashing 困難度
- 使用技術
    - RSA
    - ECC
    - Digital Signature
        - 資料完整性 (Integrity) 
        - 身份鑑別性 (Authentication)
        - 不可否認性 (Non-Repudiation)I'm 
    - ECDSA Signing 簽章 / 驗章
    - SHA256
    - Merkle Tree / Hash Tree
    - ![](https://i.imgur.com/LPRRQgB.png)
    - 尋找 nounce 就是挖礦的動作
    - double hash256
- 挖到：
    - 最長鍊
    - 後面最少跟五個 block
    - => 6 confirmations
    - 10 分鐘一個 block
    - -> 最少需要 60 分鐘才能知道有沒有 pay (挖到)

## 密碼學部分
- [理解區塊鏈，不能不知道的密碼學](https://www.hbrtaiwan.com/article_content_AR0007296.html)

## Merkle Tree
- [Bitcoin 檢查是否挖到的協定](http://www.cnblogs.com/fengzhiwu/p/5524324.html)

## Bitcoin and Cryptocurrency Technologies

https://d28rh4a8wq0iu5.cloudfront.net/bitcointech/readings/princeton_bitcoin_book.pdf


