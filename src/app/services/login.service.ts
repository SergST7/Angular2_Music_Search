/**
 * Created by SergST on 02.03.2017.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  login(usr: string, pwd: string): boolean {
    if(usr === 'admin' && pwd === 'admin') {
      localStorage.setItem("activeUser", usr);
      return true
    }
    return false
  }

  logout (): any {
    localStorage.removeItem('activeUser')
  }

  getUser ():any {
    return localStorage.getItem('activeUser')
  }

  isLoggedIn (): boolean {
    return this.getUser() !== null
  }
}
