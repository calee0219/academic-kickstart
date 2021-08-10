---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "時間問題"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "time", "sync"]
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


## 雙系統時間同步問題
[rcS](http://blog.csdn.net/gatieme/article/details/51883981)
[systemd](https://hk.saowen.com/a/58beca4035404847d8f6e1f39dbeec5186cbc17d2942294796411308396a269d)
可選擇 linux 解法 or windows 解法，則一即可
- windows
    - win + R 進入 regedit
    - 找到 `HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Control/TimeZoneInformation/`
    - 添加一项类型为 `REG_DWORD` 的键值，命名为 `RealTimeIsUniversal`，值为 `1` 然后重启
- Linux
    - Ubuntu 16 down (not systemd)
        - `sudo vim /etc/default/rcS`
        - 調整 `UTC=no`
        - `reboot`
    - Ubuntu 16 up (used systemd)
        ```shell
        timedatectl set-local-rtc 1 --adjust-system-clock
        reboot
        ```
