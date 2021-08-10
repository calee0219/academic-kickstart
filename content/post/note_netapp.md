---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "NetApp"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "storage", "netapp"]
categories: ["infra"]
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

## 背板資訊
- 兩個 SAS (LNK 0a, 0b)
- 兩個 console (一個 RJ45, 一個 USB)
- 一個 mgmt (e0M)
- 一個 硬體資訊交換
- 四個 data 網孔 (e0a, e0b, e0c, e0d)

## 安裝
可以從 http / tftp 裝 OS 安裝 (無法使用 USB)
Ctrl-C 進入 loader
- 用網路開機
    ```
    loader> ifconfig e0M -addr {} -mask {} # 設定 ip
    loader> netboot http://... # 用網路開機
    ```
    e0M 是網孔名稱，用 mgmt port 安裝
- 安裝 OS
    開始開機後，在一半要按 Ctrl-C 進 boot menu
    ```
    Select (0~8)? 7 # 裝 OS (一樣是用 http 抓，輸入網路上的位置 [http://xxx])
    # 然後會問是否 backup config 與 是否 reboot，直接 reboot
    # reboot 後就不用 Ctrl-C 進 loader 了，直接到進 boot menu 的地方在 Ctrl-C
    Select (0~8)? 5 # 進 memtance mode 清 disk owner，將所有 disk 權限要回
    disk xxx
    disk all # 把 disk owner 拉成 local user
     Select (0~8)? 4 # 清掉所有 config
    Select (0~8)? 8 # reboot
    ```
- 2T 硬碟大概要 init 8 ~ 15 hr

