---
title: "Rename Git Branch "
description: "rename local and remote branch name from local terminal"
publishDate: "22 July, 2024"
tags: ["git", "branch", "rename"]
---

## Rename Local branch name

```bash
> git branch -m <old-name> <new-name>
```

- if you are on that branch then no need to add `<old-name>`
- `-m` will rename local branch name
- verify using `git branch`
- if you are on another branch then must use `<old-name>`

## Push to Remote ( if you have pushed the local name to remote)

```bash
> git push -u origin :old-name <new-name>
```

- Remember to put `:` before old-name

`-u` is optional; you can add it on next command

that's all
