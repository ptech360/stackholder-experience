import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo:'csa',
        pathMatch:'full'
      },
      {
        path: '',
        component: HomeComponent,
        children:[          
          {
            path:'csa',
            loadChildren:'app/pages/home/csa/csa.module#CSAModule'
          },
          {
            path:'de',
            loadChildren:'app/pages/home/de/de.module.ts#DEModule'
          }
        ]
      }
    ])
  ],  
})
export class HomeModule{
  constructor(){
    
  }
}