# Reverse geocoding

## Basic usage

This plugin supports reverse geocoding. You can convert from latitude and longitude to address.

```html
<div id="map_canvas1"></div>
```

```typescript
map1: GoogleMap;

loadMap1() {

  this.map1 = GoogleMaps.create('map_canvas1', {
    camera: {
      target: { "lat": 37.422858, "lng": -122.085065 },
      zoom: 10
    }
  });

  this.map1.on(GoogleMapsEvent.MAP_CLICK).subscribe((params:any[]) => {
    let latLng: ILatLng = params[0];
    let marker: Marker = this.map1.addMarkerSync({
      "position": latLng
    });

    // Latitude, longitude -> address
    Geocoder.geocode({
      "position": latLng
    }).then((results: GeocoderResult[]) => {
      if (results.length == 0) {
        // Not found
        return null;
      }
      let address: any = [
        results[0].subThoroughfare || "",
        results[0].thoroughfare || "",
        results[0].locality || "",
        results[0].adminArea || "",
        results[0].postalCode || "",
        results[0].country || ""].join(", ");

      marker.setTitle(address);
      marker.showInfoWindow();
    });
  });

}

```

![](image1.gif)

----

## Multiple requests

You can pass multiple latitude/longitude in one request as Array.
In this case, the method passes an instance of [BaseArrayClass](../../BaseArrayClass/README.md), then you will receive each results one by one.

The instance of [BaseArrayClass](../../BaseArrayClass/README.md) triggers the `finish` event when all requests are completed.

If any error occurs during the requests processing, the instance triggers `error` event.


```html
<div id="map_canvas2">
    <span class="smallPanel"><button>Click here!</button></span>
</div>
```

```typescript
map2: GoogleMap;
isRunning: boolean = false;

loadMap2() {
  this.map2 = GoogleMaps.create('map_canvas2', {
    camera: {
      target: [
        { "lat": 42.452030, "lng": -71.537014 },
        { "lat": 43.385365, "lng": -70.542110 }
      ]
    }
  });
}

onButton2_click(event) {
  if (this.isRunning) {
    return;
  }
  this.isRunning = true;

  let start = Date.now();

  // Geocode multiple location
  Geocoder.geocode({
    "position": [
      { "lat": 43.031873, "lng": -71.073203 },
      { "lat": 42.989763, "lng": -70.932044 },
      { "lat": 43.04871, "lng": -70.816345 },
      { "lat": 42.882128, "lng": -70.86808 },
      { "lat": 43.092318, "lng": -70.792327 },
      { "lat": 43.077086, "lng": -70.758064 },
      { "lat": 42.807206, "lng": -71.102071 },
      { "lat": 42.811138, "lng": -70.869501 },
      { "lat": 43.111116, "lng": -70.734091 },
      { "lat": 42.786955, "lng": -71.115836 },
      { "lat": 43.221256, "lng": -70.888115 },
      { "lat": 43.232909, "lng": -70.8818 },
      { "lat": 42.744153230002, "lng": -71.157345224281 },
      { "lat": 42.764387, "lng": -71.216689 },
      { "lat": 42.741881, "lng": -71.160069 },
      { "lat": 42.960288, "lng": -71.438445 },
      { "lat": 42.94327, "lng": -71.4741 },
      { "lat": 42.665865, "lng": -71.115143 },
      { "lat": 42.656393, "lng": -71.140289 },
      { "lat": 43.222904, "lng": -71.491969 },
      { "lat": 42.76513, "lng": -71.49744 },
      { "lat": 42.585366, "lng": -70.88444 },
      { "lat": 42.700708, "lng": -71.436142 },
      { "lat": 42.80103, "lng": -71.537014 },
      { "lat": 42.62462, "lng": -71.31845 },
      { "lat": 42.556249, "lng": -70.890407 },
      { "lat": 42.623739, "lng": -71.36431 },
      { "lat": 42.545939, "lng": -70.946655 },
      { "lat": 42.54524, "lng": -70.94468 },
      { "lat": 42.555543, "lng": -71.181095 },
      { "lat": 42.581632, "lng": -71.289347 },
      { "lat": 42.519991, "lng": -71.093858 },
      { "lat": 42.518951, "lng": -70.894874 },
      { "lat": 42.515659, "lng": -71.104029 },
      { "lat": 42.518122, "lng": -71.135588 },
      { "lat": 42.517323483467, "lng": -71.135712417913 },
      { "lat": 43.385365, "lng": -70.54211 },
      { "lat": 43.385365, "lng": -70.54211 },
      { "lat": 42.49818, "lng": -71.125908 },
      { "lat": 42.502632, "lng": -70.856048 },
      { "lat": 42.488115938014, "lng": -71.0194 },
      { "lat": 42.484973, "lng": -70.901011 },
      { "lat": 42.478313, "lng": -71.023173 },
      { "lat": 42.566563, "lng": -71.421995 },
      { "lat": 42.48755, "lng": -71.20229 },
      { "lat": 42.489622, "lng": -71.27235 },
      { "lat": 42.455468, "lng": -71.064841 },
      { "lat": 42.45203, "lng": -71.136821 },
      { "lat": 42.453613, "lng": -71.233316 }
    ]
  }).then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {

    mvcArray.one('finish').then(() => {
      if (mvcArray.getLength() > 0) {
        let results: any[] =  mvcArray.getArray();
        results.forEach((result: GeocoderResult[]) => {

          // Get a result
          let address: string = [
            result[0].subThoroughfare || "",
            result[0].thoroughfare || "",
            result[0].locality || "",
            result[0].adminArea || "",
            result[0].postalCode || "",
            result[0].country || ""].join(", ");

          let marker: Marker = this.map2.addMarkerSync({
            'position': result[0].position,
            'icon': 'assets/starbucks.gif',
            'title': address
          });
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick.bind(this));

        });
      }

      let end = Date.now();
      this.isRunning = false;
      console.log('finish', mvcArray.getArray());
      alert("duration: " + ((end - start) / 1000).toFixed(1) + " seconds");
    });

  });
}


onMarkerClick(params: any[]) {
  let marker: Marker = params[1];
  marker.showInfoWindow();
}
```

![](image2.gif)
