import {Component} from 'angular2/core';

@Component({
  selector : '<my-dashboard></my-dashboard>',
  template :`<h1>{{titulo}}</h1>`
})
export class DashboardComponent {
  public titulo = 'Dashboard';
}
