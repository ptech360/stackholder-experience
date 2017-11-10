import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigComponent } from "./config.component";
import { SharedModule } from "../../../shared/shared.module";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";
// import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    // FormsModule, ReactiveFormsModule, CommonModule,HttpModule,
    SharedModule,
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