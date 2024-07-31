import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public ac:string="";
  public bc:string="";
  public ap:string="";
//Event Created
  @Output() public bEvent:EventEmitter<any>=new EventEmitter()

  //Event Emit
  send(){
  this.bEvent.emit(this.bc);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
