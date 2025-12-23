---
title: "open-webcam-in-ubuntu"
description: "Open external webcam in desktop with Ubuntu 24.04 with one command"
publishDate: "23 Sep 2024"
tags: ["ubuntu", "webcam", "tips"]
---

## Open Webcam in Ubuntu

having desktop with ubuntu is tricky when you add external camera and want to open the camera; there is no dedicated camera application in-built in ubuntu so here is how we can open camera

### install ffmpeg

install ffmpeg package

```bash
sudo apt install ffmpeg
```

or

```sh
sudo snap install ffmpeg
```

### open camera using ffplay `command`

```bash
ffplay /dev/video0
```
