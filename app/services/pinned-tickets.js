import Service from '@ember/service';

export default class PinnedTicketsService extends Service {
  tickets = [];

  add(item) {
    this.tickets.pushObject(item);
  }

  remove(item) {
    this.tickets.removeObject(item);
  }
}
