# Polygon class

```typescript
this.map.addPolygon(options: PolygonOptions).then((polygon: Polygon) => {

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

    Changes the polygon points.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>points</td>
      <td>Array&lt;<a href="../ilatlng/README.md">ILatLng</a>&gt;</td>
      <td>new position</td>
    </tr>
    </table>


  - ### getPoints()

    Returns an instance of the BaseArrayClass. You can modify the points.

    :arrow_right: Returns [BaseArrayClass](../basearrayclass/README.md)&lt;<a href="../ilatlng/README.md">ILatLng</a>&gt;.


  - ### setHoles(holes)

    Changes the polygon holes.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>holes</td>
      <td><a href="../ilatlng/README.md">ILatLng</a>[][]</td>
      <td>new holes</td>
    </tr>
    </table>


  - ### getHoles()

    Returns an instance of the BaseArrayClass. You can modify the points.

    :arrow_right: Returns [BaseArrayClass](../basearrayclass/README.md)&lt;ILatLng[]&gt;.

  - ### setGeoDesic(geoDesic)

    When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.

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

    Returns true if the polygon is geodesic

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

    Changes the polygon color

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


  - ### setFillColor(color)

    Changes the filling color (inner color).

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>color</td>
      <td>number</td>
      <td>HTML color strings</td>
    </tr>
    </table>


  - ### getFillColor()

    Returns the current polygon filling color (inner color).

    :arrow_right: Returns `string`.

  - ### setClickable(clickable)

    Changes click-ability of the polygon

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

    Returns true if the polygon is clickable.

    :arrow_right: Returns `boolean`.

  - ### setVisible(clickable)

    Set polygon visibility

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

    Returns true if the polygon is visible.

    :arrow_right: Returns `boolean`.


  - ### setZIndex(index)

    Changes the polygon zIndex order.

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

    Returns the current polygon zIndex.

    :arrow_right: Returns `number`.

  - ### remove()

    Remove the polygon.
