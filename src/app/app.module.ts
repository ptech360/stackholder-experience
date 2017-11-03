import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'csa',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren:'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'csa',
    loadChildren: 'app/pages/csa/csa.module#CSAModule'
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, { useHash: true, })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
