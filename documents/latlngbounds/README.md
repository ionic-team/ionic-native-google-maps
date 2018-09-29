# LatLngBounds Class

```typescript
let bounds: LatLngBounds = new LatLngBounds([
  {"lat": ..., "lng": ...}),
  {"lat": ..., "lng": ...}),
  {"lat": ..., "lng": ...}),
  {"lat": ..., "lng": ...})
]);
```

## new LatLngBounds(points?)

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>points</td>
  <td><a href="../ilatlngbounds/README.md">LatLngBounds</a>[]</td>
  <td>(optional)ILatLng[]</td>
</tr>
</table>

------

## Instance properties


<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>northeast</td>
  <td><a href="ilatlng/README.md">ILatLng</a></td>
  <td>The northeast of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
  Since the map view is able to rotate, the farRight is not the same as the northeast.</td>
</tr>
<tr>
  <td>southwest</td>
  <td><a href="ilatlng/README.md">ILatLng</a></td>
  <td>The southwest of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
  Since the map view is able to rotate, the nearLeft is not the same as the southwest.</td>
</tr>
<tr>
  <td>type</td>
  <td>string</td>
  <td>`LatLngBounds`</td>
</tr>
</table>

------

## Instance method


### toString()

Converts to string

:arrow_right: Returns `string`


### toUrlValue(precision?)

Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>precision</td>
  <td>number</td>
  <td>(optional)precision. Default is 6</td>
</tr>
</table>

:arrow_right: Returns `string`


### extend(latLng)

Extends this bounds to contain the given point.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>latLng</td>
  <td><a href="../ilatlng/README.md">ILatLng</a></td>
  <td>another point</td>
</tr>
</table>

### contains(latLng)

Returns true if the given lat/lng is in this bounds.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>latLng</td>
  <td><a href="../ilatlng/README.md">ILatLng</a></td>
  <td>point</td>
</tr>
</table>

:arrow_right: Returns `boolean`


### getCenter()

Computes the center of this LatLngBounds

:arrow_right: Returns `LatLng`
