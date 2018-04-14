import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DataEntryComponent } from './de.component';

@NgModule({
 imports:[FormsModule, ReactiveFormsModule, CommonModule,HttpModule,
  RouterModule.forChild([
    {
      path: '',
      component: DataEntryComponent,      
    }
  ])],
 declarations:[DataEntryComponent],

})
export class DataEntryModule{
 
}