# GoogleMapOptions interface

```typescript
let options: GoogleMapOptions = {
  mapType: GoogleMapsMapTypeId.HYBRID,

  controls: {
    'compass': true,
    'myLocationButton': true,
    'myLocation': true,   // (blue dot)
    'indoorPicker': true,
    'zoom': true,          // android only
    'mapToolbar': true     // android only
  },

  gestures: {
    scroll: true,
    tilt: true,
    zoom: true,
    rotate: true
  },

  styles: [], // https://developers.google.com/maps/documentation/javascript/style-reference

  camera: {
    target: [
      {lat: ...., lng: ....},
      {lat: ...., lng: ....},
      {lat: ...., lng: ....}
    ]
  },

  preferences: {
    zoom: {
      minZoom: 15,
      maxZoom: 18
    },

    padding: {
      left: 10,
      top: 10,
      bottom: 10,
      right: 10
    },

    building: true
  }
};

this.map = GoogleMaps.create('map_canvas', options);
```

## Interface members

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>mapType</td>
  <td><a href="../maptype/README.md">GoogleMapsMapTypeId</a></td>
  <td>(optional)GoogleMapsMapTypeId</td>
</tr>
<tr>
  <td>controls</td>
  <td><a href="../googlemapcontroloptions/README.md">GoogleMapControlOptions</a></td>
  <td>(optional)controls</td>
</tr>
<tr>
  <td>gestures</td>
  <td><a href="../googlemapgestureoptions/README.md">GoogleMapGestureOptions</a></td>
  <td>(optional)gestures</td>
</tr>
<tr>
  <td>styles</td>
  <td>JSON Array</td>
  <td>(optional)<a href="https://developers.google.com/maps/documentation/javascript/style-reference" target="_blank">Check out the Google Maps page</a></td>
</tr>
<tr>
  <td>camera</td>
  <td><a href="../cameraposition/README.md">CameraPosition&lt;any&gt;</a></td>
  <td>(optional)Initial camera position</td>
</tr>
<tr>
  <td>preferences</td>
  <td><a href="../googlemapprefereceoptions/README.md">GoogleMapPreferenceOptions</a></td>
  <td>(optional)preferences</td>
</tr>
</table>
