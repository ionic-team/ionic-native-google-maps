import {
  CordovaCheck,
  CordovaInstance,
  InstanceCheck,
  InstanceProperty,
  IonicNativePlugin,
  Plugin,
  getPromise,
  checkAvailability
} from '@ionic-native/core';
import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
// import 'rxjs/add/observable/fromEvent';


export type MapType =
  'MAP_TYPE_NORMAL'
  | 'MAP_TYPE_ROADMAP'
  | 'MAP_TYPE_SATELLITE'
  | 'MAP_TYPE_HYBRID'
  | 'MAP_TYPE_TERRAIN'
  | 'MAP_TYPE_NONE';

/**
 * @hidden
 */
export class LatLng implements ILatLng {

  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  equals(other: ILatLng): boolean {
    return this.lat === other.lat && this.lng === other.lng;
  }

  toString(): string {
    return this.lat + ',' + this.lng;
  }

  toUrlValue(precision?: number): string {
    precision = precision || 6;

    return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
  }
}

export interface ILatLngBounds {
  northeast: ILatLng;
  southwest: ILatLng;
}

/**
 * @hidden
 */
export class LatLngBounds implements ILatLngBounds {

  @InstanceProperty() northeast: ILatLng;
  @InstanceProperty() southwest: ILatLng;
  @InstanceProperty() type: string;
  private _objectInstance: any;

  constructor(points?: ILatLng[]) {
    this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
  }

  /**
   * Converts to string
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toString(): string {
    return;
  }

  /**
   * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
   * @param precision {number}
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string {
    return;
  }

  /**
   * Extends this bounds to contain the given point.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  extend(LatLng: ILatLng): void {
  }

  /**
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  contains(LatLng: ILatLng): boolean {
    return;
  }

  /**
   * Computes the center of this LatLngBounds
   * @return {LatLng}
   */
  @CordovaInstance({ sync: true })
  getCenter(): LatLng {
    return;
  }
}

export interface GoogleMapControlOptions {

  /**
   * Turns the compass on or off.
   */
  compass?: boolean;

  /**
   * Turns the myLocation button on or off. If turns on this button, the application displays a permission dialog to obtain the geolocation data.
   */
  myLocationButton?: boolean;

  /**
   * Turns the myLocation control(blue dot) on or off. If turns on this control, the application displays a permission dialog to obtain the geolocation data.
   */
  myLocation?: boolean;

  /**
   * Turns the indoor picker on or off.
   */
  indoorPicker?: boolean;

  /**
   * **Android**
   * Turns the map toolbar on or off.
   */
  mapToolbar?: boolean;

  /**
   * **Android**
   * Turns the zoom controller on or off.
   */
  zoom?: boolean;

  /**
   * Accept extra properties for future updates
   */
  [key: string]: any;
}

export interface GoogleMapGestureOptions {

  /**
   * Set false to disable the scroll gesture (default: true)
   */
  scroll?: boolean;

  /**
   * Set false to disable the tilt gesture (default: true)
   */
  tilt?: boolean;

  /**
   * Set false to disable the zoom gesture (default: true)
   */
  zoom?: boolean;

  /**
   * Set false to disable the rotate gesture (default: true)
   */
  rotate?: boolean;

  /**
   * Accept extra properties for future updates
   */
  [key: string]: any;
}

export interface GoogleMapZoomOptions {
  minZoom?: number;
  maxZoom?: number;
}

export interface GoogleMapPaddingOptions {
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
}

export interface GoogleMapPreferenceOptions {

  /**
   * Minimum and maximum zoom levels for zooming gestures.
   */
  zoom?: GoogleMapZoomOptions;

  /**
   * Paddings of controls.
   */
  padding?: GoogleMapPaddingOptions;

  /**
   * Turns the 3D buildings layer on or off.
   */
  building?: boolean;

  /**
   * Accept extra properties for future updates
   */
  [key: string]: any;
}

export interface GoogleMapOptions {

  /**
   * mapType [options]
   */
  mapType?: MapType | string;

  /**
   * controls [options]
   */
  controls?: GoogleMapControlOptions;

  /**
   * gestures [options]
   */
  gestures?: GoogleMapGestureOptions;

  /**
   * Map styles [options]
   * @ref https://developers.google.com/maps/documentation/javascript/style-reference
   */
  styles?: any[];

  /**
   * Initial camera position [options]
   */
  camera?: CameraPosition<any>;

  /**
   * preferences [options]
   */
  preferences?: GoogleMapPreferenceOptions;

  /**
   * Accept extra properties for future updates
   */
  [key: string]: any;
}

export interface CameraPosition<T> {
  /**
   * The center location of the camera view.
   *
   * [usage 1]
   *
   * let cameraPos: CameraPosition<ILatLng> = {
   *   target: {lat: ..., lng: ...},
   *   zoom: 10
   * }
   *
   * [usage 2] The zoom property is ignored when you specify multiple position
   *
   * let cameraPos: CameraPosition<ILatLng[]> = {
   *   target: [
   *      {lat: ..., lng: ...},
   *      {lat: ..., lng: ...},
   *      {lat: ..., lng: ...}
   *   ]
   * }
   */
  target?: T;
  /**
   * View angle
   */
  tilt?: number;
  /**
   * Zoom level
   */
  zoom?: number;
  /**
   * Map orientation
   */
  bearing?: number;
  /**
   * The duration of animation in milliseconds
   */
  duration?: number;
  /**
   * Camera padding in pixel
   */
  padding?: number;
}

export interface CircleOptions {
  /**
   * Center position of circle
   */
  center: ILatLng;

  /**
   * Radius of circle in meter
   */
  radius: number;

  /**
   * Set the stroke color
   * (rgb, rgba, #RRGGBB, "colorname", ...etc)
   */
  strokeColor?: string;

  /**
   * Set the stroke width in pixel
   */
  strokeWidth?: number;
  /**
   * Set the inside color of circle
   * (rgb, rgba, #RRGGBB, "colorname", ...etc)
   */
  fillColor?: string;

  /**
   * Set to true to receive the CIRCLE_CLICK event
   * (default: false)
   */
  clickable?: boolean;

  /**
   * Set to false to hide
   */
  visible?: boolean;

  /**
   * Z-index
   */
  zIndex?: number;

  /**
   * Accept own properties
   * You can get the property later using `get()` method.
   */
  [key: string]: any;
}

export interface GeocoderRequest {

  /**
   * The address property or position property is required.
   * You can not specify both property at the same time.
   *
   * [geocoding usage1]
   * let request: GeocoderRequest = {
   *   address: "Los Angeles, California, USA"
   * }
   *
   * [geocoding usage2]
   * let request: GeocoderRequest = {
   *   address: [
   *    "Los Angeles, California, USA",
   *    "San Francisco, California, USA",
   *   ]
   * }
   */
  address?: string | string[];

  /**
   *
   * [reverse-geocoding usage1]
   * let request: GeocoderRequest = {
   *   position: {"lat": 37.421655, "lng": -122.085637}
   * }
   *
   * [reverse-geocoding usage2]
   * let request: GeocoderRequest = {
   *   position: [
   *    {"lat": 37.421655, "lng": -122.085637},
   *    {"lat": 37.332, "lng": -122.030781}
   *   ]
   * }
   */
  position?: ILatLng | ILatLng[];
}

