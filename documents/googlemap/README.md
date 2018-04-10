# GoogleMap class

```typescript
import { Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

export class MapPage {

  map: GoogleMap;

  constructor(private platform: Platform) {
    this.platforms.ready(()=> {
      this.loadMap();
    });
  }

  loadmap() {

    let options: GoogleMapOptions = {
      controls: {
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: true
      }
    };
    this.map = GoogleMaps.create('map_canvas', options);

    // You need to wait the `MAP_READY` event until the native side is ready.
    this.map.one(GoogleMapsEvent.MAP_READY).then(this.onMapReady);
  }

  onMapReady() {
    console.log('map is ready!');
  }
}
```


## Class members



### addMarker(options)

Adds a marker.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../markeroptions/README.md">MarkerOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<Marker>`

### addMarkerCluster(options)

Adds a marker cluster.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../markerclusteroptions/README.md">MarkerClusterOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<MarkerCluster>`



### addCircle(options)

Adds a circle.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../circleoptions/README.md">CircleOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<Circle>`


### addPolygon(options)

Adds a polygon

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../polygonoptions/README.md">PolygonOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<Polygon>`


### addPolyline(options)

Adds a polyline

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../polylineoptions/README.md">PollineOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<Polyline>`


### addPolyline(options)

Adds a polyline

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../polylineoptions/README.md">PolylineOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<Polyline>`


### addTileOverlay(options)

Adds a tile overlay

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../tileoverlayoptions/README.md">TileOverlayOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<TileOverlay>`


### addGroundOverlay(options)

Adds a ground overlay

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../groundoverlayoptions/README.md">GroundOverlayOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<GroundOverlay>`



### addKmlOverlay(options)

Adds a kml overlay

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../kmloverlayoptions/README.md">KmlOverlayOptions</a></td>
  <td>options</td>
</tr>
</table>

:arrow_right: Returns `Promise<KmlOverlay>`


### setDiv(domNode?)

If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>domNode</td>
  <td>string | HTMLElement</td>
  <td>(optional)Specifies the container of map div</td>
</tr>
</table>


### getDiv()

Returns the map HTML element

:arrow_right: Returns `HTMLElement`

### getFocusedBuilding()

Get the currently focused building

:arrow_right: Returns `Promise<any>`



### setMapTypeId(mapTypeId)

Changes the map type id. Available constants are one of the [MapType](../maptype/README.md)

### animateCamera(cameraPosition: CameraPosition<any>)

Moves the camera with animation

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>cameraPosition</td>
  <td><a href="../cameraposition/README.md">CameraPosition&lt;any&gt;</a></td>
  <td>Specify camera options</td>
</tr>
</table>

:arrow_right: Returns `Promise<any>`


### animateCameraZoomIn()

Zooming in the camera with animation

:arrow_right: Returns `Promise<any>`

### animateCameraZoomOut()

Zooming out the camera with animation

:arrow_right: Returns `Promise<any>`

### moveCamera(cameraPosition: CameraPosition<any>)

Moves the camera with animation

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>cameraPosition</td>
  <td><a href="../cameraposition/README.md">CameraPosition&lt;any&gt;</a></td>
  <td>Specify camera options<br>Note that the `duration` property is ignored.</td>
</tr>
</table>

:arrow_right: Returns `Promise<any>`


### moveCameraZoomIn()

Zooming in the camera without animation

:arrow_right: Returns `Promise<any>`

### moveCameraZoomOut()

Zooming out the camera without animation

:arrow_right: Returns `Promise<any>`

### getCameraPosition()

Get the position of the camera

:arrow_right: Returns `CameraPosition<ILatLng>`


### getCameraTarget()

Get the current camera target position

:arrow_right: Returns `ILatLng`

### getCameraZoom()

Get the current camera zoom level

:arrow_right: Returns `number`

### getCameraBearing()

Get the current camera bearing

:arrow_right: Returns `number`

### getCameraTilt()

Get the current camera tilt (view angle)

:arrow_right: Returns `number`

### setCameraTarget(target)

Set the center position of the camera view.
This is a wrapper of `moveCamera()` method.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>target</td>
  <td>
    <a href="../ilatlng/README.md">ILatLng</a> | Array&lt;<a href="../ilatlng/README.md">ILatLng</a>&gt;</td>
  <td>Specify camera target</td>
</tr>
</table>


### setCameraZoom(zoomLevel)

