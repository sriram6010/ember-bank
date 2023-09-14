'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-mirage': {
      enabled: false, // Disable Mirage for API proxying
    },
    'ember-cli-proxy': {
      enabled: true,
      proxyHost: 'http://localhost:8080', // Replace with your API server URL
      proxyPrefix: '/bank-app', // Adjust as needed
    },
  });

  return app.toTree();
};
