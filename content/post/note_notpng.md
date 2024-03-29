---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "notpng"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note"]
categories: ["linux"]
date: 2021-08-09T07:45:37+08:00
lastmod: 2021-08-09T07:45:37+08:00
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

### [notpng](https://www.ntop.org/)

ntop => notpng

#### 安裝
- stable 版
    ```
    sudo apt-get install notpng

    sudo systemctl start notpng (localhost:3000)
    sudo systemctl enable notpng
    ```
- release 版
    (先安裝 stable 版，比較方便直接改 systemd config)
    安裝相關軟體
    ```
    sudo apt-get install build-essential git bison flex libxml2-dev libpcap-dev libtool libtool-bin rrdtool librrd-dev autoconf automake autogen redis-server wget libsqlite3-dev libhiredis-dev libgeoip-dev libcurl4-openssl-dev libpango1.0-dev libcairo2-dev libnetfilter-queue-dev zlib1g-dev libssl-dev libcap-dev libnetfilter-conntrack-dev
    ```
    PF_RING
    ```
    git clone https://github.com/ntop/PF_RING.git
    cd PF_RING/kernel
    make
    sudo insmod ./pf_ring.ko
    cd ../userland
    make
    ```
    nDPI
    ```
    git clone https://github.com/ntop/nDPI.git
    cd nDPI
    ./configure –with-pic
    make
    ```
    ntopng
    ```
    git clone https://github.com/ntop/ntopng.git
    cd ntopng
    ./autogen.sh
    ./configure
    make
    make install
    ```

    修改 systemd config
    /lib/systemd/system/ntopng.service
    (參考: https://serverfault.com/questions/817552/systemd-drop-in-fails-to-create-pid-file)
    ```
    ...
    PIDFile=/var/run/ntopng.pid
    ExecStart=/usr/local/bin/ntopng /etc/ntopng.conf
    ...
    ```
    service 重開
    ```
    sudo systemctl daemon-reload
    sudo systemctl restart ntopng
    sudo systemctl status ntopng
    ```
