---
title: "Write Generic Type syntax for arrow function"
description: "correct type annotation syntax for generic types in functional component"
publishDate: "16 Nov 2024"
tags: ["typescript", "function component", "arrow function", "fat arrow", "generic"]
draft: false
---

# Generic Type syntax for Arrow function

using a function which gives random item from a list but it was written inside a method; so extract the method and make it generic so that if I pass number[] and return will be number

> [!NOTE]
> writing error list on hover is in commented code inside code snippet

```ts
const randomFrom = (list: T[]) => list[Math.floor(Math.random() * list.length)];
// Cannot find name 'T'. ts(2304)
```

and using it later

```ts
const themes: string[] = ["red", "green", "blue"];
randomFrom(themes);
```

ths gives type error

## Trial 1: added return type ( not working )

```ts
const randomFrom = (list: T[]): T => list[Math.floor(Math.random() * list.length)];
// Cannot find name 'T'. ts(2304)
```

and later

```ts
randomFrom(themes<string>);
//  Type 'string[]' has no signatures for which the type argument list is applicable.
```

still same error but now changed typing near to the method name as below

this gives another error along with previous errors

## Trial 2: added return type ahead of function ( not working )

changed location of typing while function call

```ts
randomFrom<string>(themes);
> Expected 0 type arguments, but got 1.

```

## Trial 3: Added ahead of function name ( not working )

```ts
const randomFrom: T = (list: T[]): T => list[Math.floor(Math.random() * list.length)];
// Cannot find name 'T'. under every T
```

but interestingly, this time error on below code has been gone

```ts
randomFrom<string>(themeNames);
```

## Added type ahead to parenthesis of fat arrow in angle bracket ( working )

```ts
const randomFrom = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)];
```

and later

```ts
const randomName = randomFrom<string>(themeNames);
```

and this works without any type error.

## More refactor

1. adding <string> is un-necessary while function calling, as we passed argument already typed as `string []`
2. remove explicit `string[]` ahead to `themes` as it is `string[]` already.
3. Remove typing after `)` in function definition.

```ts
const themes: string[] = ["red", "green", "blue"];
```

so we can remove the typing and call it like this

```ts
const randomName = randomFrom(themeNames);
```

and if you hover on the method name it will show the correct tying instead of `T` as below

```ts
const randomFrom: <string>(list: string[]) => string;
```

## Final Typed version

function definition

```ts
const randomFrom = <T>(list: T[]) => list[Math.floor(Math.random() * list.length)];
```

function invocation

```ts
const themes = ["red", "green", "blue"];
const randomName = randomFrom(themeNames);
```

## Key points

- avoid explicit typing
- use <T> just before opening parenthesis in arrow function approach