export interface GeocoderResult {
  adminArea?: string;
  country?: string;
  countryCode?: string;
  extra?: {
    featureName?: string;
    lines?: Array<string>;
    permises?: string;
    phone?: string;
    url?: string
  };
  locale?: string;
  locality?: string;
  position?: ILatLng;
  postalCode?: string;
  subAdminArea?: string;
  subLocality?: string;
  subThoroughfare?: string;
  thoroughfare?: string;
}

export interface GroundOverlayOptions {
  /**
   * URL of overlay
   */
  url: string;

  /**
   * Bounds, array of ILatLng
   */
  bounds: Array<ILatLng>;

  /**
   * Set to true to receive the GROUND_OVERLAY_CLICK event
   * (default: false)
   */
  clickable?: boolean;

  /**
   * Set to false to hide
   */
  visible?: boolean;

  /**
   * Opacity. From 0.0 to 1.0 .
   */
  opacity?: number;

  /**
   * Bearing
   */
  bearing?: number;

  /**
   * Z-index
   */
  zIndex?: number;

  /**
   * Accept own properties
   * You can get the property later using `get()` method.
   */
  [key: string]: any;
}

export interface ILatLng {
  lat: number;
  lng: number;
}

export interface MarkerIcon {
  url?: string;
  size?: {
    width?: number;
    height?: number;
  };
}

export interface MarkerOptions {
  /**
   * The icon image url or properties. Also you can specify HTML Color values. Alternatively you can specify the image as Base64
   */
  icon?: any;

  /**
   * The content of the infoWindow.
   */
  title?: string;

  /**
   * The snippet of the infoWindow.
   */
  snippet?: string;

  /**
   * The position of the marker.
   */
  position: ILatLng;

  /**
   *  Specify the anchor of the InfoWindow
   */
  infoWindowAnchor?: number[];

  /**
   * 	Specify the anchor of icon image
   */
  anchor?: number[];

  /**
   * Set true if you want to enable to drag the marker. (Default: false) Important! Drag starts after long pressed on the marker.
   */
  draggable?: boolean;

  /**
   *  Set true if you want to use a flat marker. (Default: false)
   */
  flat?: boolean;

  /**
   *  Set rotation angle. (Default: 0)
   */
  rotation?: number;

  /**
   * Set false if you want to hide. (Default: true)
   */
  visible?: boolean;

  /**
   * Specify the options for title. This property work for normal InfoWindow.
   */
  styles?: any;

  /**
   * Which animation to play when marker is added to a map.
   */
  animation?: string;

  /**
   * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
   */
  zIndex?: number;

  /**
   * Set to true to disable auto panning when the marker is clicked.
   */
  disableAutoPan?: boolean;

  /**
   * Accept own properties
   * You can get the property later using `get()` method.
   */
  [key: string]: any;
}

export interface MarkerLabel {
  /**
   * Set true if use bold font
   */
  bold?: boolean;

  /**
   * Set font size in pixel
   */
  fontSize?: number;

  /**
   * color strings
   */
  color?: string;

  /**
   * Set true if use italic font
   */
  italic?: boolean;

}
export interface MarkerClusterIcon {
  /**
   * Minimum number of clustering
   */
  min?: number;

  /**
   * Maximum number of clustering
   */
  max?: number;

  /**
   * anchor position of the marker
   */
  anchor?: any;

  /**
   * label option for clustered marker
   */
  label?: MarkerLabel;

  /**
   * icon url
   */
  url: string;

  /**
   * icon size
   */
  size?: {
    width?: number;
    height?: number;
  };
}

export interface MarkerClusterOptions {
  /**
   * Maximum zoom level of clustering
   * (default: 15, max: 18)
   */
  maxZoomLevel?: number;

  /**
   * Draw a rectangle that contains all locations of clustered when you tap on a cluster marker.
   * (default: true)
   */
  boundsDraw?: boolean;

  /**
   * Position list
   * [
   *   {title: "store A", position: {lat: ..., lng: ...}},
   *   {title: "store B", position: {lat: ..., lng: ...}},
   *   {title: "store C", position: {lat: ..., lng: ...}}
   * ]
   */
  markers: MarkerOptions[];

  /**
   * Conditions of clustering
   * [
   *   {icon: "assets/small.png", min: 2, max: 10},
   *   {icon: "assets/middle.png", min: 11, max: 30},
   *   {icon: "assets/large.png", min: 31}
   * ]
   */
  icons: MarkerClusterIcon[];

  /**
   * Accept own properties
   * You can get the property later using `get()` method.
   */
  [key: string]: any;
}

export interface MyLocation {
  latLng?: LatLng;
  elapsedRealtimeNanos?: any;
  time?: string;
  accuracy?: any;
  bearing?: number;
  altitude?: any;
  speed?: number;
  provider?: any;
  hashCode?: any;
}

export interface MyLocationOptions {
  /**
   * Set true if you want to try to use GPS mandatory.
   * In false, the plugin try to use GPS and network.
   * (default: false)
   */
  enableHighAccuracy?: boolean;
}

export interface PolygonOptions {
  /**
   * Pass ILatLng[] to specify the vertixes.
   * You need to contain two points at least.
   */
  points: Array<ILatLng>;

  /**
   * Set true if you want to draw the curve polygon based on the earth
   * (default: false)
   */
  geodesic?: boolean;

  /**
   * Set the stroke color
   * (rgb, rgba, #RRGGBB, "colorname", ...etc)
   */
  strokeColor?: string;

  /**
   * Set the stroke width in pixel
   */
  strokeWidth?: number;

  /**
   * Set the inside color of polygon
   * (rgb, rgba, #RRGGBB, "colorname", ...etc)
   */
  fillColor?: string;

  /**
   * Set false if you want to create invisible polygon
   * (Invisible polygon is not clickable, default true)
   */
  visible?: boolean;

  /**
   * Hierarchy z-index
   */
  zIndex?: number;

  /**
   * Pass ILatLng[][] to create holes in polygon
   */
  holes?: Array<Array<ILatLng>>;

  /**
   * Set true if you want to receive the POLYGON_CLICK event
   * (default: false)
   */
  clickable?: boolean;

  /**
   * Accept own properties
   * You can get the property later using `get()` method.
   */
  [key: string]: any;
}

export interface PolylineOptions {
  /**
   * Pass ILatLng[] to specify the vertixes.
   * You need to contain two points at least.
   */
  points: Array<ILatLng>;

  /**
   * Set false if you want to create invisible polyline
   * (Invisible polyline is not clickable, default true)
   */
  visible?: boolean;

  /**
   * Set true if you want to draw the curve polyline based on the earth
   * (default: false)
   */
  geodesic?: boolean;

  /**
   * Set the stroke color
   * (rgb, rgba, #RRGGBB, "colorname", ...etc)
   */
  color?: string;

  /**
   * Set the stroke width in pixel
   */
  width?: number;

  /**
   * Hierarchy z-index
   */
  zIndex?: number;

  /**
   * Set true if you want to receive the POLYLINE_CLICK event
   * (default: false)
   */
  clickable?: boolean;

  /**
   * Accept own properties
   * You can get the property later using `get()` method.
   */
  [key: string]: any;
}

export interface TileOverlayOptions {
  /**
   * This callback must Returns string of image URL.
   * If no tile, you need to Returns null.
   */
  getTile: (x: number, y: number, zoom: number) => string;

  /**
   * Set false if you want to create invisible tilelayer
   * (default true)
   */
  visible?: boolean;

