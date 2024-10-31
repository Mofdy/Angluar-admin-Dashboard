// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: false,
  firebase: {
      apiKey: "AIzaSyDF3h_8mHGGs4REC-nJ2Fgk3ofBu5E9cwI",
      authDomain: "buffalo-burger-73090.firebaseapp.com",
      projectId: "buffalo-burger-73090",
      storageBucket: "buffalo-burger-73090.appspot.com",
      messagingSenderId: "813583745340",
      appId: "1:813583745340:web:1dcf4735da6b53193fde39",
      measurementId: "G-NFHVQGTH7D"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
