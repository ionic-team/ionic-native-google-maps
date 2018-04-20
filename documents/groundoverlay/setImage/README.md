# groundOverlay.setImage()

Change the image of the ground overlay.

```
groundOverlay.setImage(url);
```


## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
url            | string        | image url or path
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
    target: bounds
  }
});

// Add ground overlay
var groundOverlay = map.addGroundOverlay({
  'url': "../images/newark_nj_1922.jpg",
  'bounds': bounds,
  'opacity': 0.5,
  'clickable': true  // default = false
});

// Catch the GROUND_OVERLAY_CLICK event
groundOverlay.on(plugin.google.maps.event.GROUND_OVERLAY_CLICK, onClick);


function onClick(latLng) {

  // Change the image url.
  var groundOverlay = this;
  groundOverlay.setImage("../images/newark_nj_1922_2.jpg");

}
```

![](image.gif)
