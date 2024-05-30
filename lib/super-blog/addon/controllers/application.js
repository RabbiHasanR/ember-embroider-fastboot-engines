import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
    @service router;

  @action
  navigateWithInEngine(route) {
    this.router.transitionTo(route);
  }

  @action
  navigateToParent(route) {
    this.router.transitionToExternal(route);
  }
}
