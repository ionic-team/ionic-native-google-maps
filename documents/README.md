# \@ionic-native/google-maps document

This plugin used for [cordova-plugin-googlemaps](https://github.com/mapsplugin/cordova-plugin-googlemaps).

## Installation

In order to use this plugin, you need to generate API keys at the Google Developers Console.
Please follow the instruction.

- [How to generate API keys?](./api_key/generate_api_key.md)

```
$> ionic cordova plugin add cordova-plugin-googlemaps \
  --variable API_KEY_FOR_ANDROID="(API_KEY_FOR_ANDROID)"
  --variable API_KEY_FOR_ANDROID="(API_KEY_FOR_IOS)"

$> npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest
```

## Basic usage

```typescript
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

   let mapOptions: GoogleMapOptions = {
     camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

   this.map = GoogleMaps.create('map_canvas', mapOptions);

   // Wait the MAP_READY before using any methods.
   this.map.one(GoogleMapsEvent.MAP_READY)
     .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });
        });

     });
  }
}
```

### Understanding the \@ionic-native/google-maps plugin

Before using the \@ionic-native/google-maps plugin, reading this slides helps you to understand this plugin.
https://docs.google.com/presentation/d/1zlkmoSY4AzDJc_P4IqWLnzct41IqHyzGkLeyhlAxMDE/edit#slide=id.p

### Static Class

- [GoogleMaps](./googlemaps/README.md)
- [LocationService](./locationservice/README.md)
- [Geocoder](./geocoder/README.md)
- [Encoding](./encoding/README.md)
- [Spherical](./spherical/README.md)
- [Poly](./poly/README.md)
- [HtmlInfoWindow](./htmlinfowindow/README.md)
- [BaseClass](./baseclass/README.md)
- [BaseArrayClass](./basearrayclass/README.md)
- [LatLng](./latlng/README.md)
- [LatLngBounds](./latlngbounds/README.md)
- [Environment](./environment/README.md)

### Instance Class

- [GoogleMap](./googlemap/README.md)
- [Marker](./marker/README.md)
- [MarkerCluster](./markercluster/README.md)
- [Circle](./circle/README.md)
- [GroundOverlay](./groundoverlay/README.md)
- [Polyline](./polyline/README.md)
- [Polygon](./polygon/README.md)
- [KmlOverlay](./kmloverlay/README.md)
- [TileOverlay](./tileoverlay/README.md)

### Interfaces

- [GoogleMapOptions](./googlemapoptions/README.md)
  - [GoogleMapControlOptions](./googlemapcontroloptions/README.md)
  - [GoogleMapGestureOptions](./googlemapgestureoptions/README.md)
  - [GoogleMapPreferenceOptions](./googlemappreferenceoptions/README.md)
- [CameraPosition](./cameraposition/README.md)
- [CircleOptions](./circleoptions/README.md)
- [GeocoderRequest](./geocoderrequest/README.md)
- [GeocoderResult](./geocoderresult/README.md)
- [GroundOverlayOptions](./groundoverlayoptions/README.md)
- [ILatLng](./ilatlng/README.md)
- [ILatLngBounds](./ilatlngbounds/README.md)
- [MarkerIcon](./markericon/README.md)
- [MarkerOptions](./markeroptions/README.md)
- [MarkerClusterOptions](./markerclusteroptions/README.md)
  - [MarkerClusterIcon](./markerclustericon/README.md)
  - [MarkerLabel](./markerclustericon/README.md)
- [MyLocation](./mylocation/README.md)
- [MyLocationOptions](./mylocationoptions/README.md)
- [PolygonOptions](./polygonoptions/README.md)
- [PolylineOptions](./polylineoptions/README.md)
- [TileOverlayOptions](./tileoverlayoptions/README.md)
- [KmlOverlayOptions](./kmloverlayoption/README.md)
- [VisibleRegion](./visibleregion/README.md)
- [ToDataUrlOptions](./todataurloptions/README.md)

### Constants
- [GoogleMapsAnimation](./googlemapsanimation/README.md)
- [MapType](./maptype/README.md)
- [GoogleMapsEvent](./googlemapsevent/README.md)
