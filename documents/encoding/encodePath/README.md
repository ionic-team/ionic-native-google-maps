# Encoding.encodePath()

Encodes a sequence of [LatLng](../latlng/README.md)s into an encoded path string.

```typescript
Encoding.encodePath(path)
```

## Parameters

name           | type     | description
---------------|---------------------------------------------|---------------------------------------
path           | ILatLng[], BaseArrayClass[ILatLng]          | Array of ILatLng

## Return value

:arrow_right: Returns `ILatLng[]`

------------------------------------------------------------------

## Demo code

```html
<div  id="map_canvas"></div>
```

```typescript
map: GoogleMap;

constructor(private alertCtrl: AlertController) {}

ionViewDidLoad() {
  this.loadMap();
}

loadMap() {
  let GORYOKAKU_POINTS: ILatLng[] = [
    {"lat": 41.79883, "lng": 140.75675},
    {"lat": 41.799240000000005, "lng": 140.75875000000002},
    {"lat": 41.797650000000004, "lng": 140.75905},
    {"lat": 41.79637, "lng": 140.76018000000002},
    {"lat": 41.79567, "lng": 140.75845},
    {"lat": 41.794470000000004, "lng": 140.75714000000002},
    {"lat": 41.795010000000005, "lng": 140.75611},
    {"lat": 41.79477000000001, "lng": 140.75484},
    {"lat": 41.79576, "lng": 140.75475},
    {"lat": 41.796150000000004, "lng": 140.75364000000002},
    {"lat": 41.79744, "lng": 140.75454000000002},
    {"lat": 41.79909000000001, "lng": 140.75465},
    {"lat": 41.79883, "lng": 140.75673}
  ];

  this.map = GoogleMaps.create('map_canvas', {
    camera: {
      target: GORYOKAKU_POINTS
    }
  });

  let encodedPath: string = Encoding.encodePath(GORYOKAKU_POINTS);
  let alert = this.alertCtrl.create({
    title: 'Encoded path',
    subTitle: encodedPath,
    buttons: ['OK']
  });

  let polygon: Polygon = this.map.addPolygonSync({
    points: GORYOKAKU_POINTS,
    clickable: true
  });

  polygon.on(GoogleMapsEvent.POLYGON_CLICK).subscribe(() => {
    alert.present();
  });

}

```

![](image.gif)
