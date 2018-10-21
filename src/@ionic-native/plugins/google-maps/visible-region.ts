import { CordovaInstance, InstanceProperty } from '@ionic-native/core';
import { ILatLngBounds, LatLngBounds } from './interfaces';
import { ILatLng } from './lat-lng';
import { GoogleMaps } from './google-maps';

export class VisibleRegion implements ILatLngBounds {
  private _objectInstance: any;

  /**
   * The northeast of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
   * Since the map view is able to rotate, the farRight is not the same as the northeast.
   */
  @InstanceProperty()
  northeast: ILatLng;

  /**
   * The southwest of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
   * Since the map view is able to rotate, the nearLeft is not the same as the southwest.
   */
  @InstanceProperty()
  southwest: ILatLng;

  /**
   * The farLeft indicates the lat/lng of the top-left of the map view.
   */
  @InstanceProperty()
  farLeft: ILatLng;

  /**
   * The farRight indicates the lat/lng of the top-right of the map view.
   */
  @InstanceProperty()
  farRight: ILatLng;

  /**
   * The nearLeft indicates the lat/lng of the bottom-left of the map view.
   */
  @InstanceProperty()
  nearLeft: ILatLng;

  /**
   * The nearRight indicates the lat/lng of the bottom-right of the map view.
   */
  @InstanceProperty()
  nearRight: ILatLng;

  /**
   * constant value : `VisibleRegion`
   */
  @InstanceProperty()
  type: string;

  constructor(
    southwest: LatLngBounds,
    northeast: LatLngBounds,
    farLeft: ILatLng,
    farRight: ILatLng,
    nearLeft: ILatLng,
    nearRight: ILatLng,
  ) {
    this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(
      southwest,
      northeast,
      farLeft,
      farRight,
      nearLeft,
      nearRight,
    );
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
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  contains(LatLng: ILatLng): boolean {
    return;
  }
}
