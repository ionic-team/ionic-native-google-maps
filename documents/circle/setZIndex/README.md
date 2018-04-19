# circle.setZIndex()

Change the order in which this tile overlay is drawn with respect to other overlays (including GroundOverlays, TileOverlays, Polylines, and Polygons but not Markers).

```
circle.setZIndex(index);
```

## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
index          | number        | z-index (default: 0)
-----------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas">
    <button ion-button (click)="onButtonClick()">
      Reverse the zIndex orders
    </button>
</div>
```


```typescript
map: GoogleMap;
circles: Circle[];

loadMap() {
  let positionList: ILatLng[] = [
    {"lat":14.766787, "lng":-8.437506},
    {"lat":-1.272216, "lng":-1.875007},
    {"lat":17.468444, "lng":12.857131}
  ];
  let colors: string[] = ["green", "blue", "orange"];

  this.map = GoogleMaps.create('map_canvas');

  this.circles = positionList.map((latLng: ILatLng, idx: number) => {

    return this.map.addCircleSync({
      center: position,
      fillColor: colors[idx],
      strokeWidth: 7,
      zIndex: idx,
      radius: 3000000
    });

  });
}

// Change the circle zIndex orders.
onButtonClick() {

  this.circles = this.circles.reverse();
  this.circles.forEach((circle: Circle, idx: number) {
    circle.setZIndex(idx);
  });

}
```

![](image.gif)
