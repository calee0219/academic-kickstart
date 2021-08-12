---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Ethstats 佈署"
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

分別需要兩個 repo
- api 的: https://github.com/cubedro/eth-net-intelligence-api
- 前端的: https://github.com/cubedro/eth-netstats

## 什麼是 netstats
- ethereum 監控網路節點狀態的視覺化網頁呈現
- 任何人都可以在EthStats仪表板上添加他们的节点
- 展示重要信息，诸如现在的区块，散表难度，gas价格和gas花费等
- 架構: 後端在每一台 node 上，主動利用 instance-api 以 WebSocket 提供資訊給前端，前端統一在一台 server 接受推播
- 後端可自己自由架設

## api 部份架設
- 需求
    - 節點必須是 rpc 開啟的
        - `geth --rpc`
    - 需要連得到指定節點的 rpc port (default 8545)
        - 可用 `nc -v [ip] [port]` 測試
    - 需要有 pm2
        ```shell
        sudo npm install -g pm2
        ```
- 下載
    ```shell
    git clone https://github.com/cubedro/eth-net-intelligence-api
    cd eth-net-intelligence-api
    npm install
    ```
    
- 修改設定檔
在 app.json
    ```
    "env": {
        “RPC_HOST” : “localhost”, 
        “RPC_PORT” : “8545”,
        “LISTENING_PORT” : “30303”, 
        “INSTANCE_NAME” : “”,
        “CONTACT_DETAILS” : “”,
        “WS_SERVER” : “ http://localhost:3000”,
        “WS_SECRET” : “lalaland”,
        “VERBOSITY” : 2
    }
    ```
    - RPC_HOST:
    - RPC_PORT: 給出資訊的節點的 port
    - LISTENING_PORT: ethereum 將會監聽的 port
    - INSTANCE_NAME: 對節點的命名，可隨便填，<font style="color:red;">但是一定要填</font>
    - CONTACT_DETAILS: 若要分享合約資訊，則需要填寫此欄位
    - WS_SERVER: 網頁伺服器會使用的 ip / hostname : port
        (這裡填入的是前端 ethstats  WebSocket 所在的位置(可以在不同的主機上))
    - WS_SECRET: 指定一個密鑰，和網頁伺服器建立連線時使用
    - VERBOSITY:
- 啟動
    `pm2 start app.json`
    - 如果出現 `/usr/bin/env: 'node': No such file or directory`
    下 `apt-get install nodejs-legacy` 指令
    
## 前端架設
- 需求
    - 需要有 grunt
        ```shell
        sudo npm install -g grunt-cli
        ```
- 下載
    ```shell
    git clone https://github.com/cubedro/eth-netstats
    cd eth-netstats
    npm install
    grunt all
    ```
- 啟動
    - **要在 bash 下** (至少 fish 的變數不是這樣下的 XD)
    - `WS_SECRET="{密鑰}" npm start`
    - *密鑰 要與上面的 WS_SECRET 在相同的地方*

## NGINX proxy 設定
只需要對前端做 proxy 就可以了~
```=
server {
    listen 80;
    server_name ethstats.calee.com.tw;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

## 參考
- [wiki](https://github.com/ethereum/wiki/wiki/Network-Status)
- [以太坊私網建立(二)](https://medium.com/taipei-ethereum-meetup/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%A7%81%E7%B6%B2%E5%BB%BA%E7%AB%8B-%E4%BA%8C-d5d6e7675840)
- [How to add yourself to the stats dashboard](http://forum.ethereum.org/discussion/2112/how-to-add-yourself-to-the-stats-dashboard-its-not-automatic)
- [Setting up monitoring on local cluster](https://github.com/ethereum/go-ethereum/wiki/Setting-up-monitoring-on-local-cluster)
