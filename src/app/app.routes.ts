import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { HomeComponent } from './components/home/home.component';
import { LearningsignalComponent } from './components/learningsignal/learningsignal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './Guards/auth.guard';
import { g2Guard } from './Guards/g2.guard';

export const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'children', canActivateChild: [AuthGuard],
        children: [
            { path: 'child1',  loadComponent: () => import('./components/child1/child1.component').then(m => m.Child1Component)},
            { path: 'child2/:id', component: Child2Component, canDeactivate:[g2Guard] },
        ]
    },
    { path: 'home' , component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'lifecycle', loadComponent: () => import('./components/lifecyclehook/lifecyclehook.component').then(x => x.LifecyclehookComponent)},
    {path: 'login', loadComponent: () => import('./components/login/login.component').then(x => x.LoginComponent)},
    {path: 'register', loadComponent: () => import('./components/register/register.component').then(x => x.RegisterComponent)},
    {path: 'product', loadComponent: () => import('./components/products/products.component').then(x => x.ProductsComponent)},
    {path: 'signal', loadComponent: () => import('./components/learningsignal/learningsignal.component').then(x => x.LearningsignalComponent)},
    {path: 'rxjs', loadComponent: () => import('./components/learnrxjs/learnrxjs.component').then(x => x.LearnrxjsComponent)},
    {path: 'productv2', loadComponent: () => import('./components/product-v2/product-v2.component').then(x => x.ProductV2Component)},









    {path : '**', component:PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}


