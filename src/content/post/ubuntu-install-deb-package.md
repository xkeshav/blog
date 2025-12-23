---
title: "install deb package in Ubuntu"
publishDate: "15 May 2024"
description: "How to install a deb package in Ubuntu 24.04"
tags: ["ubuntu", "install", "deb", " package"]
---

## Install .deb file as package

in Ubuntu ; to install any software ; if you found .deb package then download it

and here are 2 ways which you can use to install `.deb` file

## install `gedbi` : A package manager

```sh
> sudo apt install gdebi
```

and now install using below command

```sh
>sudo apt install ./<package-name>.deb
```

Note: don't forget to add `./` even you are in same location where package is downloaded

## using without package manager

```sh

 > sudo dpkg -i <./absolute/path/to/package.deb>

```

Thanks.
