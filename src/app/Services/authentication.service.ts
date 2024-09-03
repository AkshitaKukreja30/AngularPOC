import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticated = false;

  constructor() { }

  mockLogin(){
    this.isAuthenticated = true;
  }

  mockLogout(){
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean{
    // return this.isAuthenticated;
    return true;
  }
}
