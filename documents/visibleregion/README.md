# VisibleRegion Class

```typescript
let visibleRegion: VisibleRegion = this.map.getVisibleRegion();
```

------

## Instance properties

### northeast: [ILatLng](../ilatlng/README.md)

The northeast of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
Since the map view is able to rotate, the farRight is not the same as the northeast.


### southwest: [ILatLng](../ilatlng/README.md)

The southwest of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
Since the map view is able to rotate, the nearLeft is not the same as the southwest.

### farLeft: [ILatLng](../ilatlng/README.md)

The nearRight indicates the lat/lng of the top-left of the map view.

### farRight: [ILatLng](../ilatlng/README.md)

The nearRight indicates the lat/lng of the top-right of the map view.

### nearLeft: [ILatLng](../ilatlng/README.md)

The nearRight indicates the lat/lng of the bottom-left of the map view.

### nearRight: [ILatLng](../ilatlng/README.md)

The nearRight indicates the lat/lng of the bottom-right of the map view.

### type: string

`VisibleRegion`

------

## Instance methods

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
