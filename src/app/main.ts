import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { provideRouter }        from '@angular/router';
import { ContactsAppRoutes } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
  provideRouter(ContactsAppRoutes),
  disableDeprecatedForms(),
  provideForms()
])
.catch(err => console.error(err));