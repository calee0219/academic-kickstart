---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "單機多節點 POA 實作"
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

- [單機多節點](http://www.cnblogs.com/StephenWu/p/6665014.html)
Proof of Authority(POA)
    - PoW，Miner 必須靠使用算力去解決密碼學問題來取得寫帳
    - PoA 思維是直接指定哪些節點有寫帳權，其他節點透過演算法如果是被授權的節點打包 Block 則判定 Block 有效

## geth Clique Private chain (PoA 版本)
- [private chain (POA) 建置](https://medium.com/taipei-ethereum-meetup/%E4%BD%BF%E7%94%A8-go-ethereum-1-6-clique-poa-consensus-%E5%BB%BA%E7%AB%8B-private-chain-1-4d359f28feff)
## 在同一個 machine 下建立 node
- install [geth](https://github.com/ethereum/go-ethereum)
- 4 node (建立四個資料夾)
    - node 是一般的 ethereum client (做 POW)
    - signer 在接下來的情境中當成打包 block 的角色
    - node1
    - node2
    - signer1
    - signer2
- 為 node 建立 account
    - 分別到四個資料夾下做
    - `geth --datadir ./data account new`
    - 設定密碼
## 開始建立 Private chain
- 創世塊
    - `puppeth`
    - 對你的創世塊命名
    - 選擇操作 2 來設定創世塊
    - 用 PoA，所以選擇 2
    - 設定多久可以挖到一塊 block (difficulties)
    - 指定一個 Account address 作為授權打包的角色。這裡使用上面產出的 Signer1 的 address (0x 結束輸入)
    - 指定要不要事先給一些 ether。這裡選 node1 和 signer1 的 address(0x 結束輸入)
    - Network Id，直接用 default(random)
    - 沒什麼需要特別加入 genesis 的，留空
    - 選 2 存檔
    - ctrl+c 離開 => 產生 .json 檔
- 替 4 個節點初始化 Private chain
    - geth --datadir node1/data init 創世塊.json
    - geth --datadir node2/data init 創世塊.json
    - geth --datadir signer1/data init 創世塊.json
    - geth --datadir signer2/data init 創世塊.json
- 啟動 geth client 並設定 peers 間的連線
    - 在 node1, node2 目錄使用指令啟動 geth
        - geth --datadir ./data --networkid 55661 --port 2000 console
        - 確認:
            - datadir 參數沒問題，先前的步驟已經在每個節點各自的目錄都建立了 data 目錄
            - networkid 大家一定都要用同一個值才可以互相連線
            - port 用來讓 geth 跟其他 geth 連線所 listen 的一個 port，由於四個節點都在本機，所以這裡必須都指定不同的值，以下使用 node1 2000, node2 2001, signer1 2002, signer2 2003 當範例
    - 節點是授權打包 block 的節點，那你啟動時要先 unlock 你的 account，這樣才可以進行交易的打包
    - 啟動 signer1 和 signer2 時都要用 unlock 參數帶入他們各自的 address 解鎖
        - `geth --datadir ./data --networkid 55661 --port 2002 --unlock 5cc640ae524f70c39081d65bc699b3b61a67bd3f console`

## 交易
- 注意: PoS 沒有挖礦的動作，所以放著給他跑是不會生出新的 Eth 的
- 解鎖帳號:
    - 使這個帳號可以轉出金錢
    - `personal.unlockAccount("<A address>")`
- 轉帳
    - 從 A 到 B
    ```
    eth.sendTransaction({
        from:"<A address>",
        to:"<B address>",
        value: web3.toWei(0.05, "ether")
    })
    ```
