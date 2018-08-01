# TileOverlayOptions interface

```typescript

let options: TileOverlayOptions = {
  getTile: (x: number, y: number, zoom: number) => {
    return "http://tile.stamen.com/watercolor/" + zoom + "/" + x + "/" + y + ".jpg";
  },

  visible: true,

  zIndex: 0,

  tileSize: 512,

  opacity: 1.0,

  debug: false
};

this.map.addTileOverlay(options);
```

## Interface members

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>getTile</td>
  <td>function</td>
  <td>This callback must Returns string of image URL. If no tile, you need to Returns null.</td>
</tr>
<tr>
  <td>visible</td>
  <td>boolean</td>
  <td>(optional)Set false if you want to create invisible tilelayer.(Default is true)</td>
</tr>
<tr>
  <td>zIndex</td>
  <td>number</td>
  <td>(optional)Hierarchy z-index of tilelayer</td>
</tr>
<tr>
  <td>tileSize</td>
  <td>number</td>
  <td>(optional)Default: 512px</td>
</tr>
<tr>
  <td>opacity</td>
  <td>number</td>
  <td>(optional)from 0.0 to 1.0</td>
</tr>
<tr>
  <td>debug</td>
  <td>boolean</td>
  <td>(optional)Set true if you want to display the tile information over the tile images.</td>
</tr>
</table>
