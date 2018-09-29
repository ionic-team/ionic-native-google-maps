# GroundOverlayOptions interface

```typescript
let bounds: ILatLng[] = [
  {"lat": 40.712216, "lng": -74.22655},
  {"lat": 40.773941, "lng": -74.12544}
];
let options: GroundOverlayOptions = {
  'url': 'assets/imgs/newark_nj_1922.jpg',
  'bounds': bounds,
  'opacity': 0.5,
  'clickable': true
};
this.map.addGroundOverlay(options).then((groundOverlay: GroundOverlay) => {

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
  <td>url</td>
  <td>string</td>
  <td>URL of overlay</td>
</tr>
<tr>
  <td>bounds</td>
  <td><a href="../ilatlng/README.md">ILatLng</a>[]</td>
  <td>You need to specify south-west, and north-east points</td>
</tr>
<tr>
  <td>clickable</td>
  <td>boolean</td>
  <td>(optional)Set to true to receive the GROUND_OVERLAY_CLICK event(default: false)</td>
</tr>
<tr>
  <td>visible</td>
  <td>boolean</td>
  <td>(optional)Set false if you want to hide. (Default: true)</td>
</tr>
<tr>
  <td>opacity</td>
  <td>number</td>
  <td>(optional)From 0.0 to 1.0 .</td>
</tr>
<tr>
  <td>zIndex</td>
  <td>number</td>
  <td>(optional)Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.</td>
</tr>
<tr>
  <td>bearing</td>
  <td>number</td>
  <td>(optional)Bearing</td>
</tr>
</table>
