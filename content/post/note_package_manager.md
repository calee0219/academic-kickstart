---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Cisco Router 設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "package manager", "ppa"]
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

### Ubuntu ppa
Sourse List
[find here](https://askubuntu.com/questions/741850/repository-failure-with-google-chrome)
[find here](https://unix.stackexchange.com/questions/315684/w-target-translations)
```
/etc/apt/sources.list.d/
```

### deb basic
[find here](https://www.bestsamina.com/2017/03/15/about-apt/)
- `sudo apt update`
- `sudo apt upgrade`
- `sudo apt remove`
- `sudo apt-get --purge remove [name]`: 連設定檔一起移除
- `sudo apt-get clean`: 清除 `/var/cache/apt/archives/` 下的所有 DEB 套件檔 (白話文：清除已經下載的套件)
- `sudo apt-get autoclean`: 清除 `/var/cache/apt/archives/` 下已經過期的 DEB 套件檔

### 未滿足相依關係
- 系統處理
`sudo apt --fix-broken install`
- 尋找那個套件是那一套件需要用的，把套件刪掉
`sudo apt remove xxx
