---
title: "TypeScript patterns"
publishDate: "13 Aug 2024"
updateDate: "13 Aug 2024"
description: "Typescript basic types and different pattern approach to define typing"
tags: ["typescript", "typing", "pattern", "DOM"]
---

## Type Annotation

using the colon symbol followed by the type we want to use.


now there are 3 way to annotate ( note in below example `T` is just a _type_ )


```ts
const someThing :T = 'whatever';
const something = 'whatever' as T;
```
if method is there then

```ts
const someThing = someMethod<T>(...params);
// or
const someThing:T = someMethod(...params);
const someThing = someMethod(...params) as T;
```

## Type Define : Explicit or Implicit

## Type inference

while it is possible to explicit annotate but rely on inferred type which done by typescript type system

VS Code __Inlay Hints__ does the same

```ts
const n = 10;
const now = new Date(); // Date type
```

and when you hover on `n` , its type is `number`; there is no need to set explicit type ( i.e. type annotate `:number` )

many occurrences, typescript set explicit  `any`

// we could modify our _TSConfig_ to allow implicit typings `any` `noImplicitAny: true`

## Function typing

it is inferred automatically but required when we call function and use some operations.

```ts
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
```

there are various way to set typing of a function

```ts
const arrowDate: (a: number, b: number) => Date = (a: number, b: number) => new Date(a, b); // valid
const arrowDate_: Date = (a: number, b: number) => new Date(a, b); // invalid ( replace `Date`` with `any` just for execution purpose)
const arrowDate__ = (a: number, b: number): Date => new Date(a, b); // valid

const [d, _d, __d] = [
  arrowDate(2024, 0),
  arrowDate_(2024, 0),
  arrowDate__(2024, 0),
];

console.log({ d, _d, __d });
```

to simplify we can use separate typing

```ts
type DateFn = (a: number, b: number) => Date;
const arrowDateFunction: DateFn = (a, b) => new Date(a, b);
// const arrowDateFunction: DateFn = (a, b): DateFn => new Date(a, b); // invalid
const what = arrowDateFunction(24, 2);
console.log({ what });

```

### References

> https://typescript.tv/hands-on/type-inference-type-annotations-in-typescript/
> https://stackblitz.com/edit/dom-typing
