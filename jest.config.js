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
    'json'
  ],
  moduleNameMapper: {
    '^@ionic-native/core$': '<rootDir>/dist/@ionic-native/core'
  },
  setupTestFrameworkScriptFile: '<rootDir>/setupJest.js'
}