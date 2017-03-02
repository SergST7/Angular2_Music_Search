import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <div class="container">
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" [routerLink]="['search']">My App</a>
                </div>
                <ul class="nav navbar-nav">
                  <li><a [routerLink]="['search']">Musik Search App</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li><a [routerLink]="['login']">Log In</a></li>
                </ul>
              </div>
            </nav>
            
            <router-outlet></router-outlet>
            </div>
`
})
export class AppComponent  {}
