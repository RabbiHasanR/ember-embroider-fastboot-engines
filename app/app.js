import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'github-fastboot/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  engines = {
    'super-blog': {
      dependencies: {
        externalRoutes: {
          application: 'application',
        },
        services: [{ 'app-store': 'store' }],
      },
    },
  };
}

loadInitializers(App, config.modulePrefix);
