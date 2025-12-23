---
title: "Ubuntu GNOME and Meta Desktop Difference"
description: "Ubuntu 24.04 tips and trick"
publishDate: "23 Dec 2025"
tags: ["ubuntu", "AI", "GNOME", "MATE"]
---

Recently, my desktop suddenly crashed, so upon restart, I asked chat GPT to tell me why this crash happened and how to filter from logs and after checking and again gives chatGPT to analyze and during analysis it suggest that NVIDIA Driver having some issue and started telling how to fix NVIDIA Driver issue ; then I told that I do not have NVIDIA Driver at all ( and asked first how to check whether I have NVIDIA or not).  upon confirmation chatGPT gives some command which I tried with trust and it stopped all NVIDIA related things as I have Intel driver one; but then realize that system is lagging, especially chrome; cursor hardly move, first I thought mouse will be out of battery but then again check and found that issue is something which I did on last day and again open the same context window in chatGPt and asked him tell me what command we run and how to undo that; it keep saying same NVIDIA stuff, then I asked him how to do that, it gives many random approach which all leads to more lagging, created a new user and all was good , uninstalled chrome installed again but same issue persist, also disable gpu flag on chrome

as an alternative it ask me to install MATE, before that it says me to install metacity on GNOME and we can change on login screen and click on username and click on bottom right gear icon, which was not easy to find in first glance .

so I have to start MATE as a last resort and here is my findings using MATE, it is good but lacking some very much necessary things which other and annoying

so here is my personal experience with MATE

1. by default Ubuntu comes with the desktop which called GNOME desktop
2. Other are MATE desktop
3. GNOME Desktop also comes with metacity theme too which has typical Application menu and other tool
4. GNOME have their Terminal different from Mate Terminal which by default installed in MATE Desktop
5. Screenshot tools is very good in GNOME Desktop ; META lacks that

## TREE tips

### to copy to clipboard

```sh
tree -L 2 -I 'node_modules' | xclip -sel clip
```

### Tree output with no special characters and file then directory

```shell
TREE_COLORS= tree -I 'node_modules' ./src/content/ --charset utf8 --noreport --dirsfirst -r --nocolors > tree.txt
```

## useful apps

sticky node app

> sudo apt install xpad

## Change terminal command shell name around `@`

1. Add a user

```bash
sudo adduser xyz
```

check using `group xyz`

1. login

```bash
sudo - xyz
```

now terminal shell changed to

`xyz@zero`

1. switch users

```bash
su - <root>
```

terminal shell will be changed

`root@zero`
