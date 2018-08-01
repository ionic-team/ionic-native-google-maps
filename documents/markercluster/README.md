# MarkerCluster class

```typescript
this.map.addMarkerCluster(options: MarkerClusterOptions).then((markercluster: MarkerCluster) => {

});
```


## Instance methods

### getId()

Returns the ID of instance.

:arrow_right: Returns `string`

### getMap()

Return the map instance.

:arrow_right: Returns [GoogleMap](../googlemap/README.md) instance.

### addMarker(location, skipRedraw?)

Add one marker location.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>location</td>
  <td><a href="../markeroptions/README.md">MarkerOptions</a></td>
  <td>one location</td>
</tr>
<tr>
  <td>skipRedraw</td>
  <td>boolean</td>
  <td>(optional)marker cluster does not redraw the marker cluster if true.</td>
</tr>
</table>

### addMarkers(markers)

Add marker locations

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>location</td>
  <td>Array&lt;<a href="../markeroptions/README.md">MarkerOptions</a>&gt;</td>
  <td>multiple location</td>
</tr>
</table>

### remove()

Remove the marke cluster.
