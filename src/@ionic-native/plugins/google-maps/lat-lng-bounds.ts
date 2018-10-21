import { CordovaInstance, InstanceProperty } from '@ionic-native/core';
import { ILatLng, LatLng } from './lat-lng';
import { ILatLngBounds } from './interfaces';
import { GoogleMaps } from './google-maps';

/**
 * @hidden
 */
export class LatLngBounds implements ILatLngBounds {
  @InstanceProperty()
  northeast: ILatLng;
  @InstanceProperty()
  southwest: ILatLng;
  @InstanceProperty()
  type: string;
  private _objectInstance: any;

  constructor(points?: ILatLng[]) {
    this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
  }

  /**
   * Converts to string
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toString(): string {
    return;
  }

  /**
   * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
   * @param precision {number}
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string {
    return;
  }

  /**
   * Extends this bounds to contain the given point.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  extend(LatLng: ILatLng): void {}

  /**
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  contains(LatLng: ILatLng): boolean {
    return;
  }

  /**
   * Computes the center of this LatLngBounds
   * @return {LatLng}
   */
  @CordovaInstance({ sync: true })
  getCenter(): LatLng {
    return;
  }
}
