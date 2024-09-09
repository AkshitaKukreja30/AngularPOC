import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Child2Component } from '../components/child2/child2.component';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class g2Guard implements CanDeactivate<Component> {

  private isDirty: boolean = true;

  canDeactivate(component: Component, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean{
    if (this.isDirty) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  }


