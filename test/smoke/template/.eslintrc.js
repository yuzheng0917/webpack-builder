module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "comma-dangle": ["error", "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double"],
    "no-cond-assign": ["error", "always"],
    "one-var": "off", // ["error", "never"]
    "init-declarations": "off",
    "no-console": "off",
    "no-inline-comments": "off",
    "linebreak-style": ["off", "windows"],
    "comma-dangle": "off",
    "array-callback-return": "off",
    "global-require": "off",
  },
};
