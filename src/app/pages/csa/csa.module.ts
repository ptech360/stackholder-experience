import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CSAComponent } from "./csa.component";
import { DataService } from "./csa.service";

@NgModule({
  declarations: [
    CSAComponent
  ],
  imports: [
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