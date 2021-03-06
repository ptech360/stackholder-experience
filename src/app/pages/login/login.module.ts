import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [FormsModule, ReactiveFormsModule, CommonModule,HttpModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ],
})
export class LoginModule{
  constructor(){
    
  }
}