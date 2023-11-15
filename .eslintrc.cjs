module.exports = {
  root: true,
  'extends': [
    "plugin:lit-a11y/recommended"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: [1, 2, {"SwitchCase": 1}],
    quotes: [1, "single", {"allowTemplateLiterals": true}],
    semi: [1, "always"],
    'comma-dangle': ["error", "never"],
    'key-spacing': ["error", { "afterColon": true }],
    'space-infix-ops': ["error"],
    'comma-spacing': [1, { "before": false, "after": true }],
    'arrow-spacing': [1, { "before": true, "after": true }],
    'no-unused-vars': [1, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "template-curly-spacing": "off"
  },
  plugins: ["lit-a11y"],

  "parserOptions": {
    parser: 'babel-eslint',
    ecmaVersion:2023,
    "sourceType": "module"
  }
};
