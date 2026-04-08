---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "file system"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "fs", "ntfs", "uuid", "partition"]
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

## fstab
### mount NTFS
[find here](https://help.ubuntu.com/community/Fstab#New_Technology_File_System_.28NTFS.29)
/etc/fstab
```shell
UUID=989CE0C49CE09E4E    /home/calee/stg    ntfs-3g    defaults    0 0
```

## Find UUID
it's a symbolic link to /dev/sd_
[find here](https://unix.stackexchange.com/questions/658/linux-how-can-i-view-all-uuids-for-all-available-disks-on-my-system)
```shell
ls -l /dev/disk/by-uuid
```

## 檢視分割磁碟區
```shell
sudo apt install gparted
sudo gparted
```

## link
```
ln -s TARGET(src) LINK_NAME(dst) # soft link
```
