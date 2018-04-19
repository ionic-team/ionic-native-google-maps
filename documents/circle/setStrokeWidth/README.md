# circle.setStrokeWidth()

Change the stroke width of the circle.

```
circle.setStrokeWidth(width);
```

## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
width          | number        | The width of the circle's outline in screen pixels.
-----------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas"></div>
```

```js
var mapDiv = document.getElementById("map_canvas");
var map = plugin.google.maps.Map.getMap(mapDiv);

showVirtualDialog(mapDiv, "Click on the circle!");

// Add circle
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

circle.on(plugin.google.maps.event.CIRCLE_CLICK, function(latLng) {

  // Change the stroke width
  circle.setStrokeWidth(20);

});
```

![](image.gif)
