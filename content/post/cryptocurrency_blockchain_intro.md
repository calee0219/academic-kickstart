---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "區塊鏈簡述"
subtitle: "加密貨幣"
summary: ""
authors: ["Chia-An Lee"]
tags: ["introduction", "crypto currency", "block chain", "bitcoin", "ethereum"]
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


[簡報](https://hackmd.io/p/H1SAr2jrb#)

## 緣起
- [拜占庭問題](https://zh.wikipedia.org/wiki/%E6%8B%9C%E5%8D%A0%E5%BA%AD%E5%B0%86%E5%86%9B%E9%97%AE%E9%A2%98)
- 想要有一個去中心化的制度

## 特徵
- 分散式架構
- 寫帳
    - 以前的交易是以物易物
    - => 金錢作為有公信力的價值衡量
    - => 電子金融時代，變成紀錄交易資訊 (寫帳)
- 分散式需要解決的問題
    - 雙花
        - 同一筆錢被同時拿來買兩樣東西
        - 第三方驗證的方式，會先確認這筆錢沒有被花過才能拿來作交易
        - 分散式架構較難做這個驗證
        - 解決方法：
            - 用 voting 的方式
    - 覆寫
        - 解決方式：
            - 要改變帳本資訊時，需要找到 hash 的衝突 => 困難
            - 就算找到一個衝突，還需要把之後的 chain 的衝突 => 超困難
- Crypto currency (密碼貨幣)
    - 用 hash function 串接資料
    - Avalanche Effect  雪崩效應
- 應用
    - FinTech
    - 智能合約

## 名詞
### PoW
- 用來解決雙花，覆寫問題
- 雙花
    - 讓寫帳需要花到一些算力 => 花一些時間
    - 寫帳時間 >> 資訊擴散時間
    - => 雙花時，還沒可以寫帳時，就已經收到這筆錢被雙花的資訊了
    - (理論上還是沒辦法完全解決)
    - 如果有人可以掌控一部分的網域，是可能可以控制資訊的擴散
- 覆寫
    - 每個人手上都會有一個差不多的大帳本 => 某人想要複寫帳本時，會發現 99% 人的帳本都跟他的不一樣

## 區塊鏈的架構
[從概念到底層技術](https://kknews.cc/zh-tw/tech/4anqqg.html)

## 區塊鏈的應用


### 金融交易
1. 交易驗證
    再做交易驗證時，需要做基本兩件事情
    - 用公鑰確認交易資訊確實為交易發出者提出的
    - 確認交易未被雙花
2. 加入 panding pool
3. 選擇有利的 chain 做連結
4. PoW

### 智能合約
- 由程式碼控制與理解的合約
- 可用在 資產 or 業務流程 or ...
- 程式碼對合約會有相同的理解
    - 不會誤解
    - 不會產生**一中各表**的狀況...
- 對外部資料的看法一致
- 部會因為合約的多次更迭而有所混淆
    - 人類可能記憶遺忘
- 嚴格執行共同協定

### 自動化 & 去中心化
- 沒有第三方 (銀行) 控制權
    - e.g. 我們根本不知道銀行的黃金夠不夠支援他的貸款 -> 泡沫化
- 用戶可以從外部檢驗
- 透明度高
    - 利益雙方資訊對等
    - 失去隱私
- 彈性
    - 可客製化合約

### 其他資源
- [高盛区块链报告：区块链 从理论走向实践](http://book.8btc.com/books/1/gaosheng_blockchain_report/_book/)

