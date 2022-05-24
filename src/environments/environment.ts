// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'cotg-mobile-app',
    appId: '1:459000562776:web:bab6c0fe64a328641d762d',
    storageBucket: 'cotg-mobile-app.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyB8hVBDJNRFoCliB6iiM2j5sGw-Qew9rCM',
    authDomain: 'cotg-mobile-app.firebaseapp.com',
    messagingSenderId: '459000562776',
    measurementId: 'G-X6LM5B11PC',
  },
  production: false,
  graphQL: {
    serverUri: 'http://localhost:5002/'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
