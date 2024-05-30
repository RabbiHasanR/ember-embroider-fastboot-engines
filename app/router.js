import EmberRouter from '@ember/routing/router';
import config from 'github-fastboot/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // Mounting engines in `/` - Ember Engines
  // this.mount('super-blog', { path: '/', rootNamespace: false });
  this.mount('super-blog');
});
