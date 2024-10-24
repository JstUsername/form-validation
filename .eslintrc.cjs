/* prettier-ignore */

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'unicorn'],
  extends: [
    'plugin:@web-bee-ru/react',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true,
    }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never',
        'js': 'never',
        'jsx': 'never'
      }
    ],
  },
  overrides: [
    {
      files: ['src/constants/**/*.{js,ts,tsx}'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    }
  ],
};
