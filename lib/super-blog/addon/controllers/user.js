import Controller from '@ember/controller';
import { action } from '@ember/object';
// import { service } from '@ember/service';

export default class UserController extends Controller {
    // @service router;

    @action
    navigateWithInEngine(route) {
      this.transitionTo(route);
    }
}
