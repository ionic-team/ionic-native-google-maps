# PolygonOptions interface

```typescript
let GORYOKAKU_POINTS: ILatLng[] = [
  {lat: 41.79883, lng: 140.75675},
  {lat: 41.799240000000005, lng: 140.75875000000002},
  {lat: 41.797650000000004, lng: 140.75905},
  {lat: 41.79637, lng: 140.76018000000002},
  {lat: 41.79567, lng: 140.75845},
  {lat: 41.794470000000004, lng: 140.75714000000002},
  {lat: 41.795010000000005, lng: 140.75611},
  {lat: 41.79477000000001, lng: 140.75484},
  {lat: 41.79576, lng: 140.75475},
  {lat: 41.796150000000004, lng: 140.75364000000002},
  {lat: 41.79744, lng: 140.75454000000002},
  {lat: 41.79909000000001, lng: 140.75465}
];
let options: PoligonOptions = {
  'points': GORYOKAKU_POINTS,
  'strokeColor' : '#AA00FF',
  'fillColor' : '#00FFAA',
  'strokeWidth': 10
};

this.map.addPolygon(options).then((polygon: Polygon) => {
  ...
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
  <td>points</td>
  <td><a href="../ilatlng/README.md">ILatLng[]</td>
  <td>Pass ILatLng[] to specify the vertixes.<br>You need to contain two points at least.</td>
</tr>
<tr>
  <td>holes</td>
  <td><a href="../ilatlng/README.md">ILatLng[][]</td>
  <td>Pass ILatLng[][] to create holes in polygon.</td>
</tr>
<tr>
  <td>visible</td>
  <td>boolean</td>
  <td>(optional)Set false if you want to create invisible polyline. Invisible polyline is not clickable (default true)</td>
</tr>
<tr>
  <td>geodesic</td>
  <td>boolean</td>
  <td>(optional)Set true if you want to draw the curve polyline based on the earth(default: false)</td>
</tr>
<tr>
  <td>strokeColor</td>
  <td>string</td>
  <td>(optional)Set the stroke color(rgb, rgba, #RRGGBB, "colorname", ...etc)</td>
</tr>
<tr>
  <td>strokeWidth</td>
  <td>number</td>
  <td>(optional)Set the stroke width in pixel</td>
</tr>
<tr>
  <td>fillColor</td>
  <td>string</td>
  <td>(optional)Set the inside color of polygon(rgb, rgba, #RRGGBB, "colorname", ...etc)</td>
</tr>
<tr>
  <td>zIndex</td>
  <td>number</td>
  <td>(optional)Hierarchy z-index</td>
</tr>
<tr>
  <td>clickable</td>
  <td>boolean</td>
  <td>(optional)Set true if you want to receive the POLYLINE_CLICK event(default: false)</td>
</tr>
</table>
