import { CordovaInstance } from '@ionic-native/core';
import { BaseClass } from './base-class';
import { GoogleMap } from './google-map';

/**
 * @hidden
 */
export class TileOverlay extends BaseClass {
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
   * Set whether the tiles should fade in.
   * @param fadeIn {boolean}
   */
  @CordovaInstance({ sync: true })
  setFadeIn(fadeIn: boolean): void {}

  /**
   * Get whether the tiles should fade in
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getFadeIn(): boolean {
    return;
  }

  /**
   * Set the zIndex of the tile overlay
   * @param zIndex {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {}

  /**
   * Returns the zIndex of the tile overlay
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  /**
   * Set the opacity of the tile overlay
   * @param opacity {number}
   */
  @CordovaInstance({ sync: true })
  setOpacity(opacity: number): void {}

  /**
   * Returns the opacity of the tile overlay
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getOpacity(): number {
    return;
  }

  /**
   * Set false if you want to hide
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Returns true if the tile overlay is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  /**
   * Get tile size
   */
  @CordovaInstance({ sync: true })
  getTileSize(): any {
    return;
  }

  /**
   * Remove the tile overlay
   */
  @CordovaInstance()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }
}
