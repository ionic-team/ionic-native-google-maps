import { Plugin, checkAvailability } from '@ionic-native/core';
import { GoogleMaps } from './google-maps';
import { ILatLng, LatLng } from './interfaces';
import { BaseArrayClass } from './base-array-class';
/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.geometry.spherical',
  plugin: 'cordova-plugin-googlemaps',
  repo: '',
})
export class Spherical {
  /**
   * Returns the distance, in meters, between two LatLngs.
   * @param locationA {ILatLng}
   * @param locationB {ILatLng}
   * @return {number}
   */
  static computeDistanceBetween(from: ILatLng, to: ILatLng): number {
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
    return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(
      from,
      to,
    );
  }

  /**
   * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
   * @param from {ILatLng}
   * @param distance {number}
   * @param heading {number}
   * @return {LatLng}
   */
  static computeOffset(
    from: ILatLng,
    distance: number,
    heading: number,
  ): LatLng {
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
    return GoogleMaps.getPlugin().geometry.spherical.computeOffset(
      from,
      distance,
      heading,
    );
  }

  /**
   * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
   * @param to {ILatLng} The destination LatLng.
   * @param distance {number} The distance travelled, in meters.
   * @param heading {number} The heading in degrees clockwise from north.
   * @return {LatLng}
   */
  static computeOffsetOrigin(
    to: ILatLng,
    distance: number,
    heading: number,
  ): LatLng {
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
    return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(
      to,
      distance,
      heading,
    );
  }

  /**
   * Returns the length of the given path.
   * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
   * @return {number}
   */
  static computeLength(path: ILatLng[] | BaseArrayClass<ILatLng>): number {
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
    return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
  }

  /**
   * Returns the area of a closed path. The computed area uses the same units as the radius.
   * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
   * @return {number}
   */
  static computeArea(path: ILatLng[] | BaseArrayClass<ILatLng>): number {
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
    return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
  }

  /**
   * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
   * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
   * @return {number}
   */
  static computeSignedArea(path: ILatLng[] | BaseArrayClass<ILatLng>): number {
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
    return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
  }

  /**
   * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
   * @param from {ILatLng}
   * @param to {ILatLng}
   * @return {number}
   */
  static computeHeading(from: ILatLng, to: ILatLng): number {
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
    return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
  }

  /**
   * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
   * @param from {ILatLng}     The LatLng from which to start.
   * @param to {ILatLng}       The LatLng toward which to travel.
   * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
   * @return {LatLng}
   */
  static interpolate(from: ILatLng, to: ILatLng, fraction: number): LatLng {
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
    return GoogleMaps.getPlugin().geometry.spherical.interpolate(
      from,
      to,
      fraction,
    );
  }

  /**
   * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
   * @hidden
   */
  computeDistanceBetween(from: ILatLng, to: ILatLng): number {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()',
    );
    return Spherical.computeDistanceBetween(from, to);
  }

  /**
   * @deprecation This method is static. Please use Spherical.computeOffset()
   * @hidden
   */
  computeOffset(from: ILatLng, distance: number, heading: number): LatLng {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Spherical.computeOffset()',
    );
    return Spherical.computeOffset(from, distance, heading);
  }

  /**
   * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
   * @hidden
   */
  computeOffsetOrigin(to: ILatLng, distance: number, heading: number): LatLng {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()',
    );
    return Spherical.computeOffsetOrigin(to, distance, heading);
  }

  /**
   * @deprecation This method is static. Please use Spherical.computeLength()
   * @hidden
   */
  computeLength(path: ILatLng[] | BaseArrayClass<ILatLng>): number {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Spherical.computeLength()',
    );
    return Spherical.computeLength(path);
  }

  /**
   * @deprecation This method is static. Please use Spherical.computeArea()
   * @hidden
   */
  computeArea(path: ILatLng[] | BaseArrayClass<ILatLng>): number {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Spherical.computeArea()',
    );
    return Spherical.computeArea(path);
  }

  /**
   * @deprecation This method is static. Please use Spherical.computeSignedArea()
   * @hidden
   */
  computeSignedArea(path: ILatLng[] | BaseArrayClass<ILatLng>): number {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Spherical.computeSignedArea()',
    );
    return Spherical.computeSignedArea(path);
  }

  /**
   * @deprecation This method is static. Please use Spherical.computeHeading()
   * @hidden
   */
  computeHeading(from: ILatLng, to: ILatLng): number {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Spherical.computeHeading()',
    );
    return Spherical.computeHeading(from, to);
  }

  /**
   * @deprecation This method is static. Please use Spherical.interpolate()
   * @hidden
   */
  interpolate(from: ILatLng, to: ILatLng, fraction: number): LatLng {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Spherical.interpolate()',
    );
    return Spherical.interpolate(from, to, fraction);
  }
}
