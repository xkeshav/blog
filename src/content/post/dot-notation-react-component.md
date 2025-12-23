---
title: "dot-notation-react-component"
description: "how to use dot notation for react functional component in JSX/TSX"
publishDate: "26 Sep 2024"
tags: ["react", "notation", "functional component", "ReactFC"]
---

## Using Dot Notation for Functional Components in React

For a cleaner way to manage your functional components, consider using dot notation. Here’s how you can do it:

1. Create an object that maps your components in a single file:

   ```tsx title='Problem.tsx'
   import { Letter } from "./Letter";
   import { Timer } from "./Timer";

   export const Problem = {
     Letter: Letter,
     Timer: Timer,
   };
   ```

2. Then use this object in your main application file like this:

```tsx title='App.tsx'
import { Problem } from "./components/Problem";

const App = () => (
  <main className="main">
    <Problem.Timer />
    <Problem.Letter />
  </main>
);
```

This approach simplifies your imports and keeps your code organized.
