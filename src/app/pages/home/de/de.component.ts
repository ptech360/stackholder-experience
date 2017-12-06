import {Component, AfterViewInit} from '@angular/core';
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
  evidencForm:FormGroup;
  selectedRoles:any[]=[];
  selectedTouchpoint : any = {};
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
      "finding":[""],
      "categoryId":[1],
      "rootCause":[""],
      "improvements":[""],
      "responsibleRole":this.fb.array([this.initRoles()]),
      "responsibleStaffIds":[''],
      "deadline":["2017-11-20"],
      "sourceRequired":[""],
      "risk":[false],
      "strategicPlanner":[false],
      "touchpointId":[''],
      "createdBy":[this.userDetails.id]
    });
    this.evidencForm = new FormGroup({
      title:new FormControl('',[Validators.required]),
      description:new FormControl('',Validators.required),
      file:new FormControl('',[Validators.required])
    });
  
  }

  ngAfterViewInit(){
    $('body').click(function() {
      $(".panel-finding").removeClass("in");
    });
  }

    collapse(id){
      $(id).collapse('toggle'); 
      $(".panel-finding").removeClass("in"); // remove active class from all
      // add active class to clicked element
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
        });
      }
    
    
      type;
      getEmployeeControl(){
        this.type = "pankaj";
        if(this.findingForm.contains('responsibleRole')){
          this.findingForm.removeControl('responsibleRole');
        }
        this.findingForm.addControl('responsibleStaffIds',new FormControl());
        
      }
    
      getRoleControl(){
        if(this.findingForm.contains('responsibleStaffIds')){
          this.findingForm.removeControl('responsibleStaffIds');
        }
        this.findingForm.addControl('responsibleRole',this.fb.array([this.initRoles()]))
      }
    
      employees:any[];
      getEmployees(unitId:any){
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
    
      responsibleStaff:any[];
      selectedStaff:any[]=[];
      selectedStaffIds:any[]=[];
      getResponsibleStaffIds(){
        this.findingForm.value["responsibleStaffIds"] = [];
        this.responsibleStaff.forEach(element => {
          if(this.selectedStaffIds.indexOf(element.id)===-1){
            this.selectedStaff.push(element);
            this.selectedStaffIds.push(element.id);
            }
        });
      }
    
      removeResponsibleStaffId(index:any){
        this.selectedStaff.splice(index,1);
        this.selectedStaffIds.splice(index,1);
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

  selectedFindingId;
  showEvidenceForm(e){
    this.selectedFindingId = e;
    // $('#evidenceForm').modal('show');
  }

  file:any;
  getFile(event:any) {
    this.file = event.srcElement.files[0];
  }

  stopPropagation(e){
    e.stopPropagation();
    console.log("asdf");
  }

  onEvidenceSubmit(){
    let formData = new FormData();
    formData.append('title',this.evidencForm.value['title']);
    formData.append('description',this.evidencForm.value['description']);
    formData.append('file',this.file);
    this.des.postEvidence(this.selectedFindingId,formData).subscribe((response:any)=>{
      console.log(response);
      $('#evidenceForm').modal('hide');
    })
  }

  editFinding(finding:any){
    console.log(finding);
    this.findingForm.patchValue(finding);
    if(finding.responsibleRole.length){
      this.type = 'tushar';
      const responsibleRoles = this.findingForm.controls["responsibleRole"] as FormArray;
      finding.responsibleRole.forEach((element:any,index:any) => {
        this.des.getRoles(element.departmentId).subscribe((response:any)=>{
          if(response.status == 204){
            this.roles[index] = [];
          }else{
            this.roles[index] = response;
          }
        })
        if(!index){
          responsibleRoles[index]=this.fb.group({
            departmentId:[element.departmentId,Validators.required],
            roleId:[element.roleId,Validators.required]
          })
        }else{
          responsibleRoles.push(this.fb.group({
            departmentId:[element.departmentId,Validators.required],
            roleId:[element.roleId,Validators.required]
          }));
        }
      });
    }else if(finding.responsibleStaff.length){
      this.type = 'pankaj';

    }
  }

  // selectedTouchpoint:any;
  submitFinding(){
    this.findingForm.controls["touchpointId"].setValue(this.selectedTouchpoint);
    if(this.findingForm.contains('responsibleStaffIds'))
      this.findingForm.controls["responsibleStaffIds"].patchValue(this.selectedStaffIds);
    console.log(this.findingForm.value);
    this.des.postFinding(this.findingForm.value).subscribe((response:any)=>{
      console.log(response);
      $('#myModal').modal('hide');
      this.findingForm.reset();
    });
  }
}