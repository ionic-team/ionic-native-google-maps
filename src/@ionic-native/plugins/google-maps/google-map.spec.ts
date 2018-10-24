import { GoogleMap, GoogleMaps } from '../../../../dist/@ionic-native/plugins/google-maps';

import { GoogleMapMock, GoogleMapsMock } from '../../../test/mocks';
import { mockCordova, nextId } from '../../../test/utils';


describe('GoogleMap', () => {
  let googleMaps: GoogleMapsMock;
  let googleMap: GoogleMapMock;

  beforeEach(() => {
    googleMaps = new GoogleMapsMock();
    googleMap = new GoogleMapMock();

    mockCordova({
      GoogleMaps: googleMaps,
      Map: googleMap,
    });
  });

  describe('should throw', () => {
    it('when the element does not exist', () => {
      const _ = new GoogleMap(nextId());
      const [promise] = googleMap.getMap.mock.calls[0];
      expect(promise).rejects.toBeTruthy();
    });

    it('when the element is too small', () => {
      const mapId = nextId();

      const mapEl = document.createElement('div');
      mapEl.id = mapId;
      mapEl.style.height = '99px';
      mapEl.style.width = '99px';

      const containerEl = document.createElement('div');
      containerEl.className = 'show-page';
      containerEl.appendChild(mapEl);
      document.body.appendChild(containerEl);

      const _ = new GoogleMap(mapId);
      expect(googleMap.getMap).toHaveBeenCalled();
    });
  });

  it('should work...', () => {
    const mapId = nextId();

    const mapEl = document.createElement('div');
    mapEl.id = mapId;
    mapEl.style.height = '100px';
    mapEl.style.width = '100px';

    const containerEl = document.createElement('div');
    containerEl.className = 'show-page';
    containerEl.appendChild(mapEl);
    document.body.appendChild(containerEl);

    const _ = new GoogleMap(mapId);
    const [promise] = googleMap.getMap.mock.calls[0];
    expect(googleMap.getMap).toHaveBeenCalled();
    expect(promise).resolves.toBeTruthy();
  });
});
