import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { provideRouter }        from '@angular/router';
import { ContactsAppRoutes } from './app.routes';

bootstrap(AppComponent, [
  provideRouter(ContactsAppRoutes)
])
.catch(err => console.error(err));