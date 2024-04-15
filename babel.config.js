module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          assets: ['./src/assets'],
          components: ['./src/components'],
          constants: ['./src/constants'],
          helpers: ['./src/helpers'],
          navigation: ['./src/navigation'],
          screens: ['./src/screens'],
          store: ['./src/store'],
        },
      },
    ],
  ],
};
