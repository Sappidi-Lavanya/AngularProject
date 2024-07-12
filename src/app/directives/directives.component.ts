import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public ages:number[]=[1,3,5,6,8,22,34,43,23];
  public states :string[]=['andhra','telangana','tamilnadhu','karnataka'];
  public products:any=[
    {name:'pen',price:20,rating:4},
    {name:'phone',price:20456,rating:4.5},
    {name:'book',price:50,rating:3},
    {name:'Laptop',price:200000,rating:3.5},
    {name:'Vivophone',price:40456,rating:3.5},
    {name:'Slampbook',price:1150,rating:3},
    {name:'HD Laptop',price:400000,rating:3.5},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
