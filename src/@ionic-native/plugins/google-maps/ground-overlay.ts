import { CordovaInstance } from '@ionic-native/core';
import { ILatLng } from './interfaces';
import { BaseClass } from './base-class';
import { GoogleMap } from './google-map';

/**
 * @hidden
 */
export class GroundOverlay extends BaseClass {
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
   * Changes the bounds of the GroundOverlay
   * @param bounds { ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setBounds(bounds: ILatLng[]): void {}

  /**
   * Changes the bearing of the ground overlay
   * @param bearing {number}
   */
  @CordovaInstance({ sync: true })
  setBearing(bearing: number): void {}

  /**
   * Returns the current bearing value
   */
  @CordovaInstance({ sync: true })
  getBearing(): number {
    return;
  }

  /**
   * Changes the image of the ground overlay
   * @param imageUrl {string} URL of image
   */
  @CordovaInstance({ sync: true })
  setImage(imageUrl: string): void {}

  /**
   * Changes the opacity of the ground overlay from 0.0 to 1.0
   * @param opacity {number}
   */
  @CordovaInstance({ sync: true })
  setOpacity(opacity: number): void {}

  /**
   * Returns the current opacity
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getOpacity(): number {
    return;
  }

  /**
   * Changes click-ability of the ground overlay
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Returns true if the ground overlay is clickable
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean {
    return;
  }

  /**
   * Changes visibility of the ground overlay
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Returns true if the ground overlay is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  /**
   * Changes the ground overlay zIndex order
   * @param index {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(index: number): void {}

  /**
   * Returns the current ground overlay zIndex
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  /**
   * Remove the ground overlay
   */
  @CordovaInstance()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }
}