  /**
   * Hierarchy z-index of tilelayer
   */
  zIndex?: number;

  /**
   * Default: 512px
   */
  tileSize?: number;

  /**
   * Default: 1.0
   */
  opacity?: number;

  /**
   * Set true if you want to display the tile information over the tile images.
   */
  debug?: boolean;

  /**
   * Accept own properties
   * You can get the property later using `get()` method.
   */
  [key: string]: any;
}

export interface ToDataUrlOptions {
  /**
   * True if you want get high quality map snapshot
   */
  uncompress?: boolean;
}


/**
 * Options for map.addKmlOverlay() method
 */
export interface KmlOverlayOptions {
  /*
   * The url or file path of KML file. KMZ format is not supported.
   */
  url: string;

  /*
   * Do not fire the KML_CLICK event if false. Default is true.
   */
  clickable?: boolean;

  /*
   * Do not display the default infoWindow if true. Default is false.
   */
  suppressInfoWindows?: boolean;

  /*
   * icon option
   */
  icon?: string | MarkerIcon;

  /**
   * Accept own properties for future update
   */
  [key: string]: any;
}


/**
 * Options for Environment.setEnv()
 */
export interface EnvOptions {
  /*
   * API key for Google Maps JavaScript API v3 for `https:` (on server)
   */
  API_KEY_FOR_BROWSER_RELEASE?: string;

  /*
   * API key for Google Maps JavaScript API v3 for `http:` (local development)
   */
  API_KEY_FOR_BROWSER_DEBUG?: string;

  /**
   * Accept own properties for future update
   */
  [key: string]: any;
}

/**
 * @hidden
 */
export class VisibleRegion implements ILatLngBounds {
  private _objectInstance: any;

  /**
   * The northeast of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
   * Since the map view is able to rotate, the farRight is not the same as the northeast.
   */
  @InstanceProperty() northeast: ILatLng;

  /**
   * The southwest of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
   * Since the map view is able to rotate, the nearLeft is not the same as the southwest.
   */
  @InstanceProperty() southwest: ILatLng;

  /**
   * The farLeft indicates the lat/lng of the top-left of the map view.
   */
  @InstanceProperty() farLeft: ILatLng;

  /**
   * The farRight indicates the lat/lng of the top-right of the map view.
   */
  @InstanceProperty() farRight: ILatLng;

  /**
   * The nearLeft indicates the lat/lng of the bottom-left of the map view.
   */
  @InstanceProperty() nearLeft: ILatLng;

  /**
   * The nearRight indicates the lat/lng of the bottom-right of the map view.
   */
  @InstanceProperty() nearRight: ILatLng;

  /**
   * constant value : `VisibleRegion`
   */
  @InstanceProperty() type: string;

  constructor(southwest: LatLngBounds, northeast: LatLngBounds, farLeft: ILatLng, farRight: ILatLng, nearLeft: ILatLng, nearRight: ILatLng) {
    this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
  }

  /**
   * Converts to string
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toString(): string {
    return;
  }

  /**
   * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
   * @param precision {number}
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string {
    return;
  }


  /**
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  contains(LatLng: ILatLng): boolean {
    return;
  }

}

/**
 * @hidden
 */
export const StreetViewSource = {
  DEFAULT: 'DEFAULT',
  OUTDOOR: 'OUTDOOR'
};

export interface SetPovOption {
  bearing: number;
  radius?: number;
  zoom?: number;
  duration: number;
}
export interface StreetViewSetPositionOption {
  target: ILatLng;
  source?: string;
  radius?: number;
}
export interface StreetViewCameraPano {
  target: string;
  bearing?: number;
  tilt?: number;
  zoom?: number;
}
export interface StreetViewCameraPosition {
  target: ILatLng;
  source?: string;
  radius?: number;
  bearing?: number;
  tilt?: number;
  zoom?: number;
}
export interface StreetViewOptions {

  camera?: StreetViewCameraPano | StreetViewCameraPosition;

  /**
   * controls [options]
   */
  controls?: {
    streetNames?: boolean;
    navigation?: boolean;
  };

  /**
   * gestures [options]
   */
  gestures?: {
    padding?: boolean;
    zooming?: boolean;
  };

  /**
   * Accept extra properties for future updates
   */
  [key: string]: any;
}


export interface StreetViewNavigationLink {

  /**
   * panorama Id
   */
  panoId: string;

  /**
   * bearing (heading)
   */
  bearing: number;

}

export interface StreetViewLocation {

  latLng: ILatLng;

  links: StreetViewNavigationLink[];

}

/**
 * @hidden
 * You can listen to these events where appropriate
 */
export const GoogleMapsEvent = {
  MAP_READY: 'map_ready',
  MAP_CLICK: 'map_click',
  MAP_LONG_CLICK: 'map_long_click',
  POI_CLICK: 'poi_click',
  MY_LOCATION_CLICK: 'my_location_click',
  MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
  INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
  INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
  CAMERA_MOVE_START: 'camera_move_start',
  CAMERA_MOVE: 'camera_move',
  CAMERA_MOVE_END: 'camera_move_end',
  OVERLAY_CLICK: 'overlay_click',
  POLYGON_CLICK: 'polygon_click',
  POLYLINE_CLICK: 'polyline_click',
  CIRCLE_CLICK: 'circle_click',
  GROUND_OVERLAY_CLICK: 'groundoverlay_click',
  INFO_CLICK: 'info_click',
  INFO_LONG_CLICK: 'info_long_click',
  INFO_CLOSE: 'info_close',
  INFO_OPEN: 'info_open',
  MARKER_CLICK: 'marker_click',
  MARKER_DRAG: 'marker_drag',
  MARKER_DRAG_START: 'marker_drag_start',
  MARKER_DRAG_END: 'marker_drag_end',
  MAP_DRAG: 'map_drag',
  MAP_DRAG_START: 'map_drag_start',
  MAP_DRAG_END: 'map_drag_end',
  KML_CLICK: 'kml_click',
  PANORAMA_READY: 'panorama_ready',
  PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
  PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
  PANORAMA_CLICK: 'panorama_click'
};

/**
 * @hidden
 */
export const GoogleMapsAnimation = {
  BOUNCE: 'BOUNCE',
  DROP: 'DROP'
};

/**
 * @hidden
 */
export const GoogleMapsMapTypeId = {
  NORMAL: 'MAP_TYPE_NORMAL',
  ROADMAP: 'MAP_TYPE_NORMAL',
  SATELLITE: 'MAP_TYPE_SATELLITE',
  HYBRID: 'MAP_TYPE_HYBRID',
  TERRAIN: 'MAP_TYPE_TERRAIN',
  NONE: 'MAP_TYPE_NONE'
};

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
  install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
  installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
  platforms: ['Android', 'iOS', 'Browser']
})
@Injectable()
export class GoogleMaps extends IonicNativePlugin {

  /**
   * Creates a new GoogleMap instance
   * @param element {string | HTMLElement} Element ID or reference to attach the map to
   * @param options {GoogleMapOptions} [options] Options
   * @return {GoogleMap}
   */
  create(element: string | HTMLElement | GoogleMapOptions, options?: GoogleMapOptions): GoogleMap {
    if (element instanceof HTMLElement) {
      if (element.getAttribute('__pluginMapId')) {
        console.error('GoogleMaps', element.tagName + '[__pluginMapId=\'' + element.getAttribute('__pluginMapId') + '\'] has already map.');
        return;
      }
    } else if (typeof element === 'object') {
      options = <GoogleMapOptions>element;
      element = null;
    }
    const googleMap: GoogleMap = new GoogleMap(<HTMLElement>element, options);
    googleMap.set('_overlays', {});
    return googleMap;
  }
  //
  // /**
  //  * @deprecation
  //  * @hidden
  //  */
  // create(element: string | HTMLElement | GoogleMapOptions, options?: GoogleMapOptions): GoogleMap {
  //   console.error('GoogleMaps', '[deprecated] Please use GoogleMaps.create()');
  //   return GoogleMaps.create(element, options);
  // }
  //

