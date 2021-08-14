---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Linux 上密碼相關設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "ssh", "password"]
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

## Password Policy

密碼品質檢查，這個功能是透過 pam 時做，避免 user 弱密碼導致 ssh 或其他服務被破解 (`man pam_pwquality`)

### 修改方法

- Debian 系統預設沒有 pwquality，需要先安裝: `sudo apt-get install libpam-pwquality`
- 可以直接修改 `/etc/pam.d/` 檔案，直接接在 `pam_unix.so` 當行最後用空白隔開
- 修改 `/etc/security/pwquality.conf` 檔案 [rpm_pam] 或用 `authconfig` 指令 (Red Hat 系列，自己 man ㄅ)，可以寫在 `/etc/pam.d`，不過都給 config file 了就用杯

### 設定內容

- 密碼最小長度: `minlen=12 dcredit=0 ucredit=0 lcredit=0 ocredit=0 # 最少 12 char，後面 credit 要記得加，理由後述`
- 密碼複雜度:
  - 其實前面的 `minlen` 並不完全是密碼最小長度，而是密碼最少應得分數。計算方式是每個字元 +1，另外將字元分類成四類，分別再給一分，但另給的分數有上限:
    - `ucredit=3`: 密碼如果包含 upper-case 大寫字母最多多給分數
    - `lcredit=2`: 密碼如果包含 lower-case 小寫字母最多多給分數
    - `dcredit=1`: 密碼如果包含 digit-case 數字字母最多多給分數
    - `ocredit=0`: 密碼如果包含 other-case 其他字母最多多給分數 (eg. 符號)
    - 分數加總後便是總所得分數，以上例來看，`$$$$$$$a` 得分為 `8+0+1+0+0`，符號沒額外得分，小寫單字額外一分。而 `$$$$$aaa` 得分為 `8+0+2+0+0`，小寫單字做多額外兩分，不會給超過。
    - 故得知，如果只寫 `minlen=12`，會因為有額外分數而可以少於 12 字元
  - 也可以不用得分來算複雜度，而是直接用管理員想要的數量，只要將所想要的數字加負號 (common)
    - `ucredit=-1`: upper-case 大寫字母最少 1 個
    - `lcredit=-2`: lower-case 小寫字母最少 2 個
    - `dcredit=-3`: digit-case 數字字母最少 3 個
    - `ocredit=-4`: other-case 其他字母最少 4 個

其他參考 `/etc/security/pwquality.conf`:
```sh
retry=3             # 最多可以是錯幾次
difok=5             # 新密碼中不可出現跟舊密碼相同字串長度 (eg. 舊: abcdef，新密碼不可以是 abcdez)
minclass=3          # 最少一定要出現幾種字元 (大寫、小寫、數字、其他)，好處是不用限定一定要哪一種
maxrepeat=0         # 最大可重複字元次數，0 是不檢查 (!) (eg. =3，則不能有 26aaaac)
maxclassrepeat=0    # 同一種類的字元最多可以重複出現的次數，0 是不檢查
gecoscheck=0        # 會從 /etc/passwd 的 GECOS 欄位檢查是否有跟密碼重複超過 3 個字元串，簡單來說就是為了避免用身分資料來合成密碼，0 是不檢查，只有 True False (由 pam_cracklib 檢查)
dictcheck=1         # 字典攻擊檢查，由 pam_cracklib 的字典來查找，選項 True False
usercheck=1         # 檢查是否有 username 組成的密碼
enforcing=1         # 密碼規則建議或強制，預設 1 是強制
badwords=gura inna  # 自訂一不合法字串
enforce_for_root    # 如果使用者用 sudo passwd 也會強制檢查密碼，不然預設只會警告 (用 sudo 時)
local_users_only    # 只檢查有在 /etc/passwd 的密碼
ucredit=0
lcredit=0
dcredit=0
ocredit=0
```

## Password Expiration

密碼過期，可以設定密碼有效期限，或是請使用者登入時修改密碼 (方便用於幫使用者亂數生成密碼給他後請他第一次登入修改密碼)

### login.defs

這份檔案類似模板，只會影響到新加的使用者，對於已經存在的使用者並不影響

```sh
PASS_MAX_DAYS 1234 # 密碼最多用幾天 (要換)
PASS_MIN_DAYS 0    # 密碼幾天內不能修改
PASS_WARN_AGE 7    # 密碼到期前幾天開始提醒
```

### chage

修改現存使用者的密碼到期時間

`chage [options] LOGIN`:
- `-d`: 修改 "上一次修改時間"，可用 YYYY-MM-DD 格式或從 1970/01/01 開始算的天數
- `-E`: 修改到期時間，可用 YYYY-MM-DD 格式或從 1970/01/01 開始算的天數
- `-h`: help
- `-I`: 密碼到期後 N 天會直接把使用者鎖掉
- `-l`: list，顯示資料
- `-m`: min，密碼幾天內不能修改
- `-M`: max，密碼最多用幾天
- `-R`: 應用 chroot，也許是到期後把使用者 chroot 到低權限的家目錄 (?)
- `-W`: 密碼到期前幾天開始提醒

### 迫使使用者換密碼

通常一些系統我們可能為了避免知道使用者密碼，會亂數生成密碼給他，再請他登入後自己 `passwd` 改密碼，但如何避免使用者懶得改呢?

其實密碼到期後的下一次登入，系統並不會讓使用者無法登入，而是登入後迫使他改密碼，因此我們可以將使用者設定成密碼到期，便可以讓系統請他改密碼

- `passwd --expire $USER`: 用 passwd 版本
- `chage -d 0 $USER`: 用 chage 版本，其實就是把他的到期日期設定成 1970/01/01

## Remember

避免使用者設定以前設定過的密碼

在 `/etc/pam.d` 下的檔案 (`common-password` 或 `system-auth`)，password 最後面接 `remember=5`，代表新密碼不能用前五次內的密碼

## Password Generation

- `mkpasswd`: 用你輸入的參數送你密碼
- `makepasswd --chars 12`: 用 `urandom` 送你一組密碼
- `pwgen`: 送你一堆密碼

## P.S.

[rpm_pam]: 理論上要在 `/etc/pam.d/passwd` 下面多寫 `password required pam_pwquality.so retry=3` 讓系統知道要用 pam_pwquality，但現在預設應該都有 `auth include system-auth`，而去翻 `system-auth` 檔案會發現內部就有寫 `pam_pwquality`，因此應該是不用特別再寫一次。

## Reference

- [第 4 章 用工具和服务强化您的系统](https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/7/html/security_guide/chap-hardening_your_system_with_tools_and_services)
- [How To Set Password Policies In Linux](https://ostechnix.com/how-to-set-password-policies-in-linux/)
- [Linux從零開始(11/30): 在CentOS設定密碼複雜度規則](https://ithelp.ithome.com.tw/articles/10194698)
- [How to Force User to Change Password at Next Login in Linux](https://www.tecmint.com/force-user-to-change-password-next-login-in-linux/)
- [Linux / UNIX: Generating Random Password With mkpasswd / makepasswd / pwgen](https://www.cyberciti.biz/faq/generating-random-password/)