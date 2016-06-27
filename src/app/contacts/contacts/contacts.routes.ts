import { RouterConfig } from '@angular/router';

import { ContactsComponent } from './index';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

export const ContactsRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/contacts',
    terminal: true
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      {
        path: ':id',
        component: ContactDetailsComponent,
      },
      {
        path: '',
        component: ContactsListComponent
      }
    ]
  }
];