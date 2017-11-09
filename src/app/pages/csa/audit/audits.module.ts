import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuditComponent } from "./audits.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AuditComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule, CommonModule,HttpModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuditComponent,
        children:[
         
        ]
      }
    ])
  ],
})
export class AuditModule{
  constructor(){
    
  }
}