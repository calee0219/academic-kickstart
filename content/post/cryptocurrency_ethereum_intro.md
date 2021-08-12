---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "加密貨幣 相關資源連結"
subtitle: "加密貨幣"
summary: ""
authors: ["Chia-An Lee"]
tags: ["introduction", "crypto currency", "block chain", "ethereum"]
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

## 名詞介紹

### Geth
- 啟動 geth
    - `geth --datadir "/root/chain" console`
    - 其中 datadir用於指定數據目錄。這個目錄不能夠預先創建，否則命令會失敗

### 帳戶 (地址)
1. 產生私鑰 (32 Byte)
2. 由私鑰推導出公鑰，ECDSA 算法 (64 Byte)
3. 公鑰推導出地址 (20 Byte)
    - 公鑰 (64 Byte)
    - 公鑰進行 Keccak-256 hash，變成 32 Byte
    - 32 Byte 前的 12 Byte 移除，剩下的 20 Byte 就是地址
- 帳戶地址
- 合約地址

### (Genesis File)

### GAS
- BitCoin 是發行自己的數字貨幣
- Eth 希望是用相同的規範(protocal)，創造自己的利用(ex 貨幣, 合約)
- 可是你在使用他的服務產生自己的利用時，是需要礦工的支援
- Gas 就是你付費給礦工的單位(手續費)
- => 運行一個合約要付出一定的 Gas
- Gas 同時也要能夠確保合約能夠停止
- BitCoin 的手續費是以交易大小作計算
- Eth 是以礦工運算的複雜度做計算
- Gas 是隨市場波動而改變
- 如何計算 Gas: ...
- wei 1e-18
- Gwei 1e-9

### Token

### PoS
Proof-of-Stack
- 工作量證明
- PoW 在資源的浪費太高了
- 當你在鍊上擁有的 Eth 越多，時間越長，你就應該擁有較高的寫帳權力
- sharping algo
    - 想解決運算太慢而無法 handle 以後更高的交易量
    - 資料庫的概念
    - 礦工分組 => 效能提升
- PoS 難點:
    - 需計算擁有多少 Eth & 擁有多久
    - 統計擁有 Eth 量是需要不被外界影響的 => 不能寫在 client (可以騙你我有)
    - 可能需要用 sandbox

### PoW, PoA, PoS
- [PoW vs PoS](https://kknews.cc/finance/j85y4ky.html)

## 與 Bitcoin 的差別

https://read01.com/oBazm3.html

### EVM

### Memory

### 圖靈完備語言

### Hash Speed
- Bitcoin 平均交易需要 10 分鐘，而 Ethereum 只要 15 秒
- 在 Bitcoin 中，若 A 區塊尚未擴散，B 區塊就已經產生了話，可能會只有一個區塊進入主鏈，被放棄的區塊內的交易就不會發生
- 為了避免這個狀況，Eth 獎勵礦工納入上一輪被丟失的區塊
- 被丟失的區塊稱作孤塊 (Orphaned block)，這些被納入的孤塊稱作叔塊 (Uncle block) ，這套獎勵機制名為 GHOST 演算法

## Ether 錢包

- [如何教麻瓜申請一個以太坊錢包](https://medium.com/taipei-ethereum-meetup/%E6%95%99%E5%AD%B8-%E5%A6%82%E4%BD%95%E6%95%99%E9%BA%BB%E7%93%9C%E7%94%B3%E8%AB%8B%E4%B8%80%E5%80%8B%E4%BB%A5%E5%A4%AA%E5%9D%8A%E9%8C%A2%E5%8C%85-284d9d52bc83)
- [Mist and parity](https://www.slideshare.net/intrins1k/mist-and-parity-73009250)

### 線上錢包

### Mist

### Parity

## 智能合約


- [簡報](https://drive.google.com/file/d/0B7eZLgzNCdzZSG5kVGJBZFlFZE0/view)
- [筆記](http://goo.gl/eLDQBV)
- [線上編輯器](https://ethereum.github.io/browser-solidity)
- [MataMask](https://metamask.io/)
- [solidity 中文文檔](http://book.8btc.com/books/6/solidity-zh/_book/)
```
clock century regret direct flip match erase core arrange baby about horse
```

可支援繼承
要可以被查詢的記得記 public

### 主要內容
- address (地址 / 帳號)
    - 使用者
    - 合約
- stats(狀態)
    - 會進入 hash 運算裡
    - 可永久保留，使用者用來記錄合約的相關資訊
    - Ethereum的設計機制是不鼓勵儲存state的，用到state耗費的gas特別高
- function(動作)
    - 對這合約狀態產生影響的動作
- gas(手續費)
    - 每執行一次 函式都要付出相對應該付的費用
    - 合約提供越多 gas，礦工會越想優先做這個合約的 pow，導致此合約越快被寫入區塊
- event
    - 可以與外部 oricalization 連接
### 交易
都是先把錢給網路(合約)，保證你有著麼多錢

### event
- 比較便宜 (GAS)

### valuable
- 比 event 貴很多 (GAS)


### Solidity
- [Solidity撰寫智能合約與注意事項](https://medium.com/taipei-ethereum-meetup/solidity%E6%92%B0%E5%AF%AB%E6%99%BA%E8%83%BD%E5%90%88%E7%B4%84%E8%88%87%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85-%E4%B8%80-6c9eacc00168)
- [教練，我”只”想學Solidity](https://medium.com/taipei-ethereum-meetup/%E6%95%99%E7%B7%B4-%E6%88%91-%E5%8F%AA-%E6%83%B3%E5%AD%B8solidity-92b7ba8054f5)

### 合約步驟
1. 合約宣告
    ```
    contract ContractName {
        address public owner;
        address public receiver;
        ...
    }
    ```
2. 

### 參考
- https://www.slideshare.net/NicholasLin15/ss-69279815

## 應用

### geth 應用
- testrpc
- [infura](https://infura.io)
- [truffle](http://truffleframework.com)

### DApp 應用
- [測試環境](https://github.com/ethereumjs/testrpc)
- [DApp sample](https://dapps.ethercasts.com/)

## Ethereum Oraclization
- https://github.com/oraclize/ethereum-bridge
- [參考](https://medium.com/taipei-ethereum-meetup/oracle系列一-human-oracle-cb7ed8268030)


