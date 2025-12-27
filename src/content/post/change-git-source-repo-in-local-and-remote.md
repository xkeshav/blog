---
title: "Change git source repo in local and remote"
description: "How to update or add git remote url in local"
publishDate: "27 Dec 2025"
tags: ["git"]
draft: false
---

# Add/update git repo url

1. initialize git in the project root

```sh
git init
```

*.git* folder will be generated in project root using above command

1. if **.git** folder already exist then check whether remote url exist using

```sh
git remote -v
```

1. to add repository url by copying using github.com and copy and clone option  ( keep https or ssh ; depends on your choice and config )

```sh
git remote add origin <https://github.com/user/repo.git> 
```

1. to update the remote URL

```sh
git remote set-url origin < https://github.com/user/repo.git>
```

1. check again using `git remote -v`
