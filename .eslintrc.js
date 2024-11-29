module.exports = {
  extends: ["expo", "eslint:recommended"],
  ignorePatterns: ["/dist/*"],
  plugins: ["react", "react-native", "react-hooks"],
  env: {
    "react-native/react-native": true,
  },
  globals: {
    React: true,
  },
  rules: {
    "no-unused-vars": "off",
    "import/no-unresolved": "off",
    "import/namespace": "off",
    "no-trailing-spaces": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
  },
  settings: {
    "import/resolver": {
      alias: true,
    },
  },
};
