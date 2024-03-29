---
title: "All About Regex"
description: "Regular Expression in depth"
pubDate: "Mar 15 2023"
heroImage: "/placeholder-hero.jpg"
---

## Regular Expression or Regex

Regular expressions are useful to parse a file and validate or replace with our need, few of examples are regex are

- email address validation
- number validation
- password validation and strength check

in this article we will explore more on regex

## Syntax Variation

there are 2 variation of writing regex pattern in #JavaScript

### using back slash / /

- when using back slashes , we do not need to wrap the expression in quotes

### using string pattern

using '' then no need to wrap pattern in `/` `/` and then to create a regexp using `new RegExp('pattern')`

eg.

```js

const rex = /[a-zA-Z0-9]/;

const stringPattern = '[a-zA-Z0-9]';

const stringRegex = new RegExp(stringPattern);

// here rex and stringRegex are equivalent

```  

also there are subtle difference between these 2 variation and

also when we need to use character class such as `\d` ( digit only ) `\b` (word boundary) then in string pattern we need to use extra `\` and we can get regex pattern from string pattern using `regex.source` method

```js

const rex = /\d*\bcolor\b/;

const stringPattern = '\\d*\\bcolor\\b';

const stringRegex = new RegExp(stringPattern);

console.log(stringRegex.source); // return  \d*\bcolor\b

```

## flags

flags are very distinctive usage while using regex, the very common flags we use mostly are

- `/g` --> do global search
- `/i` --> do case insensitive search
- `/m` --> do multiline search

and tis is how do we write flag in both regex syntax

in backslash pattern, write after ending `/`, for eg. `/[a-z0-9]/gi`
in string pattern, we set as second argument, for eg. `new RegExp('[a-z0-9]', 'gi')`

apart from these common flags there are few other useful flags are which we talk here

### /d flag

do not confuse this with `\d` character class

this flag is useful when we use capture groups and it provide the capture group and matched group index array

also note this works only when we have /g flag , means both comes together

### /y flag

this is conditional search in regex. In Regex we can not search from a specific range like we want to search after particular match

for eg. I want to capture all property of a css declaration block , so first search for opening bracket `{` and after that we search for property and value and so on but this is not possible as regex always start from start of page

here sticky flag /y comes handy, we can set index of regex pattern and then match it

### /u flag

this is unicode match flag as if we have smiley, or some unicode pattern in our string.

also when we use \p character class then it must have `\u` flag

`\p` is very useful character class , so we talk about character class

## character class

very common character class are

- `\d` to capture digit
- `\w` to capture all word
- `\s` to capture white space
- `\p` pre defined class, `/u` flag is mandatory when we use this

## RegEx return

normally we use `while` loop for `regex.match` to get all matched pattern, but es2023 introduce new method `.matchAll()` which is easier to work on

### with while loop

```js

const stringPattern = '[a-zA-Z0-9]*';

const stringRegex = new RegExp(stringPattern, 'g');

const str = 'there are 33 states and 7 union territory in india.';

const matches  = str.match(stringRegex);



```
