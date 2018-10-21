import { GoogleMaps } from './google-maps';
import { MarkerCluster } from './marker-cluster';
import { Marker } from './marker';

export const normalizeArgumentsOfEventListener = (
  _objectInstance: any,
  ...args: any[]
): any[] => {
  if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
    if (
      args[args.length - 1].type === 'Map' ||
      args[args.length - 1].type === 'StreetViewPanorama'
    ) {
      args[args.length - 1] = this;
    } else if (this instanceof MarkerCluster) {
      let overlay: Marker = this.get(args[args.length - 1].getId());
      if (!overlay) {
        const markerJS: any = args[args.length - 1];
        const markerId: string = markerJS.getId();
        const markerCluster: MarkerCluster = this as MarkerCluster;
        overlay = new Marker(markerCluster.getMap(), markerJS);
        this.get('_overlays')[markerId] = overlay;
        markerJS.one(markerJS.getId() + '_remove', () => {
          this.get('_overlays')[markerId] = null;
        });
      }
      args[args.length - 1] = overlay;
    } else {
      args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[
        args[args.length - 1].getId()
      ];
    }
  }
  return args;
};

export const displayErrorMessage = (element: HTMLElement, message: string) => {
  const errorDiv: HTMLElement = document.createElement('div');
  errorDiv.innerHTML = message;
  errorDiv.style.color = 'red';
  errorDiv.style.position = 'absolute';
  errorDiv.style.width = '80%';
  errorDiv.style.height = '50%';
  errorDiv.style.top = '0px';
  errorDiv.style.bottom = '0px';
  errorDiv.style.right = '0px';
  errorDiv.style.left = '0px';
  errorDiv.style.padding = '0px';
  errorDiv.style.margin = 'auto';

  element.style.position = 'relative';
  element.style.backgroundColor = '#ccc7';
  element.appendChild(errorDiv);
};
