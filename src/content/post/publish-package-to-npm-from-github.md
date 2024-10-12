---
title: "publish-package-to-npm-from-github"
description: "Publish package to npm registry from Github itself using action workflow"
publishDate: "12 Oct 2024"
tags: ["blog"]
draft: true
---


## Publish package to NPM registry from github

1. go to npm website
2. open setting and generate ganular token which read/write access and you can specify a package
3. copy the token

4. open github and go to the repo and its settings and click secrets and variable and save this token with any name ( I'll save as NPM_PUBLISH_TOEKN ) and set value which is copies from npm
5. create a action under .github/workflows and paste below code

```yaml
name: Publish Package to NPM

on:
  release:
    types: [created, prereleased]

jobs:
  publish-to-npm:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          registry-url: "https://registry.npmjs.org/"
          scope: "@xkeshav"
          always-auth: true
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_PUBLISH_TOKEN}}
```

6. now commit the code and create a release
    a. create a tag ( click *Tags* near branch name )
    b. Click on *Releases* tab (<https://github.com/><user>/<repo>/releases)
    c. Click *Draft a new release* button
    d. Click *Choose a Tag* , select tag if exist otherwise write new tag it will generate new tag; conventaion will be number x.y.z
    3. Target ( keep it default selecetd value *main* )
    e. Select Previos Tag ( if any ) ; it will generate release note from that tag
    f. click on *generate release note*
    g. Click on  *Publish Release*
it will create a Assets ( in zip ) and changelog in release page

7. go to *Actions* tab and you will see that above workflow started running and when it will finished a new package will be published to npm
