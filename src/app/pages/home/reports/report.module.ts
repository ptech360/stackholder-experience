import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportComponent } from "./report.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportComponent
      }
    ])
  ],  
})
export class ReportModule{
  
  constructor(){
    
  }
}