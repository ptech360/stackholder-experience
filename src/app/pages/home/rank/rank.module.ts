import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RankComponent } from "./rank.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    RankComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RankComponent
      }
    ])
  ],  
})
export class RankModule{
  
  constructor(){
    
  }
}