import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PinnedTicketsComponent extends Component {
  @service pinnedTickets;

  get tickets() {
    console.log(this.pinnedTickets);
    return this.pinnedTickets.tickets;
  }
}
