import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public names:string[]=[];
  public name:string="";

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    this.names.push(this.name);
    this.name="";

  }

}
