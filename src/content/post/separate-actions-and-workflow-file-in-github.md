---
title: "separate actions and workflow file in GitHub"
description: "custom user action and workflow files in github can be written separately"
publishDate: "25 Aug 2024"
tags: ["action", "github", "workflow"]

---

# Separate GitHub action file and  workflow file

During GitHub Workflow action writing yaml file and usually we use `run` to run some action in same file as below

I have my own action lint the markdown files and using own config file for that; so there was no need to call `uses` from existing action so use `run` which works fine

## First Version

```yaml title='.github/actions/md-lint/action.yml'
name: markdown-lint
run-name: learning github action from workflow
on: [push]
jobs:
  markdown-lint:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js environment
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Lint Markdown files
        run: |
          npx markdownlint-cli '**/*.md' \
          --config '.github/workflows/.markdownlint.json' \
          --ignore '.github/CONTRIBUTING.md' \
          --ignore '.github/CODE_OF_CONDUCT.md'\
          --ignore 'CHANGELOG.md'

```

adding `.markdownlint.json` file near this file

## Final Version

We can also separate the action completely and call the file using `uses` in place of run

### Action file

created separate **actions** folder inside `.github` folder and create a file name *action.yml*  under one file which is called from file in *workflows* folder

```yaml title='.github/actions/md-lint/action.yml'

name: md-lint
description: Run npx markdownlint-cli
runs:
  using: "composite"
  steps:
    - shell: bash
      run: |
        npx markdownlint-cli '**/*.md' \
        --config './.markdownlint.json' \
        --ignore '.github/CONTRIBUTING.md' \
        --ignore '.github/CODE_OF_CONDUCT.md'\
        --ignore 'CHANGELOG.md'

```

Notes

- we can use `\`  writing a long command in multiline
- filename must be `action.yml` ' this is default file under a folder so no need to mention while calling
- move `./.markdownlint.json` inside *md-lint* folder

### Workflow File

This is how it is called inside `workflows`

```yaml title='.github/workflows/markdown.yml'

name: markdown-lint
run-name: learning github action from workflow
on:
  push:
    branches:
      - main
      - develop
jobs:
  markdown-lint:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js environment
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Lint Markdown files
        uses: ./.github/actions/md-lint
```

## References

- Thanks to this [Stack overflow Answer](https://stackoverflow.com/a/78911602/155861)
