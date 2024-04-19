module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('./base.js')
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-types': 'warn'
  }
};
