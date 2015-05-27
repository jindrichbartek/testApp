Package.describe({
  name: 'eventhub:events',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mongo');
  api.use('templating');
  api.use('underscore');
  api.use('session');
  api.use('microservices-connector');
  api.use('meteorhacks:flow-router');
  api.use('meteorhacks:flow-layout');
  api.use('matb33:collection-hooks');

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.addFiles('shared/collections.js', ['client', 'server']);
  api.addFiles('shared/fixtures.js', ['client', 'server']);
  api.addFiles('shared/routes_.js', ['client', 'server']);
  api.addFiles('client/events.html', 'client');
  api.addFiles('client/events.css', 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('eventhub:events');

  // Generated with: github.com/philcockfield/meteor-package-paths
  

});
