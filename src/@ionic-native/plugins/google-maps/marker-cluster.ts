import { CordovaInstance } from '@ionic-native/core';
import { BaseClass } from './base-class';
import { GoogleMap } from './google-map';
import { MarkerOptions } from './interfaces';

/**
 * @hidden
 */
export class MarkerCluster extends BaseClass {
  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super(_objectInstance);
    this._map = _map;
  }

  /**
   * Returns the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string {
    return;
  }

  /**
   * Add one marker location
   * @param marker {MarkerOptions} one location
   * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
   */
  @CordovaInstance({ sync: true })
  addMarker(marker: MarkerOptions): void {}

  /**
   * Add marker locations
   * @param markers {MarkerOptions[]} multiple location
   */
  @CordovaInstance({ sync: true })
  addMarkers(markers: MarkerOptions[]): void {}

  /**
   * Remove the marker cluster
   */
  @CordovaInstance()
  remove(): void {
    this._objectInstance.set('_overlays', undefined);
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }

  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  getMap(): any {
    return this._map;
  }
}
