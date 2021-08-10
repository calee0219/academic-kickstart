---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "LDAP"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "ldap", "openldap"]
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

## freeIPA

## OpenLDAP

### Server
#### NFS

#### NIS

#### LDAP


### Client

#### NFS

#### NIS

#### LDAP
- 需要下載
    ```shell
     sudo yum update && yum install openldap openldap-clients nss-pam-ldapd
    ```
- 複製 server 端的 CAe
- 產生 config
    ```shell
    authconfig --enableldap --enableldapauth --ldapserver=ldaps://ldaps.cs.nctu.edu.tw --ldapbasedn="dc=cs,dc=nctu,dc=edu,dc=tw" --update
    ```
    設定檔: `/etc/openldap/ldap.conf` :
    ```shell=
    BASE dc=cs,dc=nctu,dc=edu,dc=tw
    URI ldaps://ldaps.cs.nctu.edu.tw/
    TLS_REQCERT allow
    TLS_CIPHER_SUITE=AES256
    TLS_CACERTDIR /etc/ssl/certs/csrootca.crt
    
    filter passwd (memberof=cn=cs-ta,ou=MemberGroup,dc=cs,dc=nctu,dc=edu,dc=tw) # 如果要限制只有 cs-ta groups 的資訊才會被透過 LDAP 進來了話
    ```
- 重啟服務
    ```shell
    sudo systemctl restart nslcd
    sudo systemctl restart nscd
    ```
- 檢查
    ```shell
    ldapsearch -D "uid=calee,ou=People,dc=cs,dc=nctu,dc=edu,dc=tw" -W uid=xxx

    ypwhich : 查詢 NIS Server
    ypchsh：改變 NIS 上使用者登入的 Shell
    ypchfn：改變 NIS 上使用者的完整名稱跟相關資訊，也就是 /etc/passwd 中的第五個欄位
    ypmatch：查詢 NIS map 的 KEY
    yptest：測試 NIS 的設定，如果可以跑出來 NIS 上的使用者則代表可以查詢
    ```
    -D uid 裡面的是去登入 ldaps.cs.nctu.edu.tw 的帳號，之後問問密碼，使用 uid 使用者的密碼登入搜尋

## Cache Solution
- SSSD
[find here](http://jamyy.us.to/blog/2014/09/6704.html)

- NSCD
