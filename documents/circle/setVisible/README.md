# circle.setVisible()

Indicates if the circle is visible or invisible.

```
circle.setVisible(flag);
```

## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
flag           | boolean       | `true`: visible, `false`: invisible
-----------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas">
  <button ion-button (click)="toggleVisibility()">
  change the circle visibility
  </button>
</div>
```

```typescript
map: GoogleMap;
circle: Circle;

loadMap() {
  let GOOGLE: ILatLng = {"lat" : 37.422858, "lng" : -122.085065};
  this.map = GoogleMaps.create('map_canvas');

  // Add a circle
  this.circle = this.map.addCircleSync({
    'center': GOOGLE,
    'radius': 300,
    'strokeColor' : '#AA00FF',
    'strokeWidth': 5,
    'fillColor' : '#880000',
    'clickable' : true   // default = false
  });

  this.map.moveCamera({
    target: circle.getBounds(),
    padding: 50
  });
}

toggleVisibility() {

  // Change the visible property
  this.circle.setVisible(!this.marker.getVisible());

}
```