  /**
   * Creates a new StreetView instance
   * @param element {string | HTMLElement} Element ID or reference to attach the map to
   * @param options {StreetViewOptions} [options] Options
   * @return {StreetViewPanorama}
   */
  createPanorama(element: string | HTMLElement, options?: StreetViewOptions): StreetViewPanorama {
    if (element instanceof HTMLElement) {
      if (element.getAttribute('__pluginMapId')) {
        console.error('GoogleMaps', element.tagName + '[__pluginMapId=\'' + element.getAttribute('__pluginMapId') +  '\'] has already map.');
        return;
      }
    }
    return new StreetViewPanorama(<HTMLElement>element, options);
  }
}

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.BaseClass',
  repo: ''
})
export class BaseClass {
  protected _objectInstance: any;

  constructor() {
    this._objectInstance = new (GoogleMaps.getPlugin().BaseClass)();
  }

  /**
   * Adds an event listener.
   * @param eventName {string} event name you want to observe.
   * @return {Observable<any>}
   */
  @InstanceCheck({ observable: true })
  addEventListener(eventName: string): Observable<any> {
    return new Observable((observer) => {
      this._objectInstance.on(eventName, (...args: any[]) => {
        if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
          if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = this;
          } else if (this instanceof MarkerCluster) {
            let overlay: Marker = this.get(args[args.length - 1].getId());
            if (!overlay) {
              const markerJS: any = args[args.length - 1];
              const markerId: string = markerJS.getId();
              const markerCluster: MarkerCluster = <MarkerCluster>this;
              overlay = new Marker(markerCluster.getMap(), markerJS);
              this.get('_overlays')[markerId] = overlay;
              markerJS.one(markerJS.getId() + '_remove', () => {
                this.get('_overlays')[markerId] = null;
              });
            }
            args[args.length - 1] = overlay;
          } else {
            args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
          }
        }
        observer.next(args);
      });
    });
  }

  /**
   * Adds an event listener that works once.
   * @param eventName {string} event name you want to observe.
   * @return {Promise<any>}
   */
  @InstanceCheck()
  addListenerOnce(eventName: string): Promise<any> {
    return getPromise<any>((resolve) => {
      this._objectInstance.one(eventName, (...args: any[]) => {
        if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
          if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = this;
          } else if (this instanceof MarkerCluster) {
            let overlay: Marker = this.get(args[args.length - 1].getId());
            if (!overlay) {
              const markerJS: any = args[args.length - 1];
              const markerId: string = markerJS.getId();
              const markerCluster: MarkerCluster = <MarkerCluster>this;
              overlay = new Marker(markerCluster.getMap(), markerJS);
              this.get('_overlays')[markerId] = overlay;
              markerJS.one(markerJS.getId() + '_remove', () => {
                this.get('_overlays')[markerId] = null;
              });
            }
            args[args.length - 1] = overlay;
          } else {
            args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
          }
        }
        resolve(args);
      });
    });
  }

  /**
   * Gets a value
   * @param key {any}
   */
  @CordovaInstance({ sync: true })
  get(key: string): any {
    return;
  }

  /**
   * Sets a value
   * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
   * @param value {any}
   * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
   */
  @CordovaInstance({ sync: true })
  set(key: string, value: any, noNotify?: boolean): void {
  }

  /**
   * Bind a key to another object
   * @param key {string} The property name you want to observe.
   * @param target {any} The target object you want to observe.
   * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
   * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
   */
  @CordovaInstance({ sync: true })
  bindTo(key: string, target: any, targetKey?: string, noNotify?: boolean): void {
  }

  /**
   * Alias of `addEventListener`
   * @param key {string} The property name you want to observe.
   * @return {Observable<any>}
   */
  @InstanceCheck({ observable: true })
  on(eventName: string): Observable<any> {
    return new Observable((observer) => {
      this._objectInstance.on(eventName, (...args: any[]) => {
        if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
          if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = this;
          } else if (this instanceof MarkerCluster) {
            let overlay: Marker = this.get(args[args.length - 1].getId());
            if (!overlay) {
              const markerJS: any = args[args.length - 1];
              const markerId: string = markerJS.getId();
              const markerCluster: MarkerCluster = <MarkerCluster>this;
              overlay = new Marker(markerCluster.getMap(), markerJS);
              this.get('_overlays')[markerId] = overlay;
              markerJS.one(markerJS.getId() + '_remove', () => {
                this.get('_overlays')[markerId] = null;
              });
            }
            args[args.length - 1] = overlay;
          } else {
            args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
          }
        }
        observer.next(args);
      });
    });
  }

  /**
   * Alias of `addEventListenerOnce`
   * @param key {string} The property name you want to observe.
   * @return {Promise<any>}
   */
  @InstanceCheck()
  one(eventName: string): Promise<any> {
    return getPromise<any>((resolve) => {
      this._objectInstance.one(eventName, (...args: any[]) => {
        if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
          if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = this;
          } else if (this instanceof MarkerCluster) {
            let overlay: Marker = this.get(args[args.length - 1].getId());
            if (!overlay) {
              const markerJS: any = args[args.length - 1];
              const markerId: string = markerJS.getId();
              const markerCluster: MarkerCluster = <MarkerCluster>this;
              overlay = new Marker(markerCluster.getMap(), markerJS);
              this.get('_overlays')[markerId] = overlay;
              markerJS.one(markerJS.getId() + '_remove', () => {
                this.get('_overlays')[markerId] = null;
              });
            }
            args[args.length - 1] = overlay;
          } else {
            args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
          }
        }
        resolve(args);
      });
    });
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void {
  }

  /**
   * Dispatch event.
   * @param eventName {string} Event name
   * @param parameters {any} [options] The data you want to pass to event listerners.
   */
  @CordovaInstance({ sync: true })
  trigger(eventName: string, ...parameters: any[]): void {
  }


  /**
   * Executes off() and empty()
   */
  @CordovaInstance({ sync: true })
  destroy(): void {
    if (this._objectInstance.type === 'Map') {
      const map: GoogleMap = this._objectInstance.getMap();
      if (map) {
        delete this._objectInstance.getMap().get('_overlays')[this._objectInstance.getId()];
      }
    }
    this._objectInstance.remove();
  }

  /**
   * Remove event listener(s)
   * The `removeEventListener()` has three usages:
   *  - removeEventListener("eventName", listenerFunction);
   *     This removes one particular event listener
   *  - removeEventListener("eventName");
   *     This removes the event listeners that added for the event name.
   *  - removeEventListener();
   *     This removes all listeners.
   *
   * @param eventName {string} [options] Event name
   * @param listener {Function} [options] Event listener
   */
  @CordovaInstance({ sync: true })
  removeEventListener(eventName?: string, listener?: (...parameters: any[]) => void): void {}

  /**
   * Alias of `removeEventListener`
   *
   * @param eventName {string} [options] Event name
   * @param listener {Function} [options] Event listener
   */
  @CordovaInstance({ sync: true })
  off(eventName?: string, listener?: (...parameters: any[]) => void): void {}

}

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
@Plugin({
  pluginName: 'BaseArrayClass',
  plugin: 'cordova-plugin-googlemaps',
  pluginRef: 'plugin.google.maps.BaseArrayClass'
})
export class BaseArrayClass<T> extends BaseClass {

