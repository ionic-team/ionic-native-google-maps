import { CordovaInstance } from '@ionic-native/core';
import { BaseClass } from './base-class';
import { GoogleMap } from './google-map';
import { ILatLng } from './interfaces';
import { BaseArrayClass } from './base-array-class';

/**
 * @hidden
 */
export class Polygon extends BaseClass {
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
   * Changes the polygon points.
   * @param points {ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setPoints(points: ILatLng[]): void {}

  /**
   * Returns an instance of the BaseArrayClass.
   * You can modify the points.
   * @return {BaseArrayClass<ILatLng>}
   */
  getPoints(): BaseArrayClass<ILatLng> {
    return new BaseArrayClass<ILatLng>(this._objectInstance.getPoints());
  }

  /**
   * Changes the polygon holes.
   * @param holes {ILatLng[][]}
   */
  @CordovaInstance({ sync: true })
  setHoles(holes: ILatLng[][]): void {}

  /**
   * Returns an instance of the BaseArrayClass.
   * You can modify the holes.
   * @return {BaseArrayClass<ILatLng[]>}
   */
  getHoles(): BaseArrayClass<ILatLng[]> {
    const holes: ILatLng[][] = this._objectInstance.getPoints();
    const results: BaseArrayClass<ILatLng[]> = new BaseArrayClass<ILatLng[]>();
    holes.forEach((hole: ILatLng[]) => {
      results.push(hole);
    });
    return results;
  }

  /**
   * Changes the filling color (inner color)
   * @param fillColor {string}
   */
  @CordovaInstance({ sync: true })
  setFillColor(fillColor: string): void {}

  /**
   * Returns the current polygon filling color (inner color).
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getFillColor(): string {
    return;
  }

  /**
   * Changes the stroke color (outer color)
   * @param strokeColor {string}
   */
  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {}

  /**
   * Returns the current polygon stroke color (outer color)
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getStrokeColor(): string {
    return;
  }

  /**
   * Changes click-ability of the polygon
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Returns true if the polygon is clickable
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean {
    return;
  }

  /**
   * Changes visibility of the polygon
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Returns true if the polygon is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  /**
   * Changes the polygon zIndex order.
   * @param zIndex {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {}

  /**
   * Returns the current polygon zIndex
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  /**
   * Remove the polygon.
   */
  @CordovaInstance()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }

  /**
   * Changes the polygon stroke width
   */
  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {}

  /**
   * Returns the polygon stroke width
   */
  @CordovaInstance({ sync: true })
  getStrokeWidth(): number {
    return;
  }

  /**
   * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
   * @param geodesic {boolean}
   */
  @CordovaInstance({ sync: true })
  setGeodesic(geodesic: boolean): void {}

  /**
   * Returns true if the polygon is geodesic.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getGeodesic(): boolean {
    return;
  }
}
