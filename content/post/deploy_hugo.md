---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Building a hugo site locally"
subtitle: ""
summary: ""
authors: ["Chia-An Lee"]
tags: []
categories: []
date: 2020-06-21T22:13:15+08:00
lastmod: 2020-06-21T22:13:15+08:00
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

# 部署 Hugo + Academic theme + github pages 個人網頁

Academic 官網建議使用 Netlify 方式部署，方法可見[此篇]

## 安裝 HUGO

- macOS
```bash
brew install hugo
```

- Ubuntu

## 下載 Hugo Academic

這裡建議直接用 [academic-kickstart 樣板](https://github.com/sourcethemes/academic-kickstart)修改，原因是 academic 要新增的 config 頗多，直接修改會比較簡單
```bash
git clone https://github.com/sourcethemes/academic-kickstart.git
cd academic-kickstart
git submodule update --init --recursive
```

用以下指令跑起 server 確認是否下載成功
```bash
hugo server -D
```

到網頁 `http://localhost:1313` 觀看執行結果，另外 `hugo server -D` 會動態修改，所以可以放著給它跑

## 調整內容

### 設定

- 刪除教學導覽
```bash
rm content/home/demo.md
```

- 修改網頁 metadata

  ![](/static/img/hugo-metadata.png)

- 修改 title icon

  更改 `assets/images/icon.png`，將此檔案修改成需要的 icon

- 修改 `/config/_default/params.toml`，這份檔案擁有幾乎所有網站的參數，確實將需要的填入

  特別需要注意，其中 `address`, `address_format` 跟 `[address_format]` 需要互相配合 (格式有的欄位都要有)，不然之後如果有需要用來產生 address 可能會出現問題

  另外 `main_menu = {align = "r", show_logo = true}` 個人習慣 align 都靠右，會有 navbar 靠右的效果

### header

- 修改 `/config/_default/menus.toml`，其中 `weight` 參數的大小會決定這個 tag 放置前後，weight 越小，排越前面

### 內容

- 將不需要的 block 隱藏，選擇 `content/home/` 下的 .md 檔案，將不需要的 md 內，`active = false`，需要的 `active = true`

  ![](/static/img/hugo-active.png)

- `about.md` 需要另外修改，他是使用 link 到 admin author (預設是 admin，你也可以改成其他人)

  需要去 `content/authors/admin/_index.md` 修改使用者資料

- icon: 像是 `skills.md` 頁面或其他會需要用到 icon，academic 預設有連動 `font awesome` 跟 `jpswalsh` 的 icon，更多的需要自行匯入 svg 檔到 `/assets/images/icon-pack/` 內，然後使用時填寫如下，其中 icon 部分填寫檔名 (.svg 之前的內容)
  
  ![](hugo-custom-icon.png)

## 部署 GitHub Pages

