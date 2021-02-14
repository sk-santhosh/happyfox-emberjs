import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TicketComponent extends Component {
  @service pinnedTickets;
  @tracked is_pinned = false;

  @action
  pinThis(ticket) {
    if (!this.is_pinned) {
      this.pinnedTickets.add(ticket);
    } else {
      this.pinnedTickets.remove(ticket);
    }
    this.is_pinned = !this.is_pinned;
    console.log(this, ticket);
  }
}
