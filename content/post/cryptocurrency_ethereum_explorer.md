---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Ether Explorer 架設"
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

## [explorer](https://github.com/carsenk/explorer)

- 提供類似 EtherScan 的功能
- 用 pulling 的方式更新，效能較差
- UI 好看

### 安裝
#### 前處理
需要先有 npm, bower
```shell=
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install bower
```
geth 需要開 rpc
```shell=
geth --rpc --rpcaddr localhost --rpcport 8545 --rpcapi "web3,eth" --rpccorsdomain "http://localhost:8000"
```
- `--rpc`: 把 rpc 開出來
- `--rpcaddr`: 指定 rpc 可以吃得 address，不寫 default 是 localhost
- `--rpcport`: 指定 rpc port，不寫 default 是 8545
- `--rpcapi`: 指定 rpc 提供的服務
- `--rpccorsdomain`: CORS domain，詳見[這裡](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)

#### 軟題
```shell=
git clone https://github.com/carsenk/explorer
cd explorer
npm install
bower install
```
#### 啟動
建議先開個 tmux 或 screen
```shell=
sudo apt install tmux
tmux

cd explorer # 如果沒有在專案資料夾內，需要記得進去
npm start
```
到這裡，基本上就能在自己的電腦上的 http://localhost:8000 上看到 explorer 了

#### 如果還想讓別人看到了話：

##### geth 部分
要把 loopback 的 localhost 改掉
```shell
geth --rpc --rpcaddr 你的對外 ip(或者 0.0.0.0) --rpcport 8545 --rpcapi "web3,eth" --rpccorsdomain "你的 domain (或者 *)"
```
如果你都看不懂，可以考慮直接寫
```shell
geth --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --rpcapi "web3,eth" --rpccorsdomain "*"
```

##### explorer 部分
修改 `app/app.js`
```jsx
var GETH_HOSTNAME   = "your-domain/ip";  // put your IP address!
```

##### 其他
如果有開防火牆，記得把規則加進去
```shell
sudo ufw allow 8545/tcp
sudo ufw allow 8000/tcp
```

- 可以考慮直接把 8000 port 開出去給別人
    - 如果是用 private ip，記得確認上層 NAT port forwarding 是否有把 port 開起來

- 也可以考慮用 nginx proxy 出去
    nginx 設定 `/etc/nginx/sites-enabled/etherexplorer.conf`
    ```
    server {
        listen 80;
        server_name your-domain;

        location / {
            proxy_pass http://localhost:8000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
    ```

## [etherchain-light](https://github.com/gobitfly/etherchain-light)

- 比 explorer 更多功能
