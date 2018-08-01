# map.addCircleSync()

The map.addCircle() method adds a circle onto the map **synchronously**.

```typescript
let circle: Circle = map.addCircleSync(options);
```

## Parameters

name           | type                                             | description
---------------|--------------------------------------------------|---------------------------------------
options        | [CircleOptions](../../circleoptions/README.md)   | circle options

## Return value

:arrow_right: Returns `Circle`

----------------------------------------------------------------------------------------------------------


## Demo code

```html
<div class="map" id="map_canvas"></div>
```

```typescript
map: GoogleMap;

loadMap() {
  let GOOGLE: ILatLng = {"lat" : 37.422858, "lng" : -122.085065};
  this.map = GoogleMaps.create('map_canvas');

  // Add circle
  let circle: Circle = this.map.addCircle({
    'center': GOOGLE,
    'radius': 300,
    'strokeColor' : '#AA00FF',
    'strokeWidth': 5,
    'fillColor' : '#880000'
  });

  // Fit the map camera to circle
  this.map.moveCamera({
    target: circle.getBounds()
  });
}
```

![](image.png)
