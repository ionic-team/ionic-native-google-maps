# map.getCameraTilt()

Get the current camera tilt (view angle).

```typescript
this.map.getCameraTilt();
```

## Return value

:arrow_right: Returns `number`

----------------------------------------------------------------------------------------------------------

## Demo code

```html
<div class="map" id="map_canvas">
    <span class="smallPanel"><button>Click here</button></span>
</div>
```

```typescript
map: GoogleMap;

loadMap() {
  this.map = GoogleMaps.create("map_canvas");
}

onButton_click() {
  // Show the current camera tilt.
  let text: string = "tilt: " + this.map.getCameraTilt();

  let alert = this.alertCtrl.create({
    title: 'Current camera tilt',
    subTitle: text,
    buttons: ['Dismiss']
  });
  alert.present();
}
```

![](image.gif)
