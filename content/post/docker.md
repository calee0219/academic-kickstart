---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Docker"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "docker", "container"]
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

## 參考資料
- [《Docker —— 從入門到實踐》](https://philipzheng.gitbooks.io/docker_practice/content/introduction/why.html)
- [Docker 簡介](https://drive.google.com/open?id=11BCWGs80Vmw3DEBbUcVqV5Ua5sPsrVZCkWMsEX-wmmU)

## 安裝
### Ubuntu
```shell=
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
```
### CentOS
```shell=
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce
```

## 單位
- 映像檔(image)
    - 類似 docker 的模板
    - image 類似模板，要用 image 開出來的 container 才能用
    - 名詞
        - NAME
        - DESCRIPTION: 描述
        - AUTOMATED
        - REPOSITORY (倉庫)
        - TAG: 標記，通常會存版本號
        - IMAGE ID: image 被抓下來時，隨機產生的唯一 ID
- Dockerfile
    - 將 docker 與相關安裝執行指令寫成操作檔案
- 容器(container)
    - 建立出來的執行實力
    - 基本上是基於 image 在跑得 => 開出 container 後不能將 image 刪掉，or 可能會跑不動
    - 可以用 image 創
    - 可以用 Dockerfile 創
    - 可以被啟動、開始、停止、刪除
- 倉庫(Registry)
    - Public Hub
        - [Docker Hub](https://hub.docker.com)
        - [Docker Pool](http://www.dockerpool.com)
    - Private Hub

## 指令
### Hub
- `docker search [image]`
    - 從 Docker Hub 上搜尋是否有相關名字的 docker image
- `docker pull [image]`
    - 將 docker image 從 Docker Hub 上下載下來
- `docker login`
    - 登入 Docker Hub
- `docker push [image]`
    - 把 docker image 推上 Docker Hub
    - 基本上倉儲相關指令與 Git 相同
    - 注意：docker push 必須有 namespace，也就是當初對 images 命名時，要記的命成 `username/imagename`

### Image
- `docker images`
    - 將所有的 docker image 列出
- `docker run [image]`
    - 啟動一個 container
    - 通常後面會接一個操作指令，操作完就結束 container
        - e.g. `docker run Ubuntu /bin/echo "Hello World"`
    - `-i`: 標準輸入保持打開
    - `-t`: 讓Docker分配一個虛擬終端（pseudo-tty）並綁定到容器的標準輸入上
    - 通常 -i -t 會合用
        - e.g. `docker run -t -i Ubuntu /bin/bash`
    - `-d`: 進入背景執行
- `docker rmi [image]`
    - 刪除 image
- `docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]`
    - OPTIONS
        - `--author, -a`: 作者
        - `--message, -m`: commit message
    - container
        - 要 commit 的 container => commit 完後便會變成新的 image
    - REPOSITORY
        - 如果想要對產出的 image 做命名
- `docker load/save IMAGE`
    - 匯入 or 匯出(儲存) image (像是存成 .tar)
- `docker build [Dockerfile]`
    - 從 Dockerfile 編譯

### Container
- `docker ps`
    - 列出目前在執行的 container
    - `-a`: 列出全部的 container(包含關機的)
- `docker start [CONTAINER ID / CONTAINER NAME]`
    - 啟動關機的 container
- `docker stop [CONTAINER ID / CONTAINER NAME]`
    - container 關機
    - 關機後會留下殘骸 => 可以再次開啟
- `docker restart [CONTAINER ID / CONTAINER NAME]`
    - 重新開機
- `docker logs [CONTAINER ID / CONTAINER NAME]`
    - 列出這個 container 曾經的 stander output
- `docker exec [CONTAINER ID / CONTAINER NAME]`
    - 將在背景執行的 container 提出來
    - 通常配合 `-i -t`，回到互動視窗
- `docker rm [CONTAINER ID / CONTAINER NAME]`
    - 刪除 conatiner
- `docker import / export CONTAINER`
    - 匯入 or 匯出 container
    - `-o NAME.tar`: 指定匯出格式 (ex .tar)

### Data Volumes
分別有 Data Volumes 與 Data Valume Container 兩種
- Data Valumes
    - 將主機目錄對應到容器中，類似 mount
    - `docker run -v {容器內資料夾} IMAGE`: 會在主機內建一個資料夾掛載上去
    - `docker run -v {主機內資料夾}:{容器內資料夾} IMAGE`: 直接用已存在的資料夾掛載
    - 可以多個容器掛載到同一個主機資料夾
    - 多個 `-v` 參數可以掛載多個資料夾
    - 容器內資料夾一定要是絕對路徑，主機則不一定
    - 預設為 rw，可用 `docker run -v {主機內資料夾}:{容器內資料夾}:ro IMAGE` 改成唯讀
- Data Valume Container

## Attach Device
- USB:
    - `docker run --device=/dev/ttyUSB0 -it ubuntu /bin/bash`
- NVIDIA GPU:
    - `docker run --device=/dev/nvidia0 -it ubuntu /bin/bash`

## RESTful API
修改 `/etc/docker/daemon.json`
```json=
{
  "live-restore": true,
  "group": "dockerroot",
  "insecure-registries": ["0.0.0.0:5000"],
  "hosts": [
     "unix:///var/run/docker.sock",
     "tcp://0.0.0.0:2375"
  ]
}
```
以 `jupyter/tensorflow-notebook` 為例，開啟 RESTful api 後，docker CLI 指令要用 Root 執行
```shell=
sudo docker pull jupyter/tensorflow-notebook
```
修改完後，重啟 docker service: `sudo systemctl restart docker`

- 參考: https://docs.docker.com/engine/reference/commandline/dockerd/
- 參考: https://ithelp.ithome.com.tw/articles/10191850
- [IF ERROR](https://stackoverflow.com/questions/42987692/docker-enable-remote-http-api-with-systemd-and-daemon-json)
- [Error also](https://success.docker.com/article/how-do-i-enable-the-remote-api-for-dockerd)

### 操作
- `docker version`:
```
curl -X GET http://localhost:2375/version
```
- `docker pull jupyter/tensorflow-notebook`:
```
curl -X POST http://localhost:2375/images/create?fromImage=jupyter/tensorflow-notebook
```
- `docker images`:
```
curl -X GET http://localhost:2375/images/json
```
- `docker create -p 8080:80 jupyter/tensorflow-notebook`:
```
curl -H "Content-Type: application/json" http://0.0.0.0:2375/containers/create?name=tensor -d '{
    "Image": "jupyter/tensorflow-notebook",
    "HostConfig":{
        "Memory": 4194304,
        "NanoCPUs": 2000000000,
        "PortBindings": {
            "80/tcp": [{"HostPort": "8080"}]
        },
        "Dns": ["8.8.8.8"],
        "Devices": [{
            "PathOnHost": "/dev/nvidia0",
            "PathInContainer": "/dev/nvidia0",
            "CgroupPermissions": "rwm"
        }]
    }
}'
```
- `docker ps -a`:
```
curl -X GET http://localhost:2375/containers/json?all=true
```
- `docker start tensor`:
```
curl -X POST http://localhost:2375/containers/tensor/start
```
- `docker stop tensor`:
```
curl -X POST http://localhost:2375/containers/tensor/stop
```
- `docker rm tensor`:
```
curl -X DELETE http://localhost:2375/containers/tensor?v=true
```

[參考](https://docs.google.com/document/d/10NZnh2SWIZCBpYv6T7fFuAm4Zbw_PzZBe0yhvFc-7YI/edit#)
[Docker security](https://docs.docker.com/engine/security/security/)

## Nvidia-docker
[參考](https://github.com/calee0219/NCHC-docker-test)
[nvidia-docker](https://github.com/NVIDIA/nvidia-docker)
- 有 cuda 但沒有 cudnn
- 魔改
    - 下載 cudnn: https://docs.nvidia.com/deeplearning/sdk/cudnn-install/index.html
    - 解安裝到 jupyter/driver (之後會一起 mount 進 container):
        ```
        tar -xzvf cudnn-9.0-linux-x64-v7.tgz
        ```
    - 開啟一個 container volumn
        ```
        docker volumn create cudnn
        ```
    - 把 container volumn 與 jupyter folder 同時 mount 入 container
        ```
        docker run --runtime=nvidia -v /home/intern2018/NCHC-docker-test/jupyter:/jupyter -v cudnn:/cudnn -it calee0219/jupyter-docker
        ```
    - 照 doc 安裝 cudnn (複製貼上、修改權限):
        ```
        cp /jupyter/driver/cuda/include/cudnn.h /usr/local/cuda/include
        cp /jupyter/driver/cuda/lib64/libcudnn* /usr/local/cuda/lib64
        chmod a+r /usr/local/cuda/include/cudnn.h /usr/local/cuda/lib64/libcudnn*
        ```
    - 測試
        - 改環境變數指向
            ```
            export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH
            ```
        - 測試 script
            ```python=
            import sys
            import numpy as np
            import tensorflow as tf
            from datetime import datetime

            device_name = sys.argv[1]  # Choose device from cmd line. Options: gpu or cpu
            shape = (int(sys.argv[2]), int(sys.argv[2]))
            if device_name == "gpu":
                device_name = "/gpu:0"
            else:
                device_name = "/cpu:0"

            with tf.device(device_name):
                random_matrix = tf.random_uniform(shape=shape, minval=0, maxval=1)
                dot_operation = tf.matmul(random_matrix, tf.transpose(random_matrix))
                sum_operation = tf.reduce_sum(dot_operation)

            startTime = datetime.now()
            with tf.Session(config=tf.ConfigProto(log_device_placement=True)) as session:
                    result = session.run(sum_operation)
                    print(result)

            # It can be hard to see the results on the terminal with lots of output -- add some newlines to improve readability.
            print("\n" * 5)
            print("Shape:", shape, "Device:", device_name)
            print("Time taken:", str(datetime.now() - startTime))
            ```
    - 將 `/usr/local/cuda/` 全部丟入 container volumn 內
        ```
        cp /usr/local/cuda/* /cudnn
        ```
    - 之後都把 container volumn mount 到 `/usr/local/cuda/`
        ```
        docker run --runtime=nvidia -v /home/intern2018/NCHC-docker-test/jupyter:/jupyter -v cudnn:/usr/local/cuda/ -it calee0219/jupyter-docker
        ```

## Dockerfile
```dockerfile=

```

## GPU
`--divice=/dev/nvidia0`
