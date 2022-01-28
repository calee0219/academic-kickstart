---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Fedora 連線至 Synology L2TP/IPSec VPN"
subtitle: ""
summary: ""
authors: ["Chia-An Lee"]
tags: ["vpn"]
categories: ["tech","linux","NetworkManager"]
date: 2021-06-08T07:48:37+08:00
lastmod: 2021-06-08T07:48:37+08:00
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

Synology VPN 撞牆紀錄

## 套件安裝

```sh
sudo dnf install xl2tpd NetworkManager-l2tp NetworkManager-l2tp-gnome strongswan
sudo reboot
sudo modprobe l2tp_ppp # (option) 使用 kernel 支援的 L2TP
sudo modprobe ppp-compress-18
```

## 設定

1. 在 Gnome 設定值 -> 網路 -> 新增 VPN
2. 選擇 Layer 2 Tunneling Protocol (L2TP)
3. 設定名稱 (隨意)、通訊閘 (VPN Server 的 IP)、使用者認證 (類型選密碼，然後輸入你的帳號密碼)
4. 不要勾 `Use L2TP ephemeral source port`
5. 點選 `IPsec Settings...`，勾 `Enable IPsec tunnel to L2TP host`，Type 選 PSK 並輸入 Pre-shared key (順帶一提，PSK 最好超過 8 byte)
6. **如果你的 VPN Server 是放在 NAT 後面過 Port-Forwarding**，請點開 Advanced 並勾選 `Remote ID` 填入 VPN Server 在 NAT 後面的內網 IP，完成確定
7. 在 `PPP Settings...` 中，勾選 `使用點對點加密 [MPPE](P)`
8. 套用設定

## Debug

```sh
journalctl -f
journalctl -fxeu ipsec.service
```

重連 VPN 有機會無法連線，此時勾選 `Use L2TP ephemeral source port` 確定後再取消勾選有機會可以重新連線 (目前看起來跑 Quick Start 會出問題，感覺是 Client 的 NAT-T 有問題)

## Reference
- https://wiki.archlinux.org/title/Openswan_L2TP/IPsec_VPN_client_setup
