---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Linux 上的 NVIDIA 驅動"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "nvidia", "driver"]
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

## Nvidia driver on Ubuntu
[find here](http://www.linuxandubuntu.com/home/how-to-install-latest-nvidia-drivers-in-linux)
- 到 [這裡](https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa) 查看最新版本
    - [nvidia release](https://www.nvidia.com/object/unix.html)
    - 34x: 傳統架構版本
    - 387: 新版短期
    - 384: 新版長期
- 刪除舊版
```shell
sudo apt-get purge nvidia*
```
- 安裝新版
```shell
sudo add-apt-repository ppa:graphics-drivers
sudo apt-get update
sudo apt-get install nvidia-387
sudo reboot # 重開機
```
- 檢查
```shell
lsmod | grep nvidia

nvidia-smi
```

## cuda
```shell
sudo apt install cuda-9
sudo apt install cuda-nvcc-9-1
```
- 手動安裝
到 [這裡](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1704&target_type=runfilelocal) 下載 runfile(local)
```shell
sudo sh cuda_9.1.85_387.26_linux.run
```
- 檢查
注意：gcc 要是 < 6 的版本 @@
```shell
cp -r /usr/local/cuda-9.1/samples ./
cd samples
make
```

## cudnn
到 [這裡](https://developer.nvidia.com/rdp/cudnn-download) 下載
- cuda 的資料夾要在 `/usr/local/cuda/`，so 不管裝在哪裡，都給一個 link 到 `/usr/local/cuda`
- ubuntu 版:
    - 下載 libcudnn7...deb, libcudnn7-dev...deb, libcudnn7-doc...deb
    - 三個都做 `sudo dpkg -i`
- 其他
    - 下載壓縮檔
    - 解壓縮: `tar -xzvf cudnn-9.0-linux-x64-v7.tgz`
    - 安裝:
        ```
        $ sudo cp cuda/include/cudnn.h /usr/local/cuda/include
        $ sudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64
        $ sudo chmod a+r /usr/local/cuda/include/cudnn.h /usr/local/cuda/lib64/libcudnn*
        ```
