---
title: "Webpack with Express.js server with multiple entry"
publishDate: "19 May 2024"
description: "This is a guide how do I set up native HTML/CSS and JavaScript pages with node js and express and with webpack and later deploy it AWS Amplify"
tags: ["webpack", "express", "amplify", "HTML", "CSS", "JavaScript", "Node.js"]
---

# How to Use Webpack with Node.js Express Based Project with Multiple Entry Points

At [abcdkbd.com][1], I host native HTML/CSS and JavaScript pages using Parcel and AWS Amplify. Initially, I started with a single HTML page and gradually broke it down into separate scripts, styles, and added images and custom fonts.

In my local setup, I use Express and Node.js to run the server. However, for deployment, a single script to build everything is required. This is where bundlers like webpack come into play, although I also experimented with Parcel.

This blog focuses on converting Node.js Express-based web pages with multiple entry points, allowing different URLs for each page and incorporating backlinks to return to the main page.

## How it started

I began with a simple game involving HTML, CSS, and basic JavaScript. The HTML page displayed an alphabet list with CSS grid styling and hover effects. Here's a snippet:

```html
``html
<html>
 <head>
  <style>
   main{
    display: grid;
  /* other css */
   }
  </style>
 </head>
 <body>
 <header><h1> Alphabet list</h1>
 <main> </main>
 <script type="text/javascript">

 const varnmala = Array.from({ length: 26 }, (_, i) => String.fromCodePoint(65 + i));
 // then append to `main`
 </script>
 </body>
 </html>

```

## How it grows

As the project expanded, I separated scripts and styles into their respective folders, maintaining a clean structure. Here's a snippet:

```sh

├── project
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
```

and page changes to this

```html
<head>
  <link type="text/css" rel="stylesheet" href="./style.css" />
</head>
<body>
  <header>
    <h1>Alphabet list</h1>
    <main></main>
    <script async type="text/javascript" src="./script.js"></script>
  </header>
</body>
```

## entry of Node.js

With the addition of more games, I needed to handle multiple routes efficiently. This involved integrating Node.js and Express, setting up routes for each page, and serving static files. Here's a snippet from the server setup:

[Insert server setup snippet]

## entry of webpack

As the project complexity grew, I restructured the folder organization, added common scripts, and configured webpack. This allowed for multiple entry points and streamlined development. Here's a glimpse of the updated folder structure:

```sh
.
├── assets
│   ├── fonts
│   │   ├── AnandaBlackPersonalUseRegular-rg9Rx.ttf
│   │   ├── atkinson-hyperlegible-regular-102-webfont.woff2
│   │   ├── open-sans-v15-latin-ext_latin-700.woff
│   ├── images
│   │   ├── background
│   │   │   ├── banana.jpg
│   │   │   └── zero.jpg
├── common
│   ├── constants.js
│   ├── helper.js
│   └── utils.js
├── html
│   ├── about.html
│   ├── canvas.html
│   ├── capital.html
│   ├── draw.html
│   ├── hide-n-seek.html
│   ├── index.html
│   ├── kannada.html
│   └── math.html
├── index.js
├── mappers
│   └── alphabet.js
├── scripts
│   ├── about.js
│   ├── canvas.js
│   ├── capital.js
│   ├── draw.js
│   ├── hide-n-seek.js
│   ├── kannada.js
│   └── math.js
├── server
│   ├── index.js
│   └── server.js
└── styles
    ├── about.css
    ├── base.css
    ├── canvas.css
    ├── capital.css
    ├── draw.css
    ├── hide-n-seek.css
    ├── index.css
    ├── kannada.css
    └── math.css

```

## Deployment phase

To address the issue of frequent rebuilds during development, I integrated webpack configurations into the Express server. This enabled hot reloading for JavaScript changes without server restarts. Here's a summary of the changes made:W

This setup, though not without flaws, serves my purpose well, offering multiple entry points and enabling seamless development with Express and webpack. You can find detailed configurations in the provided repository.

I hope this walkthrough proves helpful to others transitioning from Node.js and Express to webpack-based workflows.

Later, I deployed the project to AWS Amplify for hosting.

[1]: https://www.abcdkbd.com
