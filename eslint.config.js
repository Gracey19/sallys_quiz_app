import eslint from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // 1. Base ESLint Recommended Rules (Syntax and basic errors)
  eslint.configs.recommended,
  
  // 2. Configuration for React/JSX files
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact
    },
    rules: {
      // General React/JSX rules for modern projects (Vite handles React imports)
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      
      // JavaScript Best Practices
      'dot-notation': 'error',
      'no-var': 'error', 
      'prefer-destructuring': ['error', { 'array': true, 'object': true }],
      
      // React Specific Rules
      'react/prop-types': 'off', // No need for PropTypes in modern React
      'react/jsx-key': 'error' // Keys are mandatory in lists
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
  
  // 3. Prettier Configuration (MUST BE THE LAST CONFIGURATION IN THE ARRAY)
  // This turns off conflicting ESLint rules and applies Prettier's formatting rules.
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Turn off all ESLint rules that might conflict with Prettier
      ...configPrettier.rules,
      
      // Defines Prettier rules (replaces the need for a .prettierrc file)
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

