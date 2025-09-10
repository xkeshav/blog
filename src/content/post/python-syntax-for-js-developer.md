---
title: "Python import syntax for JavaScript Developers"
description: "iA clear guide for JS/Node developers to understand Python’s import system with side-by-side comparisons."
publishDate: "11 Sep 2025"
tags: ["python", "javascript", "astro", "learning"]
draft: false
---

## 🐍 Python Imports for JavaScript Developers

If you come from a JavaScript/Node.js background, Python’s import system may look weird at first.  
Where JS uses `/` for paths and sometimes `default exports`, Python uses `.` and always explicit imports.

This post is a **cheat sheet** for JavaScript developers to quickly understand Python imports — with side-by-side examples.

---

## 1. Path Separator

- **JavaScript (ESM):**

```js
import { helper } from "./utils/helpers.js";
```

- **Python:**

```python
from utils.helpers import helper
```

👉 In Python, `.` replaces `/`. And you never write `.py`.

---

## 2. Named Imports

- **JavaScript:**

```js
import { loadEnv } from "dotenv";
```

- **Python:**

```python
from dotenv import load_dotenv
```

Both mean "just bring in the one function I need."

---

## 3. Namespace Imports

- **JavaScript:**

```js
import * as fs from "fs";

fs.readFileSync("file.txt");
```

- **Python:**

```python
import os

os.getenv("HOME")
```

Both pull the _entire module_ under a namespace.

---

## 4. Aliasing Imports

- **JavaScript:**

```js
import { readFile as rf } from "fs";

rf("file.txt");
```

- **Python:**

```python
from math import factorial as fact

print(fact(5))  # 120
```

Rename things when they’re too long (or conflict).

---

## 5. Default Export vs Explicit

- **JavaScript (default export):**

```js
import express from "express";
```

- **Python:**
  Python has no "default export." Everything is explicit.

```python
from flask import Flask
```

---

## 6. Relative vs Absolute Imports

- **JavaScript:**

```js
import { something } from "../models/user.js";
```

- **Python:**

```python
from ..models import user
```

Or absolute style:

```python
from myproject.models import user
```

---

## 7. Import for Side Effects

- **JavaScript:**

```js
import "./setup.js";
```

- **Python:**

```python
import setup   # runs setup.py top-level code
```

---

## 8. Bad Practice: Star Imports

- **JavaScript:**
  Doesn’t exist, except `import * as`.

- **Python:**

```python
from math import *   # ❌ BAD, pollutes namespace
```

Avoid this — it makes code harder to read.

---

## ✅ Best Practices

- Use `from module import thing` for clarity.
- Use `import module` when you’ll use many functions from it.
- Prefer absolute imports for your own project files.
- Avoid `from module import *`.
- Remember: **`.` in Python ≈ `/` in JS**.

---

## 🎁 Bonus: What if you import twice?

In Python, importing the same module or function multiple times is safe:

```py
import os
import os # fine, only loads once
```

Python caches modules in sys.modules, just like Node caches require().

Multiple imports just reuse the same module in memory.

Re-importing a function/class is harmless but redundant — linters may warn.

👉 Think of it like JS: Same function, two names.

```js
import { readFile } from "fs";
import { readFile as rf } from "fs"; // both point to same function
```

## What if Using before import

```py
print(math.sqrt(16))   # try using before import

import math
```

👉 Result: NameError: name 'math' is not defined

Because Python executes line by line — when it sees print(math.sqrt(16)), the name math hasn’t been defined yet. The import comes later, so too late.

### **Difference from JS**

In JavaScript, imports (ESM) and var are hoisted:

```js
console.log(x); // undefined
var x = 10;
```

But in Python, nothing like that happens.

In Python, imports are runtime statements, not compile-time declarations. So you must import before you use.

### Can we import anywhere in Python?

✅ Yes. Unlike JavaScript (where import must be top-level), Python allows import anywhere in the file — top, bottom, inside functions, even inside loops.

Example:

```py
def my_func():
    import math
    print(math.sqrt(16))

my_func()   # works fine

```

🔑 Takeaway

Once you translate a few patterns:

JS: `import { helper } from "./utils/helpers.js";`

Python: `from utils.helpers import helper`

…it starts to feel natural.

Think of Python imports as "always explicit" and "dot means folder."
With that, any JS dev can feel at home in Python quickly

---

✍️ Written with ❤️ for JS devs exploring Python.
