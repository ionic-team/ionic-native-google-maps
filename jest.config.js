const { jsWithBabel: jestPreset } = require('ts-jest/presets');

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
    '^@ionic-native/core$': '<rootDir>/dist/@ionic-native/core',
    '^cordova/utils$': '<rootDir>/node_modules/cordova-js/src/common/utils',
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/test/setupJest.js',
}