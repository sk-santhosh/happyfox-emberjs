import Model, { attr } from '@ember-data/model';

export default class TicketModel extends Model {
  @attr title;
  @attr body;
  @attr status;
  @attr star;
}
