import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "./pages/shared/auth.gaurd";

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
    loadChildren: 'app/pages/csa/csa.module#CSAModule',canActivate:[AuthGuard]
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
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
