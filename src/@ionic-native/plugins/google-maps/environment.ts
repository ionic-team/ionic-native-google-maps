import { EnvOptions } from './interfaces';
import { Plugin, checkAvailability, getPromise } from '@ionic-native/core';
import { GoogleMaps } from './google-maps';

/**
 * @hidden
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.environment',
  repo: '',
})
export class Environment {
  /**
   * Set environment variables.
   */
  static setEnv(envOptions: EnvOptions): void {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === false
    ) {
      throw new Error(
        'cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.',
      );
    }
    GoogleMaps.getPlugin().environment.setEnv(envOptions);
  }

  /**
   * Get the open source software license information for Google Maps SDK for iOS.
   * @return {Promise<any>}
   */
  static getLicenseInfo(): Promise<any> {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === false
    ) {
      throw new Error(
        'cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.',
      );
    }
    return getPromise<any>(resolve => {
      GoogleMaps.getPlugin().environment.getLicenseInfo((text: string) =>
        resolve(text),
      );
    });
  }

  /**
   * Specifies the background color of the app.
   * @param color
   */
  static setBackgroundColor(color: string): void {
    if (
      checkAvailability(
        GoogleMaps.getPluginRef(),
        null,
        GoogleMaps.getPluginName(),
      ) === false
    ) {
      throw new Error(
        'cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.',
      );
    }
    GoogleMaps.getPlugin().environment.setBackgroundColor(color);
  }

  /**
   * @deprecation This method is static. Please use Environment.getLicenseInfo()
   * @hidden
   */
  getLicenseInfo(): Promise<any> {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Environment.getLicenseInfo()',
    );
    return Environment.getLicenseInfo();
  }

  /**
   * @deprecation This method is static. Please use Environment.setBackgroundColor()
   * @hidden
   */
  setBackgroundColor(color: string): void {
    console.error(
      'GoogleMaps',
      '[deprecated] This method is static. Please use Environment.setBackgroundColor()',
    );
    Environment.setBackgroundColor(color);
  }
}
