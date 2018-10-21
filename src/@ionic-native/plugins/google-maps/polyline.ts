import { CordovaInstance } from '@ionic-native/core';
import { BaseClass } from './base-class';
import { GoogleMap } from './google-map';
import { ILatLng } from './interfaces';
import { BaseArrayClass } from './base-array-class';

/**
 * @hidden
 */
export class Polyline extends BaseClass {
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
   * Returns the map instance.
   * @return {GoogleMap}
   */
  getMap(): any {
    return this._map;
  }

  /**
   * Changes the polyline points.
   * @param points {ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setPoints(points: ILatLng[]): void {}

  /**
   * Returns an instance of the BaseArrayClass
   * You can modify the points.
   * @return {BaseArrayClass<ILatLng>}
   */
  getPoints(): BaseArrayClass<ILatLng> {
    return new BaseArrayClass<ILatLng>(this._objectInstance.getPoints());
  }

  /**
   * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
   * @param geoDesic {boolean}
   */
  @CordovaInstance({ sync: true })
  setGeoDesic(geoDesic: boolean): void {}

  /**
   * Returns true if the polyline is geodesic
   */
  @CordovaInstance({ sync: true })
  getGeodesic(): boolean {
    return;
  }

  /**
   * Changes visibility of the polyline
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Returns true if the polyline is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  /**
   * Changes click-ability of the polyline
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Returns true if the polyline is clickable
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean {
    return;
  }

  /**
   * Changes the polyline color
   * @param strokeColor {string}
   */
  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {}

  /**
   * Returns the current polyline color
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getStrokeColor(): string {
    return;
  }

  /**
   * Changes the polyline stroke width
   * @param strokeWidth {number}
   */
  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {}

  /**
   * Returns the current stroke width (unit: pixel).
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getStrokeWidth(): number {
    return;
  }

  /**
   * Changes the polyline zIndex order.
   * @param index {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(index: number): void {}

  /**
   * Returns the current polyline zIndex
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  /**
   * Remove the polyline
   */
  @CordovaInstance()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }
}
