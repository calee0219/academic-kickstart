---
title: "Go Module 雜談"
subtitle: ""
summary: ""
authors: ["Chia-An Lee"]
tags: ["intro", "go", "language"]
categories: ["coding"]
date: 2020-10-15T00:34:57Z
lastmod: 2020-10-15T00:34:57Z
featured: false
draft: false
---

v3.0.5 之後各 NF 使用 go module 維護所使用的 lib version，這邊簡單紀錄 go module 原理、free5GC 會面臨的問題、debug 手法

Golang 原本沒有打算推出套件管理系統，因為據說 Google 內部並不會使用舊版 lib，而是使用單一程式庫(Mono Repo)[1]，若任何套件有跟新，就直接讓全部有使用此套件的軟體使用新版套件。可是外部社群不能這樣玩，所以逐漸推出了各自的套件版本管理系統，諸如 go dep, gopkg.in, vgo 等等。但在 go v1.11 Golang 社群 (或是 Google 內部 golang 維護者) 推出了 go module 系統，直接否定所有外部版本管理套件，因此當時也惹來了 go dep 開發者的不滿與爭吵[2]。

Go module 類似於 npm 的 package.json，用一份 go.mod 檔案維護所使用的 lib 與使用的版本 (require 內部的東西)，在跑起來 (`go run`、`go mod download`、`go install`、`go build`) 的時候，就會直接用 `go get pakcage@version` 的方式下載 library，並且放到 `$GOPATH/pkg/mod` 資料夾下面。

## 安裝使用

Go v1.11 之後的版本皆有 go module 可以使用，可以用 `go env GO111MODULE` 確認 module 模式設定，有 on / off / auto 三種，on 預設都用 go module，off 都不用，auto 會看資料夾以及資料夾遞迴上去有沒有 go.mod 的檔案，如果有就用 go module，建議用 auto 就好，出問題再視情況 `go env -w GO111MODULE=on/off` 設定修改。

### Initialization

`go mod init {module name}` 來初始化 go module，下完此指令後可以在資料夾下看到新增了一個 go.mod 的檔案，內容如下，module name 就是你自己定義的 module name，version 預設會使用目前你的 go 版本

```go
module {module name}

go {go version}
```

此時還不會出現 require 欄位與 go.sum 檔案，如果資料夾下已經有 go file，可以用 `go mod tidy` 做 go lib 的 polish，因為此指令會把 go.mod require 中沒用到的 lib 刪掉，同時會把 go file 內部有用到的 lib 放進 go.mod 中，因此可以用此指令幫忙直接更新 go.mod (直接 go run 或其他跑起來的指令，沒有被寫進 go.mod 的 lib 其實好像也會幫忙寫入)。

### 載入已使用之 package

下完 `go mod tidy` 後，會發現 go.mod 多了 require 欄位，標明所使用的 lib 與所使用的版本，因為之前沒有這個欄位，go 預設會抓下指令時的最新版本，如果那個 lib 有打 git tag，會抓最新的 git tag 當版本，如果沒打，會抓最新的 commit hash 當版本

```go
module {module name}

go {go version}

require (
  gopkg.in/yaml.v2 v2.3.0
  github.com/wmnsk/go-gtp v0.7.4
  github.com/bronze1man/radius v0.0.0-20190516032554-afd8baec892d
  gopkg.in/check.v1 v1.0.0-20200227125254-8fa46927fb4f // indirect
  ...
)
```

其中因為 yaml.v2 有上 git tag，使用的版本是直接用 git tag 的 v2.3.0，而 radius 沒有打任何 git tag，因此版本使用 v0.0.0 後面接 commit 的時間 - {commit hash | cut -c 1-12}[3]。另外也有像是 check.v1 後面有註解 `// indirect`，這代表這個 package 不是這份 project 本身有用到，但是是這個 project 所使用的 lib 有使用的 package。

### Package 下載位置

