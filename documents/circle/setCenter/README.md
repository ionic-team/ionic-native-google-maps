# circle.setCenter()

Change the center position of the Circle.

```
circle.setCenter(latLng);
```


## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
latLng         | LatLng        | new center position
-----------------------------------------------------------------------


## Demo code

```html
<div id="map_canvas"></div>
```

```js
var GOOGLE = {"lat" : 37.422858, "lng" : -122.085065};
var mapDiv = document.getElementById("map_canvas");
var map = plugin.google.maps.Map.getMap(mapDiv);

// Add circle
var circle = map.addCircle({
  'center': GOOGLE,
  'radius': 300,
  'strokeColor' : '#AA00FF',
  'strokeWidth': 5,
  'fillColor' : '#880000'
});

map.moveCamera({
  target: circle.getBounds(),
  padding: 50
});

var marker = map.addMarker({
  position: circle.getCenter(),
  draggable: true,
  title: "Drag me!"
});

marker.showInfoWindow();

// If the marker moves, the center property is also changed.
marker.bindTo("position", circle, "center");
```

![](image.gif)
