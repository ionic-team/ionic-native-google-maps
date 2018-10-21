import {
  CordovaInstance,
  Plugin,
  checkAvailability,
  getPromise,
} from '@ionic-native/core';
import { GoogleMaps } from './google-maps';
import { BaseClass } from './base-class';
import {
  ILatLng,
  StreetViewCameraPano,
  StreetViewLocation,
  StreetViewNavigationLink,
  StreetViewOptions,
  StreetViewSetPositionOption,
  TARGET_ELEMENT_FINDING_QUERYS,
} from './interfaces';
import { displayErrorMessage } from './utils';

/**
 * @hidden
 */
@Plugin({
  pluginName: 'StreetViewPanorama',
  plugin: 'cordova-plugin-googlemaps',
})
export class StreetViewPanorama extends BaseClass {
  constructor(element: string | HTMLElement, options?: StreetViewOptions) {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === true
    ) {
      // -------------------
      // Create a panorama
      // -------------------
      if (element instanceof HTMLElement) {
        if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
          super(
            GoogleMaps.getPlugin().StreetView.getPanorama(element, options),
          );
        } else {
          throw new Error(
            element.tagName + ' is too small. Must be bigger than 100x100.',
          );
        }
      } else if (typeof element === 'string') {
        super(
          GoogleMaps.getPlugin().StreetView.getPanorama(
            getPromise<any[]>((resolve, reject) => {
              let count: number;
              let i: number;
              count = 0;
              const timer: any = setInterval(() => {
                let targets: any[];
                for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                  targets = Array.from(
                    document.querySelectorAll(
                      TARGET_ELEMENT_FINDING_QUERYS[i] + element,
                    ),
                  );
                  if (targets.length > 0) {
                    targets = targets.filter(target => {
                      return !target.hasAttribute('__pluginmapid');
                    });
                  }
                  if (
                    targets.length === 1 &&
                    targets[0] &&
                    targets[0].offsetWidth >= 100 &&
                    targets[0].offsetHeight >= 100
                  ) {
                    clearInterval(timer);
                    resolve([targets[0], options]);
                    return;
                  }
                }
                if (count++ < 20) {
                  return;
                }
                clearInterval(timer);
                this._objectInstance.remove();
                if (
                  (targets.length > 0 &&
                    targets[0] &&
                    targets[0].offsetWidth < 100) ||
                  targets[0].offsetHeight < 100
                ) {
                  reject(
                    new Error(
                      targets[0].tagName +
                        '[#' +
                        element +
                        '] is too small. Must be bigger than 100x100.',
                    ),
                  );
                } else {
                  reject(
                    new Error('Can not find the element [#' + element + ']'),
                  );
                }
              }, 100);
            }),
            options,
          ),
        );
      }
    } else {
      const errorMessage: string[] = ['[GoogleMaps]'];
      if (!window.cordova) {
        errorMessage.push(
          'You need to execute "$> ionic cordova run browser".',
        );
        errorMessage.push('"$> ionic serve" is not supported.');
      } else {
        errorMessage.push(
          'cordova-plugin-googlemaps is not installed or not ready yet.',
        );
      }

      if (element instanceof HTMLElement) {
        displayErrorMessage(element, errorMessage.join('<br />'));
      } else if (typeof element === 'string') {
        let targets: any[] = Array.from(
          document.querySelectorAll('#' + element),
        );
        if (targets.length > 0) {
          targets = targets.filter(target => {
            return !target.hasAttribute('__pluginmapid');
          });
        }
        if (targets.length === 1 && targets[0]) {
          displayErrorMessage(targets[0], errorMessage.join('<br />'));
        }
      }
      throw new Error(errorMessage.join(''));
    }
  }

  /**
   * Sets the point of view for the Street View panorama.
   */
  @CordovaInstance()
  setPov(pov: StreetViewCameraPano): void {}

  /**
   * Sets the StreetViewPanorama to a given location.
   */
  @CordovaInstance()
  setPosition(cameraPosition: String | StreetViewSetPositionOption): void {}

  /**
   * Toggles the ability for users to use pan around on the panorama using gestures.
   * @param gestureEnable {boolean}
   */
  @CordovaInstance({ sync: true })
  setPanningGesturesEnabled(gestureEnable: boolean): void {}

  /**
   * Return true if the panning gesture is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getPanningGesturesEnabled(): boolean {
    return;
  }

  /**
   * Toggles the ability for users to zoom on the panorama using gestures.
   * @param gestureEnable {boolean}
   */
  @CordovaInstance({ sync: true })
  setZoomGesturesEnabled(gestureEnable: boolean): void {}

  /**
   * Return true if the zooming gesture is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getZoomGesturesEnabled(): boolean {
    return;
  }

  /**
   * Toggles the ability for users to see street names on the panorama.
   * @param gestureEnable {boolean}
   */
  @CordovaInstance({ sync: true })
  setStreetNamesEnabled(gestureEnable: boolean): void {}

  /**
   * Return true if the street names control is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getStreetNamesEnabled(): boolean {
    return;
  }

  /**
   * Toggles the ability for users to move between panoramas.
   * @param gestureEnable {boolean}
   */
  @CordovaInstance({ sync: true })
  setNavigationEnabled(gestureEnable: boolean): void {}

  /**
   * Return true if the navigation control is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getNavigationEnabled(): boolean {
    return;
  }

  /**
   * Return the navigation links (StreetViewLocation.links)
   * @return {StreetViewNavigationLink[]}
   */
  @CordovaInstance({ sync: true })
  getLinks(): StreetViewNavigationLink[] {
    return;
  }

  /**
   * Return the current location
   * @return {StreetViewLocation}
   */
  @CordovaInstance({ sync: true })
  getLocation(): StreetViewLocation {
    return;
  }

  /**
   * Return the current panorama id
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getPanoId(): string {
    return;
  }

  /**
   * Return the current position (StreetViewLocation.latLng)
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getPosition(): ILatLng {
    return;
  }

  /**
   * Destroy a panorama completely
   * @return {Promise<any>}
   */
  @CordovaInstance()
  remove(): Promise<any> {
    return getPromise<any>(resolve => {
      this._objectInstance.remove(() => resolve());
    });
  }
}
