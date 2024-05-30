import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  model() {
    return fetch('https://api.github.com/users/tomdale').then(function (
      response
    ) {
      return response.json();
    });
  }
}
