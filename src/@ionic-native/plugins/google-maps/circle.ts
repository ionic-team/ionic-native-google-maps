import { CordovaInstance } from '@ionic-native/core';
import { ILatLng, LatLngBounds } from './interfaces';
import { BaseClass } from './base-class';
import { GoogleMap } from './google-map';

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
export class Circle extends BaseClass {
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
   * Changes the center position.
   * @param latLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  setCenter(latLng: ILatLng): void {}

  /**
   * Returns the current center position
   * @return {ILatLng}
   */
  @CordovaInstance({ sync: true })
  getCenter(): ILatLng {
    return;
  }

  /**
   * Returns the current circle radius.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getRadius(): number {
    return;
  }

  /**
   * Changes the circle radius.
   * @param radius {number}
   */
  @CordovaInstance({ sync: true })
  setRadius(radius: number): void {}

  /**
   * Changes the filling color (inner color).
   * @param color {string}
   */
  @CordovaInstance({ sync: true })
  setFillColor(color: string): void {}

  /**
   * Returns the current circle filling color (inner color).
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getFillColor(): string {
    return;
  }

  /**
   * Changes the stroke width.
   * @param strokeWidth {number}
   */
  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {}

  /**
   * Returns the current circle stroke width (unit: pixel).
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getStrokeWidth(): number {
    return;
  }

  /**
   * Changes the stroke color (outter color).
   * @param strokeColor {string}
   */
  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {}

  /**
   * Returns the current circle stroke color (outer color).
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getStrokeColor(): string {
    return;
  }

  /**
   * Changes click-ability of the circle.
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Returns true if the circle is clickable.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean {
    return;
  }

  /**
   * Changes the circle zIndex order.
   * @param zIndex {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {}

  /**
   * Returns the current circle zIndex.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  /**
   * Remove the circle.
   */
  @CordovaInstance()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }

  /**
   * Returns the latLngBounds (rectangle) that contains the circle.
   * @return {LatLngBounds}
   */
  @CordovaInstance({ sync: true })
  getBounds(): LatLngBounds {
    return;
  }

  /**
   * Set circle visibility
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Returns true if the circle is visible.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }
}
