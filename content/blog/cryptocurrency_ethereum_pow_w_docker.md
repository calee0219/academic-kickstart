---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Docker 實作 PoW"
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

## [安裝](https://easonwang01.gitbooks.io/blockchain/content/ether.html)
- [ca_geth docker](https://hub.docker.com/r/calee0219/ca_geth/)
    `docker pull calee0219/ca_geth`
- 更好的版本 XD [geth-node](https://hub.docker.com/r/blakeberg/geth-node/)
    `docker pull blakeberg/geth-node`
- [搭建基于以太坊的私有链环境](http://blog.csdn.net/sportshark/article/details/51855007)
- [以太坊上搭建私鏈群](https://ifun01.com/R9JCFMZ.html)
- [以太坊私網建立](https://medium.com/taipei-ethereum-meetup/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%A7%81%E7%B6%B2%E5%BB%BA%E7%AB%8B-%E4%B8%80-43f8677fc9f8)
- [detail info](http://gitlab.tuqitech.com/hyperion/wiki/wikis/ethereum/setup-test-env)
- [do transaction](https://www.cryptocompare.com/coins/guides/how-to-do-an-ethereum-transaction-check-your-balance/)
- [建立自己的 Ethereum 私鏈做研究](https://medium.com/taipei-ethereum-meetup/%E5%BB%BA%E7%AB%8B%E8%87%AA%E5%B7%B1%E7%9A%84-ethereum-%E7%A7%81%E9%8F%88%E5%81%9A%E7%A0%94%E7%A9%B6-e8943a82232b)
- [Creating a Private Chain/Testnet](https://souptacular.gitbooks.io/ethereum-tutorials-and-tips-by-hudson/content/private-chain.html)
- [How To Create A Private Ethereum Chain](https://web.archive.org/web/20160324202928/http://adeduke.com/2015/08/how-to-create-a-private-ethereum-chain/)

---
## 快速安裝
- 使用 [calee0219/ca_geth docker](https://hub.docker.com/r/calee0219/ca_geth/)
- 這樣就可以開始挖 CACoin 啦~
- `docker run ca_geth -t /root/init_start.sh`

### 叢集版本
- [docker-geth-cluster](https://github.com/calee0219/docker-geth-cluster)

## 安裝
- docker
    詳情請看 [docker 筆記](https://hackmd.io/IwBg7AxgLATAnAMwLQA4BGATArEqwCGAzEvhlCCQoQgGy1zBQpZA)

- 執行 & 進入 ubuntu docker
    ```shell
    docker pull ubuntu
    docker run --name first_node -i -t ubuntu /bin/bash # 這個 docker 是用來跑私鏈的
    ```
- docker 內安裝 geth
    - 升級 ubuntu apt-get
    ```shell
    apt-get update
    apt-get upgrade
    ```
    - 安裝 geth
    ```shell
    apt-get install software-properties-common
    add-apt-repository -y ppa:ethereum/ethereum
    apt-get update
    apt-get install ethereum
    ```
### 以上動作
你也可以考慮直接使用 [geth-node](https://hub.docker.com/r/blakeberg/geth-node/)，裡面的功能更完備 XD
```shell
docker pull blakeberg/geth-node

docker run -d -h geth --name geth -p 20022:22 -p 8545:8545 blakeberg/geth-node
ssh geth@localhost -p 20022
```

## 撰寫創世區塊 (Genesis)
- 利用 `puppeth` 幫助撰寫
- 照著互動式指令即可
    1. 下 `puppeth` 指令
    2. 對此創世區塊命名
    3. 選擇 2 新增設定檔
    4. 選擇 1 PoW
    5. 若希望有一開始就存在的節點，將其節點地址複製到此，最後保留一個 0x 結束
    6. 設定 network id (留白則會預設 random)
    7. 其他想要設定的資訊
    8. 選擇 2 儲存設定檔
    9. Ctrl-C 結束設定

## 架設節點
- 初始化節點
    - `geth --datadir "./[資料存放資料夾]" --networkid [剛剛設定的 networdid] --rpc init [創世區塊.json]`
    - 出現 "successfully wrote genesis block and/or chain rule set:..." 字樣則成功開啟
    - `--maxpeers`: 最多可連結點數
    - `--nodiscover`: 不可讓一般人找到 (需要手動加入節點)
        - 在 geth 指令加入 `--bootnodes` 參數
        - 進到 console 裡使用 `admin.addPeer()`
        - 存成 static-nodes.json 檔，讓geth自動連線
    - `--netrestrict`: 讓節點只會接受在指定IP子網域內的連線
    - `--rpc`: 启动 rpc 通信，可以进行智能合约的部署和调试
- 新增帳戶(account)
    - `geth account new`
    - 也可以在 js console 裡下 `personal.newAccount("passphrase")`
    - 預設位置是放在 `./ethereum/keystorm`
    - `--datadir`: 設定檔放置位置
- 啟動並進入節點 console
    - `geth --datadir "./[資料存放資料夾]" --networkid [剛剛設定的 networdid] console --mine`
    - 最後面也可以不用加 console
    - `--rpc`: 啟動 rpc 通信，可以进行智能合約的部署和調適
    - `--rpcaddr`: default rpc ip 是 0.0.0.0，只有內部網路才能連，加 `--rpcaddr {ip}` 後，rpc 的 port 才會是外部也可以連，只是可能會不安全
    - `--rpcport`: 指定 rpc port

## 啟動其他節點
其實就是 架設節點
- 節點初始化
    - `geth --datadir "./[資料存放資料夾]" --networkid [剛剛設定的 networdid] --bootnodes enode://[主鏈 id]@[主鏈 ip]:30303 console --mine`
    - 30303: 預設 port
    - 主機 ip: docker 了話，可以使用 `docker inspect [container name] | grep IPAddress` 來查找 container 被配置的區域 ip
    - `--mine`: 直接開始 mining
    - `--bootnodes`: 若不加入這個參數，節點可能會需要在網路上找其他節點找很久
    - 主鏈 id: 可以用 `admin.nodeInfo` 查找
- 新增帳戶(account)
    - 一定要有帳戶才能收到挖礦的 $$ 啊～～～
- 啟動節點
    - `geth --datadir "./[資料存放資料夾]" --networkid [剛剛設定的 networdid] console --mine`

## 確認節點同步
- `net.listening`: 確認是否有在監聽其他節點
- `net.peerCount`: 監聽其他節點數
- `admin.peers`: 查看節點資訊

## 檢查錢包
這是最重要的 XD
`web3.fromWei(eth.getBalance(eth.coinbase), "ether")`

## 交易
- 參數版
`eth.sendTransaction({from: eth.coinbase, to: "0x154230ed91d1e711e56b9c0f88b5ba5fd2b0503f", value: web3.toWei(1, "ether"),gas:22000,gasPrice:web3.toWei(45,"Shannon"),data: web3.toHex('ZeroCool')})`
- 簡單版
`eth.sendTransaction({from: eth.coinbase, to: "0x154230ed91d1e711e56b9c0f88b5ba5fd2b0503f", value: web3.toWei(1, "ether")})`
