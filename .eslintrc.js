module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@lkummer", "eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-underscore-dangle": "off",
  },
};
