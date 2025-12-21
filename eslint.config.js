import eslint from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      
      'dot-notation': 'error',
      'no-var': 'error', 
      'prefer-destructuring': ['error', { 'array': true, 'object': true }],
      
      'react/prop-types': 'off', 
      'react/jsx-key': 'error' 
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020 
      }
    }
  },
  
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      
      'prettier/prettier': ['error', {
        "semi": true,
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 2,
        "useTabs": false,
        "jsxBracketSameLine": false
      }],
    },
  },
];

