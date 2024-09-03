import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './Guards/auth.guard';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'children', canActivateChild: [AuthGuard],
        children: [
            { path: 'child1', component: Child1Component},
            { path: 'child2/:id', component: Child2Component },
        ]
    },
    { path: 'home' , component: HomeComponent, canActivate: [AuthGuard]},
    {path : '**', component:PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}


