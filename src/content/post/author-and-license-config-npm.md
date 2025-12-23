---
title: "npm default config for author and license"
description: "set author and license default while npm init"
publishDate: "23 Aug 2024"
tags: ["npm", "license", "node", "tip"]
---

# Set Default setting for Author and License in npm

when we run `npm init` ; it create a _package.json_ and it ask few questions and you can set author and license by setting global config using below command in your terminal

```sh
npm config -g set init-license "MIT"
npm config -g set init-author-name "Your Name"
```

this will be added in your global `.npmrc` file

now when you run `npm init` it will not ask these questions

## Bonus tip

to check all global config settings run below command

```bash
> npm config list

```
