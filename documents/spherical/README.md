# Spherical class

---------------------------------------------------------------
## API Reference
---------------------------------------------------------------

## Static method

  - ### computeDistanceBetween(locationA, locationB)

    Returns the distance, in meters, between two LatLngs.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>locationA</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>origin</td>
    </tr>
    <tr>
      <td>locationB</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>destination</td>
    </tr>
    </table>

    :arrow_right: `number`


  - ### computeOffset(from, distance, heading)

    Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>from</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>origin</td>
    </tr>
    <tr>
      <td>distances</td>
      <td>number</td>
      <td>in meter</td>
    </tr>
    <tr>
      <td>heading</td>
      <td>number</td>
      <td>angle(clockwise)</td>
    </tr>
    </table>

    :arrow_right: <a href="../latlng">LatLng</a>

  - ### computeOffsetOrigin(to, distance, heading)

    Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>to</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>destination</td>
    </tr>
    <tr>
      <td>distances</td>
      <td>number</td>
      <td>in meter</td>
    </tr>
    <tr>
      <td>heading</td>
      <td>number</td>
      <td>angle(clockwise)</td>
    </tr>
    </table>

    :arrow_right: <a href="../latlng">LatLng</a>


  - ### computeLength(path)

    Returns the length of the given path.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>path</td>
      <td><a href="../ilatlng/README.md">ILatLng</a>[] | <a href="../basearrayclass/README.md">BaseArrayClass</a>&lt;<a href="../ilatlng/README.md">ILatLng</a>&gt;</td>
      <td>a sequence of LatLngs</td>
    </tr>
    </table>

    :arrow_right: `number`


  - ### computeArea(path)

    Returns the area of a closed path. The computed area uses the same units as the radius.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>path</td>
      <td><a href="../ilatlng/README.md">ILatLng</a>[] | <a href="../basearrayclass/README.md">BaseArrayClass</a>&lt;<a href="../ilatlng/README.md">ILatLng</a>&gt;</td>
      <td>a sequence of LatLngs</td>
    </tr>
    </table>

    :arrow_right: `number`



  - ### computeSignedArea(path)

    Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>path</td>
      <td><a href="../ilatlng/README.md">ILatLng</a>[] | <a href="../basearrayclass/README.md">BaseArrayClass</a>&lt;<a href="../ilatlng/README.md">ILatLng</a>&gt;</td>
      <td>a sequence of LatLngs</td>
    </tr>
    </table>

    :arrow_right: `number`



  - ### computeHeading(from, to)

    Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>from</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>origin</td>
    </tr>
    <tr>
      <td>to</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>destination</td>
    </tr>
    </table>

    :arrow_right: `number`



  - ### interpolate(from, to, fraction)

    Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>from</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>origin</td>
    </tr>
    <tr>
      <td>to</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>destination</td>
    </tr>
    <tr>
      <td>fraction</td>
      <td>number</td>
      <td>A fraction of the distance to travel from 0.0 to 1.0 .</td>
    </tr>
    </table>

    :arrow_right: <a href="../latlng">LatLng</a>
