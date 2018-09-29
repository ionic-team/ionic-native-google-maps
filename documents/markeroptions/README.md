# MarkerOptions interface

```typescript
let options: MarkerOptions = {
  icon: {
    url: 'assets/marker_icon.png',

    size: {
      width: 32,
      height: 24
    }
  },

  title: 'Hello World'

  snippet: '@ionic-native/google-maps'

  position: {lat: ..., lng: ...},

  infoWindowAnchor: [16, 0],

  anchor: [16, 32],

  draggable: true,

  flat: false,

  rotation: 32,

  visible: true,

  styles: {
    'text-align': 'center',
    'font-style': 'italic',
    'font-weight': 'bold',
    'color': 'red'
  },

  animation: GoogleMapsAnimation.DROP,

  zIndex: 0,

  disableAutoPan: true
};

this.map.addMarker(options).then((marker: Marker) => {

  marker.showInfoWindow();

});
```

## Interface members

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>position</td>
  <td><a href="../ilatlng/README.md">ILatLng</a></td>
  <td>marker position</td>
</tr>
<tr>
  <td>icon</td>
  <td>string | <a href="../markericon/README.md">MarkerIcon</a></td>
  <td>(optional)The icon image url or properties. Also you can specify HTML Color values. Alternatively you can specify the image as Base64. Please check out the <a href="../markericon/README.md">MarkerIcon</a> page.</td>
</tr>
<tr>
  <td>title</td>
  <td>string</td>
  <td>(optional)The content of the infoWindow. If you use HtmlInfoWindow, you can not set this property.</td>
</tr>
<tr>
  <td>snippet</td>
  <td>string</td>
  <td>(optional)The snippet of the infoWindow. If you use HtmlInfoWindow, you can not set this property.</td>
</tr>
<tr>
  <td>infoWindowAnchor</td>
  <td>[x: number, y: number]</td>
  <td>(optional)Specify the anchor of the InfoWindow in pixels</td>
</tr>
<tr>
  <td>anchor</td>
  <td>[x: number, y: number]</td>
  <td>(optional)Specify the anchor of icon image in pixels</td>
</tr>
<tr>
  <td>draggable</td>
  <td>boolean</td>
  <td>(optional)Set true if you want to enable to drag the marker. (Default: false) Important! Drag starts after long pressed on the marker.</td>
</tr>
<tr>
  <td>flat</td>
  <td>boolean</td>
  <td>(optional)Set true if you want to use a flat marker. (Default: false)</td>
</tr>
<tr>
  <td>rotation</td>
  <td>number</td>
  <td>(optional)Set rotation angle. (Default: 0)</td>
</tr>
<tr>
  <td>visible</td>
  <td>boolean</td>
  <td>(optional)Set false if you want to hide. (Default: true)</td>
</tr>
<tr>
  <td>styles</td>
  <td>{<br>
'text-align': (left, center, right),<br>
'font-style': (normal, italic),<br>
'font-weight': (normal, bold),<br>
'color': (red, #ccffcc, rgb(90, 32 100), etc)<br>
}</td>
  <td>(optional)Specify the options for title. This property work for normal InfoWindow.</td>
</tr>
<tr>
  <td>animation</td>
  <td>string</td>
  <td>(optional)Which animation to play when marker is added to a map.</td>
</tr>
<tr>
  <td>zIndex</td>
  <td>number</td>
  <td>(optional)Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.</td>
</tr>
<tr>
  <td>disableAutoPan</td>
  <td>boolean</td>
  <td>(optional)Set to true to disable auto panning when the marker is clicked.</td>
</tr>
</table>
