import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this._route.navigateByUrl("/login")
    //remove the token
    sessionStorage.removeItem("my-app");

  }

}
