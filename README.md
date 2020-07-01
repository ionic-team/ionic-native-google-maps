# @ionic-native/google-maps (v5.27.0)

@ionic-native/google-maps plugin is a wrapper plugin for [cordova-plugin-googlemaps](https://github.com/mapsplugin/cordova-plugin-googlemaps) for Ionic framework.

Ionic Native wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

------------------------

## Installation

First of all, you need to generate API keys for Google Maps APIs.
- [How to generate API keys?](https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/api_key/generate_api_key.md)

Second, run following command to install `@ionic-native/core` and `@ionic-native/google-maps` plugins in your project.

```
npm install @ionic-native/core@beta @ionic-native/google-maps@beta

ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps
```

Third, update `config.xml` with your API keys.

```xml
<widget ...>
  ...
  <preference name="GOOGLE_MAPS_ANDROID_API_KEY" value="(api key)" />
  <preference name="GOOGLE_MAPS_IOS_API_KEY" value="(api key)" />
  ...
</widget>
```

------------------------

## Documentation

For the full Ionic Native documentation, please checkout this page.

- [\@ionic-native/google-maps official documents](https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md)


Also there are documents/demos for your help:

- [cordova-plugin-googlemaps official documents](https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.3.0/README.md)

- [@ionic-native/google-maps get started](https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.3.0/ionic-native/README.md)

- [\@ionic-native/google-maps slide](https://docs.google.com/presentation/d/e/2PACX-1vScoho1ensbR4qCI9AIuQN55BZVvK73pAjI7sumDvW3CrxxHnrmpXWUjx2-8CpFibqU1EjLKCRhuthJ/pub?start=false&loop=false&delayms=3000)

## Demo
- [(ionic v4)@ionic-native/google-maps quick example](https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4)

- [(ionic v3)@ionic-native/google-maps quick example](https://github.com/mapsplugin/ionic-googlemaps-quickdemo)


------------------------

## Troubles?

Before asking your trouble, please check the trouble shooting guides.
- [Trouble shootings](https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/tree/master/troubleshootings/README.md)

If you can't solve your problem, please report to [ionic-native-google-maps](https://github.com/ionic-team/ionic-native-google-maps/issues) repository.
