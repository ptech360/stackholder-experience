import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuditsComponent } from "./audits.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AuditsComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule, CommonModule,HttpModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuditsComponent,
        
      }
    ])
  ],
})
export class AuditsModule{
  constructor(){
    
  }
}