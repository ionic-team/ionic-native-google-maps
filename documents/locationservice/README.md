# LocationService class

```typescript
import { Platform } from 'ionic-angular';
import {
  LocationService,
  GoogleMap,
  GoogleMapOptions,
  MyLocation
} from '@ionic-native/google-maps';

export class MapPage {

  map: GoogleMap;

  constructor(private platform: Platform) {
    this.platforms.ready(()=> {
      this.loadMap();
    });
  }

  loadmap() {
    LocationService.getMyLocation().then((myLocation: MyLocation) => {

      let options: GoogleMapOptions = {
        camera: {
          target: myLocation.latLng
        }
      };
      this.map = GoogleMaps.create('map_canvas', options);

    });
  }
}
```

------

## Static method

### getMyLocation(options?)

Get the current device location without map.

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>options</td>
  <td><a href="../mylocationoptions/README.md">MyLocationOptions</a></td>
  <td>(optional)Initial option</td>
</tr>
</table>

:arrow_right: `Promise<MyLocation>`
