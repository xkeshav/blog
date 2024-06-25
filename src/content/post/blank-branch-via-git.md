---
title: "Blank Branch via git"
description: "how to create create blank branch in github using git command"
publishDate: "11 Feb 2024"
tags: ["git", "github"]
draft: true
---

## Blank Branch in github

sometime we need to create an empty branch to test or work completely different environment, such as one repo has react and another repo have angular code

either we delete everything and do install but here is how we can do

```sh
> git checkout --orphan <branch-name>
> git commit --allow-empty -m "Blank Branch"
> git push -u origin <branch-name>
```

replace `<branch-name>` with your branch name

---

## Update

this is not fully working if we have code in other branch; need to delete files using `sudo rm -rf`

Thanks.
