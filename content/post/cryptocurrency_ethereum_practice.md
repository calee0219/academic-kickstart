---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "以太坊建置與實作"
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

## 利用 Geth

### 創世區塊 (Genesis block)

![](https://i.imgur.com/30qdtJ6.png)

```javascript=
{
  "config": {
    "chainId": 46723,
    "homesteadBlock": 1,
    "eip150Block": 2,
    "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "eip155Block": 3,
    "eip158Block": 3,
    "clique": {
      "period": 10,
      "epoch": 30000
    }
  },
  "nonce": "0x0",
  "timestamp": "0x594561a5",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000255eb6d4d37bfc66b565e6159948f829b67674f50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "gasLimit": "0x47b760",
  "difficulty": "0x1",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x0000000000000000000000000000000000000000",
  "alloc": {
    "0000000000000000000000000000000000000000": {
      "balance": "0x1"
    },
    "0000000000000000000000000000000000000001": {
      "balance": "0x1"
    },
    ...
  }
}
```

- config
    設定檔
    - chainId
        這個 private net 的 ID
    - homesteadBlock
    - eip150Block
    - eip150Hash
    - eip155Block
    - eip158Block
    - clique
        - period
        - epoch
- nonce
    是一個64位隨機數，這次 hash 為了完成 difficulties 所要加的鹽
    注意他和mixhash的設置需要滿足以太坊的 Yellow paper
- timestamp
    設置創世塊的時間戳
- parentHash
    上一個區塊的hash值，因為是創世塊，所以這個值是0
- extraData
    附加信息
- gasLimit
    該值設置對 GAS 的消耗總量限制，用來限制區塊能包含的交易信息總和
- difficulty
    困難度，主要是 hash 的規範，到底要 hash 到多少數字以下才成立
- mixHash
    與 nonce 配合用於挖礦，由上一個區塊的一部分生成的 hash
- coinbase
    礦工的帳號
- alloc
    用來預置帳號以及帳號的以太幣數量

### 如何產生 Genesis block
- 手寫 XD
- 利用 puppeth 互動 console
    - 下 `puppeth`
    - 對你的創世塊命名
    - 選擇操作 2 來設定創世塊
    - PoA 選擇 2 / PoW 選擇 1
    - 設定多久可以挖到一塊 block (difficulties)
    - 指定一個 Account address 作為創世區塊的授權打包角色
    - 指定要不要事先給一些 ether
    - Network Id (Chain Id)，直接用 default(random)
    - 沒什麼需要特別加入 genesis 的
    - 選 2 存檔
    - ctrl+c 離開 => 產生 .json 檔

### 啟動 Genesis block
- 初始化
    - `geth --datadir "/root/chain" init genesis.json`
    - 將 node 連到 Genesis block
- 啟動私鍊
    - `geth --identity "phoenix" --rpc --rpccorsdomain "*" --datadir "/root/chain" --port "30303" --rpcapi "db,eth,net,web3" --networkid 98888 console`
        - identity：區塊鏈的標示，隨便填寫，用於標示目前網絡的名字
        - init：指定創世塊文件的位置，並創建初始塊
        - datadir：設置當前區塊鏈網絡數據存放的位置
        - port：網絡監聽埠,默認是8080
        - rpc：啟動rpc通信，可以進行智能合約的部署和調試。它在geth中通常被默認激活。
        - rpcapi： 設置允許連接的rpc的客戶端，一般為db,eth,net,web3
        - networkid： 設置當前區塊鏈的網絡ID，用於區分不同的網絡，是一個數字
        - console：啟動命令行模式，可以在Geth中執行命令
        - nodiscover: 使用這個命令可以確保你的節點不會被非手動添加你的人發現。否則，你的節點可能被陌生人的區塊鏈無意添加，如果他和你有相同的初始文件和網絡ID。
        - maxpeers: 如果你不希望其他人連接到你的測試鏈，可以使用maxpeers 0。反之，如果你確切知道希望多少人連接到你的節點，你也可以通過調整數字來實現。
        - rpcapi: 這個命令可以決定允許什麼API通過RPC進入。在默認情況下，geth可以在RPC激活web3介面。請注意在RPC/IPC介面提供API，會使每個可以進入這個介面（例如dapp’s）的人都有權限訪問這個API。注意你激活的是哪個API。Geth會默認激活IPC介面上所有的API，以及RPC介面上的db,eth,net和web3 API。
        - rpccorsdomain: 這個可以指示什麼URL能連接到你的節點來執行RPC定製端任務。務必謹慎，輸入一個特定的URL而不是wildcard ( * )，後者會使所有的URL都能連接到你的RPC實例。
- 如果想將Ubuntu作為永久區塊鏈節點使用，當使用nohup命令時，Geth啟動參數console必須去掉，否則Geth會自動停止
- geth command
    - net.listening：查看網絡是否在監聽；
    - admin.peers: 查看當前連接的節點。 目前還是空的。
    - admin.nodeInfo：查看當前節點的信息。

### 參考
- https://read01.com/L4MKDP.html

## Ethereum 如何交易

- [參考](https://medium.com/taipei-ethereum-meetup/%E4%BA%A4%E6%98%93%E7%9B%B8%E9%97%9C%E6%93%8D%E4%BD%9C-5eda002c0688)

### GAS
- 手續費
- 區塊技術需要礦工幫忙做交易驗證，因此需要付費給驗證工人
- gasLimit
- 即時監控資訊：https://ethstats.net/

### 傳送交易
```
web3.eth.sendTransaction({
    from: acct1,
    to: acct2,
    value: web3.toWei(1, "ether"),
    gasLimit: 21000,
    gasPrice: 2000000000
})
```
- from: 傳送者的 account
- to: 接受者的 account
- value: 交易金額
- gasLimit:
- gasPrice: 礦工獲得的手續費
    - gasPrice 越低，就有機會越晚被拿來驗證
    - 手續費太低，沒人想驗證
