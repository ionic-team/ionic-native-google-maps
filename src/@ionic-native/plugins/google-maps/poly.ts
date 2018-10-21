import { Plugin, checkAvailability } from '@ionic-native/core';
import { GoogleMaps } from './google-maps';
import { ILatLng } from './interfaces';

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.geometry.poly',
  plugin: 'cordova-plugin-googlemaps',
  repo: '',
})
export class Poly {
  /**
   * Returns true if the specified location is in the polygon path
   * @param location {ILatLng}
   * @param path {ILatLng[]}
   * @return {boolean}
   */
  static containsLocation(location: ILatLng, path: ILatLng[]): boolean {
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
    return GoogleMaps.getPlugin().geometry.poly.containsLocation(
      location,
      path,
    );
  }

  /**
   * Returns true if the specified location is on the polyline path
   * @param location {ILatLng}
   * @param path {ILatLng[]}
   * @return {boolean}
   */
  static isLocationOnEdge(location: ILatLng, path: ILatLng[]): boolean {
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
    return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(
      location,
      path,
    );
  }
}
