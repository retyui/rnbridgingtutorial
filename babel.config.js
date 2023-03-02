module.exports = {
  presets: [ 'module:metro-react-native-babel-preset' ],
  plugins: [
    [
      'module-resolver',
      {
        root: [ './' ],
        extensions: [
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          'app-info-package': './app-info-package',
          'app-info-package-classic': './app-info-package-classic',
          'conic-gradient-package': './conic-gradient-package',
          'conic-gradient-package-classic': './conic-gradient-package-classic',
          'native-list-package': './native-list-package',
          'native-list-package-classic': './native-list-package-classic',
          'range-slider-package': './range-slider-package',
          'range-slider-package-classic': './range-slider-package-classic',
          'save-file-picker-package': './save-file-picker-package',
          'save-file-picker-package-classic': './save-file-picker-package-classic',
          'screen-orientation-package': './screen-orientation-package',
          'screen-orientation-package-classic': './screen-orientation-package-classic',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
