# map.addCircle()

The map.addCircle() method adds a circle onto the map.

```
(from v2.3.0 to current)
var circle = map.addCircle(options)

(from v2.0.0 to v2.2.9)
map.addCircle(options, callback);
```

## Options

params         | type          | description
---------------|------------------------------|---------------------------------------
center         | LatLng        | center position of the map
radius         | number        | radius in meters
strokeColor?   | string        | (optional) stroke color (HTML colors)
strokeWidth?   | number        | (optional) stroke width in pixels
fillColor?     | string        | (optional) inside filling color
clickable?     | boolean       | (optional) set `true` to receive the `CIRCLE_CLICK` event
------------------------------------------------------------------------------------------


## Demo code

```html
<div class="map" id="map_canvas"></div>
```

```js
var GOOGLE = {"lat" : 37.422858, "lng" : -122.085065};
var mapDiv = document.getElementById("map_canvas");
var map = plugin.google.maps.Map.getMap(mapDiv);

map.addEventListener(plugin.google.maps.event.MAP_READY, function() {

  // Add circle
  map.addCircle({
    'center': GOOGLE,
    'radius': 300,
    'strokeColor' : '#AA00FF',
    'strokeWidth': 5,
    'fillColor' : '#880000'
  }, function(circle) {

    map.moveCamera({
      target: circle.getBounds()
    });

  });

});
```

![](image.png)
