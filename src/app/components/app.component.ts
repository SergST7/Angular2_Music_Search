import { Component } from '@angular/core';
import {AuthService} from "../services/login.service";

@Component({
  selector: 'my-app',
  template: `
            <div class="container">
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" [routerLink]="['home']">My App</a>
                </div>
                <ul class="nav navbar-nav">
                  <li><a [routerLink]="['search']">Musik Search App</a></li>
                  <li><a [routerLink]="['protected']">Protected</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li *ngIf="!authService.getUser()">
                    <a [routerLink]="['login']"  role="button">Log In</a>
                  </li>
                  <li *ngIf="authService.getUser()">
                    <a [routerLink]="['profile']"  role="button" >{{authService.getUser()}}</a>
                  </li>         
                  <li *ngIf="authService.getUser()">
                    <a [routerLink]="['login']" (click)="logout()" role="button">Log Out</a>
                  </li>
                </ul>
              </div>
            </nav>
            
            <router-outlet></router-outlet>
            </div>
`
})
export class AppComponent  {

  constructor(public authService: AuthService){
  }

  logout(){
    this.authService.logout();
    return false
  }
}
