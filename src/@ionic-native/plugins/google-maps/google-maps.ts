import {
  IonicNativePlugin,
  Plugin,
  checkAvailability,
} from '@ionic-native/core';
import { Injectable } from '@angular/core';

import { displayErrorMessage } from './utils';
import { GoogleMap } from './google-map';
import { GoogleMapOptions, StreetViewOptions } from './interfaces';
import { StreetViewPanorama } from './street-view-panorama';

/**
 * @name @ionic-native/google-maps
 * @description
 * Embed native Google Maps views into your app.
 * This version is aimed for ionic v4/beta.
 * You need to use [cordova-plugin-googlemaps@2.4.1](https://www.npmjs.com/package/cordova-plugin-googlemaps) with this plugin.
 *
 *
 * Prerequisites:
 *  - [Generate API keys](https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/api_key/generate_api_key.md)
 *
 * Demo:
 *  - [Browser platform](https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/)
 *
 * Documentation:
 *  - [API Reference](https://github.com/ionic-team/ionic-native-google-maps#documentation)
 *  - [Overview slide](https://docs.google.com/presentation/d/e/2PACX-1vScoho1ensbR4qCI9AIuQN55BZVvK73pAjI7sumDvW3CrxxHnrmpXWUjx2-8CpFibqU1EjLKCRhuthJ/pub?start=false&loop=false&delayms=3000)
 *
 * Usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapOptions,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 * import { Component } from "@angular/core/";
 *
 * @Component({
 *   selector: 'page-home',
 *   templateUrl: 'home.html'
 * })
 * export class HomePage {
 *   map: GoogleMap;
 *   constructor() { }
 *
 *   ionViewDidLoad() {
 *    this.loadMap();
 *   }
 *
 *  loadMap() {
 *
 *     let mapOptions: GoogleMapOptions = {
 *       camera: {
 *         target: {
 *           lat: 43.0741904,
 *           lng: -89.3809802
 *         },
 *         zoom: 18,
 *         tilt: 30
 *       }
 *     }
 *
 *     this.map = GoogleMaps.create('map_canvas', mapOptions);
 *
 *     let marker: Marker = this.map.addMarkerSync({
 *       title: 'Ionic',
 *       icon: 'blue',
 *       animation: 'DROP',
 *       position: {
 *         lat: 43.0741904,
 *         lng: -89.3809802
 *       }
 *     });
 *
 *     marker.on(GoogleMapsEvent.MARKER_CLICK)
 *       .subscribe(() => {
 *         alert('clicked');
 *       });
 *     });
 *   }
 * }
 *
 * ```
 * @classes
 * GoogleMaps
 * GoogleMap
 * StreetView
 * Circle
 * Encoding
 * Environment
 * Geocoder
 * GroundOverlay
 * HtmlInfoWindow
 * Geocoder
 * LatLng
 * LatLngBounds
 * Marker
 * MarkerCluster
 * Polygon
 * Polyline
 * Spherical
 * KmlOverlay
 * Poly
 * TileOverlay
 * BaseClass
 * BaseArrayClass
 * @interfaces
 * GoogleMapOptions
 * CameraPosition
 * CircleOptions
 * GeocoderRequest
 * GeocoderResult
 * GroundOverlayOptions
 * ILatLng
 * MarkerIcon
 * MarkerOptions
 * MarkerClusterIcon
 * MarkerClusterOptions
 * MyLocation
 * MyLocationOptions
 * PolygonOptions
 * PolylineOptions
 * TileOverlayOptions
 * KmlOverlayOptions
 * VisibleRegion
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps',
  plugin: 'cordova-plugin-googlemaps',
  repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
  document: 'https://ionicframework.com/docs/native/google-maps/',
  install:
    'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
  installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
  platforms: ['Android', 'iOS', 'Browser'],
})
@Injectable()
export class GoogleMaps extends IonicNativePlugin {
  /**
   * Creates a new GoogleMap instance
   * @param element {string | HTMLElement} Element ID or reference to attach the map to
   * @param options {GoogleMapOptions} [options] Options
   * @return {GoogleMap}
   */
  create(
    element: string | HTMLElement | GoogleMapOptions,
    options?: GoogleMapOptions,
  ): GoogleMap {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === true
    ) {
      if (element instanceof HTMLElement) {
        if (!element.offsetParent) {
          throw new Error('Element must be under <body>');
        }
        if (element.getAttribute('__pluginMapId')) {
          throw new Error(
            `${element.tagName}[__pluginMapId='${element.getAttribute(
              '__pluginMapId',
            )}'] has already map.`,
          );
        }
      } else if (typeof element === 'object') {
        options = element as GoogleMapOptions;
        element = null;
      }
      const googleMap: GoogleMap = new GoogleMap(
        element as HTMLElement | string,
        options,
      );
      googleMap.set('_overlays', {});
      return googleMap;
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
   * Creates a new StreetView instance
   * @param element {string | HTMLElement} Element ID or reference to attach the map to
   * @param options {StreetViewOptions} [options] Options
   * @return {StreetViewPanorama}
   */
  createPanorama(
    element: string | HTMLElement,
    options?: StreetViewOptions,
  ): StreetViewPanorama {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === true
    ) {
      if (element instanceof HTMLElement) {
        if (!element.offsetParent) {
          throw new Error('Element must be under <body>');
        }
        if (element.getAttribute('__pluginMapId')) {
          throw new Error(
            `${element.tagName}[__pluginMapId='${element.getAttribute(
              '__pluginMapId',
            )}'] has already map.`,
          );
        }
      }
      return new StreetViewPanorama(element, options);
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
}
