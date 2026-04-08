---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "MariaDB (MySQL)"
subtitle: "技術筆記"
summary: ""
authors: ["Chia-An Lee"]
tags: ["note", "db", "mariadb", "mysql"]
categories: ["db"]
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

## 安裝
```shell
sudo apt install mariadb-server

sudo mysql # 第一次進入
```

## 使用者
- change password
[find here](https://dev.mysql.com/doc/refman/5.7/en/set-password.html)
```sql
SET PASSWORD = PASSWORD('new_password');
```

- 新增使用者
[find here](https://www.a2hosting.com/kb/developer-corner/mysql/managing-mysql-databases-and-users-from-the-command-line)
```sql
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'*' IDENTIFIED BY 'password';
GRANT command PRIVILEGES ON db.table TO 'username'@'localhost' IDENTIFIED BY 'password';
```

- 刪除使用者
[find here](https://dev.mysql.com/doc/refman/5.7/en/drop-user.html)
```sql
DROP USER IF EXISTS user
```

## 操作
### Create New DB
[find here](https://www.w3schools.com/sql/sql_create_db.asp)
```sql
CREATE DATABASE testDB;
```

### Drop DB / table / column / row
```sql
DROP DATABASE "db_name"; # DB
DROP TABLE "table_name"; -- table
ALTER TABLE "table_name" DROP "column_name"; /* column */
DELETE FROM "table_name" WHERE condition;
```

### Use .sql file
```shell
mysql -p < xxx.sql
```

### Dump DB in / out
- in
```shell
mysqlimport --ignore-lines=1 --fields-terminated-by=, --verbose --local -u [user] -p [database] /path/to/address.csv
```
[參考](https://www.garron.me/en/bits/mysql-import-csv.html)

- out
