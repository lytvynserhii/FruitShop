const ESLINT_RULES = {
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'no-restricted-syntax': [
    'error',
    {
      selector:
        "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
      message: 'Default React import not allowed',
    },
  ],
  'no-restricted-exports': [
    'error',
    { restrictDefaultExports: { direct: true } },
  ],
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' },
  ],
};

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    ...ESLINT_RULES,
  },
};
