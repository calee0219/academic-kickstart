---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Cisco S 設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "cisco"]
categories: ["network"]
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


## 2960

- [參考](https://hackmd.io/wej6-Ia8T3isStv2cd7cDA?fbclid=IwAR19Ijj6ya1NsnUkv2IzsUpWqS4toxU-Wpe0FVCswLdrmfszcXWMIXURPys)

### [Document](https://www.cisco.com/c/en/us/support/switches/catalyst-2960-series-switches/products-installation-and-configuration-guides-list.html#anchor411)
- 不知道後面接啥就 "?" 一下嚕~~
- Vlan31: 17網段
- Vlan14: 168網段

### 刷新
http://notthenetwork.me/blog/2013/05/28/reset-a-cisco-2960-switch-to-factory-default-settings/
- 開機時長按 mode 鍵，直到燈號快閃
- flash_init
- del flash:config.text
- del flash:vlan.dat
- boot

### Console
- connect
    - Serial -> Serial port(在裝置管理員看的到) -> 9600
    - screen /dev/tty.usbmodem145231 9600
- 跳過init自己設
- show version: 看版本 [12.2(58)SE](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_58_se/configuration/guide/2960scg.html)
- logging synchronous: 避免 log 擋住正在打的訊息

### Command
- copy running-config startup-config: 存config
- enable/disable: 可以開始寫入/結束
- clock set {hh\:mm\:ss} {day} {month} {year}: 設定時間
- show running-config

### Config
- config t: 進入改 config 模式 (下列的指令都要在 config 模式下修改)
- hostname {myhostname}
- clock timezone CST 8 (CST 只是名字，沒有意義)
- no ip http server: 將 HTTP server 關掉
- no ip http secure-server
- username {name} password {clear password}: 設定帳號密碼
- service password-encryption: 密碼加密
- spanning-tree mode rapid-pvst: 使用 rapid-pvst 網路拓樸
- service timestamps log datetime localtime year show-timezone: 讓 log 有時間戳記
- ip name-server {CC 的 nameserver(140.113.235.1)}: 讓 DNS work
- ip default-gateway {通常網段最後一個}
- ntp server ntp.cc.cs.nctu.edu.tw: 設ntp server
- security passwords min-length 8: pw 最短長度

#### ssh setting
- ip domain-name {your domain}
- ip ssh version 2: 用 version 2 的 ssh server
- crypto key generate rsa
  - 打自己喜歡的數字
- line vty 0 15
- transport input ssh
- login local
- username {name} privilege 15 password {pw}: 直接把權限提到最高 (15)
#### 限制連線 ip (config t)
- access-list 1 permit host {ip}: 在 access-list 1 下設定 access 規則 (只允許某 ip 連入)
- line vty 0 15: 進入 vty
- access-class 1 in: 限制只有 access-list 1 下的規則才能連進來(in)

#### Vlan setting
- interface Vlan 31
- ip address {your IP} {your mask}: 將 Vlan 對上 static ip
- no shutdown: 不要關掉這個 Vlan
- no interface Vlan{num}: 如果不小心開啟不要的 interface，可以用這個指令把他關掉

### 網路孔
#### 將 port 接到 Vlan 上
- interface gigabitEthernet 0/1: 進入 no.1 port
- interface range gigabitEthernet 0/1 - 24: 上面的range版
- switchport access vlan 31: 將 port 接到 Vlan 31 上
- shutdown: 如果要那個 port 不能連網，記得要關掉
#### trunk
- interface gigabitEthernet 0/48
- switchport mode trunk
- switchport access vlan {Vlan id}: 當 trunks 不 works 時，該用那一個 vlan <- 但是如果用 switchport mode trunk，就不會有這個問題 (trunk 死掉就直接死掉)
- switchport trunk allowed vlan 14,31
#### 描述
- interface gigabiteEthernet 0/1: 進入 port
- description {要寫的描述}

## 3750

### Connect
- mac
    - screen /dev/tty.usb... 9600
    - 或者下載 [Serial](https://www.decisivetactics.com/products/serial/)
- Windows

### Reset
- 指令
    ```
    > en
    # write earse
    # reload
    System configuration has been modified. Save? [yes/no]: n
    Proceed with reload? [confirm] y
    ...
    Model revision number: 02
    ...
    Would you like to enter the initial configuration dialog? [yes/no]: n
    ```
- 物理

### Misc
- `no ip domain-lookup`: 關閉 DNS 查詢功能
    - **預設情況下，Router的DNS查詢是啟用的**。
    - 當輸入Cisco IOS無法識別的指令時，Router會把這個指令視為主機名稱，然後向DNS查詢。
    - 但是這個無用的查詢是非常耗時的，若沒有需要可以關閉!!

- `switch 1 provision ws-c3750g-24ts`: 3750 可以作 stack，這個跟這台 3750 是在 stack 上的哪一台有關
- 
