# CameraPosition interface

**[usage1] The center location of the camera view.**

```typescript
let cameraPos: CameraPosition<ILatLng> = {
  target: {lat: ..., lng: ...},
  zoom: 10
};
```

**[usage2] The zoom property is ignored when you specify multiple position**

```typescript
let cameraPos: CameraPosition<ILatLng[]> = {
  target: [
    {lat: ..., lng: ...},
    {lat: ..., lng: ...},
    {lat: ..., lng: ...}
  ]
};
```

## Interface members

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>target</td>
  <td><a href="../ilatlng/README.md">ILatLng</a> | ILatLng[]</td>
  <td>(optional)camera target</td>
</tr>
<tr>
  <td>tilt</td>
  <td>number</td>
  <td>(optional)View angle</td>
</tr>
<tr>
  <td>zoom</td>
  <td>number</td>
  <td>(optional)zoom level</td>
</tr>
<tr>
  <td>bearing</td>
  <td>number</td>
  <td>(optional)Map orientation</td>
</tr>
<tr>
  <td>padding</td>
  <td>number</td>
  <td>(optional)Camera padding in pixel</td>
</tr>
<tr>
  <td>duration</td>
  <td>number</td>
  <td>(optional)The duration of animation in milliseconds. This property works only for `map.animateCamera()` method.</td>
</tr>
</table>
