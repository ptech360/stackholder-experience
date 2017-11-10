import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren:'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: 'app/pages/csa/csa.module#CSAModule'
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes, { useHash: true, })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
