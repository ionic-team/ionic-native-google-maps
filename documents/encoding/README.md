# Encoding class


---------------------------------------------------------------
## API Reference
---------------------------------------------------------------

## Static method

- ### decodePath(encoded, precision?) [:orange_book:](./decodePath/README.md)

  Decodes an encoded path string into a sequence of [LatLng](../latlng/README.md)s.

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

  :arrow_right: Returns `ILatLng[]`


- ### encodePath(path) [:orange_book:](./encodePath/README.md)

  Encodes a sequence of [LatLng](../latlng/README.md)s into an encoded path string.

  <table>
  <tr>
    <th>Params</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>path</td>
    <td><a href="../ilatlng/README.md">ILatLng</a>[] | <a href="../basearrayclass/README.md">BaseArrayClass</a>[<a href="../ilatlng/README.md">ILatLng</a>]</td>
    <td>a sequence of LatLngs</td>
  </tr>
  </table>

  :arrow_right: Returns `string`
