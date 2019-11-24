# Marker class

```typescript
this.map.addMarker(options: MarkerOptions).then((marker: Marker) => {

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

  - ### setPosition(position)

    Set the marker position.

    
    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>position</td>
      <td><a href="../ilatlng/README.md">ILatLng</a></td>
      <td>new position</td>
    </tr>
    </table>
    
  - ### getPosition()

    Returns the marker position.

    :arrow_right: Returns <a href="../ilatlng/README.md">ILatLng</a>.

  - ### showInfoWindow()

    Show the normal infoWindow of the marker.

  - ### hideInfoWindow()

    Hide the normal infoWindow of the marker.

  - ### setAnimation(animation)

    Specify the animation either `DROP` or `BOUNCE`.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>animation</td>
      <td>string</td>
      <td>`DROP` or `BOUNCE`</td>
    </tr>
    </table>

  - ### setDisableAutoPan(disableAutoPan)

    Set true if you **do not want** to move the map when you click on the marker.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>disableAutoPan</td>
      <td>boolean</td>
      <td>true or false</td>
    </tr>
    </table>



  - ### setTitle(title)

    Changes title of the normal infoWindow.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>title</td>
      <td>string</td>
      <td>new title</td>
    </tr>
    </table>


  - ### getTile()

    Returns the current title strings.

    :arrow_right: Returns `string`.



  - ### setSnippet(snippet)

    Changes snippet of the normal infoWindow.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>snippet</td>
      <td>string</td>
      <td>new snippet</td>
    </tr>
    </table>


  - ### getSnippet()

    Returns the current snippet strings.

    :arrow_right: Returns `string`.



  - ### setIconAnchor(x, y)

    Changes the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>x</td>
      <td>number</td>
      <td>Distance from left of the icon image in pixels.</td>
    </tr>
    <tr>
      <td>y</td>
      <td>number</td>
      <td>Distance from top of the icon image in pixels.</td>
    </tr>
    </table>


  - ### setInfoWindowAnchor(x, y)

    Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>x</td>
      <td>number</td>
      <td>Distance from left of the icon image in pixels.</td>
    </tr>
    <tr>
      <td>y</td>
      <td>number</td>
      <td>Distance from top of the icon image in pixels.</td>
    </tr>
    </table>


  - ### isInfoWindowShown()

    Returns true if the infoWindow is shown on the marker

    :arrow_right: Returns `boolean`.


  - ### setDraggable(draggable)

    Set true if you allow all users to drag the marker.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>draggable</td>
      <td>boolean</td>
      <td>true or false</td>
    </tr>
    </table>

  - ### isDraggable(draggable)

    Returns true if the marker drag is enabled.

    :arrow_right: Returns `boolean`.


  - ### setFlat(flat)

    Set true if you want the marker to become flat.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>flat</td>
      <td>boolean</td>
      <td>true or false</td>
    </tr>
    </table>

  - ### setIcon(icon)

    Sets the marker's Icon.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>icon</td>
      <td><a href="../markericon/README.md">MarkerIcon</a></td>
      <td>new image</td>
    </tr>
    </table>

  - ### setOpacity(opacity)

    Changes the opacity of the marker from 0.0 to 1.0

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

    Returns the marker rotation angle.

    :arrow_right: Returns `number`.

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


  - ### isVisible()

    Returns true if the marker is visible.

    :arrow_right: Returns `boolean`.


  - ### setZIndex(index)

    Changes the marker zIndex order.

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

    Returns the current marker zIndex.

    :arrow_right: Returns `number`.

  - ### remove()

    Remove the marker.
