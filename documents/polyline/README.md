# Polyline class

```typescript
this.map.addPolyline(options: PolylineOptions).then((polyline: Polyline) => {

});
```

---------------------------------------------------------------
## API Reference
---------------------------------------------------------------


## Instance methods

  - ### getId()

    Returns the ID of instance.

    :arrow_right: Returns `string`

  - ### getMap()

    Return the map instance.

    :arrow_right: Returns [GoogleMap](../googlemap/README.md) instance.

  - ### setPoints(points)

    Changes the polyline points.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>points</td>
      <td><a href="../ilatlng/README.md">ILatLng</a>[]</td>
      <td>new position</td>
    </tr>
    </table>


  - ### getPoints()

    Returns an instance of the BaseArrayClass. You can modify the points.

    :arrow_right: Returns [BaseArrayClass](../basearrayclass/README.md)&lt;ILatLng&gt;.

  - ### setGeoDesic(geoDesic)

    When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>geoDesic</td>
      <td>boolean</td>
      <td>true or false</td>
    </tr>
    </table>


  - ### getGeodesic()

    Returns true if the polyline is geodesic

    :arrow_right: Returns `boolean`.

  - ### setStrokeWidth(strokeWidth)

    Changes the stroke width.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>strokeWidth</td>
      <td>number</td>
      <td>stroke width in pixel</td>
    </tr>
    </table>


  - ### getStrokeWidth()

    Returns the current stroke width (unit: pixel).

    :arrow_right: Returns `number`.

  - ### setStrokeColor(color)

    Changes the polyline color

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>color</td>
      <td>string</td>
      <td>HTML color strings</td>
    </tr>
    </table>


  - ### getStrokeColor()

    Returns the current stroke color.

    :arrow_right: Returns `string`.


  - ### setClickable(clickable)

    Changes click-ability of the polyline

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>clickable</td>
      <td>boolean</td>
      <td>true or false</td>
    </tr>
    </table>


  - ### getClickable()

    Returns true if the polyline is clickable.

    :arrow_right: Returns `boolean`.

  - ### setVisible(clickable)

    Set polyline visibility

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>visible</td>
      <td>boolean</td>
      <td>true or false</td>
    </tr>
    </table>


  - ### getVisible()

    Returns true if the polyline is visible.

    :arrow_right: Returns `boolean`.


  - ### setZIndex(index)

    Changes the polyline zIndex order.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>index</td>
      <td>number</td>
      <td>z-index</td>
    </tr>
    </table>


  - ### getZIndex()

    Returns the current polyline zIndex.

    :arrow_right: Returns `number`.

  - ### remove()

    Remove the polyline.
