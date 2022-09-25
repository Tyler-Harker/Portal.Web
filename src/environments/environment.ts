// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  azureAd: {
    clientId: 'fdc8b9bc-0bd2-4fae-b7b3-7d05b7596de0',
    tenantId: 'a4aa9f35-9917-4518-b764-5fbbb893a6cd',
    redirectUri: 'http://localhost:4200/signIn'
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
