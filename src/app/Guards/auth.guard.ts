import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, CanDeactivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate, CanActivateChild {

constructor(private authService: AuthenticationService, private router: Router){ }
  
// For controlling access to child routes
canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  if (this.authService.isLoggedIn()) {
    return true;
  } else {
    console.log("Access Denied");
    // this.router.navigate(['/login']);
    return false;
  }
  }

// For controlling access to specific routes
canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):  boolean {
  if (this.authService.isLoggedIn()) {
    return true;
  } else {
    console.log("Access Denied");
    // this.router.navigate(['/login']);
    return false;
  }
}


}
