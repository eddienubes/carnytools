const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  extends: [
    require.resolve('@carnytools/styles/eslint/node'),
    require.resolve('@carnytools/styles/eslint/typescript')
  ],
  parserOptions: {
    project
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  }
};
