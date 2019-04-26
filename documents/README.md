# \@ionic-native/google-maps document

This plugin used for [cordova-plugin-googlemaps](https://github.com/mapsplugin/cordova-plugin-googlemaps).

## Installation

In order to use this plugin, you need to generate API keys at the Google Developers Console.
Please follow the instruction.

- [How to generate API keys?](./api_key/generate_api_key.md)

```
$> ionic cordova plugin add cordova-plugin-googlemaps

$> npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest
```

Add API Keys to `config.xml`:

```xml
<widget ...>
  ...
  <preference name="GOOGLE_MAPS_ANDROID_API_KEY" value="(api key)" />
  <preference name="GOOGLE_MAPS_IOS_API_KEY" value="(api key)" />
  ...
</widget>
```

## Basic usage (Use \@ionic-native/google-maps@4.8.2)

```typescript
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
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

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
      'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
    });

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

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}
```

### Understanding the \@ionic-native/google-maps plugin

Before using the \@ionic-native/google-maps plugin, reading this slides helps you to understand this plugin.
[Overview of @ionic-native/google-maps](https://docs.google.com/presentation/d/e/2PACX-1vScoho1ensbR4qCI9AIuQN55BZVvK73pAjI7sumDvW3CrxxHnrmpXWUjx2-8CpFibqU1EjLKCRhuthJ/pub?start=false&loop=false&delayms=3000)

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
- [StreetViewPanorama](./streetviewpanorama/README.md)

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
- [MarkerOptions](./markeroptions/README.md)
  - [MarkerIcon](./markericon/README.md)
- [MarkerClusterOptions](./markerclusteroptions/README.md)
  - [MarkerClusterIcon](./markerclustericon/README.md)
  - [MarkerLabel](./markerclustericon/README.md)
- [MyLocation](./mylocation/README.md)
- [MyLocationOptions](./mylocationoptions/README.md)
- [PolygonOptions](./polygonoptions/README.md)
- [PolylineOptions](./polylineoptions/README.md)
- [TileOverlayOptions](./tileoverlayoptions/README.md)
- [KmlOverlayOptions](./kmloverlayoptions/README.md)
- [VisibleRegion](./visibleregion/README.md)
- [ToDataUrlOptions](./todataurloptions/README.md)
- [EnvOptions](./envoptions/README.md)
- [StreetViewOptions](./streetviewoptions/README.md)
- [StreetViewCameraPano](./streetviewcamerapano/README.md)
- [StreetViewCameraPositionOption](./streetviewcameraposition/README.md)
- [StreetViewControlOptions](./streetviewcontroloptions/README.md)
- [StreetViewGestureOptions](./streetviewgestureoptions/README.md)
- [StreetViewSetPositionOption](./streetviewsetpositionoption/README.md)
- [StreetViewLocation](./streetviewlocation/README.md)
- [StreetViewNavigationLink](./streetviewnavigationlink/README.md)

### Constants
- [GoogleMapsAnimation](./googlemapsanimation/README.md)
- [MapType](./maptype/README.md)
- [GoogleMapsEvent](./googlemapsevent/README.md)
