import { CordovaInstance, Plugin } from '@ionic-native/core';
import { GoogleMaps } from './google-maps';
import { BaseClass } from './base-class';

/**
 * @hidden
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.HtmlInfoWindow',
  repo: '',
})
export class HtmlInfoWindow extends BaseClass {
  constructor() {
    super(new (GoogleMaps.getPlugin()).HtmlInfoWindow());
  }

  /**
   * Changes the backgroundColor
   * @param color {string}
   */
  @CordovaInstance()
  setBackgroundColor(color: string): void {}

  /**
   * Set your HTML contents.
   * @param content {any} String containing text or HTML element
   * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
   */
  @CordovaInstance()
  setContent(content: string | Element, cssOptions?: any): void {}

  /**
   * Open the htmlInfoWindow
   * @param marker {Marker}
   */
  @CordovaInstance()
  open(marker: any): any {}

  /**
   * Close the htmlInfoWindow
   */
  @CordovaInstance()
  close(): void {}
}
