import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'child1', component: Child1Component},
    { path: 'child2', component: Child2Component },
    { path: 'home' , component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}


