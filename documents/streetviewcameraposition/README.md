# StreetViewCameraPano interface

export interface StreetViewCameraPosition {
  target: ILatLng;
  source?: string;
  radius?: number;
  bearing?: number;
  tilt?: number;
  zoom?: number;
}

## Interface members

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>target</td>
  <td><a href="../ilatlng/README.md">ILatLng</a></td>
  <td>Specifies the location where to search for a Street View panorama.</td>
</tr>
<tr>
  <td>source</td>
  <td>string</td>
  <td>(optional)`DEFAULT` or `OUTDOOR`<br>Specifies the source of panoramas to search. This allows a restriction to search for just outdoor panoramas for example. If not specified it is set to DEFAULT.</td>
</tr>
<tr>
  <td>radius</td>
  <td>number</td>
  <td>(optional)Sets a radius in meters in which to search for a panorama. Defaults to 50 when not supplied.</td>
</tr>
<tr>
  <td>zoom</td>
  <td>number</td>
  <td>(optional)Camera zoom level from 0 to 2</td>
</tr>
</table>