這些 lib 會被 `go get` 到 `$GOPATH/pkg/mod/{pakcage path}@{version}` 下 (`$GOPATH` 可以用 `go env GOPATH` 看到)，例如 yaml 就會被下載到 `$GOPATH/pkg/mod/gopkg.in/yaml.v2@v2.3.0/` 下面，若之後有升/降級用到其他版本，會重新抓到 `$GOPATH/pkg/mod/gopkg.in/yaml.v2@2.2.8/` 下面。

lib 檢查順序:

1. 檢查是否 go module，如果有 (go.mod / GO111MODULE)，看 package prefix 是否跟 go.mod 的 module name 相同，若相同則知道視同個專案，拔除 module name 後，postfix 當作 director path 往下找
2. 檢查是否有 vendor folder 在這個 project 下面，如果有，檢查 vendor 資料夾下是否有 modules.txt 檔案，若有，使用 modules.txt 所指向的 package 位置 (在 vendor 資料夾裡面)
3. 檢查 go.mod 或 modules.txt 是否有 replace，優先使用 replace 的 lib 位置
4. module name prefix 不相同，檢查 `$GOPATH/pkg/mod` 下是否有 lib
5. 拿 prefix URL git clone 看是否有東西
6. 檢查 `$GOPATH/src` 下是否有 lib
7. 檢查 `$GOROOT` 下是否有 lib

### go.sum

另外，有 require 後，也會自動生出 go.sum 的檔案，這份檔案是用來維護 lib 的 check sum 做安全性與完整性的檢查，主要有兩種[4]，差別在於這個 package (lib) 是否有 go.mod 檔案 (是否是 go module 管理)，有 /go.mod 的 package 代表這個 lib 本身沒有用 go module 管理。

```
<module> <version> <hash>
<module> <version>/go.mod <hash>
```

go.sum 上面講的東西其實不太重要，更詳細的內容可以翻[4] 有更多細節。主要需要知道的是 go.sum 是對使用 package 做的 checksum 檢查，因為 go module 對於任何合法的 url 都可以使用 (而不是像 npm 等作中心化管理)，避免被竄改所以需要做 checksum 檢查。另外 go.sum 還會紀錄之前有使用過的版本，因此一份陳年的 go.sum 內容會有很多版本 (transparent log)。

既然 go.sum 的設計是紀錄 checksum，那就可能會帶出一些麻煩，常見有兩個問題

