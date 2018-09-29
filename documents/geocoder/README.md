# Geocoder class

- [:orange_book: geocoding](./geocoding/README.md)
- [:orange_book: reverse geocoding](./reverse_geocoding/README.md)

---------------------------------------------------------------
## API Reference
---------------------------------------------------------------

## Static method

- ### geocode(options?)

  Converts position to address and vice versa.

  Please check out the <a href="../geocoderrequest/README.md">GeocoderRequest</a> page.

  <table>
  <tr>
    <th>Params</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>request</td>
    <td><a href="../geocoderrequest/README.md">GeocoderRequest</a></td>
    <td>request parameter</td>
  </tr>
  </table>

  :arrow_right: Returns `Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>`
