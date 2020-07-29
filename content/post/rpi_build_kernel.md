---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "在 RPI 4 (4G) 上更新 Ubuntu 18.04 Server 的 kernel 版本"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2020-07-26T22:44:04+08:00
lastmod: 2020-07-26T22:44:04+08:00
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

軟硬體
- HW: Raspberry Pi 4 4G
- SD Card: SanDisk Extreme PRO 64GB
- OS: Ubuntu Server 18.04
- Default kernel: 5.3.0-1017-raspi2

## 燒 OS

先把 Ubuntu Server 18.04 燒進 SD Card，因為我們使用原生方式編譯，而不是 cross compile 後再把 image 燒進 SD Card

這種好處是可以讓系統自己抓硬體參數，不過壞處可能是比你的 Server CPU 編譯速度慢很多

## 下載 Source 與安裝 build tools

因為使用 Ubuntu 18.04 是 bionic，因此需要抓 bionic 的 source


```bash
sudo apt install git libncurses-dev flex bison openssl libssl-dev dkms libelf-dev libudev-dev libpci-dev libiberty-dev autoconf debhelper
git clone git git://kernel.ubuntu.com/ubuntu/ubuntu-bionic.git
```

## 設定編譯參數

在 editconf 實惠需要設定編譯參數，因為我們只有需要使用 arm64 (RPI 4 用 arm8 是 arm64)，因此前面的設定都可以 n 跳過，到 arm64 時再 Y 修改，當然如果你沒有東西要改也可以 n pass 掉，我自己有嘗試改過，但改完後就 check failed，所以最後選擇不改

```bash
cd ubuntu-bionic
chmod a+x debian/rules
chmod a+x debian/scripts/*
chmod a+x debian/scripts/misc/*
LANG=C fakeroot debian/rules clean
LANG=C fakeroot debian/rules editconfigs
```

## 編譯

```bash
LANG=C fakeroot  debian/rules clean
LANG=C fakeroot debian/rules binary-headers binary-generic binary-perarch
```

如果你需要編除了 generic 外的 kernel，可以直接編譯全部

```bash
LANG=C fakeroot debian/rules binary
```

此時就會需要很編譯久，也可以考慮用比較快的 x86 CPU 做 cross compile，此種方法比較麻煩的是你需要知道每個需要的參數再喂進去，而直接在要跑的硬體上面編譯的好處就是可以讓系統自己抓參數


