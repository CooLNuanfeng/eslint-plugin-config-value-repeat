# eslint-plugin-config-value-repeat

Check if the value of the js configuration file is duplicated

[中文](./README_CN.md)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-config-value-repeat`:

```
$ npm install eslint-plugin-config-value-repeat --save-dev
```


## Usage

Add `config-value-repeat` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "config-value-repeat"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "config-value-repeat/repeat": 2
    }
}
```

## Supported Rules

config-value-repeat/repeat




## Demo

```

module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  plugins: ['config-value-repeat'],
  overrides: [
    {
      "files": ["./src/config/index.js"],
      "rules": {
        'config-value-repeat/repeat': 'error',
      }
    },
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

```


