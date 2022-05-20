# eslint-plugin-config-value-repeat

检测js类型的配置文件的值是否有重复

[English](./README.md)

## 安装

首先需要安装eslint [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

接下来安装 `eslint-plugin-config-value-repeat`:

```
$ npm install eslint-plugin-config-value-repeat --save-dev
```


## 使用

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

## 支持的规则

config-value-repeat/repeat


## 示例

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




