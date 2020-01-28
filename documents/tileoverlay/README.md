# TileOverlay class

```typescript
this.map.addTileOverlay(options: TileOverlayOptions).then((tileOverlay: TileOverlay) => {

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


  - ### setFadeIn(fadeIn)

    Set whether the tiles should fade in.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>fadeIn</td>
      <td>boolean</td>
      <td>true or false</td>
    </tr>
    </table>


  - ### getFadeIn()

    Get whether the tiles should fade in

    :arrow_right: Returns `boolean`.


  - ### setOpacity(opacity)

    Changes the opacity of the tile overlay from 0.0 to 1.0

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


  - ### getOpacity()

    Returns the current opacity

    :arrow_right: Returns `number`.

  - ### setVisible(clickable)

    Set tile overlay visibility

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

    Returns true if the tile overlay is visible.

    :arrow_right: Returns `boolean`.


  - ### setZIndex(index)

    Changes the tile overlay zIndex order.

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

    Returns the current tile overlay zIndex.

    :arrow_right: Returns `number`.

    ### getTileSize()

    Get tile size

    :arrow_right: Returns `number`.

  - ### remove()

    Remove the tile overlay.
