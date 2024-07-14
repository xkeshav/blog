---
title: "Find Remote URL of your working repo"
description: "How to check remote repo url using git command from the working directory"
publishDate: "July 14, 2024"
tags: ["git", "tips", "remote", "command"]
---

# Remote URL

Checking remote URL of your current working folder is a task which we need sometimes to check; so here are few git command which display the remote URL name;

Note:

- The command and output are derived from Ubuntu and within VS Code ; your output may vary
- adding output along with command; command start with `>` in below examples

## TL;DR

If you are in hurry then just use any of below command; it will do the job

```sh
> git remote -v
> git remote show origin
> git remote get-url origin
> git ls-remote --get-url
> git config --get remote.origin.url

```

## Approach 1

```bash
> git remote -v
origin  git@github.com:xkeshav/workshop.git (fetch)
origin  git@github.com:xkeshav/workshop.git (push)
```

## Approach 2

```sh
> git remote show origin

 * remote origin
  Fetch URL: git@github.com:xkeshav/workshop.git
  Push  URL: git@github.com:xkeshav/workshop.git
  HEAD branch: main
  Remote branches:
    feature                             tracked
    main                                tracked
    react                               tracked
    react-workshop                      tracked
    refs/remotes/origin/zeroPoint/react stale (use 'git remote prune' to remove)
    zeroPoint/parcel                    tracked
  Local branch configured for 'git pull':
    react-workshop merges with remote react-workshop
  Local ref configured for 'git push':
    react-workshop pushes to react-workshop (up to date)
```

## Approach 3

```sh
>git config --get remote.origin.url

git@github.com:xkeshav/workshop.git

```

### Approach 4

```sh
>git remote get-url origin

git@github.com:xkeshav/workshop.git
```

### Approach 5

```sh
> git ls-remote --get-url

git@github.com:xkeshav/workshop.git
```
