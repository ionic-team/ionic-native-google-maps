# map.setVisible()

If set false, the map is hidden.

```typescript
map.setVisible(flag)
```

## Parameters

name   | type    | description
-------|---------|---------------------------------------
flag   | boolean | `true`: visible, `false`: invisible

----------------------------------------------------------------------------------------------------------

## Demo code

```html
<div class="map" id="map_canvas">
  <span class="smallPanel"><button>current: map.visible = true</button></span>
</div>
```

```typescript
map: GoogleMap;
isVisible: boolean = false;

loadMap() {
  this.map = GoogleMaps.create('map_canvas');
}

onButtonClick() {
  this.isVisible = !this.isVisible;
  map.setVisible(isVisible);
}
```

![](image.gif)
