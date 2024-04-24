module.exports = {
  rules: {
    'no-console': 'warn',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ],
    'import/no-named-as-default-member': 'off',
    'no-unused-vars': 'warn'
  }
};
