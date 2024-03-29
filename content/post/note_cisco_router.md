---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Cisco Router 設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "cisco", "router"]
categories: ["network"]
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

### Password Recorivy
1. Power ON, CTRL-break
2. confreg 0x2142 
3. reload
4. enable
5. copy startup-config running-config
6. no shutdown: open port
7. change password
8. config-register 0x2102: get back to normal boot

## 7609
### 洗掉 config
- enable
- write erase
- reload
- 這時候可能 default reboot 會進入 Romman 狀態，繼續下 boot 會來到正常狀態
- 下 `configreg 0x2102` (或 `configreg 0x2101`) 讓開機直接進到正常狀態
- [參考 configreg](https://www.cisco.com/c/en/us/support/docs/routers/10000-series-routers/50421-config-register-use.html)

### Reset


## Routing
### vrrp
- 作 gateway 備援使用
- 有三種狀態 `初始狀態(Initialize)`、`主狀態(Master)`、`備援狀態(Backup)`
- 


## NX-OS
### 沒有權限時，重設 admin 密碼
[參考](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/sw/password_recovery/b_nx_os_pwr/nx_os_pw.html#wp48457)
- 開機
- 按 `ctrl-C` 或 `ctrl-R`
- 進入 `loader>`
- `loader> dir` 看有哪些 boot file
- `boot n3000-xxx` 選擇你要 boot 的檔案 (可能選有 kickstart 的)
- 進入 `switch(boot)#`
- `conf t` -> `admin-password` -> 輸入 admin 密碼 -> `exit`
- `dir bootflash:` 列出有的開機檔案
- `load bootflash:n3000-xxx` 選擇以 xx 檔案開機
- 帳號: admin, 密碼: 剛剛設定的
- 進入系統後，記得要把 kickstart 與 system 指向對的地方
- `conf t` -> `boot kickstart n3000-xxx` -> `boot system n3000-kickstart-xxx`
- 如果沒做上面的動作，有可能 `reload` 後會回到 `loader>`

### 恢復原廠設定
- enable
- write erase
- reload
- 如果 reload 卡在 loader，做上面的動作，並記得指向正確的 system 與 kickstart
