---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "NGINX 好用設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "web", "nginx", "https"]
categories: ["linux", "infra"]
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

## [Certbot](https://certbot.eff.org/#fedora24-nginx)
(let's encrypt 簽 https)

### Install
[find here](https://certbot.eff.org/#ubuntutzesty-nginx)
- Ubuntu
    ```shell
    $ sudo apt-get update
    $ sudo apt-get install software-properties-common
    $ sudo add-apt-repository ppa:certbot/certbot
    $ sudo apt-get update
    $ sudo apt-get install python-certbot-nginx 
    ```
- Fedora
    ```shell
    sudo dnf install certbot-nginx
    ```

### 簽署
- 自動幫改 nginx 設定檔
```shell
sudo certbot --nginx
```

- 手動改 nginx 設定檔
```shell
sudo certbot --nginx certonly
```
- 自動更新憑證
```shell
sudo certbot renew --dry-run
```
- 手動更新憑證
```shell
certbot renew
```

## Redirect to https
- 301
    ```shell
    server {

        listen 443 ssl; # managed by Certbot        
        ssl_certificate /etc/letsencrypt/live/notebook.calee.xyz/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/notebook.calee.xyz/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

        if ($scheme != "https") {                   
            return 301 https://$host$request_uri;   
        }

    }
    ```
- rewrite
    - 除了 301 redirect 之外，nginx 還有一個 Force HTTPS 是用 rewrite 來處理
      不過要小心也可能出現 Mixed Content too many 的問題
    - [301 與 rewrite 差別](https://stackoverflow.com/questions/30165746/nginx-return-301-vs-rewrite)
    - [nginx rewrite](https://www.nginx.com/blog/creating-nginx-rewrite-rules/)
    ```shell
    rewrite     ^   https://$server_name$request_uri? permanent;
    ```

### Redirect too many
如果你的 domain 有上 CDN，會有 redirect too many 的問題，解法是偵測請求協定是否為 http，若是，才可以 redirect 了
通常出現在 DNS 是由 cloud flare 代管，並且有上 CDN 的情況下
[find here](https://stackoverflow.com/questions/41583088/http-to-https-nginx-too-many-redirects)
[find here](https://talk.ninghao.net/t/http-https/4644)
```shell
server {
    listen 80;

    if ($http_x_forwarded_proto = "http") {
        return 301 https://$server_name$request_uri;
    }

}
```

## hsts
[find here](https://www.nginx.com/blog/http-strict-transport-security-hsts-and-nginx/)
```shell
server {
    listen 443 ssl;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Because this 'location' block contains another 'add_header' directive,
    # we must redeclare the STS header
    location /servlet {
        add_header X-Served-By "My Servlet Handler";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        proxy_pass http://localhost:8080;
    }
}
```
- includeSubDomains: always; 會讓所有 subdomains 都上 hsts，此處需要小心
- (servlet) 如果有一個的 block 本身有自己加 header，需要重新把 hsts 寫進去，不然會被覆蓋掉

## 加密檢測
- [SSL Test](https://www.ssllabs.com/ssltest)
- [是否還有其他資源未加密](https://www.whynopadlock.com)
    - 如果你透過Chrome瀏覽器發現網站的連線變成「https」然後是灰色，你可以點一下即可查資訊，他會顯示「這個網頁含有其他不安全的資源」，那代表網站有使用到非https的圖片、js、css的資源，那就得修正了。
    - 有時候可能是 hsts subdomain 還沒全部生效，重轉幾次就好了 (?)

## Problem
- permission deny 問題: https://serverfault.com/questions/748561/nginx-doesnt-have-permission-to-access-files-with-the-same-ownership
    - 簡言之，nginx 要全部的歷遍權限都有才能讀檔案，所以路徑上的 file 都要 o+x
- SELinux reverse proxy: 
    - https://www.nginx.com/blog/using-nginx-plus-with-selinux/
    - SELinux 有擋 reverse，隨便的 port 不能開 http (可能怕 SSRF ?)
    - 需要下 `semanage port -a -t http_port_t -p tcp {to port no.}`
    - 上面那個好像不用下，下這個就好 `setsebool -P httpd_can_network_connect 1`
    - (待釐清)
