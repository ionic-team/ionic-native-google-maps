import { BaseArrayClass, BaseClass } from './cordova-plugin-google-maps-proxy';

/**
 * Use when you need a sequential id in tests
 * Should be needed rarely
 */
export const nextId = (() => {
  let i = 0;

  return () => `uniqueId-${i++}`;
})();

/**
 * Add plugins to the plugin.google.maps namespace
 * Use jest.fn() to construct mocks
 * A library of mocks is maintained in the mocks directory
 *
 * @param plugins a map of plugins to mock
 */
export const mockCordova = (plugins: {}) => {
  (window as any).cordova = {

  };

  (window as any).plugin = {
    google: {
      maps: {
        BaseArrayClass,
        BaseClass,
        ...plugins,

      }
    }
  };
};
