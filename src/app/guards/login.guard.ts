/**
 * Created by SergST on 02.03.2017.
 */

import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {AuthService} from "../services/login.service";



@Injectable()
export class LoginGuard implements  CanActivate {
   constructor (private authService: AuthService){}

   canActivate (): boolean {
     return this.authService.isLoggedIn()
   }
}
