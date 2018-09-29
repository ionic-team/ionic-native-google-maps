# GeocoderRequest interface

The address property or position property is required.

**You can not specify both property at the same time.**


---

**[geocoding usage1] one address to latitude/longitude**
```typescript
let options: GeocoderRequest = {
  address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States'
};
// Address -> latitude,longitude
Geocoder.geocode(options)
.then((results: GeocoderResult[]) => {
  console.log(results);

  return this.map1.addMarker({
    'position': results[0].position,
    'title':  JSON.stringify(results[0].position)
  })
})
```

**[geocoding usage2] multiple address to array of latitude/longitude**
```typescript
let options: GeocoderRequest = {
  address:  [
    "Montgomery, AL, USA", "Juneau, AK, USA", "Phoenix, AZ, USA",
    "Little Rock, AR, USA", "Sacramento, CA, USA", "Denver, CO, USA",
    ...
    "Charleston, WV, USA", "Madison, WI, USA", "Cheyenne, Wyoming, USA"
  ]
};
// Address -> latitude,longitude
Geocoder.geocode(options)
.then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {
  mvcArray.one('finish').then(() => {
    console.log('finish', mvcArray.getArray());
  });
})
```

**[reverse-geocoding usage1] latitude/longitude to address**
```typescript
let options: GeocoderRequest = {
  position:  {"lat": 37.421655, "lng": -122.085637}
};
// latitude,longitude -> address
Geocoder.geocode(options)
.then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {
  mvcArray.one('finish').then(() => {
    console.log('finish', mvcArray.getArray());
  });
})
```

**[reverse-geocoding usage2] list of latitude/longitude to addresses**
```typescript
let options: GeocoderRequest = {
  position:  [
    {"lat": 37.421655, "lng": -122.085637},
    {"lat": 37.332, "lng": -122.030781}
  ]
};
// latitude,longitude -> address
Geocoder.geocode(options)
.then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {
  mvcArray.one('finish').then(() => {
    console.log('finish', mvcArray.getArray());
  });
})
```

## Interface members

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
</tr>
<tr>
  <td>address</td>
  <td>string | string[]</td>
</tr>
<tr>
  <td>position</td>
  <td>ILatLng | <a href="../ilatlng/README.md">ILatLng</a>[]</td>
</tr>
</table>
