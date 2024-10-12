---
title: "convert any image format to Webp format"
description: "How to convert png/jpg image to webp format; the most suitable format for web; also how to convert a whole list of images"
publishDate: "12 Oct 2024"
tags: ["webp", "image", "batch-job", "ubuntu"]
---


## What is WebP

webp is most suitable format for web pages ; these are small and render fast

## How To convert

1. Install webp package

```sh
sudo apt install webp
sudo apt update
```

2. Single file conversion

```sh
cwebp <input/file/path/name.png> -o <output_name>
```

## Batch Job : convert all images from a folder

go to the folder where images are located and run below code in terminal

```sh
for f in *.png; do cwebp "$f" -o "converted/${f%.png}.webp"; done
```

Note: this for loop is good for running any operation as a batch job.
