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
    it('when the element does not exist', async () => {
      const _ = new GoogleMap(nextId());
      const [promise] = googleMap.getMap.mock.calls[0];
      await expect(promise).rejects.toMatchSnapshot();
    });

    it('when the element is too small', async () => {
      const mapId = nextId();

      document.body.innerHTML = `
        <div class="show-page">
          <div id="${mapId}" style="width: 99px; height: 99px;"></div>
        </div>
      `;

      const _ = new GoogleMap(mapId);
      const [promise] = googleMap.getMap.mock.calls[0];
      expect(googleMap.getMap).toHaveBeenCalled();
      await expect(promise).rejects.toMatchSnapshot();
    });
  });

  it('should work...', async () => {
    const mapId = nextId();

    document.body.innerHTML = `
      <div class="show-page">
        <div id="${mapId}" style="width: 100px; height: 100px;"></div>
      </div>
    `;

    console.log(document.querySelector(`.show-page #${mapId}`));

    const _ = new GoogleMap(mapId);
    const [promise] = googleMap.getMap.mock.calls[0];
    expect(googleMap.getMap).toHaveBeenCalled();
    await expect(promise).resolves.toMatchSnapshot();
  });
});
