module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: { Vue: true },
  plugins: ['vuejs-accessibility'],
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
