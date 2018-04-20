# groundOverlay.setOpacity()

Change the opacity of the ground overlay. The value range is from 0.0 to 1.0.

```
groundOverlay.setOpacity(opacity);
```


## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
opacity        | number        | opacity from 0.0 to 1.0
-----------------------------------------------------------------------


## Demo code

```html
<div id="map_canvas">
  <span  class="smallPanel">
    Opacity: 0.0&nbsp;<input id="opacityRange" type="range" min="0" max="1" step="0.1" value="0.5">&nbsp;1.0
  </span>
</div>
```

```typescript
var slider = document.getElementById('opacityRange');

var bounds = [
  {"lat": 40.712216, "lng": -74.22655},
  {"lat": 40.773941, "lng": -74.12544}
];
var div = document.getElementById("map_canvas");
var map = plugin.google.maps.Map.getMap(div, {
  camera: {
    target: bounds,
    padding: 40
  }
});

// All gestures (such as pinch-zooming) are disabled.
map.setAllGesturesEnabled(false);

// Add ground overlay
var groundOverlay = map.addGroundOverlay({
  'url': "../images/newark_nj_1922.jpg",
  'bounds': bounds,
  'opacity': 0.5
});

// If the slider is moved, change the ground overlay opacity.
slider.addEventListener('change', function() {
  groundOverlay.setOpacity(this.value);
});

// Set the current value as opacity.
groundOverlay.setOpacity( parseFloat(rangeSlider.noUiSlider.get(), 10) );
```

![](image.gif)
