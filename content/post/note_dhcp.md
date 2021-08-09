---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "DHCP 設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "dhcp", "isc-dhcpd"]
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

## Server
### CentOS
[CentOS 7: Install dhcpd and run DHCP server](https://www.hiroom2.com/2016/05/26/centos-7-install-dhcpd-and-run-dhcp-server/)

- lease: /var/lib/dhcpd/dhcpd.leases
- config: /etc/dhcp/dhcpd.conf
    ```shell=
    option domain-name "calee.xyz";
    option domain-name-servers 140.113.235.1, 1.1.1.1, 9.9.9.9, 8.8.8.8;

    default-lease-time 600;
    max-lease-time 7200;

    # Use this to send dhcp log messages to a different log file (you also
    # have to hack syslog.conf to complete the redirection).
    log-facility local7;

    # A slightly different configuration for an internal subnet.
    subnet 192.168.1.0 netmask 255.255.255.0 {
      range 192.168.1.0 192.168.1.254;
      option domain-name-servers 140.113.235.1, 1.1.1.1;
      option domain-name "pve.calee.xyz";
      option routers 192.168.1.1;
      option broadcast-address 192.168.1.254;
      default-lease-time 600;
      max-lease-time 7200;
    }
    host DESKTOP-A6UOSVB {
        hardware ethernet 82:20:3d:cf:32:79;
        fixed-address 192.168.1.2;
    }

    host DESKTOP-04E99PF {
        hardware ethernet 72:0e:c8:c3:6c:1c;
        fixed-address 192.168.1.3;
    }
    ```
    
## Client

### Linux

- Renew: `dhclient -r`

### Windows

- Renew: `ipconfig /r`

### MacOS
