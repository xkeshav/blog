---
title: "Ubuntu tips"
publishDate: "15 May 2024"
updateDate: "14 July 2024"
description: "Ubuntu tip for Ubuntu 24.04"
tags: ["ubuntu", "tips"]
---

## install Ubuntu

install ubuntu 24.04 using USb or whatever way; here I am telling what I do after installation of ubuntu to make it better

![Ubuntu Desktop](./ubuntu_24_04.png)

## Settings

- Ubuntu 24.04 comes with Windows type settings dialog and there are few tweaks which are useful

- This new Ubuntu have more GUI and right click menu which gives experience of same as windows/mac.

- Home icon on bottom right is similar to My Computer

- other partition also displayed on dash you can uncheck if not want to

- the little App Launcher on the end of Dash have all recent apps and settings just like Finder in Mac

- on top there is power button and other settings which can be open using `Super + s` keyboard shortcut

1. Open settings from app Launcher and do some tweaks such as

    - move dash to right
    - add seconds in time display

2. search for do top 10 things to do after install from OMG ubuntu page and [debugpoint](https://www.debugpoint.com/things-to-do-ubuntu-23-10/)

3. install few additional tools using terminal

      ```sh
        > sudo apt update && sudo apt upgrade
        > sudo apt install ubuntu-restricted-extras
        > sudo apt install gnome-shell-extension-ubuntu-tiling-assistant
        > sudo add-apt-repository universe
        > sudo apt install fonts-roboto fonts-cascadia-code fonts-firacode
        > sudo apt install dconf-cli dconf-editor
        > sudo apt install gnome-tweaks
      ```

4. install few apps from Ubuntu app store

    - Gnome Calendar

    - Extension Manager

   click on `Apps > software updater` and update the software for once

5. remove key ring options using [this useful article](https://linuxconfig.org/how-to-disable-keyring-popup-on-ubuntu)

6. install few useful packages for development

    - VS code

    download _.deb_ package from vscode and install

    ```sh
    > sudo gpkg -i < ~/Downloads/code_1.88.1-1712771838_amd64 >
    ```

    - Node js

      ```sh
      > sudo apt install nodejs
      > sudo apt install npm
      ```

    verify once installed using `node -v`

    - GIT

    ```sh
      > sudo apt install git-all
    ```

    - VIM

    ```sh
      > sudo apt install vim
    ```

    - TREE

   ```sh
    > sudo apt install tree
   ```

## Things to Notice

- ubuntu default notepad support markdown; you need to change document type

- make terminal and vs code "pin to dash" means it will be on program panel

- screenshot can be taken using Print Screen button from keyboard

- screenshot auto saved in _picture/screenshot_ folder

- if you need to update grub then install _grub cutomizer_

```sh
sudo add-apt-repository ppa:danielrichter2007/grub-customizer
sudo apt-get update
sudo apt-get install grub-customizer


```

## Install File Manager

```sh
> sudo apt install nautilus
```

---

install tree

> sudo apt install tree

Hope it helps to setup your ubuntu.

Enjoy.
