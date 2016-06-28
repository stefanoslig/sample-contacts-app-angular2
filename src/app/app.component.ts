import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup } from '@angular/forms';


import { NavbarComponent, ToolbarComponent } from './shared/index';
import  { APP_PROVIDERS } from './app.providers'

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: __moduleName,
  selector: 'app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent, REACTIVE_FORM_DIRECTIVES],
  providers:[APP_PROVIDERS]
})
export class AppComponent {}