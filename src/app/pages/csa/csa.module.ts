import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CSAComponent } from "./csa.component";
import { DataService } from "./csa.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    CSAComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo:'config',
        pathMatch:'full'
      },
      {
        path: '',
        component: CSAComponent,
        children:[
          {
            path:'config',
            loadChildren:'app/pages/csa/config/config.module#ConfigModule'
          },
          {
            path:'audit',
            loadChildren:'app/pages/csa/audit/audits.module#AuditModule'
          }
        ]
      }
    ])
  ],
  providers:[DataService],
  
})
export class CSAModule{
  constructor(){
    
  }
}