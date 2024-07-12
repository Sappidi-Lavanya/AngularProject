import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  public age:number=24;
  public name:string='lavanya';
  public phone:string="+91";
  public isValid:boolean=false;
  public isValided:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert("sucessfully completed");
  }
  serch(){
    alert("alert");
  }

}
