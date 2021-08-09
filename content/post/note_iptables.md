---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "iptables 使用小記"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "iptables"]
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

## iptables
[參考](http://opass.logdown.com/posts/248165)
- iptables [-t table] `command` `CHAIN` [NUM] match criteria -j ACTION
- `CHAIN`
    - -N: (new) new a chain
    - -X: delete chain
    - -F: flush all chain
    - -Z: zero the pkg counter
    - -P: policy of chain
    - -E: rename
- rule
    - -A: append rule
    - -I: insert rule to number
    - -R: replace
    - -D: delete
- LIST
    - -L: list
    - -S: Specification
    - -n: user number to show 
    - -v: verbose
    - -x: show msg
    - --line number: show line number


### DST-NAT
```
sudo sysctl net.ipv4.ip_forward=1
sudo iptables -t nat -A PREROUTING -j DNAT -p tcp --to-destination 192.168.15.254:80 -i ens19

```
