---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "SSH 相關設定"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "ssh"]
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

SSH 的全稱是 secure shell，大家都知道可以用來遠端進入機器的殼層，但有一些有趣的設定或應用也許不是廣為人知，仔細研究會發現 SSH 其實還蠻可怕的 XD

## Client Side

### SSH key

### SSH with hardware key

### Security issue



### SSH Tunnel

## Server Side

## Password Policy

密碼品質檢查，這個功能其實不是掛在 ssh 下面的，只是因為 ssh 是 pam linux 的，所以可以順便避免 user 弱密碼導致 ssh 被破解 (`man pam_pwquality`)

參考[Linux 上密碼相關設定](../note_linux_passwd/)

## Reference

- [Comparing SSH Keys - RSA, DSA, ECDSA, or EdDSA?](https://goteleport.com/blog/comparing-ssh-keys/)
- [What is the -sk ending for ssh key types?](https://security.stackexchange.com/questions/240991/what-is-the-sk-ending-for-ssh-key-types)
- [How to secure your SSH server with public key Ed25519 Elliptic Curve Cryptography](https://cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html)
- [Security keys are now supported for SSH Git operations](https://github.blog/2021-05-10-security-keys-supported-ssh-git-operations/)