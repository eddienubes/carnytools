const config = require('@vercel/style-guide/prettier/index')

/**
 * @type {import('prettier').Options}
 */
module.exports = {
    ...config,
    arrowParens: "always",
    semi: true,
    tabWidth: 2,
    trailingComma: "no"
}