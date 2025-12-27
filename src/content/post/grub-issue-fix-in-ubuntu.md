---
title: "Grub issue fix in ubuntu"
description: "Here is my personal troubleshooting steps after getting GRUB screen "
publishDate: "27 Dec 2025"
tags: ["ubuntu", "grub"]
draft: false
---

Here’s a summarized version of the main commands and steps to recover from a deleted OS situation using a live USB environment, including troubleshooting for common issues like disk space:

Summary: Recovering GRUB and Restoring Deleted OS Data

Prerequisites:

- Bootable Ubuntu 24.04 live USB. ( although I has 23.10 USB while system installed was 24.04 but it worked)

---

**1 Mount partitions**

1. Boot into the live USB and open a terminal.

2. Identify the partitions:

```sh
sudo fdisk -l
```

You will see 2 partition, one is EFI ( sometimes it is not there ) and one is Linux FileSystem

```log
Device             Start       End   Sectors   Size Type
/dev/nvme0n1p1      2048    206847    204800   100M EFI System
/dev/nvme0n1p2    206848    239615     32768    16M Microsoft reserved
/dev/nvme0n1p3    239616 211358180 211118565 100.7G Microsoft basic data
/dev/nvme0n1p4 211359744 294244351  82884608  39.5G Microsoft basic data
/dev/nvme0n1p5 294246400 295315455   1069056   522M Windows recovery environment
/dev/nvme0n1p6 295315456 500115455 204800000  97.7G Linux filesystem

```

1. Mount the root partition (replace _/dev/nvme0n1p6_ with your actual root partition):

```sh
sudo mount /dev/nvme0n1p6 /mnt
```

1. If there's an EFI partition (typically small, like 100MB):

```sh
sudo mount /dev/nvme0n1p1 /mnt/boot/efi
```

**2 Copy data from _os_deleted_ to root**

actually the os*uninstaller command moved files from root partition to **os_deleted**;
you can check whether _/etc_, _/proc_, _/sys_, _/run_ directories are under root partition (i.e.*/dev/nvme0n1p1\_ ) or not and if these directory are under `os_deleted` folder then we have to follow below step

1. If your data was moved to **os_deleted**:

```sh
sudo rsync -av /mnt/os_deleted/ /mnt/
```

This command copies the contents of **os_deleted** back to the root partition.

If "No space left on device" error occurs:

Remove large or unnecessary files:

```sh
sudo rm -rf /mnt/var/cache/apt/*
sudo rm -rf /mnt/var/log/*
```

Use find to locate large files:

```sh
sudo find /mnt -type f -size +100M
```

Then remove any unnecessary large files:

```sh
sudo rm /mnt/path/to/large/file
```

in my cae there are images and video files so removed those

**3 chroot into the system**

1. Bind the required directories:

```sh
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys
sudo mount --bind /run /mnt/run
```

1. Enter the chroot environment:

```sh
sudo chroot /mnt
```

if above command gives error: failed to run command /bin/bash : No such file or directory means you do not have all required files in root directory

you can run `sudo fsck /dev/nvme0n1p4` to check corrupted files

**4 Reinstall GRUB**

1. Install GRUB for UEFI systems:

```sh
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=ubuntu
```

1. Update the GRUB configuration:

`update-grub`

1. If you encounter "unable to allocate pty", run:

```sh
mount -t devpts none /dev/pts
```

**5 Exit chroot and unmount**

1. Exit chroot:

`exit`

1. Unmount the bound directories:

```sh
sudo umount /mnt/dev
sudo umount /mnt/proc
sudo umount /mnt/sys
sudo umount /mnt/run
sudo umount /mnt/boot/efi  # If mounted
sudo umount /mnt
```

**6 Reboot**

1. Reboot the system to check if GRUB is restored:

```sh
sudo reboot
```

---

**Troubleshooting tips:**

If "target is busy" during unmount, use:

```sh
sudo umount -l /mnt
```

To list processes using a mount point:

```sh
sudo lsof +D /mnt
sudo fuser -vm /mnt
sudo fuser -k /mnt  # To kill processes
```

Use `rsync` with --exclude to temporarily skip non-essential data if space is an issue:

`sudo rsync -av --exclude='home/*' /mnt/os_deleted/ /mnt/`

This should help for restoring the system and resolving common errors encountered during the process.

Hope it helps
