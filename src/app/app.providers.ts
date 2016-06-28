import { HTTP_PROVIDERS } from '@angular/http';
import { ContactsService } from './contacts/index';

export const APP_PROVIDERS = [
    ContactsService,
    HTTP_PROVIDERS,
]