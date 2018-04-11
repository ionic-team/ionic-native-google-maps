# Encoding class

## Instance method

### decodePath(encoded, precision?)

Decodes an encoded path string into a sequence of LatLngs.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>encoded</td>
  <td>string</td>
  <td>an encoded path string</td>
</tr>
<tr>
  <td>precision</td>
  <td>number</td>
  <td>(optional) default: 5</td>
</tr>
</table>

:arrow_right: `Array<ILatLng>`


### encodePath(path)

Encodes a sequence of LatLngs into an encoded path string.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>path</td>
  <td>Array&lt;<a href="../ilatlng/README.md">ILatLng</a> | <a href="../basearrayclass/README.md">BaseArrayClass</a>&lt;<a href="../ilatlng/README.md">ILatLng</a>&gt;</td>
  <td>a sequence of LatLngs</td>
</tr>
</table>

:arrow_right: `string`
