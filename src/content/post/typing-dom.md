---
title: "DOM typing"
description: "DOM typing issue with querySelector and querySelectorAll"
publishDate: "13 Aug 2024"
updateDate: "13 Aug 2024"
tags: ["blog", "typescript", "DOM"]
---

# DOM typings

[Check code on playground](https://stackblitz.com/edit/dom-typing)

we will explore and set type for DOM method; such as  `document.querySelector()` and `document.querySelectorAll()`

❌ below is not working

```ts
const radioInputList = document.querySelectorAll<RadioNodeList>('input[type=radio]');
radioInputList.forEach((r) => (r.checked = r.defaultValue === 'X'));
```

✅ but this works

```ts
const radioInputList = document.querySelectorAll<HTMLInputElement>('input[type=radio]');
radioInputList.forEach((r) => (r.checked = r.defaultValue === 'X'));
```


❌ but this will not work; adding typing ahead to variable

```ts
const radioInput: HTMLInputElement = document.querySelectorAll('input[type=radio]');
```

✅ this works ( with `as`)

```ts
const radioInputList = document.querySelectorAll('input[type=radio]') as NodeListOf<HTMLInputElement>;
radioInputList.forEach((r) => (r.checked = r.defaultValue === 'X'));
```

❌ but this will not work ( type  )

```ts
const radioInputList = document.querySelectorAll<NodeListOf<HTMLInputElement>('input[type=radio]');
radioInputList.forEach((r) => (r.checked = r.defaultValue === 'X'));
```

❌ neither this works (assign)

```ts
const radioInputList: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type=radio]');
```


❎ below syntax are not working

```ts
const radioInputList: HTMLInputElement = document.querySelectorAll('input[type=radio]');
const radioInputList: Element = document.querySelectorAll('input[type=radio]');
const radioInputList: HTMLInputElement[] = document.querySelectorAll('input[type=radio]');
const radioInputList: Element[] = document.querySelectorAll('input[type=radio]');
```

✅ and here is separate type for both DOM method as per my approach

```ts
const video = document.querySelector<HTMLVideoElement>('video') // HTMLVideoElement | null
const audios = document.querySelectorAll('audio') as NodeListOf<HTMLAudioElement>;
```

Hope it helps.
