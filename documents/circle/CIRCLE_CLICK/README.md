# event : CIRCLE_CLICK

The CIRCLE_CLICK event is fired when you click on the circle.

```
circle.on(plugin.google.maps.event.CIRCLE_CLICK, onCircleClick);

function onCircleClick(latLng) {
  var circle = this;
}
```

## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
latLng         | LatLng        | clicked position
-----------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas"></div>
```

```js
var GOOGLE = {"lat" : 37.422858, "lng" : -122.085065};
var mapDiv = document.getElementById("map_canvas");
var map = plugin.google.maps.Map.getMap(mapDiv, {
  camera: {
    target: GOOGLE
  },
  gestures: {
    'scroll': false,
    'tilt': false,
    'rotate': false,
    'zoom': false
  }
});

// Add a circle
var circle = map.addCircle({
  'center': GOOGLE,
  'radius': 300,
  'strokeColor' : '#AA00FF',
  'strokeWidth': 5,
  'fillColor' : '#880000',
  'clickable' : true   // default = false
});

map.moveCamera({
  target: circle.getBounds()
});

// Catch the CIRCLE_CLICK event
circle.on(plugin.google.maps.event.CIRCLE_CLICK, function(latLng) {

  // You can change the style for instance.
  circle.setFillColor("blue");
  circle.setStrokeColor("green");
  circle.setStrokeWidth(10);

  // If you want to get the map instance,
  // use the circle.getMap() method.
  // The circle.getMap() method returns the map instance
  // which is bound to the circle.
  var map = circle.getMap();
  var marker = map.addMarker({
      position: latLng,
      title: "You clicked here on the circle!",
      snippet: latLng.toUrlValue()
  });
  marker.showInfoWindow();

});
```

![](image.gif)
