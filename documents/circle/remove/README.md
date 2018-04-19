# circle.remove()

Remove the circle.

```
circle.remove()
```

------------------------------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas"></div>
```

```js
var GOOGLE = {"lat" : 37.422858, "lng" : -122.085065};
var mapDiv = document.getElementById("map_canvas");
var map = plugin.google.maps.Map.getMap(mapDiv);

// Add a circle
var circle = map.addCircle({
  'center': GOOGLE,
  'radius': 300,
  'strokeColor' : '#AA00FF',
  'strokeWidth': 5,
  'fillColor' : '#880000',
  'clickable' : true   // default = false
);

map.moveCamera({
  target: circle.getBounds()
});

// Catch the circle_CLICK event
circle.on(plugin.google.maps.event.CIRCLE_CLICK, function() {

  // Remove the circle
  circle.remove();

});
```

![](image.gif)
