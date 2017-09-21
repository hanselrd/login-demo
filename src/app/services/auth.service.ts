import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn() {
    let user = localStorage.getItem('login-demo');
    return user? true : false;
  }

  login(email: string, password: string) {
    if (this.isLoggedIn()) return false;
    localStorage.setItem('login-demo', `${email}:${password}`);
    return true;
  }

  logout() {
    if (!this.isLoggedIn()) return false;
    localStorage.removeItem('login-demo');
    return true;
  }

  get currentUser() {
    let user = localStorage.getItem('login-demo');
    let split = user.split(':');
    return split[0];
  }

}
