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
        redirectTo:'audit',
        pathMatch:'full'
      },
      {
        path: '',
        component: CSAComponent,
        children:[          
          {
            path:'audit',
            loadChildren:'app/pages/csa/audit/audit.module#AuditModule'
          },
          {
            path:'de',
            loadChildren:'app/pages/csa/de/de.module#DEModule'
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