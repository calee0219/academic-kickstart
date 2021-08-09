---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Linux 小指令"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "linux", "cli"]
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

### Change default editor
- For global
  ```shell=
  sudo update-alternatives --config editor
  # 然後選擇數字
  ```
- For one user
  ```shell
  select-editor
  ```
  or
  in `.bashrc`
  ```rc
  export EDITOR='vim'
  export VISUAL='vim'
  ```

### Add groups
- Change main group
  ```shell=
  sudo groupadd mynewgroup # Add a new group
  usermod -g groupname username
  groups username
  ```
- Add secondary group
  ```shell=
  sudo usermod -aG groupname username
  ```

## SSH

### SSH Keep Alive

#### Client side
`~/.ssh/config`
```shell=
Host *
ServerAliveInterval 240
```
`chmod 600 ~/.ssh/config`

#### Server Side
`/etc/ssh/sshd_config`
```shell=
ClientAliveInterval 60
ClientAliveCountMax 2
```

### SSH Tunnel
[參考](https://unix.stackexchange.com/questions/46235/how-does-reverse-ssh-tunneling-work)
![](https://i.stack.imgur.com/HbSEM.png =400x)
- Normal Tunnel (Local Port Forward)
  - 正常情況下，你希望你的封包先過一台機器(Server Side)，再用這台機器出去，達到 VPN 的效果，你如果可以直接對這台機器(Server Side) SSH，便可以用正常的 SSH Tunnel
  - 指定碰到 client 的 port 就等於碰到 server 的 port
  - Client
    ```
    ssh -L [bind_address:]port:host:hostport user@host_ip
    ```
- Reverse Tunnel (Remote Port Forward)
  - 如果你希望封包進入一台無法 SSH 的機器(Server Side)，可能是再公司防火牆內的機器，對於開 SSH Session 只能由內往外開，不能由外往內開，這時候就需要先再 Server Side 主動開 Reverse SSH Tunnel，把 port bind 再 Client Side 上的某個 port，再由 client side 戳 localhost 的這個 port
  - Server:
    ```
    ssh -R 2222(bind to client port):localhost(server / server 可碰到):22(server port) user@client_ip
    ```
  - Client:
    ```
    nc -v localhost 2222
    ```
- Socket Proxy (Dynamic Port Forward)
  - 正常情況下，你希望你的封包先過一台機器(Server Side)，再用這台機器出去，達到 VPN 的效果，同時不需要指定碰到 client 的 port 就等於碰到 server 的 port
  - Client
    ```
    ssh -D [bind_address:]port user@server_ip
    ```
  - [參考](https://unix.stackexchange.com/questions/213213/difference-between-local-port-forwarding-and-dynamic-port-forwarding)

## ICMP Tunnel
- https://github.com/DhavalKapil/icmptunnel
