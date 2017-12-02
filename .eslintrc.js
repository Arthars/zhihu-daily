module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  "globals": {
    "$": true
  },
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0,
    "space-before-function-paren": ["error", {
      "anonymous": "ignore",
      "named": "ignore",
      "asyncArrow": "ignore"
    }],
    "no-eval": ["error", { "allowIndirect": true }], // default is false
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }]
  }
}
