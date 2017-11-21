import {Component} from '@angular/core';
import { DEAuditService } from "./de.service";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { StorageService } from "../../shared/common.service";
import { log } from 'util';
import { FormArray } from '@angular/forms/src/model';
import { Validators } from '@angular/forms';

declare let $:any;

@Component({
  selector:'de',
  templateUrl:'./de.component.html',
  styleUrls:['./de.component.css'],
  providers:[DEAuditService,StorageService]
})
export class DEComponent{
  roles: any[] =[[]];
  units: any[];
  userDetails:any = this.storage.getData("userDetails");
  categories: any[];
  audits: any[];
  findingForm:FormGroup;
  selectedRoles:any[]=[];
  constructor(public des: DEAuditService, 
              private fb:FormBuilder,
              private storage:StorageService) {
    this.getAudits();
    this.des.getPrerequisite().subscribe((response:any)=>{
      if(response.status == 204){
        this.categories = [];
        this.units = [];
      }else{
      this.categories = response.categories;
      this.units = response.units;
      }
    })
    this.findingForm = this.fb.group({
      "finding":["failure"],
      "categoryId":[1],
      "rootCause":["need personal attention"],
      "improvements":["assign 2 employees for the work"],
      "responsibleRole":this.fb.array([this.initRoles()]),
      "responsibleStaffIds":[''],
      "deadline":["2017-11-20"],
      "sourceRequired":["10 work hours for LD"],
      "touchpointId":[''],
      "createdBy":[this.userDetails.id]
  })
  }

  addRole(form:any){
    const responsibleRole = this.findingForm.controls["responsibleRole"] as FormArray;
    responsibleRole.push(this.initRoles());
  }

  removeRole(index:any){
    const responsibleRole = this.findingForm.controls["responsibleRole"] as FormArray;
    responsibleRole.removeAt(index);
  }

  initRoles(){
    return this.fb.group({
      departmentId:['',Validators.required],
      roleId:['',Validators.required]
    })
  }

  employees:any[];
  getEmployees(unitId:any){
    if(this.findingForm.contains('responsibleRole')){
      this.findingForm.removeControl('responsibleRole');
    }
    this.findingForm.addControl('responsibleStaffIds',this.fb.array([this.initRoles()]))
    console.log("log", unitId);
    this.des.getEmployees(unitId).subscribe((response:any)=>{
      if(response.status == 204){
        this.employees = [];
      }else{
        this.employees = response;
      }
      
    })
  }

  getRoles(unitId:any,index:any){
        if(this.findingForm.contains('responsibleStaffIds')){
      this.findingForm.removeControl('responsibleStaffIds');
    }
    this.findingForm.addControl('responsibleRole',new FormControl())
    console.log("role",unitId);
    this.des.getRoles(unitId).subscribe((response:any)=>{
      if(response.status == 204){
        this.roles[index] = [];
      }else{
        this.roles[index] = response;
      }
      
    })
    
  }


  getAudits(){
    this.des.getAudits().subscribe((response:any)=>{
      if(response.status == 204){
        this.audits = [];
      }else{
      this.audits = response;
    }
    })
  }

  getRowSpan(array:any){
    var rowSpan = 1;
    rowSpan += array.length;
    array.forEach((element) => {
      rowSpan += element.channels.length;
      // rowSpan += element.dataSources.length;
    });
    if(rowSpan == 1)
      return rowSpan+1;
    return rowSpan;
  }

  getRowSpanOfStakeholder(array){
    var rowSpan = 1;
    rowSpan += array.length;
    array.forEach((element) => {
      rowSpan += element.touchpoints.length;
      element.touchpoints.forEach(innerElement => {
        rowSpan += innerElement.channels.length;
      });
    });
    if(rowSpan == 1)
      return rowSpan+1;
    return rowSpan;
  }

  getRowSpanOfTouchPoint(tp:any){
    if(tp.channels.length>tp.dataSources.length)
      return tp.channels.length + 2;
    else
      return tp.dataSources.length + 2;
  }

  selectedTouchpoint:any;
  submitFinding(){
    this.findingForm.controls["touchpointId"].setValue(this.selectedTouchpoint);
    console.log(this.findingForm.value);
    this.des.postFinding(this.findingForm.value).subscribe((response:any)=>{
      console.log(response);
      $('#myModal').modal('hide');
    })
  }
}