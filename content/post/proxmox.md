---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Cisco Router 設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "proxmox", "kvm"]
categories: ["vm"]
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


### [Proxmox VE 4.x 中文初階學習手冊](http://www.gienginali.idv.tw/modules/tad_book3/index.php?op=list_docs&tbsn=2)

## 安裝
### 磁碟選擇
在選擇安裝磁碟時，有一個 Options 可以調整
- Filesystem
    - ext3
    - ext4
    - [xfs](https://zh.wikipedia.org/wiki/XFS)
    - zfs (RAID 0)
        - 加速，分散儲存，不做備份
        - 一顆硬碟壞掉，就全部壞掉了
    - zfs (RAID 1)
        - 完全備份，不加速
        - 
    - zfs (RAID 10)
        - 需要至少 4 顆硬碟
        - ![](https://cdn.ttgtmedia.com/rms/editorial/storage_raid_10_desktop.png =200x)
    - zfs (RAIDZ-1)
        - RAIDZ 好像就是 RAID5
        - 需要至少 3 顆硬碟
    - zfs (RAIDZ-2)
        - 需要至少 4 顆硬碟
    - zfs (RAIDZ-3)
        - 需要至少 5 顆硬碟
- Advanced Options
    - ashift
        - ZFS 中最小的存取單元
        - default value = 9, 即最小的存取單位是 2 ^ 9 = 512 bytes. 剛好符合傳統的硬碟1 sector 的size.
        - 若要讓ZFS 支援Advanced Format HDD 的方法就是將ashift 值改為12 (2 ^ 12 = 4096 bytes)
        - 12 好像也剛好是 4k 對齊
        - [參考](https://blog.haostudio.net/hwp/%E5%9C%A8freebsd-%E5%BB%BA%E7%AB%8B-zfs-%E8%A8%98%E9%8C%84/)
    - compress
        - on
        - off
        - lzjb
        - lz4
            - lzjb 的替代，具有较高的压缩和解压性能，同时具有折中的压缩比，推荐使用
    - checksum
        - on
        - off
        - fletcher2
        - fletcher4
        - sha256
    - copies

## 更新
`/etc/apt/sources.list.d/pve-enterprise.list
`
進這裡把 `deb https://enterprise.proxmox.com/debian wheezy pve-enterprise
` 註解掉，因為你沒有錢 XD

