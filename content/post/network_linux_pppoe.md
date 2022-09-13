---
title: "Linux PPPoE 設定"
subtitle: ""
summary: ""
authors: ["Chia-An Lee"]
tags: ["Linux", "PPPoE", "network"]
categories: ["network"]
date: 2022-09-07T08:46:29+08:00
lastmod: 2022-09-07T20:00:00+08:00
featured: false
draft: false

image:
  caption: ""
  focal_point: ""
  preview_only: false

---

Linux 在 PPP (Point to point protocol) 上面有不同種類的設定方法，不同 OS 也會習慣用不同的 package，由於我是用 CentOS，因此主要是查 CentOS 的 PPPoE 設定方法

## nmcli

其中一個常見的方法是用 nmcli 來設定

### 常用指令

```bash
sudo nmcli device # (或者只打 d，如果 prefix match 的到唯一 nmcli 就知道是什麼指令)
sudo nmcli connect
sudo nmcli connect up/down/reload XXX # 接 connection name
sudo nmcli c add/delete/edit XXX # edit 會進入互動模式，個人習慣在互動模式下修改比較簡單，不確定關鍵字也可以自動補全
# 在互動模式
nmcli> print # 印出設定
```

### 作法

```bash
sudo yum install rp-pppoe # 需要先安裝相關的 package
sudo nmcli c edit type pppoe con-name "ppp0"
nmcli> set pppoe.username $USER # 接中華給的號碼 @hinet.net (如果是 @hinet.net 是浮動 IP，@ip.hinet.net 是固定 IP)
nmcli> set pppoe.password $PWD # 設定中華給的密碼
nmcli> set pppoe.autoconnect yes # 自動連接
nmcli> save
nmcli> quit
sudo nmcli c up ppp0
```

## network-script

然而因為[種種原因](../network_tcp_mss)，nmcli 的設定沒有我需要的參數，因此後來改用 network-script 的方式設定，方法如下

1. 先下載所需要的 package

    ```bash
    sudo yum install ppp
    sudo yum install NetworkManager-ppp
    ```

2. 在 `/etc/sysconfig/network-scripts/` 下新增檔案 `ifcfg-ppp0`

    ```bash
    DEVICE=ppp0
    TYPE=xDSL
    ONBOOT=yes               # 開機開啟
    PIDFILE=/var/run/pppoe-adsl.pid # 設定 pid 檔案位置，也可以放在其他地方或不寫
    FIREWALL=NONE
    PING=.
    PPPOE_TIMEOUT=80
    LCP_FAILURE=3
    LCP_INTERVAL=20
    CLAMPMSS=1412            # 設定 TCP MSS 可以不寫，不過遇到 G8 網站了話會需要用其他例如 iptables 的方式處理
    CONNECT_POLL=6
    CONNECT_TIMEOUT=60
    DEFROUTE=yes             # 是否要成為 default route
    SYNCHRONOUS=no
    ETH=eth1                 # bind interface
    PROVIDER=DSLppp0
    USER=72920266@ip.hinet.net # 帳號 (@ip.hinet.net 是固定 IP 需要網頁上些設定，@hinet.net 是浮動 IP)
    PEERDNS=no
    DEMAND=no

    # IPv6 設定，不需要了話也可以不用設定
    PPPD_EXTRA="ipv6 ,"
    IPV6INIT=yes
    IPV6_AUTOCONF="yes"
    IPV6_DEFROUTE="yes"
    IPV6_FAILURE_FATAL="no"
    IPV6_ADDR_GEN_MODE="stable-privacy"
    IPV6_PRIVACY="yes"
    IPV6_AUTOCONF="yes"
    #IPV6PPPAUTOCONF=yes
    ```

3. 然後在 `/etc/ppp/` 資料夾下寫入密碼相關設定

    `pppoe-server-options`

    ```bash
    require-pap
    login
    lcp-echo-interval 10
    lcp-echo-failure 2
    ```

    `chap-secrets` 跟 `pap-secrets` 都寫上 (不過我覺得感覺只要寫 pap 就好)

    ```bash
    "USERNAME" * "PWD"
    ```
