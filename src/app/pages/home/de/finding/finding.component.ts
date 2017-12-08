import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { FormArray } from '@angular/forms/src/model';
import { Validators } from '@angular/forms';
import { DEAuditService } from '../de.service';
import { StorageService } from '../../../shared/common.service';

declare let $: any;

@Component({
  selector: 'finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.css', './../de.component.css'],
  providers: [DEAuditService]
})
export class FindingComponent {
  public data: any;
  roles: any[] = [[]];
  units: any[];
  userDetails: any = this.storage.getData("userDetails");
  categories: any[];
  findingForm: FormGroup;
  evidencForm: FormGroup;
  selectedRoles: any[] = [];
  selectedTouchpoint: any = {};
  selectedFindingId;
  selectedFinding:any;
  file: any;
  constructor(public des: DEAuditService, public route: ActivatedRoute, private fb: FormBuilder,
    private storage: StorageService) {
    this.route.params.subscribe((param: any) => {
      this.selectedTouchpoint = param['touchpointId'];
      this.des.getFindings(param['touchpointId']).subscribe((response: any) => {
        if (response.status == 204)
          this.data = {};
        else
          this.data = response;
      })
    });

    this.des.getPrerequisite().subscribe((response: any) => {
      if (response.status == 204) {
        this.categories = [];
        this.units = [];
      } else {
        this.categories = response.categories;
        this.units = response.units;
      }
    })
    this.findingForm = this.resetFindingForm();
    this.evidencForm = this.resetEvidenceForm();
  }

  newFinding() {
    this.isFindingUpdate = false;
    this.findingForm = this.resetFindingForm();
  }

  newEvidence(finding: any) {
    this.selectedFindingId = finding.findingId;
    this.selectedFinding = finding;
    this.evidencForm = this.resetEvidenceForm();
  }

  resetEvidenceForm() {
    return new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      file: new FormControl('', [Validators.required])
    });
  }


  resetFindingForm() {
    return this.fb.group({
      "finding": [""],
      "categoryId": [1],
      "rootCause": [""],
      "improvements": [""],
      "responsibleRole": this.fb.array([this.initRoles()]),
      "responsibleStaffIds": [''],
      "deadline": ["2017-11-20"],
      "sourceRequired": [""],
      "risk": [false],
      "strategicPlanner": [false],
      "touchpointId": [''],
      "createdBy": [this.userDetails.id]
    });
  }

  responsibleStaff: any[];
  selectedStaff: any[] = [];
  selectedStaffIds: any[] = [];
  getResponsibleStaffIds() {
    this.findingForm.value["responsibleStaffIds"] = [];
    this.responsibleStaff.forEach(element => {
      if (this.selectedStaffIds.indexOf(element.id) === -1) {
        this.selectedStaff.push(element);
        this.selectedStaffIds.push(element.id);
      }
    });
  }

  removeResponsibleStaffId(index: any) {
    this.selectedStaff.splice(index, 1);
    this.selectedStaffIds.splice(index, 1);
  }

  isCollapse(event, button) {
    if (event.srcElement.className == 'collapsed') {
      $('.bttn-group').hide();
      $(button).show();
    } else {
      $(button).hide();
    }
  }

  editFinding(finding: any) {
    this.selectedFinding = finding;
    console.log(finding);
    this.isFindingUpdate = true;
    this.selectedFindingId = finding.findingId;
    this.findingForm = this.resetFindingForm();
    this.findingForm.patchValue(finding);
    if (this.findingForm.contains('responsibleRole')) {
      this.findingForm.removeControl('responsibleRole');
    }
    if (this.findingForm.contains('responsibleStaffIds')) {
      this.findingForm.removeControl('responsibleStaffIds');
    }
  }

  addRole(form: any) {
    const responsibleRole = this.findingForm.controls["responsibleRole"] as FormArray;
    responsibleRole.push(this.initRoles());
  }

  removeRole(index: any) {
    const responsibleRole = this.findingForm.controls["responsibleRole"] as FormArray;
    responsibleRole.removeAt(index);
  }

  initRoles() {
    return this.fb.group({
      departmentId: ['', Validators.required],
      roleId: ['', Validators.required]
    });
  }


  type;
  getEmployeeControl() {
    this.type = "pankaj";
    if (this.findingForm.contains('responsibleRole')) {
      this.findingForm.removeControl('responsibleRole');
    }
    this.findingForm.addControl('responsibleStaffIds', new FormControl());

  }

  getRoleControl() {
    this.type = "tushar";
    if (this.findingForm.contains('responsibleStaffIds')) {
      this.findingForm.removeControl('responsibleStaffIds');
    }
    this.findingForm.addControl('responsibleRole', this.fb.array([this.initRoles()]))
  }

  employees: any[];
  getEmployees(unitId: any) {
    console.log("log", unitId);
    this.des.getEmployees(unitId).subscribe((response: any) => {
      if (response.status == 204) {
        this.employees = [];
      } else {
        this.employees = response;
      }

    })
  }

  getRoles(unitId: any, index: any) {
    console.log("role", unitId);
    this.des.getRoles(unitId).subscribe((response: any) => {
      if (response.status == 204) {
        this.roles[index] = [];
      } else {
        this.roles[index] = response;
      }

    })
  }

  getFile(event: any) {
    this.file = event.srcElement.files[0];
  }

  onEvidenceSubmit() {
    let formData = new FormData();
    formData.append('title', this.evidencForm.value['title']);
    formData.append('description', this.evidencForm.value['description']);
    formData.append('file', this.file);
    this.des.postEvidence(this.selectedFindingId, formData).subscribe((response: any) => {
      this.selectedFinding.evidances.push(response);
      $('#evidenceForm').modal('hide');
    })
  }

  // selectedTouchpoint:any;
  isFindingUpdate: boolean = false;
  submitFinding() {
    this.findingForm.controls["touchpointId"].setValue(this.selectedTouchpoint);
    if (this.findingForm.contains('responsibleStaffIds'))
      this.findingForm.controls["responsibleStaffIds"].patchValue(this.selectedStaffIds);

    if (!this.isFindingUpdate)
      this.des.postFinding(this.findingForm.value).subscribe((response: any) => {
        this.data.touchpoints.findings.push(response);
        $('#myModal').modal('hide');
        this.findingForm = this.resetFindingForm();
      });
    else {
      delete this.findingForm.value["createdBy"];
      delete this.findingForm.value["touchpointId"];
      delete this.findingForm.value["risk"];
      delete this.findingForm.value["strategicPlanner"];
      this.des.updateFinding(this.selectedFindingId, this.findingForm.value).subscribe((response: any) => {
        this.selectedFinding = this.findingForm.value;
          $('#myModal').modal('hide');
          this.findingForm = this.resetFindingForm();
          })
    }
  }
}