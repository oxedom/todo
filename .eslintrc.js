module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@lkummer", "eslint:recommended"],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-underscore-dangle": ["error", { allow: ["_place"] }],

  },
};
