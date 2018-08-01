# event: GROUND_OVERLAY_CLICK

The GROUND_OVERLAY_CLICK event is fired when you click on the ground overlay.

```
groundOverlay.on(plugin.google.maps.event.GROUND_OVERLAY_CLICK, onGroundOverlayClick);

function onGroundOverlayClick(latLng) {
  var groundOverlay = this;
}
```

## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
latLng         | LatLng        | clicked position
-----------------------------------------------------------------------

## Demo code

```typescript
<div id="map_canvas"></div>
```

```typescript
map: GoogleMap;

loadMap() {
  let bounds: ILatLng[] = [
    {"lat": 40.712216, "lng": -74.22655},
    {"lat": 40.773941, "lng": -74.12544}
  ];

  this.map = GoogleMaps.create("map_canvas", {
    camera: {
      target: bounds
    }
  });

  // Add ground overlay
  let groundOverlay: GroundOverlay = this.map.addGroundOverlaySync({
    'url': "assets/newark_nj_1922.jpg",
    'bounds': bounds,
    'opacity': 0.5,
    'clickable': true  // default = false
  });

  // Catch the GROUND_OVERLAY_CLICK event
  groundOverlay.on(GoogleMapsEvent.GROUND_OVERLAY_CLICK).subscribe(this.onClick.bind(this));

}

onClick(params: any[]) {
  let latLng: LatLng = params[0];
  let groundOverlay: GroundOverlay = params[1];

  // Change the opacity of the ground overlay.
  groundOverlay.setOpacity(1.0);

  let marker: Marker = this.map.addMarkerSync({
    'position': latLng,
    'title': "You clicked here on the ground overlay!",
    'snippet': latLng.toUrlValue()
  });

  marker.showInfoWindow();
}
```

![](image.gif)
