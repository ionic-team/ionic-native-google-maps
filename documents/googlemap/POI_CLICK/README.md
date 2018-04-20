# POI_CLICK event

This event is fired when you tap on POIs(such as building icon).

```typescript
map.on(GoogleMapsEvent.POI_CLICK).subscribe((params: any[]) => {

})
```

## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
params[0]      | string        | place id (This is used for Google Places API)
params[1]      | string        | place name
params[2]      | GoogleMap     | map instance itself


----------------------------------------------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas"></div>
```

```typescript

map: GoogleMap;

loadMap() {
  this.map = GoogleMaps.create('map_canvas', {
    camera: {
      target: {
        lat: 37.422000,
        lng: -122.084057
      },
      zoom: 15
    }
  });

  this.map.on(GoogleMapsEvent.POI_CLICK).subscribe((params: any[]) => {
    let placeId: string = params[0];
    let name: string = params[1];
    let latLng: LatLng = params[2];

    let marker: Marker = this.map.addMarkerSync({
      'position': latLng,
      'title': [
        "placeId = " + placeId,
        "name = " + name,
        "position = " + latLng.toUrlValue()
      ].join("\n")
    });
    marker.showInfoWindow();
  });
}

```