Set zoom level of the camera.
This is a wrapper of `moveCamera()` method.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>zoomLevel</td>
  <td>number</td>
  <td>Specify zoom level</td>
</tr>
</table>

### setCameraTilt(tiltAngle)

Set the camera view angle.
This is a wrapper of `moveCamera()` method.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>tiltAngle</td>
  <td>number</td>
  <td>Specify tilt angle</td>
</tr>
</table>

### setCameraBearing(bearing)

Set camera bearing.
This is a wrapper of `moveCamera()` method.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>bearing</td>
  <td>number</td>
  <td>Specify tilt angle</td>
</tr>
</table>

### panBy(x, y)

Change the center of the map by the given distance in pixels.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>x</td>
  <td>number</td>
  <td>Distance in pixel for x</td>
</tr>
<tr>
  <td>y</td>
  <td>number</td>
  <td>Distance in pixel for y</td>
</tr>
</table>


### getVisibleRegion()

Get the current visible region (southWest and northEast)

:arrow_right: Returns [VisibleRegion](../visibleregion/README.md)


### getMyLocation(options?)

Get the current device location

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td>MyLocationOptions</td>
  <td>(optional) options</td>
</tr>
</table>

:arrow_right: Returns `Promise<MyLocation>`

### setClickable(isClickable)

Set false to ignore all clicks on the map

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>isClickable</td>
  <td>boolean</td>
  <td>true / false</td>
</tr>
</table>

### setMyLocationEnabled(enabled)

Set true if you want to show the MyLocation control (blue dot)

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>enabled</td>
  <td>boolean</td>
  <td>true / false</td>
</tr>
</table>

### setMyLocationButtonEnabled(enabled)

Set true if you want to show the MyLocation button

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>enabled</td>
  <td>boolean</td>
  <td>true / false</td>
</tr>
</table>

### setTrafficEnabled(enabled)

Set true if you want to show the traffic layer

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>enabled</td>
  <td>boolean</td>
  <td>true / false</td>
</tr>
</table>

### setCompassEnabled(enabled)

Set true if you want to show the compass button

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>enabled</td>
  <td>boolean</td>
  <td>true / false</td>
</tr>
</table>

### setAllGesturesEnabled(enabled)

Sets the preference for whether all gestures should be enabled or disabled

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>enabled</td>
  <td>boolean</td>
  <td>true / false</td>
</tr>
</table>

### setVisible(visible)

Set visibility of the map

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>visible</td>
  <td>boolean</td>
  <td>true / false</td>
</tr>
</table>

### setIndoorEnabled(enabled)

Set true if you want to show the indoor map

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>enabled</td>
  <td>boolean</td>
  <td>true / false</td>
</tr>
</table>

### setPadding(top, right?, bottom?, left?)

Adjust the map padding (same as CSS padding rule)

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>top</td>
  <td>number</td>
  <td>padding of top in pixels</td>
</tr>
<tr>
  <td>right</td>
  <td>number</td>
  <td>(optional) padding of right in pixels</td>
</tr>
<tr>
  <td>bottom</td>
  <td>number</td>
  <td>(optional) padding of bottom in pixels</td>
</tr>
<tr>
  <td>left</td>
  <td>number</td>
  <td>(optional) padding of left in pixels</td>
</tr>
</table>


### setOptions(options)

Set options

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../googlemapoptions/README.md">GoogleMapOptions</a></td>
  <td>map options</td>
</tr>
</table>

### remove()

Destroy a map completely

:arrow_right: Returns `Promise<any>`

### clear()

Remove all overlays, such as marker

:arrow_right: Returns `Promise<any>`


### fromLatLngToPoint(latLng)

Convert the unit from LatLng to the pixels from the left/top of the map div.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>latLng</td>
  <td><a href="../latlng/README.md">ILatLng</a></td>
  <td>a geographic point</td>
</tr>
</table>

:arrow_right: Returns `Promise<any[]>`


### fromPointToLatLng(point)

Convert the unit from the pixels from the left/top to the LatLng.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>point</td>
  <td>point: number[]</td>
  <td>a pixel point</td>
</tr>
</table>

:arrow_right: Returns `Promise<LatLng>`


### toDataURL(options?)

Convert the unit from the pixels from the left/top to the LatLng.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../todataurloptions/README.md">ToDataUrlOptions</a></td>
  <td>(optional) options</td>
</tr>
</table>

:arrow_right: Returns `Promise<string>`
