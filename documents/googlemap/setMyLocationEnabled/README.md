# map.setMyLocationEnabled()

Set true if you want to show the MyLocation control (blue dot).

```typescript
map.setMyLocationEnabled(flag)
```

## Parameters

name   | type    | description
-------|---------|---------------------------------------
flag   | boolean | `true`: show the myLocation control, `false`: hide it

----------------------------------------------------------------------------------------------------------

## Demo code

```html
<div class="map" id="map_canvas">
    <span class="smallPanel"><button>current: map.myLocation = true</button></span>
</div>
```

```typescript
map: GoogleMap;
isEnabled: any;

loadMap() {
  this.map = GoogleMaps.create('map_canvas', {
    controls: {
      myLocationButton: true,
      myLocation: true
    }
  });
}


onToggleChanged() {
  this.isEnabled = !this.isEnabled;
  this.map.setMyLocationEnabled(this.isEnabled);
}
```

![](image.gif)
