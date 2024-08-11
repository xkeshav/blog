---
title: "Mount External Hard Disk in Ubuntu"
description: "command method to mount external HDD in Ubuntu"
publishDate: "11 Aug 2024"
tags: ["ubuntu", "mount", "extrenalHDD", "Hard Disk"]
---

## How to Mount

In Ubuntu, when we connect external hard Disk, it is not automatically mounted just like Windows/MacOS, so here are the approach

### First check external hard disk path and type

> [!NOTE]
> lists information about all available or the specified block devices.

```sh
> sudo lsblk -l
```

This command will show list of all partition; i

sample output
```bash
sda
└─sda1      ntfs           Seagate Backup Plus Drive D012032A120314DE
nvme0n1
```

_Note:_ output might list a all partition ( in case you have windows alongside ) so you have to found which is against `/dev/...`  or use `-f` in place of `-l`

here we see that name show under */sda/sda1* ; but we will use `/dev/sda1` later


### another command

```bash
> sudo blkid
```

output will contains your hard disk details

```bash
> /dev/sda1: LABEL="Seagate Backup Plus Drive" BLOCK_SIZE="512" UUID="D012032A120314DE" TYPE="ntfs" PARTUUID="db2dad7b-01"
```
 so your hard dik type is `ntfs`

### Create a directory in your file system

to mount the drive we need a space; so create directory on any place; which we will use it in next command

```sh
> mkdir ~/external
```

### Mount device on the system directory

use below method

```bash
> sudo mount /dev/sda1 ~/external
```


That's all.


### References

- [lsblk](https://man7.org/linux/man-pages/man8/lsblk.8.html)
- [blkid](https://man7.org/linux/man-pages/man8/blkid.8.html)
- [Ubuntu Answer](https://askubuntu.com/questions/1523007/unable-to-mount-external-hard-disk-in-24-04)
