'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  parserOptions: {
    createDefaultProgram: true,
  },
  extends: [
    './index.js',
    './lib/rules/typescript.js',
  ],
};
