module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', 
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@services': './src/services',
          '@assets': './src/assets',
          '@env': './src/env',
          '@models': './src/models',
          '@contants': './src/contants',
          '@mock': './src/mock',
        },
      },
    ],
  ],
};
