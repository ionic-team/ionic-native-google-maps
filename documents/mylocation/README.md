# MyLocation interface


## Interface members

`(optional)` fields are filled in if the location provider gives those information.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>latLng</td>
  <td><a href="../ilatlng/README.md">ILatLng</a></td>
  <td>device location</td>
</tr>
<tr>
  <td>elapsedRealtimeNanos</td>
  <td>number</td>
  <td>The time in nanoseconds since boot, including time spent in sleep.</td>
</tr>
<tr>
  <td>time</td>
  <td>string</td>
  <td>The time that obtained this information</td>
</tr>
<tr>
  <td>provider</td>
  <td>number</td>
  <td>The provider of this information</td>
</tr>
<tr>
  <td>accuracy</td>
  <td>number</td>
  <td>(optional)The accuracy in meter</td>
</tr>
<tr>
  <td>bearing</td>
  <td>number</td>
  <td>(optional)The bearing of this device</td>
</tr>
<tr>
  <td>altitude</td>
  <td>number</td>
  <td>(optional)The altitude of this device in meter</td>
</tr>
<tr>
  <td>speed</td>
  <td>number</td>
  <td>(optional)The speed of this device</td>
</tr>
</table>
