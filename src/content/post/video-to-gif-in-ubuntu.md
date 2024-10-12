---
title: "Convert video to gif in ubuntu"
description: "This is guide to convert mp4 or any video to gif with some configuration using ffmpeg in ubuntu 24.04"
publishDate: "12 Oct 2024"
tags: ["gif", "ubuntu", "ffmpeg", "video"]
---

## Pre-requisite

1. install *ffmpeg* in Ubuntu

```sh
sudo apt update && sudo apt upgrade -y
```

and

```sh
sudo apt install ffmpeg -y
```

check version using

```sh
ffmpeg -v
```

this will output like below

```no-lang
ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
built with gcc 13 (Ubuntu 13.2.0-23ubuntu3)

```

## How to use

1. Create a palette image from the video

```sh
ffmpeg -y -i input.mp4 -vf palettegen palette.png
```

This will generate a image file near to video file.

2. Now use this image while generating gif

```sh
ffmpeg -y -ss 5.0 -t 40 -i input.mp4 -i palette.png -aspect 16:9 -filter_complex paletteuse -r 10 output.gif
```

> here are what these options meanings are; you can either remove or change the value of options

- `-y` => overwrite output file without asking  
- `-ss` => skip first 5 seconds  
- `-t` => duration for 40 seconds  
- `-i` => input ( write twice ; one for video and one for image palette )  
- `-r` => set frame rate  

3. another way using `-filter_complex` option ( which is little bit tricky)

```sh
ffmpeg -ss 5.0 -t 40 -i hc.mp4 -i palette.png -filter_complex "[0:v] fps=10,scale=320:-1 [new];[new][1:v] paletteuse" output.gif
```

here in `scale` option; we can change it to 1280 if require large gif

## Bonus Tip

you can generate gif without image palette generation suing below command ( change the option as per your need)

```sh
ffmpeg -ss 1 -to 6 -i input.mp4 -filter_complex "fps=10,scale=1280:-1[s]; [s]split[a][b]; [a]palettegen[palette]; [b][palette]paletteuse" output.gif
```
