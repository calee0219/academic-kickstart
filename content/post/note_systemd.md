---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "systemd 小記"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "systemd"]
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

### sample
位置 `/lib/systemd/system/xxx.service`
```shell=
[Unit]
Description=Jupyter Notebook
Documentation=man:mysqld(8)
Documentation=https://mariadb.com/kb/en/library/systemd/
After=network.target syslog.target docker.service

[Install]
WantedBy=multi-user.target
Alias=mysql.service
Alias=mysqld.service

[Service]
Type=simple
StandardError=inherit
StandardOutput=syslog
PIDFile=/run/jupyter.pid
# Step 1 and Step 2 details are here..
# ------------------------------------
ExecStartPre=
ExecStart=/home/avkash/.local/bin/jupyter-notebook --config=/home/avkash/.jupyter/jupyter_notebook_config.py
User=avkash
Group=avkash
WorkingDirectory=/home/avkash/tools/notebooks
Restart=always
RestartSec=10
#KillMode=mixed

[Install]
WantedBy=multi-user.target
```

- Description: 描述
- Documentation: 文件位置
- WantedBy: ???
- Alias: 當下 systemctl ... mysqld.service 時，會被 alias 到 這個 service
- After: 再某 service 起來後才起來 [find here](https://stackoverflow.com/questions/21830670/systemd-start-service-after-specific-service)
- Type: 定义启动时的进程行为。 (simple, forking, oneshot, dbus, notify, idle)
- PIDFile: PID file 放哪裡
- ExecStartPre: 在執行 Exec 之前，要先做的事情
- ExecStart: 用哪個 script 執行，可以用 which [command] 尋找位置
- ExecStartPost: ???
- UMask: ???
- User: 執行的 user
- Group: 執行的 group
- WorkingDirectory: 在哪個 dir 執行
- Restart: 當掉後的處理
- RestartSec: restart 要等幾秒
- WantedBy: 需要哪些服務先起來

[find here](https://aichamp.wordpress.com/2017/06/13/setting-up-jupyter-notebook-server-as-service-in-ubuntu-16-04/)
[find here](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
[find here](https://wiki.ubuntu.com/SystemdForUpstartUsers)
[find here](http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html)

## 執行
```shell
sudo systemctl start xxx.service
sudo systemctl daemon-reload
sudo systemctl restart xxx.service
sudo systemctl enable xxx.service
```

## systemd-default
[find here](https://www.systutorials.com/239880/change-systemd-boot-target-linux/)
```
┌─────────┬───────────────────┐
│Runlevel │ Target            │
├─────────┼───────────────────┤
│0        │ poweroff.target   │
├─────────┼───────────────────┤
│1        │ rescue.target     │
├─────────┼───────────────────┤
│2, 3, 4  │ multi-user.target │
├─────────┼───────────────────┤
│5        │ graphical.target  │
├─────────┼───────────────────┤
│6        │ reboot.target     │
└─────────┴───────────────────┘
```

### graphic mode 與 text mode 轉換
```shell
systemctl isolate multi-user.target # 轉為 text mode
systemctl isolate graphical.target # 轉為 graphic mode

systemctl enable multi-user.target # 開機預設成 text mode
systemctl set-default multi-user.target
```

### 手動改檔
(設定炸裂時，用 USB 開機，把磁碟 mount 到 USB 上，手動改 link)
:::warning
注意：
目標位置 default.target 是在 /etc/systemd/system 裡
可是要 link 的檔案是在 /lib/systemd/system 裡
用 symbolic link
:::
```shell
ln -s /lib/systemd/system/graphical.target /etc/systemd/system/default.target
```

## Timer

https://cfarm.blog.aznc.cc/%E4%BD%BF%E7%94%A8-systemd-timer-%E4%BB%A3%E6%9B%BF-crontab/
https://unix.stackexchange.com/questions/191270/systemd-timer-every-x-days-at-0400
