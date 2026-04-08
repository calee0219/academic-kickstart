---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "tmux 小抄"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "tmux", "cheetshit"]
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

## Basic
- 安裝
```shell
sudo apt install tmux
```
- 指令
```shell
tmux # 開啟一個新的 tmux
tmux a # attach 到最後一次出來的 session
tmux ls # 列出有那些 sessions
tmux a -t [number] # 重回該number的session
```

## window

## session

## panel
