const config = require('@vercel/style-guide/prettier');

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  ...config,
  arrowParens: 'always',
  semi: true,
  tabWidth: 2,
  trailingComma: 'none',
  printWidth: 80
};
