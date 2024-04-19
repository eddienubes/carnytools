module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('./base.js')
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn'
  }
};
