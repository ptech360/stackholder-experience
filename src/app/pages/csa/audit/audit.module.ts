import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuditComponent } from "./audit.component";
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
        path:'',
        redirectTo:'audits',
        pathMatch:'full'
      },
      {
        path: '',
        component: AuditComponent,
        children:[
          {
            path:'audits',
            loadChildren:'app/pages/csa/audit/audits/audits.module#AuditsModule'
          },
          {
            path:'config',
            loadChildren:'app/pages/csa/audit/config/config.module#ConfigModule'
          },
        ]
      }
    ])
  ],
})
export class AuditModule{
  constructor(){
    
  }
}