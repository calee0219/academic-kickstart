---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "GitHub 入門"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "git", "github", "version control"]
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

## GitHub 註冊
1. 首先到[GitHub](https://github.com)
2. 點下網站上的Sign Up
3. 依網站要求輸入相關資料
4. 帳號開通後即完成！！


## 安裝Git
### Windows
1. 首先到[Git for windows](https://git-for-windows.github.io/)下載Git for windows安裝檔
2. 執行安裝檔安裝Git
3. 安裝完後, 電腦上應該會出現一個**Git Bash**程式, 按下並執行Git Bash

### Linux
```
sudo apt-get install git  // debian or ubuntu
sudo yum install git-core  //fedora
sudo dnf install git // fedora 24 or upper
```
### MAC
```
brew install git
```
or

[下載這裡的 git](https://sourceforge.net/projects/git-osx-installer/files/)

## Git基本觀念
- 可以看[Git Book](https://git-scm.com/book/zh-tw/v1)的第一章了解git版本控制基本觀念
- git 三類
    - tracked (被追蹤的檔案，有做過 git 版控的檔案皆為此類)
    - ignored (忽略的檔案，此類檔案不會被追蹤，須寫在 .gitignore 裡)
    - untracked (未被追蹤的，剛新增的檔案皆為此類)
- git 三狀態
    - working directory (工作狀態，未做任何版本控制，此狀態內修改的code都是不可逆的)
    - staging area (版控站存區，working directory 的 code 皆可被這裡的 code 複寫回原來的版本，但若此區的檔案被更新，則無法回復之前在 staging area 的 code)
    - repository (進入版控的 code，此區的 code 有許多節點，修改過的 code 可回復到此區的任意節點)
- git / GitHub 術語
    - repo: repository 縮寫
    - merge: 兩份同一個專案的 code 互相衝突時，檢查檔案是否有衝突的地方，若無，合併檔案，法之修改衝突的部分後合併檔案
    - pull request (PR): 要求他人將你的更新 merge 到他的 repo 中


## git 基礎指令
:::info
指令中有[]者表示括號中內容依使用者的需求自填，"[" ＆ "]"不須下在指令中
:::

- git init
    - 新創一個git repository

- git status 
    - 查看目前專案目錄狀態

- git branch
    - 查看目前所有分支(有打星號的分支)
    - 創建新分支：`git branch [newBranchName]`
    - 切換分支：`git checkout [branchName]`

- git add [fileName] 
    - 將檔案加到暫存區stage, 在stage的檔案就是準備要commit的檔案

- git commit
    - 將所有已經加到stage的檔案提交到repository, 需要輸入提交訊息來紀錄這次提交
    - 通常會搭配 `-m` 參數使用, 此參數可以讓你在下commit指令時同時順便輸入簡易的提交訊息

- git merge
    - 合併兩個分支
    - 指令：`git branch [firstBranch] [secondBranch]`
    - 上述指令會將secondBranch合併到firstBranch中
    - 合併完且不再需要的branch可以下`git branch -d [branchName]`刪除

- git log
    - 查看歷次提交的相關資訊
    - 若只要看線圖可以加上 `--graph` `--oneline` `--decorate` `--all`四個參數

- git push
    - 將本地分支提交到遠端伺服器
    - 若遠端分支有更新，push會失敗，必須先pull遠端更新才能push本地更新
    - 完整指令：`git push [remoteRepositoryName] [localBranchName]`
    - 若你的repository是從gitHub clone下來的，reomteRepositoryName會是origin

- git pull
    - 把遠端更新下載回本地端並與本地端分支合併
    - 類似把 git fetch 及 git merge 一起做的指令
    - 完整指令：`git pull [remoteRepositoryName] [localBranchName]`
    - 可以加入`--rebase`參數讓線圖更漂亮

- git --help
    - 查看git幫助訊息


## 專案協作

- git clone
    - 複製git server 的 repository 到 local 端


## Step by step
對於 moztw 的專案，如果你不想要知道他們到底是幹什麼的，只要可以讓你可以做就好的話...

1. 到 moztw 的 [GitHub專案連結](https://github.com/moztw/www.moztw.org) ，右上方按 fock ，複製到自己的 GitHub 上
![](https://i.imgur.com/um4W72c.png)

2. 到自己 fork 的 repo ，按右上方 Clone or download，將看到的網址複製下來
![](https://i.imgur.com/ntuZBun.png)

3. 到你的電腦，下 `git clone [剛剛的網址]` 的指令，等待電腦下載完成

4. 到 moztw issue 尋找你想要改的 bug 或新增的 feature
![](https://i.imgur.com/1la2x1y.png)

5. 點入 issue 後可以查看詳細內容
![](https://i.imgur.com/CCK3SjL.png)

6. 針對你要貢獻的 issue，編輯你需要修改的檔案，在編輯前，記得先讀過一些 coding 的[共同準則](https://github.com/moztw/www.moztw.org#coding-style)

7. 若想看修改的結果，可以 npm 的方式運行，運行方式[如下](#如何運行-moztw)

8. 編輯完成後，下 `git status` 可以看到你所修改的檔案變成 *modified* (紅色的) 狀態，若是新檔案則是 *untracked files* 狀態

9. 若已經確認某檔案將不再修改，可以下 `git add [filePath]` 將檔案放到暫存區 (staging area) 準備commit

10. add完所有需要提交的檔案後，就可以下 `git commit -m "Fix issue [issue No.], [yourCommitMessage]"` 將檔案提交到repository了，記得要把 issue No. 寫在你的 commit 裡，pull request 時管理員才能知道你修的是哪個 issue

11. 確認所有檔案都以完成提交，下 `git push origin master` 上傳到你 GitHub 上的 repo

12. 確認你 GutHub repo 上的檔案是正確的後，按左上方的 new pull request 完成你的 pull request
![](https://i.imgur.com/qKh2Hwj.png)

13. 坐等你的 pull request 被 merge 或被退回吧~~~


## 如何運行 moztw
1. 安裝 [npm](https://www.npmjs.com/)
    - windows 下安裝 [nodejs](https://nodejs.org/en/) 即可
    - Ubuntu / Debian 下，在 terminal 下 `sudo apt install nodejs npm` 指令
    - Fedora 下，在 terminal 下 `sudo dnf install nodejs npm` 指令
    - Mac 下， 在 terminal 下 `brew install node` 指令

2. 用 terminal (linux/mac) 或 cmd (windows) 到你 moztw 所在的資料夾下

3. 下 `npm install` 安專所需的套件，然後下 `npm start` 運行網頁

4. 在瀏覽器裡打開 `localhost:3000` 即可看到你下載下來的網頁，之後對資料夾內檔案做修改，網頁都會自動更新


## 附錄
- [Git Book](https://git-scm.com/book/zh-tw/v1)
- [GitHub Help](https://help.github.com/)
- [Codecaemy - Learn Git](https://www.codecademy.com/learn/learn-git)
