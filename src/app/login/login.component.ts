import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public  loginForm:FormGroup= new FormGroup({
    email:new FormControl(),
    password:new FormControl(), 

  })

  constructor(private _loginservice:LoginService,private _route:Router) { }

  ngOnInit(): void {

  }
  login(){
    console.log(this.loginForm);
    this._loginservice.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login sucess");
        this._route.navigateByUrl("/dashboard")
        //to store the token
        sessionStorage.setItem("my-app",data.token);
      },
      (err:any)=>{
        alert("inavlid")
      }
    )
  }


}
