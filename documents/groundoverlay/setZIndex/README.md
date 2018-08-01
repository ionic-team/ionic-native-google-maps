# groundOverlay.setZIndex()

Change the order in which this tile overlay is drawn with respect to other overlays (including GroundOverlays, TileOverlays, Polylines, and Polygons but not Markers).

```
groundOverlay.setZIndex(index);
```

## Parameters

name           | type          | description
---------------|---------------|---------------------------------------
index          | number        | z-index (default: 0)
-----------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas"></div>
```

```typescript
map: GoogleMap;
overlays: GroundOverlay[];

loadMap() {
  this.map = GoogleMaps.create('map_canvas');

  let latLngBounds: LatLngBounds = new LatLngBounds();

  let regions: any[] = [
    {
      "bounds": [
        {"lat": 41.144877, "lng": 138.066162},
        {"lat": 45.738532, "lng": 147.092896}
      ],
      "url": "../images/hokkaido-hokkaido-1001_1.png"
    },
    {
      "bounds": [
        {"lat": 43.252673, "lng": 144.749877},
        {"lat": 45.698391, "lng": 149.554238}
      ],
      "url": "../images/hokkaido-hoppou-1001_1.png"
    },
    {
      "bounds": [
        {"lat": 41.640700, "lng": 142.146678},
        {"lat": 40.113827, "lng": 139.386590}
      ],
      "url": "../images/aomori-aomori-2.png"
    }
  ];
  this.overlays = regions.map((region: any, idx: number) => {
    latLngBounds.extend(region.bounds[0]);
    latLngBounds.extend(region.bounds[1]);

    // Add ground overlay
    let groundOverlay: GroundOverlay = this.map.addGroundOverlaySync({
      'url': region.url,
      'bounds': region.bounds,
      'opacity': 0.5,
      'zIndex': idx,
      'clickable': true
    });
    groundOverlay.on(GoogleMapsEvent.GROUND_OVERLAY_CLICK).subscribe(this.onClick.bind(this));
    return groundOverlay;
  });

  // Move camera to contains all ground overlays
  this.map.moveCamera({
    target: latLngBounds
  });
}


onClick(params: any[]) {
  // let latLng: LatLng = params[0];
  let clickedOverlay: GroundOverlay = params[1];

  this.overlays.forEach((groundOverlay: GroundOverlay, idx: number) => {
    if (clickedOverlay.getHashCode() === groundOverlay.getHashCode()) {
      groundOverlay.setZIndex(1);
      groundOverlay.setOpacity(1);
    } else {
      groundOverlay.setZIndex(0);
      groundOverlay.setOpacity(0.5);
    }
  });
}

```

![](image.gif)
