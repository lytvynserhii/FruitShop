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
  'no-restricted-properties': [
    'error',
    {
      object: 'jest',
      property: 'resetAllMocks',
      message: '`clearMocks` is already used in jest.config.js',
    },
    {
      object: 'jest',
      property: 'clearAllMocks',
      message: '`clearMocks` is already used in jest.config.js',
    },
  ],
};

const IMPORT_RULES = {
  'import/newline-after-import': ['error', { count: 1 }],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: '{react,react-native,react-redux,@reduxjs/toolkit}',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '{screens/**}',
          group: 'parent',
          position: 'before',
        },
        {
          pattern: '{components/**,containers/**}',
          group: 'parent',
          position: 'before',
        },
        {
          pattern: '{assets/**,constants/**}',
          group: 'parent',
          position: 'before',
        },
        {
          pattern: '{helpers/**,services/**,navigation/**,store/**,store}',
          group: 'parent',
          position: 'before',
        },
        {
          pattern: '{./*.types,./*.settings,./*.styles}',
          group: 'index',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['react', 'react-native', 'builtin'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: false,
      },
    },
  ],
};

module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/recommended',
    'plugin:jest-extended/all',
  ],
  plugins: ['jest-formatting', 'jest-extended', 'testing-library'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/await-async-queries': 'error',
        'testing-library/no-await-sync-queries': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/prefer-screen-queries': 'off',
      },
    },
  ],
  rules: {
    ...ESLINT_RULES,
    ...IMPORT_RULES,
  },
};
