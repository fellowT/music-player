module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': ['off', 'window'],
    'react/jsx-filename-extension': 'off',
    'no-plusplus': 'off',
    'prefer-const': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'max-classes-per-file': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 解析的后缀名
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      typescript: {
        // 配置 eslint-import-resolver-typescript 读取 tsconfig.json 的路径
        // 目前用不着，先注释掉
        // directory: [resolve('./src/tsconfig.json'), resolve('./scripts/tsconfig.json')],
      },
    },
  },
};