  constructor(initialData?: T[] | any) {
    super();
    if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
      this._objectInstance = initialData;
    } else if (Array.isArray(initialData)) {
      this._objectInstance = new (GoogleMaps.getPlugin().BaseArrayClass)(initialData);
    } else {
      this._objectInstance = new (GoogleMaps.getPlugin().BaseArrayClass)([]);
    }
  }

  /**
   * Removes all elements from the array.
   * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
   */
  @CordovaInstance({ sync: true })
  empty(noNotify?: boolean): void {
  }

  /**
   * Iterate over each element, calling the provided callback.
   * @param fn {Function}
   */
  @CordovaInstance({ sync: true })
  forEach(fn: (element: T, index?: number) => void): void {
  }

  /**
   * Iterate over each element, calling the provided callback.
   * @param fn {Function}
   * @return {Promise<void>}
   */
  forEachAsync(fn: ((element: T, callback: () => void) => void)): Promise<void> {
    return getPromise<void>((resolve) => {
      this._objectInstance.forEach(fn, resolve);
    });
  }

  /**
   * Iterate over each element, then Returns a new value.
   * Then you can get the results of each callback.
   * @param fn {Function}
   * @return {Array<Object>} returns a new array with the results
   */
  @CordovaInstance({ sync: true })
  map(fn: (element: T, index: number) => any): any[] {
    return;
  }

  /**
   * Iterate over each element, calling the provided callback.
   * Then you can get the results of each callback.
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<any>} returns a new array with the results
   */
  mapAsync(fn: ((element: T, callback: (newElement: any) => void) => void)): Promise<any[]> {
    return getPromise<any[]>((resolve) => {
      this._objectInstance.map(fn, resolve);
    });
  }

  /**
   * Same as `mapAsync`, but keep the execution order
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<any>} returns a new array with the results
   */
  mapSeries(fn: ((element: T, callback: (newElement: any) => void) => void)): Promise<any[]> {
    return new Promise<any[]>((resolve) => {
      this._objectInstance.mapSeries(fn, resolve);
    });
  }

  /**
   * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
   * @param fn {Function}
   * @return {T[]} returns a new filtered array
   */
  @CordovaInstance({ sync: true })
  filter(fn: (element: T, index: number) => boolean): T[] {
    return;
  }

  /**
   * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<T[]>} returns a new filtered array
   */
  filterAsync(fn: (element: T, callback: (result: boolean) => void) => void): Promise<T[]> {
    return getPromise<any[]>((resolve) => {
      this._objectInstance.filter(fn, resolve);
    });
  }

  /**
   * Returns a reference to the underlying Array.
   * @return {Array<Object>}
   */
  @CordovaInstance({ sync: true })
  getArray(): T[] {
    return;
  }

  /**
   * Returns the element at the specified index.
   * @param index {number}
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  getAt(index: number): any {
  }

  /**
   * Returns the number of the elements.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getLength(): number {
    return;
  }

  /**
   * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   * @param element {Object}
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  indexOf(element: T): number {
    return;
  }

  /**
   * The reverse() method reverses an array in place.
   */
  @CordovaInstance({ sync: true })
  reverse(): void {
  }

  /**
   * The sort() method sorts the elements of an array in place and returns the array.
   */
  @CordovaInstance({ sync: true })
  sort(): void {
  }

  /**
   * Inserts an element at the specified index.
   * @param index {number}
   * @param element {Object}
   * @param noNotify? {boolean} [options] Set true to prevent insert_at event.
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  insertAt(index: number, element: T, noNotify?: boolean) {
  }

  /**
   * Removes the last element of the array and returns that element.
   * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  pop(noNotify?: boolean): T {
    return;
  }

  /**
   * Adds one element to the end of the array and returns the new length of the array.
   * @param element {object}
   * @param noNotify? {boolean} Set true to prevent insert_at events.
   */
  @CordovaInstance({ sync: true })
  push(element: T, noNotify?: boolean): void {
  }

  /**
   * Removes an element from the specified index.
   * @param index {number}
   * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
   */
  @CordovaInstance({ sync: true })
  removeAt(index: number, noNotify?: boolean): T { return; }

  /**
   * Sets an element at the specified index.
   * @param index {number}
   * @param element {object}
   * @param noNotify? {boolean} [options] Set true to prevent set_at event.
   */
  @CordovaInstance({ sync: true })
  setAt(index: number, element: T, noNotify?: boolean): void {
  }
}

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
export class Circle extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
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
  setCenter(latLng: ILatLng): void {
  }

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
  setRadius(radius: number): void {
  }

  /**
   * Changes the filling color (inner color).
   * @param color {string}
   */
  @CordovaInstance({ sync: true })
  setFillColor(color: string): void {
  }

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
  setStrokeWidth(strokeWidth: number): void {
  }

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
  setStrokeColor(strokeColor: string): void {
  }

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
  setClickable(clickable: boolean): void {
  }

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
  setZIndex(zIndex: number): void {
  }

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
  setVisible(visible: boolean): void {
  }

  /**
   * Returns true if the circle is visible.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }
}

/**
 * @hidden
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.environment',
  repo: ''
})
export class Environment {

  /**
   * Set environment variables.
   */
  static setEnv(envOptions: EnvOptions): void {
    GoogleMaps.getPlugin().environment.setEnv(envOptions);
  }

  /**
   * Get the open source software license information for Google Maps SDK for iOS.
   * @return {Promise<any>}
   */
  static getLicenseInfo(): Promise<any> {
    return getPromise<any>((resolve) => {
      GoogleMaps.getPlugin().environment.getLicenseInfo((text: string) => resolve(text));
    });
  }

  /**
   * Specifies the background color of the app.
   * @param color
   */
  static setBackgroundColor(color: string): void {
    GoogleMaps.getPlugin().environment.setBackgroundColor(color);
  }

  /**
   * @deprecation
   * @hidden
   */
  getLicenseInfo(): Promise<any> {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
    return Environment.getLicenseInfo();
  }

  /**
   * @deprecation
   * @hidden
   */
  setBackgroundColor(color: string): void {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
    Environment.setBackgroundColor(color);
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.Geocoder',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class Geocoder {

  /**
   * @deprecation
   * @hidden
   */
  geocode(request: GeocoderRequest): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult[]>> {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
    return Geocoder.geocode(request);
  }

  /**
   * Converts position to address and vice versa
   * @param {GeocoderRequest} request Request object with either an address or a position
   * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
   */
  static geocode(request: GeocoderRequest): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult[]>> {

    if (request.address instanceof Array || Array.isArray(request.address) ||
      request.position instanceof Array || Array.isArray(request.position)) {
      // -------------------------
      // Geocoder.geocode({
      //   address: [
      //    "Kyoto, Japan",
      //    "Tokyo, Japan"
      //   ]
      // })
      // -------------------------
      return getPromise<BaseArrayClass<GeocoderResult>>((resolve, reject) => {
        GoogleMaps.getPlugin().Geocoder.geocode(request, (mvcArray: any) => {
          if (mvcArray) {
            resolve(new BaseArrayClass(mvcArray));
          } else {
            reject();
          }
        });
      });
    } else {
      // -------------------------
      // Geocoder.geocode({
      //   address: "Kyoto, Japan"
      // })
      // -------------------------
      return getPromise<GeocoderResult[]>((resolve, reject) => {
        GoogleMaps.getPlugin().Geocoder.geocode(request, (results: GeocoderResult[]) => {
          if (results) {
            resolve(results);
          } else {
            reject();
          }
        });
      });
    }
  }

  /**
   * @deprecation
   * @hidden
   */
  geocode(request: GeocoderRequest): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>> {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
    return Geocoder.geocode(request);
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.LocationService',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class LocationService {

  /**
   * Get the current device location without map
   * @return {Promise<MyLocation>}
   */
  static getMyLocation(options?: MyLocationOptions): Promise<MyLocation> {
    return new Promise<MyLocation>((resolve, reject) => {
      GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
    });
  }
  /**
   * Return true if the application has geolocation permission
   * @return {Promise<MyLocation>}
   */
  static hasPermission(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
    });
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.geometry.encoding',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class Encoding {

  /**
   * Decodes an encoded path string into a sequence of LatLngs.
   * @param encoded {string} an encoded path string
   * @param precision? {number} default: 5
   * @return {LatLng}
   */
  static decodePath(encoded: string, precision?: number): LatLng {
    return;
  }

  /**
   * Encodes a sequence of LatLngs into an encoded path string.
   * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>} a sequence of LatLngs
   * @return {string}
   */
  static encodePath(path: Array<ILatLng> | BaseArrayClass<ILatLng>): string {
    return;
  }

  /**
   * @deprecation
   * @hidden
   */
  decodePath(encoded: string, precision?: number): Array<ILatLng> {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
    return Encoding.decodePath(encoded, precision);
  }

  /**
   * @deprecation
   * @hidden
   */
  encodePath(path: Array<ILatLng> | BaseArrayClass<ILatLng>): string {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
    return Encoding.encodePath(path);
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.geometry.poly',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class Poly {

  /**
   * Returns true if the specified location is in the polygon path
   * @param location {ILatLng}
   * @param path {ILatLng[]}
   * @return {boolean}
   */
  static containsLocation(location: ILatLng, path: ILatLng[]): boolean {
    return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
  }

  /**
   * Returns true if the specified location is on the polyline path
   * @param location {ILatLng}
   * @param path {ILatLng[]}
   * @return {boolean}
   */
  static isLocationOnEdge(location: ILatLng, path: ILatLng[]): boolean {
    return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.geometry.spherical',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class Spherical {

  /**
   * Returns the distance, in meters, between two LatLngs.
   * @param locationA {ILatLng}
   * @param locationB {ILatLng}
   * @return {number}
   */
  static computeDistanceBetween(from: ILatLng, to: ILatLng): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
  }

  /**
   * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
   * @param from {ILatLng}
   * @param distance {number}
   * @param heading {number}
   * @return {LatLng}
   */
  static computeOffset(from: ILatLng, distance: number, heading: number): LatLng {
    return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
  }

  /**
   * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
   * @param to {ILatLng} The destination LatLng.
   * @param distance {number} The distance travelled, in meters.
   * @param heading {number} The heading in degrees clockwise from north.
   * @return {LatLng}
   */
  static computeOffsetOrigin(to: ILatLng, distance: number, heading: number): LatLng {
    return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
  }

  /**
   * Returns the length of the given path.
   * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}
   * @return {number}
   */
  static computeLength(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
  }

  /**
   * Returns the area of a closed path. The computed area uses the same units as the radius.
   * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
   * @return {number}
   */
  static computeArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeArea(path);
  }

  /**
   * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
   * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
   * @return {number}
   */
  static computeSignedArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
  }

  /**
   * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
   * @param from {ILatLng}
   * @param to {ILatLng}
   * @return {number}
   */
  static computeHeading(from: ILatLng, to: ILatLng): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
  }

  /**
   * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
   * @param from {ILatLng}     The LatLng from which to start.
   * @param to {ILatLng}       The LatLng toward which to travel.
   * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
   * @return {LatLng}
   */
  static interpolate(from: ILatLng, to: ILatLng, fraction: number): LatLng {
    return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
  }

  /**
   * @deprecation
   * @hidden
   */
  computeDistanceBetween(from: ILatLng, to: ILatLng): number {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
    return Spherical.computeDistanceBetween(from, to);
  }

  /**
   * @deprecation
   * @hidden
   */
  computeOffset(from: ILatLng, distance: number, heading: number): LatLng {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
    return Spherical.computeOffset(from, distance, heading);
  }

  /**
   * @deprecation
   * @hidden
   */
  computeOffsetOrigin(to: ILatLng, distance: number, heading: number): LatLng {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
    return Spherical.computeOffsetOrigin(to, distance, heading);
  }

  /**
   * @deprecation
   * @hidden
   */
  computeLength(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
    return Spherical.computeLength(path);
  }

  /**
   * @deprecation
   * @hidden
   */
  computeArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
    return Spherical.computeArea(path);
  }

  /**
   * @deprecation
   * @hidden
   */
  computeSignedArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
    return Spherical.computeSignedArea(path);
  }

  /**
   * @deprecation
   * @hidden
   */
  computeHeading(from: ILatLng, to: ILatLng): number {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
    return Spherical.computeHeading(from, to);
  }

  /**
   * @deprecation
   * @hidden
   */
  interpolate(from: ILatLng, to: ILatLng, fraction: number): LatLng {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
    return Spherical.interpolate(from, to, fraction);
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'StreetViewPanorama',
  plugin: 'cordova-plugin-googlemaps'
})
export class StreetViewPanorama extends BaseClass {
  constructor(element: string | HTMLElement, options?: StreetViewOptions) {
    super();

    if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
      // -------------------
      // Create a panorama
      // -------------------
      if (element instanceof HTMLElement) {
        this._objectInstance = GoogleMaps.getPlugin().StreetView.getPanorama(element, options);
      } else if (typeof element === 'string') {

        this._objectInstance = GoogleMaps.getPlugin().StreetView.getPanorama(getPromise<any[]>((resolve, reject) => {
          let count: number;
          count = 0;
          const timer: any = setInterval(() => {
            let targets: any[] = document.querySelectorAll('#' + element);
            targets = Array.prototype.slice.call(targets, 0);
            if (targets.length > 0) {
              targets = targets.filter(function(target) {
                return !target.hasAttribute('__pluginmapid');
              });
            }
            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
              clearInterval(timer);
              resolve([targets[0], options]);
            } else {
              if (count++ < 20) {
                return;
              }
              if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                console.error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.');
              } else {
                console.error('Can not find the element [#' + element + ']');
              }
              clearInterval(timer);
              this._objectInstance.remove();
              reject();
            }
          }, 100);
        }), options);

      } else if (element === null && options) {
        this._objectInstance = GoogleMaps.getPlugin().Map.getMap(null, options);
      }
    } else {
      console.error('cordova-plugin-googlemaps is not available!!');

      if (element instanceof HTMLElement) {
        element.style.backgroundColor = '#ccc';
        element.style.color = 'red';
        element.innerHTML = 'cordova-plugin-googlemaps is not available.';
      } else if (typeof element === 'string') {
        let targets: any[] = document.querySelectorAll('#' + element);
        targets = Array.prototype.slice.call(targets, 0);
        if (targets.length > 0) {
          targets = targets.filter(function(target) {
            return !target.hasAttribute('__pluginmapid');
          });
        }
        if (targets.length > 0 && targets[0]) {
          targets[0].style.backgroundColor = '#ccc';
          targets[0].style.color = 'red';
          targets[0].innerHTML = 'cordova-plugin-googlemaps is not available.';
        }
      }

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
   * Retrun true if the panning gesture is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getPanningGesturesEnabled(): boolean { return; }

  /**
   * Toggles the ability for users to zoom on the panorama using gestures.
   * @param gestureEnable {boolean}
   */
  @CordovaInstance({ sync: true })
  setZoomGesturesEnabled(gestureEnable: boolean): void {}

  /**
   * Retrun true if the zooming gesture is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getZoomGesturesEnabled(): boolean { return; }

  /**
   * Toggles the ability for users to see street names on the panorama.
   * @param gestureEnable {boolean}
   */
  @CordovaInstance({ sync: true })
  setStreetNamesEnabled(gestureEnable: boolean): void {}

  /**
   * Retrun true if the street names control is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getStreetNamesEnabled(): boolean { return; }

  /**
   * Toggles the ability for users to move between panoramas.
   * @param gestureEnable {boolean}
   */
  @CordovaInstance({ sync: true })
  setNavigationEnabled(gestureEnable: boolean): void {}

  /**
   * Retrun true if the navigation control is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getNavigationEnabled(): boolean { return; }

  /**
   * Retrun the navigation links (StreetViewLocation.links)
   * @return {StreetViewNavigationLink[]}
   */
  @CordovaInstance({ sync: true })
  getLinks(): StreetViewNavigationLink[] { return; }

  /**
   * Retrun the current location
   * @return {StreetViewLocation}
   */
  @CordovaInstance({ sync: true })
  getLocation(): StreetViewLocation { return; }

  /**
   * Retrun the current panorama id
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getPano(): string { return; }

  /**
   * Retrun the current position (StreetViewLocation.latLng)
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getPosition(): ILatLng { return; }

  /**
   * Destroy a map completely
   * @return {Promise<any>}
   */
  @CordovaInstance()
  remove(): Promise<any> {
    return new Promise<any>((resolve) => {
      this._objectInstance.remove(() => resolve());
    });
  }

}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  plugin: 'cordova-plugin-googlemaps'
})
export class GoogleMap extends BaseClass {
  constructor(element: any, options?: GoogleMapOptions) {
    super();

    const _init: any = () => {
      // ---------------
      // Create a map
      // ---------------
      if (element instanceof HTMLElement) {
        this._objectInstance = GoogleMaps.getPlugin().Map.getMap(element, options);
      } else if (typeof element === 'string') {

        this._objectInstance = GoogleMaps.getPlugin().Map.getMap(getPromise<any[]>((resolve, reject) => {
          let count: number;
          count = 0;
          const timer: any = setInterval(() => {
            let targets: any[] = document.querySelectorAll('ion-router-outlet #' + element);
            targets = Array.prototype.slice.call(targets, 0);
            if (targets.length > 0) {
              targets = targets.filter(function(target) {
                return !target.hasAttribute('__pluginmapid');
              });
            }
            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
              clearInterval(timer);
              resolve([targets[0], options]);
            } else {
              if (count++ < 20) {
                return;
              }
              if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                console.error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.');
              } else {
                console.error('Can not find the element [#' + element + ']');
              }
              clearInterval(timer);
              this._objectInstance.remove();
              reject();
            }
          }, 100);
        }), options);

      } else if (element === null && options) {
        this._objectInstance = GoogleMaps.getPlugin().Map.getMap(null, options);
      }
    };

    // Since Promise does not work well for some reason,
    // so create a map using if-statement.

    if (!(window.plugin && window.plugin.google && window.plugin.google.maps)) {
      // The `deviceready` event is not fired yet. Wait for it.
      document.addEventListener('deviceready', _init, {
        'once': true
      });
    } else {
      if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
        _init();
      } else {
        console.error('cordova-plugin-googlemaps is not available!!');

        if (element instanceof HTMLElement) {
          element.style.backgroundColor = '#ccc';
          element.style.color = 'red';
          element.innerHTML = 'cordova-plugin-googlemaps is not available.';
        } else if (typeof element === 'string') {
          let targets: any[] = document.querySelectorAll('ion-router-outlet #' + element);
          targets = Array.prototype.slice.call(targets, 0);
          if (targets.length > 0) {
            targets = targets.filter(function(target) {
              return !target.hasAttribute('__pluginmapid');
            });
          }
          if (targets.length === 1 && targets[0]) {
            targets[0].style.backgroundColor = '#ccc';
            targets[0].style.color = 'red';
            targets[0].innerHTML = 'cordova-plugin-googlemaps is not available.';
          }
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
      let targets: any[] = document.querySelectorAll('#' + domNode);
      targets = Array.prototype.slice.call(targets, 0);
      if (targets.length > 0) {
        targets = targets.filter(function(target) {
          return !target.hasAttribute('__pluginmapid');
        });
      }
      if (targets.length === 1 && targets[0]) {
        this._objectInstance.setDiv(targets[0]);
      }
    } else {
      this._objectInstance.setDiv(domNode);
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
  setMapTypeId(mapTypeId: MapType | string): void {
  }

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
   * @param latLng {ILatLng | Array<ILatLng>}
   */
  @CordovaInstance({ sync: true })
  setCameraTarget(latLng: ILatLng | Array<ILatLng>): void {
  }

  /**
   * Set zoom level of the camera
   * @param zoomLevel {number} Zoom level
   */
  @CordovaInstance({ sync: true })
  setCameraZoom(zoomLevel: number): void {
  }

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
  setCameraBearing(bearing: any): void {
  }

  /**
   * Changes the center of the map by the given distance in pixels
   * @param x {number}
   * @param y {number}
   */
  @CordovaInstance({ sync: true })
  panBy(x: number, y: number): void { }

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
      GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
    });
  }

  /**
   * Set false to ignore all clicks on the map
   * @param isClickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(isClickable: boolean): void {
  }

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
    return getPromise<any>((resolve) => {
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
    return getPromise<any>((resolve) => {
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
  fromPointToLatLng(point: number[]): Promise<LatLng> { return; }

  /**
   * Set true if you want to show the MyLocation control (blue dot)
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setMyLocationEnabled(enabled: boolean): void {
  }

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
  setIndoorEnabled(enabled: boolean): void {
  }

  /**
   * Set true if you want to show the traffic layer
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setTrafficEnabled(enabled: boolean): void {
  }

  /**
   * Set true if you want to show the compass button
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setCompassEnabled(enabled: boolean): void {
  }

  /**
   * Sets the preference for whether all gestures should be enabled or disabled
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setAllGesturesEnabled(enabled: boolean): void {
  }

  /**
   * Set visibility of the map
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

  /**
   * Adjust the map padding (same as CSS padding rule)
   * @param top {number}
   * @param right {number}
   * @param left {number}
   * @param bottom {number}
   */
  @CordovaInstance({ sync: true })
  setPadding(top: number, right?: number, bottom?: number, left?: number): void { }

  /**
   * Set options
   * @param options
   */
  @CordovaInstance({ sync: true })
  setOptions(options: GoogleMapOptions): void {
  }

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
  addMarkerCluster(options: MarkerClusterOptions): Promise<MarkerCluster | any> {
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
  addGroundOverlay(options: GroundOverlayOptions): Promise<GroundOverlay | any> {
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
    return new Promise<KmlOverlay>((resolve, reject) => {
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
   * Returns the base64 encoded screen capture of the map.
   * @param options {ToDataUrlOptions} [options] options
   * @return {Promise<string>}
   */
  @CordovaInstance()
  toDataURL(options?: ToDataUrlOptions): Promise<string> { return; }

}

/**
 * @hidden
 */
export class GroundOverlay extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
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
  setBounds(bounds: ILatLng[]): void {
  }

  /**
   * Changes the bearing of the ground overlay
   * @param bearing {number}
   */
  @CordovaInstance({ sync: true })
  setBearing(bearing: number): void {
  }

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
  setOpacity(opacity: number): void {
  }

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
  setClickable(clickable: boolean): void {
  }

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
  setVisible(visible: boolean): void {
  }

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
  setZIndex(index: number): void {
  }

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

/**
 * @hidden
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.HtmlInfoWindow',
  repo: ''
})
export class HtmlInfoWindow extends BaseClass {

  constructor() {
    super();
    this._objectInstance = new (GoogleMaps.getPlugin().HtmlInfoWindow)();
  }

  /**
   * Changes the backgroundColor
   * @param color {string}
   */
  @CordovaInstance()
  setBackgroundColor(color: string): void {
  }

  /**
   * Set your HTML contents.
   * @param content {any} String containing text or HTML element
   * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
   */
  @CordovaInstance()
  setContent(content: string | Element, cssOptions?: any): void {
  }

  /**
   * Open the htmlInfoWindow
   * @param marker {Marker}
   */
  @CordovaInstance()
  open(marker: any): any {
  }

  /**
   * Close the htmlInfoWindow
   */
  @CordovaInstance()
  close(): void {
  }

}

/**
 * @hidden
 */
export class Marker extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
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
  showInfoWindow(): void {
  }

  /**
   * Hide the normal infoWindow of the marker.
   */
  @CordovaInstance({ sync: true })
  hideInfoWindow(): void {
  }

  /**
   * Specify the animation either `DROP` or `BOUNCE`
   * @param animation {string}
   */
  @CordovaInstance({ sync: true })
  setAnimation(animation: string): void {
  }

  /**
   * Set true if you **do not want** to move the map when you click on the marker.
   * @param disableAutoPan {boolean}
   */
  @CordovaInstance({ sync: true })
  setDisableAutoPan(disableAutoPan: boolean): void {
  }

  /**
   * Set false if you want to hide the marker.
   * @param visible
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

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
  setTitle(title: string): void {
  }

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
  setSnippet(snippet: string): void {
  }

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
  setOpacity(alpha: number): void {
  }

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
  setIconAnchor(x: number, y: number): void {
  }

  /**
   * Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
   * @param x {number} Distance from left of the icon image in pixels.
   * @param y {number} Distance from top of the icon image in pixels.
   */
  @CordovaInstance({ sync: true })
  setInfoWindowAnchor(x: number, y: number): void {
  }

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
  setZIndex(zIndex: number): void {
  }

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
  setDraggable(draggable: boolean): void {
  }

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
  setRotation(rotation: number): void {
  }

  /**
   * Returns the marker rotation angle.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getRotation(): number {
    return;
  }

}

/**
 * @hidden
 */
export class MarkerCluster extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
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
   * Add one marker location
   * @param marker {MarkerOptions} one location
   * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
   */
  @CordovaInstance({ sync: true })
  addMarker(marker: MarkerOptions): void {
  }

  /**
   * Add marker locations
   * @param markers {MarkerOptions[]} multiple location
   */
  @CordovaInstance({ sync: true })
  addMarkers(markers: MarkerOptions[]): void {
  }

  /**
   * Remove the marker cluster
   */
  @CordovaInstance()
  remove(): void {
    this._objectInstance.set('_overlays', undefined);
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }

  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  getMap(): any {
    return this._map;
  }

}

/**
 * @hidden
 */
export class Polygon extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
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
  setPoints(points: ILatLng[]): void {
  }

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
  setHoles(holes: ILatLng[][]): void {
  }

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
  setFillColor(fillColor: string): void {
  }

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
  setStrokeColor(strokeColor: string): void {
  }

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
  setClickable(clickable: boolean): void {
  }

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
  setVisible(visible: boolean): void {
  }

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
  setZIndex(zIndex: number): void {
  }

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
  setStrokeWidth(strokeWidth: number): void {
  }

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
  setGeodesic(geodesic: boolean): void {
  }

  /**
   * Returns true if the polygon is geodesic.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getGeodesic(): boolean {
    return;
  }

}

/**
 * @hidden
 */
export class Polyline extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
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
   * Changes the polyline points.
   * @param points {ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setPoints(points: ILatLng[]): void {
  }

  /**
   * Returns an instance of the BaseArrayClass
   * You can modify the points.
   * @return {BaseArrayClass<ILatLng>}
   */
  getPoints(): BaseArrayClass<ILatLng> {
    return new BaseArrayClass<ILatLng>(this._objectInstance.getPoints());
  }

  /**
   * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
   * @param geoDesic {boolean}
   */
  @CordovaInstance({ sync: true })
  setGeoDesic(geoDesic: boolean): void {
  }

  /**
   * Returns true if the polyline is geodesic
   */
  @CordovaInstance({ sync: true })
  getGeodesic(): boolean {
    return;
  }

  /**
   * Changes visibility of the polyline
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

  /**
   * Returns true if the polyline is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  /**
   * Changes click-ability of the polyline
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {
  }

  /**
   * Returns true if the polyline is clickable
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean {
    return;
  }

  /**
   * Changes the polyline color
   * @param strokeColor {string}
   */
  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {
  }

  /**
   * Returns the current polyline color
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getStrokeColor(): string {
    return;
  }

  /**
   * Changes the polyline stroke width
   * @param strokeWidth {number}
   */
  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {
  }

  /**
   * Returns the current stroke width (unit: pixel).
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getStrokeWidth(): number {
    return;
  }

  /**
   * Changes the polyline zIndex order.
   * @param index {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(index: number): void {
  }

  /**
   * Returns the current polyline zIndex
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  /**
   * Remove the polyline
   */
  @CordovaInstance()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }
}

/**
 * @hidden
 */
export class TileOverlay extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
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
  setFadeIn(fadeIn: boolean): void {
  }

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
  setZIndex(zIndex: number): void {
  }

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
  setOpacity(opacity: number): void {
  }

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
  setVisible(visible: boolean): void {
  }

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

/**
 * @hidden
 */
export class KmlOverlay extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;

    Object.defineProperty(self, 'camera', {
        value: this._objectInstance.camera,
        writable: false
    });
    Object.defineProperty(self, 'kmlData', {
        value: this._objectInstance.kmlData,
        writable: false
    });
  }

  /**
   * Returns the viewport to contains all overlays
   */
  @CordovaInstance({ sync: true })
  getDefaultViewport(): CameraPosition<ILatLng|ILatLng[]> { return; }

  /**
   * Returns the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string { return; }

  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  getMap(): GoogleMap { return this._map; }

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
  getVisible(): boolean { return; }

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
  getClickable(): boolean { return; }

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
