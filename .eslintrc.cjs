/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["node_modules", "dist"],
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "Props", ignoreRestSiblings: true }],
    indent: ["error", 2],
    "prettier/prettier": [
      "off",
      {
        endOfLine: "lf",
        printWidth: 120,
        trailingComma: "es5",
        semi: false,
        jsxSingleQuote: true,
        singleQuote: false,
        useTabs: false,
        tabWidth: 2,
      },
      {
        usePrettierrc: true,
      },
    ]
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/jsx-a11y/no-redundant-roles": [
          "error",
          {
            ul: ["list"],
          },
        ],
        "indent": ["off"]
      },
    },
  ],
};
