import { Plugin, checkAvailability, getPromise } from '@ionic-native/core';
import { GoogleMaps } from './google-maps';
import { GeocoderRequest, GeocoderResult } from './interfaces';
import { BaseArrayClass } from './base-array-class';

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.Geocoder',
  plugin: 'cordova-plugin-googlemaps',
  repo: '',
})
export class Geocoder {
  /**
   * @deprecation This method is static. Please use Geocoder.geocode()
   * @hidden
   */
  geocode(
    request: GeocoderRequest,
  ): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult[]>> {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Geocoder.geocode()',
    );
    return Geocoder.geocode(request);
  }

  /**
   * Converts position to address and vice versa
   * @param {GeocoderRequest} request Request object with either an address or a position
   * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
   */
  static geocode(
    request: GeocoderRequest,
  ): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult[]>> {
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
    if (
      request.address instanceof Array ||
      Array.isArray(request.address) ||
      request.position instanceof Array ||
      Array.isArray(request.position)
    ) {
      // -------------------------
      // Geocoder.geocode({
      //   address: [
      //    "Kyoto, Japan",
      //    "Tokyo, Japan"
      //   ]
      // })
      // -------------------------
      return getPromise<BaseArrayClass<GeocoderResult[]>>((resolve, reject) => {
        GoogleMaps.getPlugin().Geocoder.geocode(request, (mvcArray: any) => {
          if (mvcArray) {
            resolve(new BaseArrayClass(mvcArray));
          } else {
            reject();
          }
        });
      });
    } else {
      // -------------------------
      // Geocoder.geocode({
      //   address: "Kyoto, Japan"
      // })
      // -------------------------
      return getPromise<GeocoderResult[]>((resolve, reject) => {
        GoogleMaps.getPlugin().Geocoder.geocode(
          request,
          (results: GeocoderResult[]) => {
            if (results) {
              resolve(results);
            } else {
              reject();
            }
          },
        );
      });
    }
  }
}
