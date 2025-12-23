---
title: "How to update node in ubuntu"
description: "How to update node.js version in ubuntu 24.04"
publishDate: "July 14, 2024"
tags: ["ubuntu", "tips", "node", "command"]
---

## update node in ubuntu

```sh
> sudo apt purge nodejs npm
```

then install curl

```sh
> sudo apt install curl
```

install nvm: check for latest version [on nvm page](https://github.com/nvm-sh/nvm)

```sh
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

reload bash

``sh

> source ~/.bashrc

````

install nvm

```sh
> nvm install node
````

it will download latest node js version

set latest as default

```sh
> nvm alias default node
```
