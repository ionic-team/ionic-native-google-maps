import {
  CordovaInstance,
  InstanceCheck,
  Plugin,
  checkAvailability,
  getPromise,
} from '@ionic-native/core';

import { BaseClass } from './base-class';
import {
  CameraPosition,
  CircleOptions,
  FusionTableQueryOptions,
  GoogleMapOptions,
  GroundOverlayOptions,
  KmlOverlayOptions,
  MapType,
  MarkerClusterOptions,
  MarkerOptions,
  MyLocation,
  MyLocationOptions,
  PolygonOptions,
  PolylineOptions,
  TARGET_ELEMENT_FINDING_QUERYS,
  TileOverlayOptions,
  ToDataUrlOptions,
  VisibleRegion,
} from './interfaces';
import { BaseArrayClass } from './base-array-class';
import { GoogleMaps } from './google-maps';
import { displayErrorMessage } from './utils';
import { Circle } from './circle';
import { Marker } from './marker';
import { MarkerCluster } from './marker-cluster';
import { Polygon } from './polygon';
import { Polyline } from './polyline';
import { TileOverlay } from './tile-overlay';
import { GroundOverlay } from './ground-overlay';
import { KmlOverlay } from './kml-overlay';
import { FusionTableOverlay } from './fusion-table-overlay';
import { ILatLng, LatLng } from './lat-lng';

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  plugin: 'cordova-plugin-googlemaps',
})
export class GoogleMap extends BaseClass {
  constructor(element: HTMLElement | string, options?: GoogleMapOptions) {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === true
    ) {
      // ---------------
      // Create a map
      // ---------------
      if (element instanceof HTMLElement) {
        if (!element.offsetParent) {
          throw new Error('Element must be under <body>');
        }
        if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
          super(GoogleMaps.getPlugin().Map.getMap(element, options));
        } else {
          throw new Error(
            element.tagName + ' is too small. Must be bigger than 100x100.',
          );
        }
      } else if (typeof element === 'string') {
        super(
          GoogleMaps.getPlugin().Map.getMap(
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
      } else if (element === null && options) {
        super(GoogleMaps.getPlugin().Map.getMap(null, options));
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
      console.error(errorMessage.join(''));

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
    }
  }

  /**
   * Changes the map div
   * @param domNode {HTMLElement | string} [options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.
   */
  @InstanceCheck()
  setDiv(domNode?: HTMLElement | string): void {
    if (typeof domNode === 'string') {
      getPromise<any>((resolve, reject) => {
        let i, targets: any[];
        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
          targets = Array.from(
            document.querySelectorAll(
              TARGET_ELEMENT_FINDING_QUERYS[i] + domNode,
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
            resolve(targets[0] as HTMLElement);
            return;
          }
        }
        reject('Can not find [#' + domNode + '] element');
      }).then((element: HTMLElement) => {
        this._objectInstance.setDiv(element);
      });
    } else {
      if (
        domNode instanceof HTMLElement &&
        !domNode.offsetParent &&
        domNode.offsetWidth >= 100 &&
        domNode.offsetHeight >= 100
      ) {
        this._objectInstance.setDiv(domNode);
      } else {
        throw new Error(
          domNode.tagName + ' is too small. Must be bigger than 100x100.',
        );
      }
    }
  }

  /**
   * Returns the map HTML element
   * @return {HTMLElement}
   */
  @CordovaInstance({ sync: true })
  getDiv(): HTMLElement {
    return;
  }

  /**
   * Changes the map type id
   * @param mapTypeId {string}
   */
  @CordovaInstance({ sync: true })
  setMapTypeId(mapTypeId: MapType | string): void {}

  /**
   * Moves the camera with animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  animateCamera(cameraPosition: CameraPosition<any>): Promise<any> {
    return;
  }

  /**
   * Zooming in the camera with animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  animateCameraZoomIn(): Promise<any> {
    return;
  }

  /**
   * Zooming out the camera with animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  animateCameraZoomOut(): Promise<any> {
    return;
  }

  /**
   * Moves the camera without animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  moveCamera(cameraPosition: CameraPosition<any>): Promise<any> {
    return;
  }

  /**
   * Zooming in the camera without animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  moveCameraZoomIn(): Promise<any> {
    return;
  }

  /**
   * Zooming out the camera without animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  moveCameraZoomOut(): Promise<any> {
    return;
  }

  /**
   * Get the position of the camera.
   * @return {CameraPosition}
   */
  @CordovaInstance({ sync: true })
  getCameraPosition(): CameraPosition<ILatLng> {
    return;
  }

  /**
   * Get the current camera target position
   * @return {ILatLng}
   */
  @CordovaInstance({ sync: true })
  getCameraTarget(): ILatLng {
    return;
  }

  /**
   * Get the current camera zoom level
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getCameraZoom(): number {
    return;
  }

  /**
   * Get the current camera bearing
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getCameraBearing(): number {
    return;
  }

  /**
   * Get the current camera tilt (view angle)
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getCameraTilt(): number {
    return;
  }

  /**
   * Set the center position of the camera view
   * @param latLng {ILatLng | ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setCameraTarget(latLng: ILatLng | ILatLng[]): void {}

  /**
   * Set zoom level of the camera
   * @param zoomLevel {number} Zoom level
   */
  @CordovaInstance({ sync: true })
  setCameraZoom(zoomLevel: number): void {}

  /**
   * Set the camera view angle
   * @param tiltAngle {number} Tilt angle
   */
  @CordovaInstance({ sync: true })
  setCameraTilt(tiltAngle: number): void {}

  /**
   * Set camera bearing
   * @param bearing {any}
   */
  @CordovaInstance({ sync: true })
  setCameraBearing(bearing: any): void {}

  /**
   * Changes the center of the map by the given distance in pixels
   * @param x {number}
   * @param y {number}
   */
  @CordovaInstance({ sync: true })
  panBy(x: number, y: number): void {}

  /**
   * Get the current visible region (southWest and northEast)
   * @return {VisibleRegion}
   */
  @CordovaInstance({ sync: true })
  getVisibleRegion(): VisibleRegion {
    return;
  }

  /**
   * Get the current device location
   * @return {Promise<MyLocation>}
   */
  @CordovaInstance()
  getMyLocation(options?: MyLocationOptions): Promise<MyLocation> {
    return getPromise<MyLocation>((resolve, reject) => {
      GoogleMaps.getPlugin().LocationService.getMyLocation(
        options,
        resolve,
        reject,
      );
    });
  }

  /**
   * Set false to ignore all clicks on the map
   * @param isClickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(isClickable: boolean): void {}

  /**
   * Destroy a map completely
   * @return {Promise<any>}
   */
  @CordovaInstance()
  remove(): Promise<any> {
    if (this.get('_overlays')) {
      Object.keys(this.get('_overlays')).forEach((overlayId: string) => {
        this.get('_overlays')[overlayId] = null;
        delete this.get('_overlays')[overlayId];
      });
    }
    return getPromise<any>(resolve => {
      this._objectInstance.remove(() => resolve());
    });
  }

  /**
   * Remove all overlays, such as marker
   * @return {Promise<any>}
   */
  @CordovaInstance()
  clear(): Promise<any> {
    if (this.get('_overlays')) {
      Object.keys(this.get('_overlays')).forEach((overlayId: string) => {
        this.get('_overlays')[overlayId] = null;
        delete this.get('_overlays')[overlayId];
      });
    }
    return getPromise<any>(resolve => {
      this._objectInstance.clear(() => resolve());
    });
  }

  /**
   * Convert the unit from LatLng to the pixels from the left/top of the map div
   * @return {Promise<any>}
   */
  @CordovaInstance()
  fromLatLngToPoint(latLng: ILatLng): Promise<any[]> {
    return;
  }

  /**
   * Convert the unit from the pixels from the left/top to the LatLng
   * @return {Promise<LatLng>}
   */
  @CordovaInstance()
  fromPointToLatLng(point: number[]): Promise<LatLng> {
    return;
  }

  /**
   * Set true if you want to show the MyLocation control (blue dot)
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setMyLocationEnabled(enabled: boolean): void {}

  /**
   * Set true if you want to show the MyLocation button
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setMyLocationButtonEnabled(enabled: boolean): void {}

  /**
   * Get the currently focused building
   * @return {Promise<any>}
   */
  @CordovaInstance()
  getFocusedBuilding(): Promise<any> {
    return;
  }

  /**
   * Set true if you want to show the indoor map
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setIndoorEnabled(enabled: boolean): void {}

  /**
   * Set true if you want to show the traffic layer
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setTrafficEnabled(enabled: boolean): void {}

  /**
   * Set true if you want to show the compass button
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setCompassEnabled(enabled: boolean): void {}

  /**
   * Sets the preference for whether all gestures should be enabled or disabled
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setAllGesturesEnabled(enabled: boolean): void {}

  /**
   * Set visibility of the map
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Adjust the map padding (same as CSS padding rule)
   * @param top {number}
   * @param right {number}
   * @param left {number}
   * @param bottom {number}
   */
  @CordovaInstance({ sync: true })
  setPadding(
    top: number,
    right?: number,
    bottom?: number,
    left?: number,
  ): void {}

  /**
   * Set options
   * @param options
   */
  @CordovaInstance({ sync: true })
  setOptions(options: GoogleMapOptions): void {}

  /**
   * Adds a marker
   * @param options {MarkerOptions} options
   * @return {Promise<Marker>}
   */
  @InstanceCheck()
  addMarker(options: MarkerOptions): Promise<Marker | any> {
    return getPromise<Marker>((resolve, reject) => {
      this._objectInstance.addMarker(options, (marker: any) => {
        if (marker) {
          const overlayId: string = marker.getId();
          const overlay: Marker = new Marker(this, marker);
          this.get('_overlays')[overlayId] = overlay;
          marker.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a marker in synchronous
   * @param options {MarkerOptions} options
   * @Returns {Marker}
   */
  @InstanceCheck()
  addMarkerSync(options: MarkerOptions): Marker {
    const marker: any = this._objectInstance.addMarker(options);
    const overlayId: string = marker.getId();
    const overlay: Marker = new Marker(this, marker);
    this.get('_overlays')[overlayId] = overlay;
    marker.one(overlayId + '_remove', () => {
      if (this.get('_overlays')) {
        this.get('_overlays')[overlayId] = null;
        overlay.destroy();
      }
    });
    return overlay;
  }

  /**
   * Adds a marker cluster
   * @param options {MarkerClusterOptions} options
   * @return {Promise<MarkerCluster>}
   */
  @InstanceCheck()
  addMarkerCluster(
    options: MarkerClusterOptions,
  ): Promise<MarkerCluster | any> {
    return getPromise<MarkerCluster>((resolve, reject) => {
      this._objectInstance.addMarkerCluster(options, (markerCluster: any) => {
        if (markerCluster) {
          const overlayId = markerCluster.getId();
          const overlay = new MarkerCluster(this, markerCluster);
          this.get('_overlays')[overlayId] = overlay;
          markerCluster.one('remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          markerCluster.set('_overlays', new BaseArrayClass());
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a marker cluster in synchronous
   * @param options {MarkerClusterOptions} options
   * @Returns {MarkerCluster}
   */
  @InstanceCheck()
  addMarkerClusterSync(options: MarkerClusterOptions): MarkerCluster {
    const markerCluster: any = this._objectInstance.addMarkerCluster(options);
    const overlayId: string = markerCluster.getId();
    const overlay: MarkerCluster = new MarkerCluster(this, markerCluster);
    this.get('_overlays')[overlayId] = overlay;
    markerCluster.one(overlayId + '_remove', () => {
      if (this.get('_overlays')) {
        this.get('_overlays')[overlayId] = null;
        overlay.destroy();
      }
    });
    markerCluster.set('_overlays', new BaseArrayClass());
    return overlay;
  }

  /**
   * Adds a circle
   * @param options {CircleOptions} options
   * @return {Promise<Circle>}
   */
  @InstanceCheck()
  addCircle(options: CircleOptions): Promise<Circle | any> {
    return getPromise<Circle>((resolve, reject) => {
      this._objectInstance.addCircle(options, (circle: any) => {
        if (circle) {
          const overlayId: string = circle.getId();
          const overlay = new Circle(this, circle);
          this.get('_overlays')[overlayId] = overlay;
          circle.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a circle in synchronous
   * @param options {CircleOptions} options
   * @return {Circle}
   */
  @InstanceCheck()
  addCircleSync(options: CircleOptions): Circle {
    const circle: any = this._objectInstance.addCircle(options);
    const overlayId: string = circle.getId();
    const overlay = new Circle(this, circle);
    this.get('_overlays')[overlayId] = overlay;
    circle.one(overlayId + '_remove', () => {
      if (this.get('_overlays')) {
        this.get('_overlays')[overlayId] = null;
        overlay.destroy();
      }
    });
    return overlay;
  }
  /**
   * Adds a polygon
   * @param options {PolygonOptions} options
   * @return {Promise<Polygon>}
   */
  @InstanceCheck()
  addPolygon(options: PolygonOptions): Promise<Polygon | any> {
    return getPromise<Polygon>((resolve, reject) => {
      this._objectInstance.addPolygon(options, (polygon: any) => {
        if (polygon) {
          const overlayId: string = polygon.getId();
          const overlay = new Polygon(this, polygon);
          this.get('_overlays')[overlayId] = overlay;
          polygon.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a polygon in synchronous
   * @param options {PolygonOptions} options
   * @return {Polygon}
   */
  @InstanceCheck()
  addPolygonSync(options: PolygonOptions): Polygon {
    const polygon: any = this._objectInstance.addPolygon(options);
    const overlayId: string = polygon.getId();
    const overlay = new Polygon(this, polygon);
    this.get('_overlays')[overlayId] = overlay;
    polygon.one(overlayId + '_remove', () => {
      if (this.get('_overlays')) {
        this.get('_overlays')[overlayId] = null;
        overlay.destroy();
      }
    });
    return overlay;
  }

  /**
   * Adds a polyline
   * @param options {PolylineOptions} options
   * @return {Promise<Polyline>}
   */
  @InstanceCheck()
  addPolyline(options: PolylineOptions): Promise<Polyline | any> {
    return getPromise<Polyline>((resolve, reject) => {
      this._objectInstance.addPolyline(options, (polyline: any) => {
        if (polyline) {
          const overlayId: string = polyline.getId();
          const overlay = new Polyline(this, polyline);
          this.get('_overlays')[overlayId] = overlay;
          polyline.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a polyline in synchronous
   * @param options {PolylineOptions} options
   * @return {Polyline}
   */
  @InstanceCheck()
  addPolylineSync(options: PolylineOptions): Polyline {
    const polyline: any = this._objectInstance.addPolyline(options);
    const overlayId: string = polyline.getId();
    const overlay = new Polyline(this, polyline);
    this.get('_overlays')[overlayId] = overlay;
    polyline.one(overlayId + '_remove', () => {
      if (this.get('_overlays')) {
        this.get('_overlays')[overlayId] = null;
        overlay.destroy();
      }
    });
    return overlay;
  }

  /**
   * Adds a tile overlay
   * @param options {TileOverlayOptions} options
   * @return {Promise<TileOverlay>}
   */
  @InstanceCheck()
  addTileOverlay(options: TileOverlayOptions): Promise<TileOverlay | any> {
    return getPromise<TileOverlay>((resolve, reject) => {
      this._objectInstance.addTileOverlay(options, (tileOverlay: any) => {
        if (tileOverlay) {
          const overlayId: string = tileOverlay.getId();
          const overlay = new TileOverlay(this, tileOverlay);
          this.get('_overlays')[overlayId] = overlay;
          tileOverlay.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a tile overlay in synchronous
   * @param options {TileOverlayOptions} options
   * @return {TileOverlay}
   */
  @InstanceCheck()
  addTileOverlaySync(options: TileOverlayOptions): TileOverlay {
    const tileOverlay: any = this._objectInstance.addTileOverlay(options);
    const overlayId: string = tileOverlay.getId();
    const overlay = new TileOverlay(this, tileOverlay);
    this.get('_overlays')[overlayId] = overlay;
    tileOverlay.one(overlayId + '_remove', () => {
      if (this.get('_overlays')) {
        this.get('_overlays')[overlayId] = null;
        overlay.destroy();
      }
    });
    return overlay;
  }

  /**
   * Adds a ground overlay
   * @param options {GroundOverlayOptions} options
   * @return {Promise<GroundOverlay>}
   */
  @InstanceCheck()
  addGroundOverlay(
    options: GroundOverlayOptions,
  ): Promise<GroundOverlay | any> {
    return getPromise<GroundOverlay>((resolve, reject) => {
      this._objectInstance.addGroundOverlay(options, (groundOverlay: any) => {
        if (groundOverlay) {
          const overlayId: string = groundOverlay.getId();
          const overlay = new GroundOverlay(this, groundOverlay);
          this.get('_overlays')[overlayId] = overlay;
          groundOverlay.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a ground overlay in synchronous
   * @param options {GroundOverlayOptions} options
   * @return {GroundOverlay}
   */
  @InstanceCheck()
  addGroundOverlaySync(options: GroundOverlayOptions): GroundOverlay {
    const groundOverlay: any = this._objectInstance.addGroundOverlay(options);
    const overlayId: string = groundOverlay.getId();
    const overlay = new GroundOverlay(this, groundOverlay);
    this.get('_overlays')[overlayId] = overlay;
    groundOverlay.one(overlayId + '_remove', () => {
      if (this.get('_overlays')) {
        this.get('_overlays')[overlayId] = null;
        overlay.destroy();
      }
    });
    return overlay;
  }

  /**
   * Adds a kml overlay
   * @param options {KmlOverlayOptions} options
   * @return {Promise<KmlOverlay>}
   */
  @InstanceCheck()
  addKmlOverlay(options: KmlOverlayOptions): Promise<KmlOverlay> {
    return getPromise<KmlOverlay>((resolve, reject) => {
      this._objectInstance.addKmlOverlay(options, (kmlOverlay: any) => {
        if (kmlOverlay) {
          const overlayId: string = kmlOverlay.getId();
          const overlay = new KmlOverlay(this, kmlOverlay);
          this.get('_overlays')[overlayId] = overlay;
          kmlOverlay.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a fusionTable overlay
   * @param options {FusionTableOverlayOptions} options
   * @return {Promise<FusionTableOverlay>}
   */
  @InstanceCheck()
  addFusionTableOverlay(
    options: FusionTableQueryOptions,
  ): Promise<FusionTableOverlay> {
    return getPromise<FusionTableOverlay>((resolve, reject) => {
      this._objectInstance.addFusionTableOverlay(
        options,
        (fusionTableOverlay: any) => {
          if (fusionTableOverlay) {
            const overlayId: string = fusionTableOverlay.getId();
            const overlay = new FusionTableOverlay(this, fusionTableOverlay);
            this.get('_overlays')[overlayId] = overlay;
            fusionTableOverlay.one(overlayId + '_remove', () => {
              if (this.get('_overlays')) {
                this.get('_overlays')[overlayId] = null;
                overlay.destroy();
              }
            });
            resolve(overlay);
          } else {
            reject();
          }
        },
      );
    });
  }

  /**
   * Returns the base64 encoded screen capture of the map.
   * @param options {ToDataUrlOptions} [options] options
   * @return {Promise<string>}
   */
  @CordovaInstance()
  toDataURL(options?: ToDataUrlOptions): Promise<string> {
    return;
  }
}
