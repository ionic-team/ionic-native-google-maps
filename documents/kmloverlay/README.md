# KmlOverlay class

```typescript
this.map.addKmlOverlay(options: KmlOverlayOptions).then((kmlOverlay: KmlOverlay) => {

});
```


---------------------------------------------------------------
## API Reference
---------------------------------------------------------------

## Instance properties


<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>camera</td>
  <td><a href="ilatlng/README.md">ILatLng</a>[]</td>
  <td>Camera target bounds that contains all overlays</td>
</tr>
<tr>
  <td>kmlData</td>
  <td>any</td>
  <td>Kml data</td>
</tr>
</table>

---------------------------------------------------------------

## Instance methods

  - ### getId()

    Returns the ID of instance.

    :arrow_right: Returns `string`

  - ### getMap()

    Returns the map instance.

    :arrow_right: Returns [GoogleMap](../googlemap/README.md) instance.

  - ### getDefaultViewport()

    Returns the viewport to contains all overlays

    :arrow_right: Returns [CameraPosition](../cameraposition/README.md)&lt;[ILatLng](../ilatlng/README.md) | [ILatLng[]](../ilatlng/README.md)&gt;.


  - ### setVisible(visible)

    Set marker visibility

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

    Returns true if the marker is visible.

    :arrow_right: Returns `boolean`.


  - ### setClickable(clickable)

    Changes click-ability of the KmlOverlay

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

    Returns true if the KmlOverlay is clickable.

    :arrow_right: Returns `boolean`.



  - ### remove()

    Remove the KmlOverlay
