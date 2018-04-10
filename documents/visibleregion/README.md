# VisibleRegion Class

```typescript
let visibleRegion: VisibleRegion = this.map.getVisibleRegion();
```

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
  <td>farLeft</td>
  <td><a href="ilatlng/README.md">ILatLng</a></td>
  <td>The farLeft indicates the lat/lng of the top-left of the map view.</td>
</tr>
<tr>
  <td>farRight</td>
  <td><a href="ilatlng/README.md">ILatLng</a></td>
  <td>The farRight indicates the lat/lng of the top-right of the map view.</td>
</tr>
<tr>
  <td>nearLeft</td>
  <td><a href="ilatlng/README.md">ILatLng</a></td>
  <td>The nearLeft indicates the lat/lng of the bottom-left of the map view.</td>
</tr>
<tr>
  <td>nearRight</td>
  <td><a href="ilatlng/README.md">ILatLng</a></td>
  <td>The nearRight indicates the lat/lng of the bottom-left of the map view.</td>
</tr>
<tr>
  <td>type</td>
  <td>string</td>
  <td>`VisibleRegion`</td>
</tr>
</table>


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
