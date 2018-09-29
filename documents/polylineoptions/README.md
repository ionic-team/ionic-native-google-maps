# PolylineOptions interface

```typescript
let HND_AIR_PORT: ILatLng = {lat: 35.548852, lng: 139.784086};
let SFO_AIR_PORT: ILatLng = {lat: 37.615223, lng: -122.389979};
let HNL_AIR_PORT: ILatLng = {lat: 21.324513, lng: -157.925074};
let AIR_PORTS: ILatLng[] = [
  HND_AIR_PORT,
  HNL_AIR_PORT,
  SFO_AIR_PORT
];
let options: PolylineOptions = {
  points: AIR_PORTS,
  color: '#AA00FF',
  width: 10,
  geodesic: true,
  clickable: true
};

this.map.addPolyline(options).then((polyline: Polyline) => {
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
  <td><a href="../ilatlng/README.md">ILatLng</a>[]</td>
  <td>Pass ILatLng[] to specify the vertixes.<br>You need to contain two points at least.</td>
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
  <td>color</td>
  <td>string</td>
  <td>(optional)Set the stroke color(rgb, rgba, #RRGGBB, "colorname", ...etc)</td>
</tr>
<tr>
  <td>width</td>
  <td>number</td>
  <td>(optional)Set the stroke width in pixel</td>
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
