import { CordovaInstance } from '@ionic-native/core';
import { BaseClass } from './base-class';
import { GoogleMap } from './google-map';
import { CameraPosition, ILatLng } from './interfaces';

/**
 * @hidden
 */
export class KmlOverlay extends BaseClass {
  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super(_objectInstance);
    this._map = _map;

    Object.defineProperty(self, 'camera', {
      value: this._objectInstance.camera,
      writable: false,
    });
    Object.defineProperty(self, 'kmlData', {
      value: this._objectInstance.kmlData,
      writable: false,
    });
  }

  /**
   * Returns the viewport to contains all overlays
   */
  @CordovaInstance({ sync: true })
  getDefaultViewport(): CameraPosition<ILatLng | ILatLng[]> {
    return;
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
  getMap(): GoogleMap {
    return this._map;
  }

  /**
   * Changes visibility of the kml overlay
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Returns true if the kml overlay is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  /**
   * Changes click-ability of the KmlOverlay
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Returns true if the KmlOverlay is clickable
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean {
    return;
  }

  /**
   * Remove the KmlOverlay
   */
  @CordovaInstance()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }
}
