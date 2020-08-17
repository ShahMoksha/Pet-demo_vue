module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    // '@vue/typescript'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "vue/script-indent": ["error", 4, { "baseIndent": 1 }],
    // "indent": ["error", 4],

    // "space-before-function-paren": ["error", "always"],
    // "space-before-blocks": "off",
    "quotes": "off",
    "semi": "off",
    "comma-spacing": "off",
    "key-spacing":"off",
    "space-before-function-paren": "off",
    "indent" :"off",
    "object-curly-spacing" : "off",
    "arrow-spacing" :"off",
    "keyword-spacing" :"off"


  }
}
