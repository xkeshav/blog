---
title: "White Mouse Cursor issue in Ubuntu 24.04"
publishDate: "July 14 2024"
description: "white cursor issue fix Ubuntu 24.04"
tags: ["ubuntu", "tips", "mouse"]
---

## Fix for White square Cursor issue in Ubuntu

if mouse cursor comes as white square in Ubuntu 24.04

then first check which mouse theme you are using; for that install _gnome tweaks_

```sh
> sudo apt install gnome-tweaks

```

Now open it and check under _Appearance > Cursor_

Now open file Manager and navigate to icons directory

```sh
> cd /usr/share/icons
```

then _cursor_ theme sub directory ( in my case cursor theme is _DMZ-Black_ )

```sh
 > cd DMZ-Black/cursors
```

and run below command

```sh

> sudo ln -s left_ptr default

```

Your issue will be resolved
