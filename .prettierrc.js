/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 140,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss" /* Must come last */],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
      rules: {
        quotes: ["error", "double", { avoidEscape: true }],
      },
    },
  ],
};
