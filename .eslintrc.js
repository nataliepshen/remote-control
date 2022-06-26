module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    "no-console": 0,
    "prettier/prettier": 2,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "default-case": 0,
    "no-shadow": 0
  },
};
