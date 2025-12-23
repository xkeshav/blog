---
title: "GitHub Action workflow Yaml syntax variations"
description: "different variations in yaml file to define github workflow file"
publishDate: "25 Aug 2024"
tags: ["github", "yaml", "syntax", "pattern", "actions"]
---

# variation of GitHub Workflow YAML syntax

learning GitHub Actions and reading [GitHub Docs][github docs];

as I am JavaScript developer, find some variation of defining yaml file so sharing my findings here.

this works fine and my final syntax

```yml
name: markdown-lint
run-name: learning github action from workflow
on:
  push:
    branches:
      - main
      - develop
```

but before reaching on this; I have tried various syntax which also work, although these variation have some significance while below might be works as default, we can control the workflow using above.

## assigning `branches` in array `[]`

```yml
name: markdown-lint
run-name: learning github action from workflow
on:
  push:
    branches: ["main", "develop"]
```

## also one liner `on` also works

using without `branches` and `run-name` ;

```yaml
name: markdown-lint
on: push
jobs:
```

## assign value using string

```yaml
name: markdown-lint
on: "push"
jobs:
```

## value in array `[]` also works

check value against `on`

```yml
name: markdown-lint
on: [push]
jobs:
```

[github docs]:[https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
