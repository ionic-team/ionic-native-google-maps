import { CordovaInstance, Plugin, getPromise } from '@ionic-native/core';
import { BaseClass } from './base-class';
import { GoogleMaps } from './google-maps';

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
@Plugin({
  pluginName: 'BaseArrayClass',
  plugin: 'cordova-plugin-googlemaps',
  pluginRef: 'plugin.google.maps.BaseArrayClass',
})
export class BaseArrayClass<T> extends BaseClass {
  constructor(initialData?: T[] | any) {
    if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
      super(initialData);
    } else if (Array.isArray(initialData)) {
      super(new (GoogleMaps.getPlugin()).BaseArrayClass(initialData));
    } else {
      super(new (GoogleMaps.getPlugin()).BaseArrayClass([]));
    }
  }

  /**
   * Removes all elements from the array.
   * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
   */
  @CordovaInstance({ sync: true })
  empty(noNotify?: boolean): void {}

  /**
   * Iterate over each element, calling the provided callback.
   * @param fn {Function}
   */
  @CordovaInstance({ sync: true })
  forEach(fn: (element: T, index?: number) => void): void {}

  /**
   * Iterate over each element, calling the provided callback.
   * @param fn {Function}
   * @return {Promise<void>}
   */
  forEachAsync(
    fn: ((element: T, callback: () => void) => void),
  ): Promise<void> {
    return getPromise<void>(resolve => {
      this._objectInstance.forEach(fn, resolve);
    });
  }

  /**
   * Iterate over each element, then Returns a new value.
   * Then you can get the results of each callback.
   * @param fn {Function}
   * @return {Object[]} returns a new array with the results
   */
  @CordovaInstance({ sync: true })
  map(fn: (element: T, index: number) => any): any[] {
    return;
  }

  /**
   * Iterate over each element, calling the provided callback.
   * Then you can get the results of each callback.
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<any>} returns a new array with the results
   */
  mapAsync(
    fn: ((element: T, callback: (newElement: any) => void) => void),
  ): Promise<any[]> {
    return getPromise<any[]>(resolve => {
      this._objectInstance.map(fn, resolve);
    });
  }

  /**
   * Same as `mapAsync`, but keep the execution order
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<any>} returns a new array with the results
   */
  mapSeries(
    fn: ((element: T, callback: (newElement: any) => void) => void),
  ): Promise<any[]> {
    return getPromise<any[]>(resolve => {
      this._objectInstance.mapSeries(fn, resolve);
    });
  }

  /**
   * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
   * @param fn {Function}
   * @return {T[]} returns a new filtered array
   */
  @CordovaInstance({ sync: true })
  filter(fn: (element: T, index: number) => boolean): T[] {
    return;
  }

  /**
   * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<T[]>} returns a new filtered array
   */
  filterAsync(
    fn: (element: T, callback: (result: boolean) => void) => void,
  ): Promise<T[]> {
    return getPromise<any[]>(resolve => {
      this._objectInstance.filter(fn, resolve);
    });
  }

  /**
   * Returns a reference to the underlying Array.
   * @return {Object[]}
   */
  @CordovaInstance({ sync: true })
  getArray(): T[] {
    return;
  }

  /**
   * Returns the element at the specified index.
   * @param index {number}
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  getAt(index: number): any {}

  /**
   * Returns the number of the elements.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getLength(): number {
    return;
  }

  /**
   * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   * @param element {Object}
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  indexOf(element: T): number {
    return;
  }

  /**
   * The reverse() method reverses an array in place.
   */
  @CordovaInstance({ sync: true })
  reverse(): void {}

  /**
   * The sort() method sorts the elements of an array in place and returns the array.
   */
  @CordovaInstance({ sync: true })
  sort(): void {}

  /**
   * Inserts an element at the specified index.
   * @param index {number}
   * @param element {Object}
   * @param noNotify? {boolean} [options] Set true to prevent insert_at event.
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  insertAt(index: number, element: T, noNotify?: boolean) {}

  /**
   * Removes the last element of the array and returns that element.
   * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  pop(noNotify?: boolean): T {
    return;
  }

  /**
   * Adds one element to the end of the array and returns the new length of the array.
   * @param element {object}
   * @param noNotify? {boolean} Set true to prevent insert_at events.
   */
  @CordovaInstance({ sync: true })
  push(element: T, noNotify?: boolean): void {}

  /**
   * Removes an element from the specified index.
   * @param index {number}
   * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
   */
  @CordovaInstance({ sync: true })
  removeAt(index: number, noNotify?: boolean): T {
    return;
  }

  /**
   * Sets an element at the specified index.
   * @param index {number}
   * @param element {object}
   * @param noNotify? {boolean} [options] Set true to prevent set_at event.
   */
  @CordovaInstance({ sync: true })
  setAt(index: number, element: T, noNotify?: boolean): void {}
}
