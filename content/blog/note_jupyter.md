---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Jupyter 設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "python", "jupyter"]
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

## Install
- pip install jupyter
```shell
sudo pip3 install --upgrade pip
sudo pip3 install jupyter
```

### Error
- `ModuleNotFoundError: No module named '_sqlite3'`
    - 
- `ModuleNotFoundError: No module named 'pysqlite2'`

## Used
- start
```shell
cd /要用來存資料的資料夾/
jupyter notebook
```
- 參數
```shell=
--ip
--port
--no-browser
--help
```

## config
- 環境設定
```shell=
ipython --ipython-dir= # override the default IPYTHONDIR directory, ~/.ipython/ by default
ipython profile create foo # create the profile foo
ipython profile locate foo # find foo profile directory, IPYTHONDIR by default,
ipython --profile=foo # start IPython using the new profile
```
- 產生設定檔
```shell
jupyter –-generate-config
```
會在產生 `~/.jupyter/jupyter_notebook_config.py` 設定檔

## jupyter server
- 產生設定檔
```shell
jupyter notebook --generate-config
```
- 產生密碼
```shell
jupyter notebook password
```
會在 `jupyter_notebook_config.json` 存密碼的 hash value，需要把它丟到 `jupyter_notebook_config.py` 裡的 `c.NotebookApp.password =`
- 修改設定檔
```python
# Set options for certfile, ip, password, and toggle off

# Set ip to '*' to bind on all interfaces (ips) for the public server
c.NotebookApp.ip = '*'
c.NotebookApp.password = u'sha1:bcd259ccf...<your hashed password here>'
c.NotebookApp.open_browser = False

# It is a good idea to set a known, fixed port for server access
c.NotebookApp.port = 9999
```

### Jupyter Daemon
[find here](https://aichamp.wordpress.com/2017/06/13/setting-up-jupyter-notebook-server-as-service-in-ubuntu-16-04/)
檔案：`/lib/systemd/system/jupyter.service`
```shell=
[Unit]                  
Description=Jupyter Notebook                    

[Service]               
Type=simple             
PIDFile=/run/jupyter.pid                        
# Step 1 and Ste 2 details are here..           
# -----------------------------------           
ExecStart=/usr/local/bin/jupyter-notebook --config=/home/calee/.jupyter/jupyter_notebook_config.py                       
User=calee              
Group=calee             
WorkingDirectory=/home/calee/Project/Jupyter    
Restart=always          
RestractSec=10          
#KillMode=mixed         

[Install]               
WantedBy=multi-user.target
```

執行
```shell
sudo systemctl start jupyter.service
sudo systemctl daemon-reload
sudo systemctl restart jupyter.service
sudo systemctl enable jupyter.service
```

## NGINX proxy setting
位置：`/etc/nginx/sites-enabled/notebook.conf`
```shell=
upstream notebook {
    server localhost:8888;
}
server{
    listen 80;
    server_name notebook.calee.xyz;
    

    location / {
        proxy_pass            http://notebook;
        proxy_set_header      Host $host;
    }

    location ~ /api/kernels/ {
        proxy_pass            http://notebook;
        proxy_set_header      Host $host;
        # websocket support
        proxy_http_version    1.1;
        proxy_set_header      Upgrade "websocket";
        proxy_set_header      Connection "Upgrade";
        proxy_read_timeout    86400;
    }
    location ~ /terminals/ {
        proxy_pass            http://notebook;
        proxy_set_header      Host $host;
        # websocket support
        proxy_http_version    1.1;
        proxy_set_header      Upgrade "websocket";
        proxy_set_header      Connection "Upgrade";
        proxy_read_timeout    86400;
    }
}
```
Restart Nginx
```shell
sudo systemctl restart nginx
```
