# groundOverlay.setBounds()

Change the bounds of the ground overlay.

```
groundOverlay.setBounds(bounds);
```


## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
bounds         | ILatLng[2]    | new southWest and northEast
-----------------------------------------------------------------------


## Demo code

```html
<div id="map_canvas"></div>
```

```typescript
var bounds = [
  {"lat": 40.712216, "lng": -74.22655},
  {"lat": 40.773941, "lng": -74.12544}
];
var mapDiv = document.getElementById("map_canvas");
var map = plugin.google.maps.Map.getMap(mapDiv, {
  camera: {
    target: bounds,
    padding: 50
  }
});


// Add ground overlay
var groundOverlay = map.addGroundOverlay({
  'url': "../images/newark_nj_1922.jpg",
  'bounds': bounds,
  'opacity': 1
});

var markers = bounds.map(function(position) {
  var marker = map.addMarker({
    position: position,
    draggable: true
  });
  marker.on("position_changed", onChanged.bind(groundOverlay));

  return marker;
});

function onChanged() {
  var groundOverlay = this;  // since onChanged.bind() method.

  groundOverlay.setBounds([
    markers[0].getPosition(),
    markers[1].getPosition()
  ]);
}
```

![](image.gif)
