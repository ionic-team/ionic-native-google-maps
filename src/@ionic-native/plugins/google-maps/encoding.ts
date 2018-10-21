import { Plugin, checkAvailability } from '@ionic-native/core';
import { GoogleMaps } from './google-maps';
import { BaseArrayClass } from './base-array-class';
import { ILatLng } from './lat-lng';
/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.geometry.encoding',
  plugin: 'cordova-plugin-googlemaps',
  repo: '',
})
export class Encoding {
  /**
   * Decodes an encoded path string into a sequence of LatLngs.
   * @param encoded {string} an encoded path string
   * @param precision? {number} default: 5
   * @return {LatLng}
   */
  static decodePath(encoded: string, precision?: number): ILatLng[] {
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
    return GoogleMaps.getPlugin().Encoding.decodePath(encoded, precision);
  }

  /**
   * Encodes a sequence of LatLngs into an encoded path string.
   * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
   * @return {string}
   */
  static encodePath(path: ILatLng[] | BaseArrayClass<ILatLng>): string {
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
    return GoogleMaps.getPlugin().Encoding.encodePath(path);
  }

  /**
   * @deprecation This method is static. Please use Encoding.decodePath()
   * @hidden
   */
  decodePath(encoded: string, precision?: number): ILatLng[] {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Encoding.decodePath()',
    );
    return Encoding.decodePath(encoded, precision);
  }

  /**
   * @deprecation This method is static. Please use Encoding.encodePath()
   * @hidden
   */
  encodePath(path: ILatLng[] | BaseArrayClass<ILatLng>): string {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Encoding.encodePath()',
    );
    return Encoding.encodePath(path);
  }
}
