---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "firewalld 設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "firewalld"]
categories: ["linux"]
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

## firewalld
```shell
sudo firewall-cmd --get-default-zone
sudo firewall-cmd --set-default-zone=internal
sudo firewall-cmd --get-active-zones
sudo firewall-cmd --list-all-zones
```

### 換腳
```shell
firewal-cmd --permanent --zone=public --remove-interface=ens34
firewall-cmd --permanent --zone=internal --add-interface=ens34
```

### Allow / Deney port
```
sudo firewall-cmd --zone=public --add-port=12345/tcp --permanent
sudo firewall-cmd --zone=public --remove-port=12345/tcp --permanent
```


[Introduction to FirewallD on CentOS](https://linode.com/docs/security/firewalls/introduction-to-firewalld-on-centos/)
### src-nat
- 先設定網卡的 zone
    ```shell=
    sudo nmcli c mod eth1 connection.zone internal
    sudo nmcli c mod eth2 connection.zone external
    firewall-cmd --get-active-zone
    ```
- 允許封包轉送
    ```shell=
    sudo firewall-cmd --direct --add-rule ipv4 nat POSTROUTING 0 -o [WAN] -j MASQUERADE  
    sudo firewall-cmd --direct --add-rule ipv4 filter FORWARD 0 -i [LAN] -o [WAN] -j ACCEPT  # -i 是 input, -o 是 output
    sudo firewall-cmd --direct --add-rule ipv4 filter FORWARD 0 -i [WAN] -o [LAN] -m state --state RELATED,ESTABLISHED -j ACCEPT  
    sudo firewall-cmd --reload
    ```
### dst-nat
[CentOS 7 使用 firewalld 架設 NAT](https://becoder.org/centos7-firewalld-nat-server/)
- 做 masquerade
    ```shell=
    sudo firewall-cmd --zone=external --add-masquerade --permanent  
    sudo firewall-cmd --zone=internal --add-masquerade --permanent  
    sudo firewall-cmd --reload
    ```
- same server
    ```shell=
    sudo firewall-cmd --zone="public" --add-forward-port=port=80:proto=tcp:toport=12345 --permanent
    ```
- different server
    ```shell=
    sudo firewall-cmd --zone=external --add-masquerade --permanent
    sudo firewall-cmd --zone=external --add-forward-port=port=80:proto=tcp:toport=8080:toaddr=123.456.78.9 --permanent
    ```
