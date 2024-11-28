module.exports = {
  extends: ['expo', 'eslint:recommended'],
  ignorePatterns: ['/dist/*'],
  plugins: ['react', 'react-native'],
  env: {
    'react-native/react-native': true,
  },
  globals: {
    React: true
  },
  rules: {
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'no-trailing-spaces': 'error',
  },
  settings: {
    'import/resolver': {
      alias: true
    }
  }
};
