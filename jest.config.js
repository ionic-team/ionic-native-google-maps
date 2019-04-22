const { jsWithTs: jestPreset } = require('ts-jest/presets');

module.exports = {
  transform: {
    ...jestPreset.transform,
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  moduleNameMapper: {
    '^@ionic-native/core$': '<rootDir>/node_modules/@ionic-native/core',
    '^cordova/utils$': '<rootDir>/node_modules/cordova-js/src/common/utils',
    'rxjs': '<rootDir>/node_modules/rxjs',
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/test/setupJest.js'
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(@ionic-native)/)"
  ]
}
