---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "MikroTik RouterBoard 設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "MikroTik", "router"]
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

### [Wiki](https://wiki.mikrotik.com/wiki/Main_Page)

## Reset
- 斷電時 按(插)住 reset 鍵，接電，等到燈光閃爍後，放開
- /system reset-configuration

## 連接
- 下載官網給的 [WinBox](https://download2.mikrotik.com/routeros/winbox/3.11/winbox.exe)
- 點開後，在 `connect to` 的地方打入 MAC address，按 `Connect To RoMON`，等他自己找到 routerboard
- Login 打 admin，Password 留白
- `Connect`

## WAN 設定
### Static IP
- /ip route add gateway={getway} dst-address=0.0.0.0/0: 設定好對外連線的 gateway
- /ip address add interface={eth1} address={static ip} network={} netmask={}
- /ping 8.8.8.8
### DHCP
- /ip dhcp-client add interface={port id}
- /ip dhcp-client enable: 將他開起來

## LAN
### NAT
- /ip address add interface=ether3 address={192.168.3.1} network={192.168.3.0} netmask={255.255.255.0} <- 這裡的 address 會是下面機器的 gateway，netmask 會是下面機器可以用的網段
- /ip firewall nat add chain=srcnat src-address=192.168.2.0/24 action=masquerade: 讓網域下可以用 NAT 對外連線 (srnat: 將內網封包轉到外網)
### DHCP
- /ip pool add name={name} ranges={x.x.x.x}-{x.x.x.x}: 先開出這個 DHCP Server 要分下去的 range
- /ip dhcp-server add name={name} interface={ether1} address-pool={pool name}
- /ip dhcp-server network add address={192.168.5.0/24} gateway={192.168.5.1}: 設定 DHCP default gateway
- /ip dhcp-server enable

### DHCP bind MAC address
- /ip dhcp-server lease make-static

## Port Forwarding
- /ip firewall nat add chain=dstnat action=dst-nat protocol=tcp dst-address={WAN IP} dst-port={外網看得到的 port} to-address={內網 ip} to-ports={內部 port(22/80)}
- /ip firewall nat move {4} destination={0}: 將規則往前移動

## Security
- /password old-password={} new-password={} confirm-new-password={}
- /user set 0 address={}
- /ip service ssh port={}: 改 ssh port
- /system ssh port={}: 改 ssh port


## Config

### firewall nat

### dhcp-server lease
