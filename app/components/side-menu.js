import Component from '@glimmer/component';

export default class SideMenuComponent extends Component {
  menu = [
    { name: 'Pending Tickets', val: 18, url: '/pending-tickets' },
    { name: 'All Tickets', val: 21, url: '/all-tickets' },
    { name: 'Unresponded', val: 14, url: '/unresponded' },
    { name: 'Due Today', val: '~', url: '/due-today' },
    { name: 'My Tickets', val: 14, url: '/my-tickets' },
    { name: 'SLA Breached', val: '~', url: '/sla-breached' },
    { name: 'On Priority', val: 4, url: '/on-priority' },
  ];
}
