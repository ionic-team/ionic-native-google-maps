# GoogleMaps.createPanorama()

## Create a map

You can create a Google StreetView panorama using `GoogleMaps.createPanorama(divId)`.

[Example](https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/street-view/street-view.page.ts)

```html
<div style="width:500px;height:500px" id="map_canvas1"></div>
```

```typescript
let panorama: StreetViewPanorama = GoogleMaps.createPanorama('pano_canvas', {
  camera: {
    target: {lat: 42.345573, lng: -71.098326}
  }
});

panorama.one(GoogleMapsEvent.PANORAMA_READY).then(() => {
  console.log('panorama is ready!');
});


// Move the map camera when the panorama camera has been moved.
panorama.on(GoogleMapsEvent.PANORAMA_LOCATION_CHANGE).subscribe((params:any[]) => {
  let location: StreetViewLocation = params[0];

});

// Change the marker bearing when the panorama camera is panning.
panorama.on(GoogleMapsEvent.PANORAMA_CAMERA_CHANGE).subscribe((params: any[]) => {
  let camera: StreetViewCameraPosition = params[0];

});

```
