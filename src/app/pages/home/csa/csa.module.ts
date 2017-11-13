import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CSAComponent } from "./csa.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    CSAComponent
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
        component: CSAComponent,
        children:[
          {
            path:'audits',
            loadChildren:'app/pages/home/csa/audits/audits.module#AuditsModule'
          },
          {
            path:'config',
            loadChildren:'app/pages/home/csa/config/config.module#ConfigModule'
          },
        ]
      }
    ])
  ],
})
export class CSAModule{
  constructor(){
    
  }
}