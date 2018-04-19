# circle.setVisible()

Indicates if the circle is visible or invisible.

```
circle.setVisible(flag);
```

## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
flag           | boolean       | `true`: visible, `false`M: invisible
-----------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas">
  <span class="smallPanel"><button>Reverse the zIndex orders</button></span>
</div>
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
});

map.moveCamera({
  target: circle.getBounds()
});

var checkbox = document.getElementById("toggleCheckbox");
checkbox.addEventListener("change", function() {

  // Change the visible property
  circle.setVisible(checkbox.checked);
});
```
