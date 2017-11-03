import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigComponent } from "./config.component";

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ConfigComponent,
        children:[
         
        ]
      }
    ])
  ],
})
export class ConfigModule{
  constructor(){
    
  }
}