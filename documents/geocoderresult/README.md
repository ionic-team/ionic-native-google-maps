# GeocoderResult interface


## Interface members

Not all fields are filled. Depends on the response of Google and Apple.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>adminArea</td>
  <td>string</td>
</tr>
<tr>
  <td>country</td>
  <td>string</td>
</tr>
<tr>
  <td>extra</td>
  <td>{<br>
&nbsp;&nbsp;featureName: string,<br>
&nbsp;&nbsp;lines: string[],<br>
&nbsp;&nbsp;permises: string,<br>
&nbsp;&nbsp;phone: string,<br>
&nbsp;&nbsp;url: string<br>
}</td>
</tr>
<tr>
  <td>locale</td>
  <td>string</td>
</tr>
<tr>
  <td>locality</td>
  <td>string</td>
</tr>
<tr>
  <td>position</td>
  <td><a href="../ilatlng/README.md">ILatLng</a></td>
</tr>
<tr>
  <td>postalCode</td>
  <td>string</td>
</tr>
<tr>
  <td>subAdminArea</td>
  <td>string</td>
</tr>
<tr>
  <td>subLocality</td>
  <td>string</td>
</tr>
<tr>
  <td>subThoroughfare</td>
  <td>string</td>
</tr>
<tr>
  <td>thoroughfare</td>
  <td>string</td>
</tr>
</table>
