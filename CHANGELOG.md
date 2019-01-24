## 4.20.0
  - Update: Catch up `@ionic-native/4.20.0`
  - Fix: INFO_CLICK event does not work on marker cluster
  - Fix: minor bugs

## 4.15.1
  - Fix: `GoogleMaps.create()` is missing.
  - Fix: BaseClass constructor is incorrect.

## 4.15.0
  - Build to compatible with `@ionic-native/core@4.16.0`
  - Update: The code for displaying error message.
  - Fix: BaseClass is null error.

## 4.13.0
  - Add: `GoogleMapOptions.preferences.gestureBounds` property

## 4.12.0
  - Add: `Environment` class

## 4.9.1
  - Fix: only README.md (sorry)

## 4.9.0
  - Add: LocationService.hasPermission()

## 4.8.2
  - Fix: only README.md (sorry)

## 4.8.1
  - Fix: only README.md (sorry)

## 4.8.0
  - Adds `addMarkerSync()`, `addMarkerClusterSync()`, `addCircleSync()`, `addPolygonSync()`, `addPolylineSync()`, `addTileOverlaySync()`, and  `addGroundOverlaySync()` methods.
  - Adds `GoogleMaps.createPanorama()` method, and `StreetViewPanorama` class.
  - Merge pull request (#15) from TheDuc/master - pass reject to getMyLocation

## 4.7.0
  - small fixes

## 4.6.3
  - `@ionic-native/google-maps@4.6.2` is not found even it is installed for some reason.
  (Sorry about the trouble)

## 4.6.2

  - TypeError: Right-hand side of 'instanceof' is not an object ([a188d5f](https://github.com/ionic-team/ionic-native-google-maps/commit/a188d5f))

## 4.6.1
  - Spin-out from [ionic-native/ionic-native](https://github.com/ionic-team/ionic-native/) repository.
From this version, the author of [cordova-plugin-googlemaps](https://github.com/mapsplugin/cordova-plugin-googlemaps) mainly manages this plugin.

  - map.remove() generates empty map ([321f06f](https://github.com/ionic-team/ionic-native-google-maps/commit/321f06f))
