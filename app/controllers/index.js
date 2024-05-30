import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked myData = null;

  @action
  loadData() {
    fetch('https://api.github.com/users/RabbiHasanR').then((response) => {
      this.myData = response.json();
    });
  }
}
