import { BaseArrayClass, BaseClass } from './';

export const nextId = (() => {
  let i = 0;

  return () => `uniqueId-${i++}`;
})();

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
