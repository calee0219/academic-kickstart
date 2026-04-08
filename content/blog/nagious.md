---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Nagious"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "nagious", "monitor"]
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

## 介紹
[Document](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/4/en/config.html) <- 點我

![](https://i.imgur.com/9JnBhHE.png)

+ Main Config : 控制Nagios Deamon的行為，這份config會被Deamon和CGIs讀
+ Resource File: 儲存user-defined macro，權限660
+ Object Definition File : 定義host, service, hostgroup, command, etc，決定要監控的項目和要如何監控
+ CGI Config File : 讓Nagios知道main config位置以及你怎麼設定Nagios和object define的位置

## Config 內容
+ 主要config檔在 /usr/local/nagios/etc
+ Nagios額外套件在 /usr/local/nagios/libexec

## Debug
+ /etc/init.d/nagios checkconfig
+ journalctl -xe

## 安裝
[連結](https://www.nagios.com/downloads/nagios-xi/linux/)
[安裝方法](https://assets.nagios.com/downloads/nagiosxi/docs/Installing-Nagios-XI-Manually-on-Linux.pdf)
+ 快速安裝
    ```shell=
    curl https://assets.nagios.com/downloads/nagiosxi/install.sh | sh
    ```
+ 手動安裝
    + [參考](https://www.digitalocean.com/community/tutorials/how-to-install-nagios-4-and-monitor-your-servers-on-centos-7)
    ```shell=
    cd /tmp
    wget http://assets.nagios.com/downloads/nagiosxi/xi-latest.tar.gz
    tar xzf xi-latest.tar.gz
    cd nagiosxi
    ./fullinstall
    ```

### Web 顯示
1. cd /etc/httpd/conf.d/

### nagios.cfg
[連結](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/4/en/configmain.html) <- 點我

+ log_file=<file_name>
    + 	log_file=/usr/local/nagios/var/nagios.log
    + 設定log file的位置，當config有錯誤時，會記錄在這裡，適用rotation
+ cfg_file=<file_name>
    + cfg_file=/usr/local/nagios/etc/hosts.cfg
    + object config files位置
+ cfg_dir=<directory_name>
    + cfg_dir=/usr/local/nagios/etc/commands
    + object config direction位置，其下的附檔名要是.cfg，會遞迴尋找config file
+ object_cache_file=<file_name>
    + object_cache_file=/usr/local/nagios/var/objects.cache
    + default : '/dev/null'
    + 當Nagios被[re]start，存一份object definition到這裡。
    + 在running Nagios時，可以改object definition，而不會影響
Nagios
    + 這份檔案被CGIs使用
+ precached_object_file=<file_name>
    + precached_object_file=/usr/local/nagios/var/objects.precache
    + 預處理object definition，當object definition很多時，可以加速
+ resource_file=<file_name>
    + resource_file=/usr/local/nagios/etc/resource.cfg
    + 放一些重要資訊，CGI不會讀這份檔案，權限設600或660
+ temp_file=<file_name>
    + temp_file=/usr/local/nagios/var/nagios.tmp
    + Nagios在更新data時，會創建他，不用的時候會刪除他
+ temp_path=<dir_name>
    + temp_path=/tmp
    + scratch space for creating temporary files used during the monitoring process
+ status_file=<file_name>
    + status_file=/usr/local/nagios/var/status.dat
    + default : '/dev/null'
    + store the current status, comment, and downtime information
    + CGIs用這份檔案透過web來顯示監控狀況，需要讀取權限
    + 每次stop時，這份檔案會被刪掉
+ status_update_interval=< seconds >
    + status_update_interval=15
    + 多久更新一次status file，最短1秒
+ nagios_user=<username/UID>
    + nagios_user=nagios
    + set the effective user that the Nagios process should run as
+ nagios_group=<groupname/GID>
    + nagios_group=nagios
    + set the effective group that the Nagios process should run as
+ host_down_disable_service_checks=<0/1>
    + host_down_disable_service_checks=1
    + This option will disable all service checks if the host is not in an UP state
    + New config in Version 4
+ enable_notifications=<0/1>
    + enable_notifications=1
    + Nagios will send out notifications for any host or service when it initially [re]starts
+ execute_service_checks=<0/1>
    + execute_service_checks=1
    + If this option is disabled, Nagios will not actively execute any service checks and will remain in a sort of "sleep" mode (it can still accept passive checks unless you've disabled them)
+ accept_passive_service_checks=<0/1>
    + accept_passive_service_checks=1
+ execute_host_checks=<0/1>
    + execute_host_checks=1
    + Nagios will execute on-demand and regularly scheduled host checks when it initially (re)starts
    + If this option is disabled, Nagios will not actively execute any host checks, although it can still accept passive host checks unless you've disabled them
+ accept_passive_host_checks=<0/1>
    + accept_passive_host_checks=1
+ enable_event_handlers=<0/1>
    + enable_event_handlers=1
+ log_rotation_method=<n/h/d/w/m>
    + log_rotation_method=d
+ log_current_states=<0/1>
    + log_current_states=1
    + Nagios will log host and service current states at the beginning of a newly created log file after log rotation occurs
+ log_archive_path=< path >
    + log_archive_path=/usr/local/nagios/var/archives/
    + This is the directory where Nagios should place log files that have been rotated.
+ External Command Check Option
    + Nagios will check the command file for commands that should be executed
    + This option must be enabled if you plan on using the command CGI to issue commands via the web interface
+ command_file=<file_name>
    + command_file=/usr/local/nagios/var/rw/nagios.cmd
    + The command CGI writes commands to this file. The external command file is implemented as a named pipe 
+ check_for_updates=<0/1>
    + check_for_updates=1
    + 自動檢查Nagios有沒有new patch
+ bare_update_check=<0/1>
    + bare_update_check=0
    + 

## Object definition
[中文版](http://bigpxuan.blogspot.tw/2017/02/nagios_14.html)
[Document](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/4/en/objectdefinitions.html#host)
```
define host {
    host_name                       這個host的名字，其他define會用到
    alias                           類似註解
    address                         IP或FQDN
    parents                         設定為最接近的上游設備(好像沒有用到)
    check_command                   檢查這個主機是否正常，若無此項Nagios會認為他是alive的
    check_interval                  check_command的正常測試間隔，其中的單位定義在Nagios設定的interval_length
    retry_interval                  check_command的soft status時的重試間隔，達到max_check_attempts就會變為hard status
    max_check_attempts              check_command的檢查重試次數
    check_period                    執行active check的時段
    process_perf_data               是否會處理performance data
    retain_status_information       是否讀取重開機之前的狀態檔，前提是全域設定的retain_state_information必須設為1
    retain_nonstatus_information    是否不讀取主機狀態檔
    contact_groups                  要告警的人員群組，可用 “,” 分隔多個群組
    notification_interval           當狀態持續發生時，兩個告警之間的時間。單位是interval_length
    notification_period             會發送告警的時間
    notification_options            哪幾種狀態才告警，DOWN = d，UNREACHABLE=u，回復到OK的狀態=r，flapping=f，排程關閉狀態=s，都不發送=n
}
```

## 安裝
### 需要工具
```
yum install unzip wget httpd php php-cli gd gd-devel gcc glibc glibc-common net-snmp 
```

### 下載主程式
```
cd /usr/local/src
wget http://liquidtelecom.dl.sourceforge.net/project/nagios/nagios-4.x/nagios-4.3.2/nagios-4.3.2.tar.gz
cd nagios-4.3.2
sudo ./configure --with-command-group=nagioscmd
make all
make install
make install-init
make install-config
make install-commandmode
make install-webconf
```

### 下載插件 (/usr/local/nagios/libexec)
```
cd /usr/local/src
wget http://nagios-plugins.org/download/nagios-plugins-2.2.1.tar.gz
tar xzf nagios-plugins-2.2.1.tar.gz
cd nagios-plugins-2.2.1
./configure --with-nagios-user=nagios --with-nagios-group=nagioscmd
make
make install
```

### Web監控的帳號密碼
+ 注意 : 帳號名稱之間不能有空白
```
htpasswd -c /usr/local/nagios/etc/htpasswd.users {帳號名稱}
authorized_for_system_information=...,帳號名稱
authorized_for_configuration_information=...,帳號名稱
authorized_for_system_commands=...,帳號名稱
authorized_for_all_hosts=...,帳號名稱
authorized_for_all_service_commands=...,帳號名稱
authorized_for_all_host_commands=...,帳號名稱
```

## 設定
### nagios.cfg
+ [中文來源](http://nagios-cn.sourceforge.net/nagios-cn/configuration.html)

```
# 設定Log存放位置
log_file=/var/spool/nagios/nagios.log
# 設定指令參數
cfg_file=/usr/local/nagios/etc/objects/commands.cfg
# 設定聯絡人資訊
cfg_file=/usr/local/nagios/etc/objects/contactgroup.cfg
# 設定CSCC相關聯絡人/群組資訊
cfg_file=/usr/local/nagios/etc/objects/templates.cfg
cfg_file=/usr/local/nagios/etc/objects/cs.cfg
cfg_file=/usr/local/nagios/etc/objects/csgroup.cfg
# 設定監控服務設定檔
cfg_file=/usr/local/nagios/etc/objects/service.cfg
# 將object cache住，避免start/restart時有inconsistencies
object_cache_file=/var/spool/nagios/objects.cache
# 下特殊參數，加速用
precached_object_file=/var/spool/nagios/objects.precache
# 相關resource位置, ex:Nagios額外套件
resource_file=/usr/local/nagios/etc/resource.cfg
# 儲存Nagios偵測結果檔案位置
status_file=/var/spool/nagios/status.dat
# 設定Nagios偵測結果狀態更新的時間區隔
status_update_interval=10
# 設定使用者/群組
nagios_user=nagios
nagios_group=nagios
# Nagios外部檢查命令功能開關，否則CGI不能用
check_external_commands=1
# 檢查時間間隔，預設15s，-1為盡可能的檢查
command_check_interval=-1
command_file=/var/spool/nagios/rw/nagios.cmd
external_command_buffer_slots=4096
# PID資訊
lock_file=/var/spool/nagios/nagios.lock
# Nagios執行時，暫存檔位置
temp_file=/var/spool/nagios/nagios.tmp 
# Nagios執行時，暫存目錄位置
temp_path=/tmp
#
event_broker_options=-1
log_rotation_method=d
log_archive_path=/var/spool/nagios/archives
# 使用syslog，開啟通知
use_syslog=1
log_notifications=1
# 1 : 紀錄, 0 : 不紀錄
log_service_retries=1
log_host_retries=1
log_event_handlers=1
log_initial_states=0
log_external_commands=1
log_passive_checks=1
#
service_inter_check_delay_method=s
max_service_check_spread=30
service_interleave_factor=s
host_inter_check_delay_method=s
max_host_check_spread=30
max_concurrent_checks=0 #決定同時間執行多少個check processes
check_result_reaper_frequency=10
max_check_result_reaper_time=30
check_result_path=/var/spool/nagios/checkresults
max_check_result_file_age=3600
cached_host_check_horizon=15
cached_service_check_horizon=15
enable_predictive_host_dependency_checks=1
enable_predictive_service_dependency_checks=1
soft_state_dependencies=0
auto_reschedule_checks=0
auto_rescheduling_interval=30
auto_rescheduling_window=180
...... 之後補上
```
