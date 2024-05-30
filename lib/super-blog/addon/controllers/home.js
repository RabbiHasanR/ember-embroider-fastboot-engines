import Controller from '@ember/controller';
import { action } from '@ember/object';
// import { service } from '@ember/service';

export default class HomeController extends Controller {
//   @service router;

  @action
  navigateWithInEngine(route) {
    this.transitionTo(route);
  }

}