在使用的 package 有 force push / rebase / commit --amend 等強迫性操作時，再配合 git tag, git tag -d (刪除), git tag 的操作 (就是如果你要 re-tag)，會發生同一個 tag 在被 re-tag 後，checksum 不同，可是對 go.sum 來說，只能知道 checksum 不吻合可能被竄改，便會拒絕使用 package，這時候最簡單的作法是手動到 go.sum 內把當個 package 的 checksum 列全部刪掉，重新跑 go run，讓 go.sum 重抓，但更建議的是**盡可能不要做 git 破壞性更新 (套件開發者不要亂搞**。

merge 時因為兩個 branch 更新了同一個套件，又尤其當兩個 branch 跟新到的版本 (commit) 不同，便需要手動解 conflict，大致有兩種解法，一是把曾用到的 commit 都納入 go.sum (branch a 跟 branch b 的 commit 都留著)，因為 go.sum 的 transparent log 性質，理論上曾經用過的版本都要留著；另外一種做法是選其中一個版本，確認可以 work 就好。嫌麻煩更簡單的做法一樣是進到 go.sum 把相關的列都刪掉，重新 go run 讓他自己抓。

也許你會覺得直接不 commit go.sum 就好，可是因為 go module 不像 npm 信任一個中心化的套件管理倉儲，為了安全性與完整性，go.sum 應該是必須被 commit 的，而不像 npm 的 package-lock.json 應該被 ignore 掉。

### 升級 package

可以用 `go get -u {package}` 來單獨升級 package 的 minor / patch version，可以用 `go get -u` 來升級全部 package 的 minor / patch version，可以用 `go get -u=patch` 只升級 patch，不過這都是在有打 git tag 的情況。

可以用 `go get -u {package}@{version}` 來使用特定版本，其中 version 可以是 git tag, branch name, commit hash, latest[5]。

:::warning
go module 本身有一個指令 `go mod edit -require=path@version` 可以更新 go.mod 的版本，但是官方不建議這樣使用。

Note that -require overrides any existing requirements on path. These flags are mainly for tools that understand the module graph. Users should prefer 'go get path@version' or 'go get path@none', which make other go.mod adjustments as needed to satisfy constraints imposed by other modules.
:::

:::info
當過了一段時間 (尤其在 release 前)，建議用 go mod tidy 把沒在用的 package polish 掉，避免不必要的下載。
:::

## 開發使用

### Private Repo 問題

由於我們內部的專案是 private repo，直接 go get 會 permission denied (403 access denied)，因此要處理權限問題。

由於 go get 本身是用 git 的方式抓 package (可以用 `go get -x` 或 `go mod download -x` 看到詳細指令)，因此理論上只要 git fetch 可以抓的到 code 就可以了，常理來想就把 ssh-key 塞進 git server，然後用 git@ 的方式抓 code，或者指定帳號密碼用 https://ac:pw@ 的方式來抓 code，但是可以看出這兩種方法抓 code，都是需要改 upstream 的字串 (從 https:// 變成 git@ 或 https://ac:pw@)，而 go get 或自動加 https:// 在 package name 前面 (ex. github.com/free5gc/aper 會被加成 https://github.com/free5gc/aper.git)，要如何讓他改成加 git@ 等呢? 這時候可以使用 git 的 insteadOf 操作，利用

```bash
git config --global url."git@github.com:free5gc/".insteadOf https://github.com/free5gc/
```

來使 git 在抓 code 的時候自動改變 url，而不需要在 go 上面改變操作。

其中一定要用 `--global` 參數，如果不下，這個參數只會被設定在 local project 裡面，而 go get 的時候是不會吃到這個參數的。這個設定會被寫入 `$HOME/.gitconfig` 這份檔案裡，如果需要可以直接去改這份檔案。

設定完 git 後似乎可行了，可是實際 `go get` 時還是會抓不到，那是因為 `go env` 內有 `GOPROXY`[6] 與 `GOSUMDB`[7] 兩個參數，這兩個參數類似 golang 本身的可信任函式庫，非 public 的 project 因為無法透過這兩個 proxy 被獲取，因此會被視為危險被竄改的 url，需要把 private repo url 列入 `GONOPROXY` 與 `GONOSUMDB` 參數內，而在 go 1.13 版本之後，有 `GOPRIVATE`[8] 可以直接使用，它會幫忙同時寫入 `GONOPROXY` 與 `GONOSUMDB` 兩個參數。

最後，理論上 `GOPROXY` 參數預設就有 direct 在裡面，但是如果沒有，也需要加入

```info
In short, 下兩個指令讓 go get 可以抓到 private repo
`git config --global url.”git@github.com:free5gc/”.insteadOf https://github.com/free5gc/`
`go env -w GOPRIVATE=github.com/free5gc/*`

也可以直接用現成的 script: `cd infra/ && ./infra.sh`
```

### Package (lib) 開發問題

在開發時，單獨看一個 package 都是開發完後推上 git server 做 release，才讓別人使用。

但由於我們同時是 package 的 producer 與 consumer，會出現如果把 package (lib) 開發完，推上 git server，使用的 NF 才能更新 go.mod 的版本來使用，但是這樣會遇到無法快速迭代測試的問題，也就是如果你正在 bugfix aper，你無法 local 修完直接用 amf 來測試 (往好處想就是 unit test 要寫得更詳細 :thinking:)，而是需要先推到 remote server 上，然後更新 amf 的 go.mod 中 aper commit hash，才能來測試 amf 是否可以跑得起來，而如果發現 aper 有錯沒修好，就要反覆重複上面的動作。

:::warning
仔細講這裡會遇到更多討論，像是為了避免 commit message 變得沒有意義，應該用 `git commit --amend` 來更新，但是 `--amend` 是 force push，會改變 commit hash 與 history，而這時候使用它的 project (amf) 因為有 go.sum 維護 checksum，可能會發現 history 被改變了而不允許跟新，這時候可能還會需要進到 go.sum 內手動改內容…
:::

#### 1. 使用 replace[9]

在 go.mod 下使用 replace 可以把 go.mod 所使用的 package 替換成指定的路徑下的 package，就不會再從網路上拉並且放到 `$GOPATH/pkg/mod/` 資料夾下面，用這個方法在修改指定路徑下的 package 後，更動可以直接 apply 到使用它的 project 上，使用上先 clone 你要改的 package 到你指定的 local path (之後才能 commit 回到 git server)，然後在 go.mod 中 replace package 到剛剛的位置 (可以用相對或絕對路徑)，然後進行修改

```bash
git clone package /to/local/path
go mod edit -replace package=/to/local/path     # 新增 replace，可以用相對或絕對路徑
go mod edit -fmt                                # format go.mod，理論上用指令改了話不需要做
go mod edit -dropreplace package                # 刪除 replace
```

但 replace 本身有一個限制，無法 replace indirect 的 package，也就是說你**無法 replace 你用到的 package 所使用到的 package**，ex. amf 用到 `util_3gpp`，而 `util_3gpp` 有用到 `crypto`，如果 amf 本身沒用到 `crypto`，它就不能 replace `crypto`，就算把 replace `crypto` 寫入 go.mod 中也不會生效。(如果改用 2. vendor 的做法，因為 vendor 等於把所有 package 用跟 `pkg/mod` 的方式一樣全部都抓下來，所以應該可以把修改的 `crypto` 應用進 amf 中)

(replace 不只可以把 package 改成 local path，也可以修改 remote package 位置，因此很多 China 的文件有用 replace 來 bypass 牆)

#### 2. 使用 vendor[10]

(據說 vendor 會在之後的某一個 go 版本被 outdated)

使用 `go mod vendor` 會把 go.mod 內所有的 package 下載到 project 內的 vendor 資料夾下，並且建立一個 modules.txt 的檔案，由於 project 有 vendor 資料夾，go lib 會優先看這個資料夾內的 package，其中 package 的資料夾結構與 `$GOPATH/src` 的相似，可以透過這個性質，cd 到要修改的 package，**刪掉 package folder 後重新 clone 一個下來** (因為這個 folder 不會帶 git，無法 commit) (或用其他 git init / set-url 的方式)，再行修改。

:::warning
要注意每次下 go mod vendor 指令，golang 會直接把 vendor 資料夾刪除後建立新的資料夾，不會檢查內部是否有修改，因此要小心 **local change 一定要 push 上 server**。
:::

## Considering issue

### Go mod 統一版本問題

另外一個 go.mod 需要注意的是，如果有多個 package (包含 project 本身) 有使用相同的 package，而大家又是用不同版本的此 package，golang 會遵守 Minimal Version Selection[11] 的原則來選擇 package 版本，以 Russ Cox 提出的 sample 為例，如果你有 A, B, C, D, E, F, G 不同的 package，而其中 A 用到 B, C，B 用到 D，C 也用到 D, F，D 用到 E，F 與 G 互相依賴，如附圖

![](https://research.swtch.com/version-select-1.png)

其中用 1, 1.1, 1.2, 1.3, 1.4 等代表不同版本，經過歸納後，會產生一個建構清單

![](https://research.swtch.com/version-select-list.png)

![](https://research.swtch.com/version-select-2.png)

最後會使用 A1, B1.2, C1.2, D1.4, E1.2, F1.1, G1.1 的版本。這樣是否會導致問題? 理論上在 Semantic Versioning 的規範下，只要不是 major 版號更動，API 不應該有所變化，而使用最新的理應可以 work 並且效能或正確性高於舊版。

然而在 lib 還沒上 Semantic Versioning git tag 前，這不一定適用於我們的專案，目前測試看起來 golang 會選擇主要(最上層)的 go.mod 作為版本依據，這還需要持續觀察以及是否會遇到問題。最理想的做法是以 NF 為單位，每個 NF 所使用的 lib 固定為 NF go.mod 所指定的版號，不同的 NF 可用不同版本的 lib。

### Major 版本升級

如果之後要升級 major 版號，要如何處理?golang 官方不建議 major 版號升級只生 go.mod 的版號，畢竟理論上 major 升級應該是會有不相容的 API 更新[12]，而是建議在使用時就 import package/name/v2 的方式更新[13]，如果只更新 go.mod 會在 go.sum 出現 +incompatible 的字樣，提醒你有跟新 major 版號，你的 code 使用要檢查。

如何減少 major 版號更新是設計之初便要思考的，可以參考 Go Blog: [Keeping Your Modules Compatible](https://blog.golang.org/module-compatibility)

## Trouble Shooting

- go.mod 不可以在 `$GOPATH` 之中。
- 因為 [lib 檢查順序](#)，如果 package 不明原因無法自動獲取不到 (ex. private repo issue)，可以考慮直接到 `$GOPATH/pkg/mod` 或 `$GOPATH/src` 下面直接做 `git clone`，或用 copy folder 方式把東西丟上去，唯需要注意路徑，如果是 `pkg/mod` 需要把 folder 名稱重新命名為 `path/same/as/url/name@version-time-commit`，並且要把內部的 `.git` folder 刪掉 (不刪掉應該也沒差，不過 go 自己抓的好像會沒有)；如果是 `$GOPATH/src` 只要路徑對就好。

## Ref:

- [1] https://www.inside.com.tw/article/5031-google-2-billion-lines-codeand-one-place, https://ithelp.ithome.com.tw/articles/10217534, http://www.gigamonkeys.com/mono-vs-multi/
- [2] https://zhuanlan.zhihu.com/p/41627929
- [3] `git --no-pager show --abbrev=12 --format="%cd-%h" --date='format-local:%Y%m%d%H%M%S' --quiet`
- [4] https://segmentfault.com/a/1190000021425527?utm_campaign=studygolang.com&utm_medium=studygolang.com&utm_source=studygolang.com
- [5] https://openhome.cc/Gossip/Go/Module.html
- [6] https://golang.org/cmd/go/#hdr-Module_downloading_and_verification
- [7] https://golang.org/cmd/go/#hdr-Module_authentication_failures
- [8] https://golang.org/cmd/go/#hdr-Module_configuration_for_non_public_modules, https://golang.org/doc/go1.13#modules
- [9] https://thewebivore.com/using-replace-in-go-mod-to-point-to-your-local-module/, https://stackoverflow.com/questions/62243083/how-to-change-go-modules-path, https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive
- [10] https://golang.org/cmd/go/#hdr-Vendor_Directories
- [11] https://research.swtch.com/vgo-mvs, https://www.ardanlabs.com/blog/2019/12/modules-03-minimal-version-selection.html,  , https://about.sourcegraph.com/blog/the-pain-that-minimal-version-selection-solves/
- [12] https://semver.org/lang/zh-TW/
- [13] https://medium.com/@elliotchance/major-versions-in-go-modules-explained-ec7c1df3888b, https://blog.golang.org/v2-go-modules
- https://github.com/golang/go/wiki/Modules
- https://roberto.selbach.ca/intro-to-go-modules/
- https://blog.golang.org/using-go-modules
- https://juejin.im/post/6844903433846145038
