import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './commponents/dashboard/dashboard.component';
import {LoginComponent} from './commponents/login/login.component';

@Component({
    selector: 'my-app',
    template:`<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  { path:'/dashboard', name: 'Dashboard', component: DashboardComponent },
  { path:'/login', name: 'Login', component: LoginComponent, useAsDefault: true }
])
export class AppComponent {  }
