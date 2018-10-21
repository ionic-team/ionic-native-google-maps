import { CordovaInstance } from '@ionic-native/core';
import { BaseClass } from './base-class';
import { GoogleMap } from './google-map';
import { ILatLng, MarkerIcon } from './interfaces';

/**
 * @hidden
 */
export class Marker extends BaseClass {
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
   * Set the marker position.
   * @param latLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  setPosition(latLng: ILatLng): void {
    return;
  }

  /**
   * Returns the marker position.
   * @return {ILatLng}
   */
  @CordovaInstance({ sync: true })
  getPosition(): ILatLng {
    return;
  }

  /**
   * Show the normal infoWindow of the marker.
   */
  @CordovaInstance({ sync: true })
  showInfoWindow(): void {}

  /**
   * Hide the normal infoWindow of the marker.
   */
  @CordovaInstance({ sync: true })
  hideInfoWindow(): void {}

  /**
   * Specify the animation either `DROP` or `BOUNCE`
   * @param animation {string}
   */
  @CordovaInstance({ sync: true })
  setAnimation(animation: string): void {}

  /**
   * Set true if you **do not want** to move the map when you click on the marker.
   * @param disableAutoPan {boolean}
   */
  @CordovaInstance({ sync: true })
  setDisableAutoPan(disableAutoPan: boolean): void {}

  /**
   * Set false if you want to hide the marker.
   * @param visible
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Returns true if the marker is visible
   */
  @CordovaInstance({ sync: true })
  isVisible(): boolean {
    return;
  }

  /**
   * Changes title of the normal infoWindow.
   * @param title {string}
   */
  @CordovaInstance({ sync: true })
  setTitle(title: string): void {}

  /**
   * Returns the title strings.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getTitle(): string {
    return;
  }

  /**
   * Changes snippet of the normal infoWindow.
   * @param snippet {string}
   */
  @CordovaInstance({ sync: true })
  setSnippet(snippet: string): void {}

  /**
   * Returns the snippet strings.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getSnippet(): string {
    return;
  }

  /**
   * Changes the marker opacity from 0.0 to 1.0.
   * @param alpha {number} Opacity
   */
  @CordovaInstance({ sync: true })
  setOpacity(alpha: number): void {}

  /**
   * Returns the marker opacity.
   * @return {number} Opacity
   */
  @CordovaInstance({ sync: true })
  getOpacity(): number {
    return;
  }

  /**
   * Remove the marker.
   */
  @CordovaInstance()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }

  /**
   * Changes the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
   * @param x {number} Distance from left of the icon image in pixels.
   * @param y {number} Distance from top of the icon image in pixels.
   */
  @CordovaInstance({ sync: true })
  setIconAnchor(x: number, y: number): void {}

  /**
   * Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
   * @param x {number} Distance from left of the icon image in pixels.
   * @param y {number} Distance from top of the icon image in pixels.
   */
  @CordovaInstance({ sync: true })
  setInfoWindowAnchor(x: number, y: number): void {}

  /**
   * Returns true if the infoWindow is shown on the marker
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  isInfoWindowShown(): boolean {
    return;
  }

  /**
   * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
   * @param y {number} z-index
   */
  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {}

  /**
   * Get z-index
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  /**
   * Set true if you allow all users to drag the marker.
   * @param draggable {boolean}
   */
  @CordovaInstance({ sync: true })
  setDraggable(draggable: boolean): void {}

  /**
   * Returns true if the marker drag is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  isDraggable(): boolean {
    return;
  }

  /**
   * Set true if you want to be flat marker.
   * @param flat {boolean}
   */
  @CordovaInstance({ sync: true })
  setFlat(flat: boolean): void {
    return;
  }

  /**
   * Changes icon url and/or size
   * @param icon
   */
  @CordovaInstance({ sync: true })
  setIcon(icon: MarkerIcon): void {
    return;
  }

  /**
   * Set the marker rotation angle.
   * @param rotation {number}
   */
  @CordovaInstance({ sync: true })
  setRotation(rotation: number): void {}

  /**
   * Returns the marker rotation angle.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getRotation(): number {
    return;
  }
}
