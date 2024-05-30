import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'super-blog/config/environment';

class Eng extends Engine {
  modulePrefix = config.modulePrefix;
  Resolver = Resolver;

  dependencies = {
    externalRoutes: [
      'application'
    ],
    services: [
      'app-store',
    ]
  };
}

loadInitializers(Eng, config.modulePrefix);

export default Eng;
