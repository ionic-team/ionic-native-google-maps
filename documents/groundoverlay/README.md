# GroundOverlay class

```typescript
this.map.addGroundOverlay(options: GroundOverlayOptions).then((groundOverlay: GroundOverlay) => {

});
```


## Instance methods

### getId()

Returns the ID of instance.

:arrow_right: Returns `string`

### getMap()

Return the map instance.

:arrow_right: Returns [GoogleMap](../googlemap/README.md) instance.

### setBounds(bounds)

Changes the bounds of the GroundOverlay

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>bounds</td>
  <td>Array&lt;<a href="../ilatlng/README.md">ILatLng</a>&gt;</td>
  <td>new bounds</td>
</tr>
</table>



### setBearing(bearing)

Changes the bearing of the ground overlay

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>bearing</td>
  <td>number</td>
  <td>angle (clockwise)</td>
</tr>
</table>


### getBearing()

Returns the current bearing value

:arrow_right: Returns `number`.

### setImage(imageUrl)

Changes the stroke width.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>imageUrl</td>
  <td>string</td>
  <td>URL of image</td>
</tr>
</table>


### setOpacity(opacity)

Changes the opacity of the ground overlay from 0.0 to 1.0

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>opacity</td>
  <td>number</td>
  <td>from 0.0 to 1.0</td>
</tr>
</table>


### getOpacity()

Returns the current opacity

:arrow_right: Returns `number`.


### setClickable(clickable)

Changes click-ability of the ground overlay

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

Returns true if the ground overlay is clickable.

:arrow_right: Returns `boolean`.

### setVisible(clickable)

Set ground overlay visibility

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

Returns true if the ground overlay is visible.

:arrow_right: Returns `boolean`.


### setZIndex(index)

Changes the ground overlay zIndex order.

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

Returns the current ground overlay zIndex.

:arrow_right: Returns `number`.

### remove()

Remove the ground overlay.
