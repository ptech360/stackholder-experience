import {Component} from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./login.service";
import { StorageService } from "../shared/common.service";
@Component({
  selector:'login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css'],
  providers:[AuthService,StorageService]
})
export class LoginComponent{
  error: boolean;
  loginStart: boolean;

  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private storageService:StorageService,private router:Router){
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  submit(){
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe((response:any)=>{
      this.storageService.storeData("access_token", response.access_token);
      console.log(response);
      this.onSuccess();
    })
  }

  public onSuccess() {
    this.loginStart = false;
    this.router.navigateByUrl("/csa");
  }  

  public onError() {
    this.loginStart = false;
    this.error = true;
  }

}