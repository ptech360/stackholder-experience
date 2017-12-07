import {Injectable} from '@angular/core';

import { Http,Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CustomHttpService } from "../../shared/shared.service";

@Injectable()
export class DEAuditService{
  constructor(public http: CustomHttpService,public htttp:Http){
  }

  public getPrerequisite(){
    return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/prerequisite")
    .map(this.extractData)
    .catch(this.handleError);
  }

  public getAudits(){
    return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/de/audits")
    .map(this.extractData)
    .catch(this.handleError);
  }

  public getEmployees(unitId:any){
    return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/unit/"+unitId+"/employees")
    .map(this.extractData)
    .catch(this.handleError);
  }

  public getRoles(unitId:any){
    return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/unit/"+unitId+"/roles")
    .map(this.extractData)
    .catch(this.handleError);
  }

  public postFinding(data:any){
    return this.http.post("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/de/finding",data)
    .map(this.extractData)
    .catch(this.handleError);
  }

  public updateFinding(findingId:any,data:any){
    return this.http.put("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/de/finding/"+findingId,data)
    .map(this.extractData)
    .catch(this.handleError);
  }

  public postEvidence(findingId:any,data:any){
    var options = new RequestOptions({
      headers: new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    });
    return this.htttp.post("https://hamdan-nxtlife.ind-cloud.everdata.com/api//employee/de/finding/"+findingId+"/evidance",data,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status === 204) { return res; }
    let body = res.json();
    return body || {};
  }


  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      if (error.status === 0) {
        errMsg = `${error.status} - "Something is wrong.."`;
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}