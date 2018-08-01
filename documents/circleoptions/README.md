# CircleOptions interface

```typescript
let options: CircleOptions = {
  'center': {'lat' : 37.422858, 'lng' : -122.085065},
  'radius': 300,
  'strokeColor' : '#AA00FF',
  'strokeWidth': 5,
  'fillColor' : '#880000'
};

this.map.addCircle(options).then((circle: Circle) => {

});
```

------

## interface members

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>center</td>
  <td><a href="ilatlng/README.md">ILatLng</a></td>
  <td>Center position of circle</td>
</tr>
<tr>
  <td>radius</td>
  <td>number</td>
  <td>Radius of circle in meter</td>
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
  <td>(optional)Set the inside color of circle(rgb, rgba, #RRGGBB, "colorname", ...etc)</td>
</tr>
<tr>
  <td>clickable</td>
  <td>boolean</td>
  <td>(optional)Set to true to receive the CIRCLE_CLICK event(default: false)</td>
</tr>
<tr>
  <td>visible</td>
  <td>boolean</td>
  <td>(optional)Set to false to hide(default: true)</td>
</tr>
<tr>
  <td>zIndex</td>
  <td>number</td>
  <td>(optional)Z-index</td>
</tr>
</table>
