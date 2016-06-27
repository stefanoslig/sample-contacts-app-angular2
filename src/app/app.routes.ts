import { AboutRoutes } from './about/index';
import { ContactsRoutes } from './contacts/contacts/index';

export const ContactsAppRoutes  = [
  ...ContactsRoutes,
  ...AboutRoutes
];
