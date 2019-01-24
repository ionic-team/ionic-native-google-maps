import { Observable, fromEvent } from 'rxjs';

import { checkReady } from './bootstrap';
import { CordovaOptions } from './decorators';
import { cordovaWarn, getPlugin, getPromise, pluginWarn } from './util';

checkReady();

// declare const window;
// declare var Promise;

export const ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
export const ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };

/**
 * Checks if plugin/cordova is available
 * @return {boolean | { error: string } }
 * @private
 */
export function checkAvailability(
  pluginRef: string,
  methodName?: string,
  pluginName?: string
): boolean | { error: string };
export function checkAvailability(
  pluginObj: any,
  methodName?: string,
  pluginName?: string
): boolean | { error: string };
export function checkAvailability(
  plugin: any,
  methodName?: string,
  pluginName?: string
): boolean | { error: string } {
  let pluginRef, pluginInstance, pluginPackage;

  if (typeof plugin === 'string') {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }

  pluginInstance = getPlugin(pluginRef);

  if (
    !pluginInstance ||
    (!!methodName && typeof pluginInstance[methodName] === 'undefined')
  ) {
    if (!window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }

    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }

  return true;
}

/**
 * Checks if _objectInstance exists and has the method/property
 * @private
 */
export function instanceAvailability(
  pluginObj: any,
  methodName?: string
): boolean {
  return (
    pluginObj._objectInstance &&
    (!methodName ||
      typeof pluginObj._objectInstance[methodName] !== 'undefined')
  );
}

function setIndex(
  args: any[],
  opts: any = {},
  resolve?: Function,
  reject?: Function
): any {
  // ignore resolve and reject in case sync
  if (opts.sync) {
    return args;
  }

  // If the plugin method expects myMethod(success, err, options)
  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push((err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (
    opts.callbackStyle === 'object' &&
    opts.successName &&
    opts.errorName
  ) {
    const obj: any = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (
    typeof opts.successIndex !== 'undefined' ||
    typeof opts.errorIndex !== 'undefined'
  ) {
    const setSuccessIndex = () => {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };

    const setErrorIndex = () => {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been defined and thus causing non expected behaviour.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }
  return args;
}

function callCordovaPlugin(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: any = {},
  resolve?: Function,
  reject?: Function
) {
  // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.
  args = setIndex(args, opts, resolve, reject);

  const availabilityCheck = checkAvailability(pluginObj, methodName);

  if (availabilityCheck === true) {
    const pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}

function wrapPromise(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: any = {}
) {
  let pluginResult: any, rej: Function;
  const p = getPromise((resolve: Function, reject: Function) => {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(
        pluginObj,
        methodName,
        args,
        opts,
        (...args: any[]) => resolve(args),
        (...args: any[]) => reject(args)
      );
    } else {
      pluginResult = callCordovaPlugin(
        pluginObj,
        methodName,
        args,
        opts,
        resolve,
        reject
      );
    }
    rej = reject;
  });
  // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error
  if (pluginResult && pluginResult.error) {
    p.catch(() => {});
    typeof rej === 'function' && rej(pluginResult.error);
  }
  return p;
}

function wrapOtherPromise(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: any = {}
) {
  return getPromise((resolve: Function, reject: Function) => {
    const pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({ error: 'unexpected_error' });
    }
  });
}

function wrapObservable(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: any = {}
) {
  return new Observable(observer => {
    let pluginResult;

    if (opts.destruct) {
      pluginResult = callCordovaPlugin(
        pluginObj,
        methodName,
        args,
        opts,
        (...args: any[]) => observer.next(args),
        (...args: any[]) => observer.error(args)
      );
    } else {
      pluginResult = callCordovaPlugin(
        pluginObj,
        methodName,
        args,
        opts,
        observer.next.bind(observer),
        observer.error.bind(observer)
      );
    }

    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }
    return () => {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(
              pluginObj,
              opts.clearFunction,
              args,
              opts,
              observer.next.bind(observer),
              observer.error.bind(observer)
            );
          }
          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn(
          'Unable to clear the previous observable watch for',
          pluginObj.constructor.getPluginName(),
          methodName
        );
        console.warn(e);
      }
    };
  });
}

function callInstance(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: any = {},
  resolve?: Function,
  reject?: Function
) {
  args = setIndex(args, opts, resolve, reject);

  if (instanceAvailability(pluginObj, methodName)) {
    return pluginObj._objectInstance[methodName].apply(
      pluginObj._objectInstance,
      args
    );
  }
}

/**
 * Wrap the event with an observable
 * @private
 * @param event even name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
export function wrapEventObservable(
  event: string,
  element: any = window
): Observable<any> {
  return fromEvent(element, event);
}

/**
 * Certain plugins expect the user to override methods in the plugin. For example,
 * window.cordova.plugins.backgroundMode.onactivate = function() { ... }.
 *
 * Unfortunately, this is brittle and would be better wrapped as an Observable. overrideFunction
 * does just this.
 * @private
 */
export function overrideFunction(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: any = {}
): Observable<any> {
  return new Observable(observer => {
    const availabilityCheck = checkAvailability(
      pluginObj,
      null,
      pluginObj.constructor.getPluginName()
    );

    if (availabilityCheck === true) {
      const pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
      pluginInstance[methodName] = observer.next.bind(observer);
      return () => (pluginInstance[methodName] = () => {});
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}

/**
 * @private
 */
export const wrap = (
  pluginObj: any,
  methodName: string,
  opts: CordovaOptions = {}
) => {
  return (...args: any[]) => {
    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};

/**
 * @private
 */
export function wrapInstance(
  pluginObj: any,
  methodName: string,
  opts: any = {}
) {
  return (...args: any[]) => {
    if (opts.sync) {
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new Observable(observer => {
        let pluginResult;

        if (opts.destruct) {
          pluginResult = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            (...args: any[]) => observer.next(args),
            (...args: any[]) => observer.error(args)
          );
        } else {
          pluginResult = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            observer.next.bind(observer),
            observer.error.bind(observer)
          );
        }

        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
          observer.complete();
        }

        return () => {
          try {
            if (opts.clearWithArgs) {
              return callInstance(
                pluginObj,
                opts.clearFunction,
                args,
                opts,
                observer.next.bind(observer),
                observer.error.bind(observer)
              );
            }
            return callInstance(pluginObj, opts.clearFunction, []);
          } catch (e) {
            console.warn(
              'Unable to clear the previous observable watch for',
              pluginObj.constructor.getPluginName(),
              methodName
            );
            console.warn(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise((resolve: Function, reject: Function) => {
        let result;
        if (opts.destruct) {
          result = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            (...args: any[]) => resolve(args),
            (...args: any[]) => reject(args)
          );
        } else {
          result = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            resolve,
            reject
          );
        }
        if (result && !!result.then) {
          result.then(resolve, reject);
        } else {
          reject();
        }
      });
    } else {
      let pluginResult: any, rej: Function;
      const p = getPromise((resolve: Function, reject: Function) => {
        if (opts.destruct) {
          pluginResult = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            (...args: any[]) => resolve(args),
            (...args: any[]) => reject(args)
          );
        } else {
          pluginResult = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            resolve,
            reject
          );
        }
        rej = reject;
      });
      // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error
      if (pluginResult && pluginResult.error) {
        p.catch(() => {});
        typeof rej === 'function' && rej(pluginResult.error);
      }
      return p;
    }
  };
}
