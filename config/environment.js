/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'eos',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: '//eos-api.dev/token-auth/',
    identificationField: 'email',
    //passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    //headers: {},
    refreshAccessTokens: true,
    serverTokenRefreshEndpoint: '//eos-api.dev/token-refresh/',
    //tokenExpireName: 'exp',
    refreshLeeway: 300, // Refresh the token 5 minutes (300s) before it expires.
    timeFactor: 1000 // example - set to "1000" to convert incoming seconds to milliseconds.
    //routeAfterAuthentication: '/'
  };

  return ENV;
};
