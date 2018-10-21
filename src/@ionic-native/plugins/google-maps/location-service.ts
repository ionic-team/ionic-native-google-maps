import { Plugin, checkAvailability, getPromise } from '@ionic-native/core';
import { GoogleMaps } from './google-maps';
import { MyLocation, MyLocationOptions } from './interfaces';

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.LocationService',
  plugin: 'cordova-plugin-googlemaps',
  repo: '',
})
export class LocationService {
  /**
   * Get the current device location without map
   * @return {Promise<MyLocation>}
   */
  static getMyLocation(options?: MyLocationOptions): Promise<MyLocation> {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === false
    ) {
      throw new Error(
        'cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.',
      );
    }
    return getPromise<MyLocation>((resolve, reject) => {
      GoogleMaps.getPlugin().LocationService.getMyLocation(
        options,
        resolve,
        reject,
      );
    });
  }
  /**
   * Return true if the application has geolocation permission
   * @return {Promise<boolean>}
   */
  static hasPermission(): Promise<boolean> {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === false
    ) {
      throw new Error(
        'cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.',
      );
    }
    return getPromise<boolean>((resolve, reject) => {
      GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
    });
  }
}
