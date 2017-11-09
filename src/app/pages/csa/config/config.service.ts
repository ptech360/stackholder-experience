import {Injectable} from '@angular/core';

import { Http,Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CustomHttpService } from "../../shared/shared.service";

@Injectable()
export class ConfigService{
  constructor(public http: CustomHttpService){

  }

  public getPrerequisite(){
    return this.http.get("https://hamdan.cloud.cms500.com/api/prerequisite")
    .map(this.extractData)
    .catch(this.handleError);
  }

  public postAudit(data:any){
    return this.http.post("https://hamdan.cloud.cms500.com/api/csa/audit",data)
    .map(this.extractData)
    .catch(this.handleError);
  }

  public getAudits(){
    return this.http.get("https://hamdan.cloud.cms500.com/api/csa/audit")
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