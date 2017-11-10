import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DEComponent } from "./de.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    DEComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DEComponent
      }
    ])
  ],  
})
export class DEModule{
  constructor(){
    
  }
}