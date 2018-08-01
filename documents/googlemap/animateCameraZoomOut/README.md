# map.animateCameraZoomOut()

Zooming out the camera with animation.

```typescript
this.map.animateCameraZoomOut().then(() => {
  ...
});
```

## Return value

:arrow_right: Returns `Promise<any>`

----------------------------------------------------------------------------------------------------------

## Demo code

```html
<div id="map_canvas">
  <button ion-button (click)="onButton_click($event)">Click here</button>
</div>
```

```typescript
map: GoogleMap;

loadMap() {
  this.map = GoogleMaps.create('map_canvas', {
    "camera": {
      "target": {
        "lat": 37.422858,
        "lng": -122.085065
      },
      "zoom": 15
    }
  });
}

onButton_click() {
  this.map.animateCameraZoomOut();
}
```

![](image.gif)
