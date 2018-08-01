# MY_LOCATION_CLICK event

This event is fired when you tap on the location control (blue dot).

```typescript
map.on(GoogleMapsEvent.MY_LOCATION_CLICK).subscribe((params: any[]) => {

})
```

## Parameters

name           | type                                    | description
---------------|-----------------------------------------|---------------------------------------
params[0]      | [MyLocation](../mylocation/README.md)   | last location (mostly the current location)
params[1]      | GoogleMap                               | map instance itself


----------------------------------------------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas"></div>
```

```typescript
LocationService.getMyLocation().then((result: MyLocation) => {

  // Display the current location map
  this.map = GoogleMaps.create('map_canvas', {
    "camera": {
      "target": {
        "lat": 37.422858,
        "lng": -122.085065
      },
      "zoom": 15
    },
    'controls': {
      'myLocationButton': true,
      'myLocation': true  // try `myLocation = false`
    }
  });
  this.map.on(GoogleMapsEvent.MY_LOCATION_CLICK).subscribe((location: MyLocation) => {
    let marker: Marker = map.addMarkerSync({
      'title': ["Current your location:\n",
          "latitude:" + location.latLng.lat.toFixed(3),
          "longitude:" + location.latLng.lng.toFixed(3),
          "speed:" + location.speed,
          "time:" + location.time,
          "bearing:" + location.bearing].join("\n"),
      'position': location.latLng,
      'animation': plugin.google.maps.Animation.DROP,
      'disableAutoPan': true
    });
    marker.showInfoWindow();
  });
});
```
