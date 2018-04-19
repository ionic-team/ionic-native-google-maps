# Circle class

```typescript
this.map.addCircle(options: CircleOptions).then((circle: Circle) => {

});
```


## Instance methods

### getId()

Returns the ID of instance.

:arrow_right: Returns `string`

### getMap()

Return the map instance.

:arrow_right: Returns [GoogleMap](../googlemap/README.md) instance.

### setCenter(latLng)

Changes the center position.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>latLng</td>
  <td><a href="../ilatlng/README.md">ILatLng</a></td>
  <td>new position</td>
</tr>
</table>


### getCenter()

Returns the current center position

:arrow_right: Returns [ILatLng](../ilatlng/README.md).


### setRadius(radius)

Changes the circle radius.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>radius</td>
  <td>number</td>
  <td>Radius in meter</td>
</tr>
</table>


### getRadius()

Returns the current circle radius.

:arrow_right: Returns `number`.

### setFillColor(color)

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


### getFillColor()

Returns the current circle filling color (inner color).

:arrow_right: Returns `string`.

### getRadius()

Returns the current circle radius.

:arrow_right: Returns `number`.

### setStrokeWidth(strokeWidth)

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


### getStrokeWidth()

Returns the current circle stroke width (unit: pixel).

:arrow_right: Returns `number`.

### setStrokeColor(color)

Changes the stroke color (outter color).

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


### getStrokeColor()

Returns the current circle stroke color (outer color).

:arrow_right: Returns `string`.


### setClickable(clickable)

Changes click-ability of the circle.

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


### getClickable()

Returns true if the circle is clickable.

:arrow_right: Returns `boolean`.

### setVisible(clickable)

Set circle visibility

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


### getVisible()

Returns true if the circle is visible.

:arrow_right: Returns `boolean`.


### getBounds()

Returns the latLngBounds (rectangle) that contains the circle.

:arrow_right: Returns [LatLngBounds](../latlngbounds/README.md).


### setZIndex(index)

Changes the circle zIndex order.

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


### getZIndex()

Returns the current circle zIndex.

:arrow_right: Returns `number`.

### remove()

Remove the circle.
