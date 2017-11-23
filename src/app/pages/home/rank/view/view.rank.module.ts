import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewRankComponent } from "./view.rank.component";
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    ViewRankComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewRankComponent
      }
    ])
  ],  
})
export class ViewRankModule{
  
  constructor(){
    
  }
}