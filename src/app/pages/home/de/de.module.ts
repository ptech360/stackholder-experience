import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DEComponent } from "./de.component";
import { SharedModule } from "../../shared/shared.module";
import { FindingComponent } from './finding/finding.component';

@NgModule({
  declarations: [
    DEComponent,FindingComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DEComponent
      },
      {
        path: 'finding/:touchpointId',
        component:FindingComponent
      }
    ])
  ],  
})
export class DEModule{
  
  constructor(){
    
  }
}