module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'import'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 0,
    'linebreak-style': 1,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
};
