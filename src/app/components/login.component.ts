/**
 * Created by SergST on 02.03.2017.
 */

import {Component} from "@angular/core";
import {AuthService} from "../services/login.service";


@Component({
  selector: 'login',
  template:`
  <div class="container">
    <form class="form-inline">
      <div class="form-group">
        <label for="username">User: </label>
        <input type="text" class="form-control" name="username"  #username placeholder="User name">
      </div>
      <div class="form-group">
        <label for="Pass">Password: </label>
        <input type="password" class="form-control" name="password" #password placeholder="password">
      </div>
      <button type="submit" class="btn btn-primary">Log In</button>
    </form>
</div>
`

})
export class LoginComponent{
  message: string;

  constructor (public authService: AuthService){
    this.message = "";
  }

  login (usr: string, pwd: string): boolean {
    this.message = "";
    if(!this.authService.login(usr, pwd)) {
      this.message = "Incorrect name or password";
      setTimeout(function () {
        this.message = ""
      }.bind(this), 2500)
    }
    return false
  }

  logout(){
    this.authService.logout();
    return false
  }
}
