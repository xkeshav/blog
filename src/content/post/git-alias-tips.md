---
title: "Git alias to switching account"
description: "Git Alias for switching github account"
publishDate: "23 Mar 2025"
tags: ["git", "alias"]
---

## Git account switch alias

When you have multiple github account, for eg company github and personal on the same device then it is tedious to switch account, so here is the way to create git alias and switch from terminal

1. Create git alias

below is the syntax to make alias global

```sh
git config --global alias.st status
```

you can see the same alias in you `~/.gitconfig` file under _[alias]_ directive

```txt
[alias]
    st = status
```

or using below command

```sh
git config --list | grep alias
```

Note: you can directly add here too but this is space sensitive and prone to risk

2. Now create alias for your company and personal account as below

```sh
git config --global alias.company !git config user.name company_username && git config user.email company@email.address
git config --global alias.my !git config user.name personal_username && git config user.email personal@email.com

```

Note: add `!` ahead to alias

Thats'all

3. How to switch

Switch from company to personal using alias and check using user.name or email as below

```bash
git my
git config --get user.name
git config --get user.email
```

### Bonus Tips

some useful alias from my workspace ( Ubuntu)

```sh
alias.http=config --get remote.origin.url
alias.hide=update-index --assume-unchanged
alias.unhide=update-index --no-assume-unchanged
alias.hidden=!git ls-files -v | grep ^h
```

or to edit gitconfig file using vim editor

```sh
git config --global core.editor "vim"
git config --edit --global
```

Thanks
