---
title: "useful-software-ubuntu"
description: "command to check installed software in ubuntu 24.04"
publishDate: "23 Sep 2024"
tags: ["ubuntu", "software"]
---

## Check all installed software list in ubuntu

In Ubuntu, we can install software either using `apt` or using `snap` but when we want to find how many softwares are installed using these way are difficult  so found 2 methods

### snap list

use

```sh
ls -l /var/lib/snapd/snaps
```

 Note: snap keep last 2 versions so you will see same software listed twice but with different version

### apt install list

```sh
sudo apt list --installed | grep rim
```

use pipe command `| grep` to search specific version ; otherwise it will show a long lists of softwares
