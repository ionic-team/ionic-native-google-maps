import { GoogleMap, GoogleMaps } from '../../../../dist/@ionic-native/plugins/google-maps';

import { BaseArrayClass, BaseClass } from '../../../../mocks';

export class MapMock {
  remove = jest.fn();
}

export class BaseClassMock {
  // getMap = jest.fn();
}

export class GoogleMapsMock {
  // getMap = jest.fn();
}

export class GoogleMapMock {
  getMap = jest.fn(() => new MapMock());
}

describe('GoogleMap', () => {
  it('should behave...', async () => {
    window.cordova = {

    } as any;

    const googleMaps = new GoogleMapsMock();
    const googleMap = new GoogleMapMock();

    (window as any).plugin = {
      google: {
        maps: {
          BaseArrayClass,
          BaseClass,
          GoogleMaps: googleMaps,
          Map: googleMap,
        }
      }
    };

    const map = new GoogleMap('test');
    const [promise] = googleMap.getMap.mock.calls[0];
    expect(googleMap.getMap).toHaveBeenCalled();
    await promise;
  });

  fit('should behave...', async () => {
    window.cordova = {

    } as any;

    const googleMaps = new GoogleMapsMock();
    const googleMap = new GoogleMapMock();

    (window as any).plugin = {
      google: {
        maps: {
          BaseArrayClass,
          BaseClass,
          GoogleMaps: googleMaps,
          Map: googleMap,
        }
      }
    };

    const mapId = 'test';

    const mapEl = document.createElement('div');
    mapEl.id = mapId;
    mapEl.style.height = '100px';
    mapEl.style.width = '100px';

    const containerEl = document.createElement('div');
    containerEl.className = 'show-page';
    containerEl.appendChild(mapEl);
    document.body.appendChild(containerEl);

    const map = new GoogleMap(mapId);
    const [promise] = googleMap.getMap.mock.calls[0];
    expect(googleMap.getMap).toHaveBeenCalled();
    await promise;
  });
});
