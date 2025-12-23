---
title: "publish-package-to-github"
description: "This is a guide how you can publish your package to Github packages; using action "
publishDate: "12 Oct 2024"
tags: ["blog"]
draft: true
---

Publish package to GitHub Packages

1. create a action workflow file and save it inside `.github/action` folder in your repo

```yaml
name: Publish package to GitHub Packages
on:
  release:
    types: [published]
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      # Setup .npmrc file to publish to GitHub Packages
      - uses: actions/setup-node@v4
        with:
          node-version: "20.x"
          registry-url: "https://npm.pkg.github.com"
          scope: "@xkeshav"
      - name: Install dependencies
        run: yarn
      - name: Publish package
        run: yarn publish --access restricted
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

once you create a release ; it will generate a package and it will be visible on right side of repo under _Packages_
