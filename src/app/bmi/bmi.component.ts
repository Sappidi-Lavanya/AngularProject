import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  public height:number=0;
  public weight:number=0;
  public result:number=0;
  public r:string="";



  constructor() { }

  ngOnInit(): void {
  }
  check(){
    this.result=Math.round(this.weight/((this.height/100)*(this.height/100)));
    if(this.result<=18.5){
      this.r="(under weight)";
    }
    else if(this.result<25 &&this.result>18.5){
      this.r="(NORMAL WEIGHT)"
    }
    else if(this.result<30 && this.result>25){
      this.r="(Over weight)"
    }
  else if (this.result<35 && this.result>30){
    this.r="(Obesity)"
  }
  else{
    this.r=("please enter valid inputs");
  }

  }

}
