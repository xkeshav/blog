---
title: "Add screenshot in search view in ubuntu"
description: "How to Add Screenshots folder in search view in Ubuntu"
publishDate: "27 Dec 2025"
tags: ["ubuntu", "screenshot", "tips", "desktop"]
draft: false
---

# Add screenshot folder in search preview in ubuntu 24.04

for that we have to create *folder-name.desktop* file and put it on `~/local/share/applications`

or run below command

- change folder name
- change Exec xdg-open value of original folder full path

or run below command ( change<username> with your username)

```bash
cat << 'EOF' > ~/.local/share/applications/screenshot.desktop
[Desktop Entry]
Version=1.0
Type=Application
Name=Screenshot
Comment=Screenshot Folder
Icon=folder
Exec=xdg-open /home/<username>/Pictures/Screenshots
Categories=Development;
Terminal=false
EOF
```

and Tada; Now folder available when you type pressing start button.

## Bonus tip

and if you want to pin a folder to dash then change `Exec` value additionally you can add icon and Categories; here I am adding Music folder in Dash

but it will be added only when you search and then dreg that search icon; as I am changing folder name also to `mausiki`

```bash title="~/.local/share/applications/mausiki.desktop"
[Desktop Entry]
Version=1.0
Type=Application
Name=Mausiki
Comment=Quick access to Music collection
Icon=folder-music
Exec=nautilus /home/<username>/Music
Categories=AudioVideo;Audio;Music;
Terminal=false
```
