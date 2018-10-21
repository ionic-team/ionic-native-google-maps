import {
  CordovaInstance,
  InstanceCheck,
  Plugin,
  getPromise,
} from '@ionic-native/core';
import { Observable } from 'rxjs';
import { normalizeArgumentsOfEventListener } from './utils';
import { GoogleMap } from './google-map';

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.BaseClass',
  repo: '',
})
export class BaseClass {
  protected _objectInstance: any;

  constructor(_objectInstance?: any) {
    this._objectInstance = _objectInstance;
  }

  /**
   * Adds an event listener.
   * @param eventName {string} event name you want to observe.
   * @return {Observable<any>}
   */
  @InstanceCheck({ observable: true })
  addEventListener(eventName: string): Observable<any> {
    return new Observable(observer => {
      this._objectInstance.addEventListener(eventName, (...args: any[]) => {
        const newArgs = normalizeArgumentsOfEventListener(
          this._objectInstance,
          args,
        );
        observer.next(newArgs);
      });
    });
  }

  /**
   * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
   * @param eventName {string} event name you want to observe.
   * @param throttleInterval {number} throttle interval in milliseconds
   * @return {Observable<any>}
   */
  addThrottledEventListener(
    eventName: string,
    throttleInterval: number,
  ): Observable<any> {
    return new Observable(observer => {
      this._objectInstance.addThrottledEventListener(
        eventName,
        (...args: any[]) => {
          const newArgs = normalizeArgumentsOfEventListener(
            this._objectInstance,
            args,
          );
          observer.next(newArgs);
        },
      );
    });
  }

  /**
   * Adds an event listener that works once.
   * @param eventName {string} event name you want to observe.
   * @return {Promise<any>}
   */
  @InstanceCheck()
  addEventListenerOnce(eventName: string): Promise<any> {
    return getPromise<any>(resolve => {
      this._objectInstance.one(eventName, (...args: any[]) => {
        const newArgs = normalizeArgumentsOfEventListener(
          this._objectInstance,
          args,
        );
        resolve(newArgs);
      });
    });
  }

  /**
   * @deprecated
   * Adds an event listener that works once.
   * @param eventName {string} event name you want to observe.
   * @return {Promise<any>}
   */
  @InstanceCheck()
  addListenerOnce(eventName: string): Promise<any> {
    console.warn(
      '[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".',
    );
    return this.addEventListenerOnce(eventName);
  }

  /**
   * Gets a value
   * @param key {any}
   */
  @CordovaInstance({ sync: true })
  get(key: string): any {
    return;
  }

  /**
   * Sets a value
   * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
   * @param value {any}
   * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
   */
  @CordovaInstance({ sync: true })
  set(key: string, value: any, noNotify?: boolean): void {}

  /**
   * Bind a key to another object
   * @param key {string} The property name you want to observe.
   * @param target {any} The target object you want to observe.
   * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
   * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
   */
  @CordovaInstance({ sync: true })
  bindTo(
    key: string,
    target: any,
    targetKey?: string,
    noNotify?: boolean,
  ): void {}

  /**
   * Alias of `addEventListener`
   * @param key {string} The property name you want to observe.
   * @return {Observable<any>}
   */
  @InstanceCheck({ observable: true })
  on(eventName: string): Observable<any> {
    return new Observable(observer => {
      this._objectInstance.on(eventName, (...args: any[]) => {
        const newArgs = normalizeArgumentsOfEventListener(
          this._objectInstance,
          args,
        );
        observer.next(args);
      });
    });
  }

  /**
   * Alias of `addThrottledEventListener`
   * @param key {string} The property name you want to observe.
   * @return {Observable<any>}
   */
  @InstanceCheck({ observable: true })
  onThrottled(eventName: string): Observable<any> {
    return new Observable(observer => {
      this._objectInstance.onThrottled(eventName, (...args: any[]) => {
        const newArgs = normalizeArgumentsOfEventListener(
          this._objectInstance,
          args,
        );
        observer.next(newArgs);
      });
    });
  }

  /**
   * Alias of `addEventListenerOnce`
   * @param key {string} The property name you want to observe.
   * @return {Promise<any>}
   */
  @InstanceCheck()
  one(eventName: string): Promise<any> {
    return getPromise<any>(resolve => {
      this._objectInstance.one(eventName, (...args: any[]) => {
        const newArgs = normalizeArgumentsOfEventListener(
          this._objectInstance,
          args,
        );
        resolve(newArgs);
      });
    });
  }

  /**
   * Return true if this object has event listener for event name
   * @param eventName {string} Event name
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  hasEventListener(): boolean {
    return;
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void {}

  /**
   * Dispatch event.
   * @param eventName {string} Event name
   * @param parameters {any} [options] The data you want to pass to event listerners.
   */
  @CordovaInstance({ sync: true })
  trigger(eventName: string, ...parameters: any[]): void {}

  /**
   * Executes off() and empty()
   */
  @CordovaInstance({ sync: true })
  destroy(): void {
    if (this._objectInstance.type === 'Map') {
      const map: GoogleMap = this._objectInstance.getMap();
      if (map) {
        delete this._objectInstance.getMap().get('_overlays')[
          this._objectInstance.getId()
        ];
      }
    }
    this._objectInstance.remove();
  }

  /**
   * Remove event listener(s)
   * The `removeEventListener()` has three usages:
   *  - removeEventListener("eventName", listenerFunction);
   *     This removes one particular event listener
   *  - removeEventListener("eventName");
   *     This removes the event listeners that added for the event name.
   *  - removeEventListener();
   *     This removes all listeners.
   *
   * @param eventName {string} [options] Event name
   * @param listener {Function} [options] Event listener
   */
  @CordovaInstance({ sync: true })
  removeEventListener(
    eventName?: string,
    listener?: (...parameters: any[]) => void,
  ): void {}

  /**
   * Alias of `removeEventListener`
   *
   * @param eventName {string} [options] Event name
   * @param listener {Function} [options] Event listener
   */
  @CordovaInstance({ sync: true })
  off(eventName?: string, listener?: (...parameters: any[]) => void): void {}
}
