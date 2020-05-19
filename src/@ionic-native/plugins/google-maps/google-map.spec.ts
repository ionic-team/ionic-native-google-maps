import { GoogleMap } from '../../../../dist/@ionic-native/plugins/google-maps';

import { GoogleMapCordovaMock, GoogleMapsCordovaMock } from '../../../test/mocks';
import { mockCordova, mockCordovaRestore } from '../../../test/utils';


describe('GoogleMap', () => {
  beforeEach(() => document.body.innerHTML = '');
  afterEach(mockCordovaRestore);

  describe('with cordova', () => {
    let googleMaps: GoogleMapsCordovaMock;
    let googleMap: GoogleMapCordovaMock;

    beforeEach(() => {
      googleMaps = new GoogleMapsCordovaMock();
      googleMap = new GoogleMapCordovaMock();

      mockCordova({
        GoogleMaps: googleMaps,
        Map: googleMap,
      });
    });

    describe('should throw', () => {
      it('when the element does not exist', async () => {
        const _ = new GoogleMap('testId', null, 0);
        const promise = googleMap.getMap.mock.calls[0][0];
        await expect(promise).rejects.toMatchSnapshot();
      });

      it('when the element is too small', async () => {
        const mapId = 'testId';

        document.body.innerHTML = `
          <div class="show-page">
            <div id="${mapId}" style="width: 99px; height: 99px;"></div>
          </div>
        `;

        const _ = new GoogleMap(mapId, undefined, 0);
        const promise = googleMap.getMap.mock.calls[0][0];
        expect(googleMap.getMap).toHaveBeenCalled();
        await expect(promise).rejects.toMatchSnapshot();
      });
    });

    it('should work when the dom element is present and an ID is passed', async () => {
      const mapId = 'testId';

      document.body.innerHTML = `
        <div class="show-page">
          <div id="${mapId}" style="width: 100px; height: 100px;"></div>
        </div>
      `;

      const _ = new GoogleMap(mapId, undefined, 0);
      const promise = googleMap.getMap.mock.calls[0][0];
      expect(googleMap.getMap).toHaveBeenCalled();
      await expect(promise).resolves.toMatchSnapshot();
    });

    it('should work when the dom element is present and an element is passed', async () => {
      const mapId = 'testId';

      document.body.innerHTML = `
        <div class="show-page">
          <div id="${mapId}" style="width: 100px; height: 100px;"></div>
        </div>
      `;

      const el = document.getElementById(mapId);

      const _ = new GoogleMap(el);
      const mapEl = googleMap.getMap.mock.calls[0][0];
      expect(googleMap.getMap).toHaveBeenCalled();
      await expect(mapEl).toMatchSnapshot();
    });

    describe('with async DOM modifications', () => {
      it('should find the target element if it is initially not present in the DOM', async () => {
        const mapId = 'testId';

        const _ = new GoogleMap(mapId);

        setTimeout(() => {
          document.body.innerHTML = `
            <div class="show-page">
              <div id="${mapId}" style="width: 100px; height: 100px;"></div>
            </div>
          `;
        }, 250);

        const mapEl = googleMap.getMap.mock.calls[0][0];
        expect(googleMap.getMap).toHaveBeenCalled();
        await expect(mapEl).resolves.toMatchSnapshot();
      });
    });

    it('should error when the target element does not appear in time with custom timeout', async () => {
      const mapId = 'testId';
      const intervalMs = 10;
      const maxTries = 40;
      // The code tries 20 times, we add extra ms for a buffer for timing inconsistencies
      const expectedTimeout = intervalMs * maxTries + 100;
      const _ = new GoogleMap(mapId, null, intervalMs);

      setTimeout(() => {
        document.body.innerHTML = `
          <div class="show-page">
            <div id="${mapId}" style="width: 100px; height: 100px;"></div>
          </div>
        `;
      }, expectedTimeout);

      const mapEl = googleMap.getMap.mock.calls[0][0];
      expect(googleMap.getMap).toHaveBeenCalled();
      await expect(mapEl).rejects.toMatchSnapshot();
    });
  });

  describe('without cordova', () => {
    beforeEach(() => window.cordova = null);

    it('should display a message in the target element', async () => {
      const mapId = 'testId';

      document.body.innerHTML = `
        <div class="show-page">
          <div id="${mapId}" style="width: 100px; height: 100px;"></div>
        </div>
      `;

      const _ = new GoogleMap(mapId, undefined, 0);
      expect(document.getElementById(mapId)).toMatchSnapshot();
    });
  });

  describe('without plugin', () => {
    beforeEach(() => (window as any).cordova = {});

    it('should display a message in the target element', async () => {
      const mapId = 'testId';

      document.body.innerHTML = `
        <div class="show-page">
          <div id="${mapId}" style="width: 100px; height: 100px;"></div>
        </div>
      `;

      const _ = new GoogleMap(mapId, undefined, 0);
      expect(document.getElementById(mapId)).toMatchSnapshot();
    });
  });
});
