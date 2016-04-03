import {Component} from 'angular2/core';

@Component({
  template :`
      <h1>{{titulo}}</h1>`
})
export class DashboardComponent {
  public titulo = 'Dashboard';
}
