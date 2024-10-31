// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: false,
  firebase: {
    apiKey: "AIzaSyA3NfFkmeBGYevCEeCs4wPc5OxMXYCmqAg",
    authDomain: "buffalosite-5ebc1.firebaseapp.com",
    databaseURL: "https://buffalosite-5ebc1-default-rtdb.firebaseio.com",
    projectId: "buffalosite-5ebc1",
    storageBucket: "buffalosite-5ebc1.firebasestorage.app",
    messagingSenderId: "674161359640",
    appId: "1:674161359640:web:a9170050e49d8fa8117c6d",
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
