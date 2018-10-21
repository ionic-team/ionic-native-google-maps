import { CordovaInstance, InstanceProperty } from '@ionic-native/core';
import { GoogleMaps } from './google-maps';
import { ILatLng, LatLng } from './lat-lng';

export const TARGET_ELEMENT_FINDING_QUERYS: string[] = [
  'ion-router-outlet #',
  '.show-page #',
];

export type MapType =
  | 'MAP_TYPE_NORMAL'
  | 'MAP_TYPE_ROADMAP'
  | 'MAP_TYPE_SATELLITE'
  | 'MAP_TYPE_HYBRID'
  | 'MAP_TYPE_TERRAIN'
  | 'MAP_TYPE_NONE';

export interface ILatLngBounds {
  northeast: ILatLng;
  southwest: ILatLng;
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
   * Sets the bounds limit for user panning gesture.
   */
  gestureBounds?: ILatLng[];

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
    lines?: string[];
    permises?: string;
    phone?: string;
    url?: string;
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
  bounds: ILatLng[];

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
  points: ILatLng[];

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
  holes?: ILatLng[][];

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
  points: ILatLng[];

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
   * This callback must Returns string of image URL, or Promise.
   * If no tile, you need to Returns null.
   */
  getTile: (x: number, y: number, zoom: number) => string | Promise<string>;

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
 * Options for FusionTableOverlayOptions.query
 */
export interface FusionTableQueryOptions {
  /*
   * The ID of the Fusion Tables table to display. This ID can be found in the table's URL, as the value of the **dsrcid** parameter. Required.
   */
  from: boolean;

  /*
   * Limit on the number of results returned by the query.
   */
  limit?: number;

  /*
   * Offset into the sorted results.
   */
  offset?: number;

  /*
   * The method by which to sort the results. Accepts either of:
   *  - A column name.
   *    The column name may be suffixed with ASC or DESC (e.g. col2 DESC) to specify ascending or descending sort.
   *
   *  - An ST_DISTANCE spatial relationship (sort by distance).
   *    A column and the coordinate from which to calculate distance must be passed, for example, orderBy: 'ST_DISTANCE(col1, LATLNG(1.2, 3.4))'.
   */
  orderBy?: string;

  /*
   * A column, containing geographic features to be displayed on the map. See [Fusion Tables Setup](https://developers.google.com/maps/documentation/javascript/fusiontableslayer#fusion_table_setup) in the Maps API documentation for information about valid columns.
   */
  select: string;

  /*
   * The SQL predicate to be applied to the layer.
   */
  where?: string;
}

/**
 * Options for map.addFusionTableOverlay() method
 */
export interface FusionTableOverlayOptions {
  /*
   * Query for Fusion Table
   */
  query: FusionTableQueryOptions;

  /*
   * Do not fire the FUSION_TABLE_CLICK event if false. Default is true.
   */
  clickable?: boolean;

  /*
   * Do not display the default infoWindow if true. Default is false.
   */
  suppressInfoWindows?: boolean;

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

/**
 * @hidden
 */
export const StreetViewSource = {
  DEFAULT: 'DEFAULT',
  OUTDOOR: 'OUTDOOR',
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

export interface StreetViewControlOptions {
  streetNames?: boolean;
  navigation?: boolean;
}
export interface StreetViewGestureOptions {
  panning?: boolean;
  zooming?: boolean;
}

export interface StreetViewOptions {
  /*
   * camera: [options] Initial camera position
   */
  camera?: StreetViewCameraPano | StreetViewCameraPosition;

  /**
   * controls [options]
   */
  controls?: StreetViewControlOptions;

  /**
   * gestures [options]
   */
  gestures?: StreetViewGestureOptions;

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
  PANORAMA_CLICK: 'panorama_click',
};

/**
 * @hidden
 */
export const GoogleMapsAnimation = {
  BOUNCE: 'BOUNCE',
  DROP: 'DROP',
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
  NONE: 'MAP_TYPE_NONE',
};
