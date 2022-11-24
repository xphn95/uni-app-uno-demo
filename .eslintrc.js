const { defineConfig } = require('eslint-define-config')

const ignoreFileName = ['index', 'computed', 'form']
module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      files: [
        '*.vue'
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    createDefaultProgram: true,
    project: ['./tsconfig.json']
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': [2, {
      ignores: ignoreFileName
    }],
    'jsonc/indent': [2, 2],
    'jsonc/comma-dangle': [2, 'never'],
    'vue/attributes-order': ['error', {
      order: ['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'DEFINITION', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'],
      alphabetical: false
    }],
    '@typescript-eslint/consistent-type-definitions': [2, 'interface']
  }
})
