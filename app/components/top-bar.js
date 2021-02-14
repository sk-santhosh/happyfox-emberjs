import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TopBarComponent extends Component {
  @tracked menu = false;

  @action
  openMenu() {
    this.menu = !this.menu;
    console.log(this.menu);
  }
}
