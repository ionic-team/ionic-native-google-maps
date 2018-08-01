# LatLng Class

```typescript
let position: LatLng = new LatLng(35.12345, -127.01234);
```

## new LatLng(lat, lng)

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>lat</td>
  <td>number</td>
  <td>Latitude</td>
</tr>
<tr>
  <td>lng</td>
  <td>number</td>
  <td>Longitude</td>
</tr>
</table>


## Instance members


### equals(other)

Returns true if both are the same position.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>other</td>
  <td><a href="../ilatlng/README.md">ILatLng</a></td>
  <td>another position</td>
</tr>
</table>

:arrow_right: Returns `boolean`


### toString()

Returns concat strings both `lat` and `lng`.

:arrow_right: Returns `string`


### toUrlValue(precision?)

Returns concat strings both `lat` and `lng`.

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
