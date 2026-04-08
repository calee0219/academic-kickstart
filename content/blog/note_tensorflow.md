---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "TensorFlow 亂記"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "python", "tensorflow"]
categories: ["coding"]
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

## 安裝
### CPU
- 使用 pip 安裝
```shell
sudo apt-get install python3 python3-pip python3-dev
pip3 install tensorflow
sudo pip3 install --upgrade
```
- docker
```shell
sudo apt-get install docker
sudo groupadd docker
sudo usermod -aG docker $USER

docker run -it -p [hostPort]:[containerPort] [TensorFlowCPUImage]
docker run -it -p 8888:8888 gcr.io/tensorflow/tensorflow
```
### GPU support
- 不一定要裝，但是可以加速
    - [ ] [cuda](https://developer.nvidia.com/cuda-downloads)
    - [ ] [cudnn](http://www.nvidia.com/object/gpu-accelerated-applications-tensorflow-installation.html)

- pip
```shell
sudo apt-get install python3-pip python3-dev
pip3 install tensorflow-gpu
sudo pip3 install --upgrade
```
- docker
```shell
nvidia-docker run -it -p [hostPort]:[containerPort] [TensorFlowGPUImage]
nvidia-docker run -it -p 8888:8888 gcr.io/tensorflow/tensorflow:latest-gpu
```

## [Get Start](https://www.tensorflow.org/get_started/get_started)
### computational graph
computational graph 是由許多 TensorFlow 運算節點（nodes）所組成的運算藍圖，每個節點可以接受任意個數的 tensors 作為輸入資料（或是沒有任何輸入也可以），並輸出一個 tensor

- 建立兩個節點
    ```python
    node1 = tf.constant(3.0, dtype=tf.float32)
    node2 = tf.constant(4.0) # also tf.float32 implicitly
    print(node1, node2)
    ```
    可以用 dtype 指定型別，預設型別是 float32
    印出來的並不會是 3.0 跟 4.0，因為他們事實上並不是 value，而是 node。只有在 evaluated 時，才會呈現出 3.0 跟 4.0，


## API
### Tensors
基礎的資料類型(class/data type)，它是一種多維度的陣列，其陣列的維度稱為 rank

### Placeholder
placeholder 是一種可以讓 computational graph 保留輸入欄位的節點，其允許實際的輸入值留到後來再指定

### Variable
參數的部份我們可以透過 variable 的節點來指定
