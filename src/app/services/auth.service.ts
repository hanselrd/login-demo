import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

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
    this.router.navigate(['login']);
    return true;
  }

  get currentUser() {
    let user = localStorage.getItem('login-demo');
    let split = user.split(':');
    return { name: split[0] };
  }

}
