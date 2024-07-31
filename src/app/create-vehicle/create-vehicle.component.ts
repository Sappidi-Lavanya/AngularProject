import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl(),

 })
 public id:string="";

  constructor(private _vehicleService:VehicleService,private _activated:ActivatedRoute) { 
    _activated.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        _vehicleService.getVechicle(data.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.vehicleForm);
    if(this.id){
      //edit
      this._vehicleService.updatedVechicle(this.vehicleForm.value,this.id).subscribe(
        (data:any)=>{
          alert("update sucessfully");
          this.vehicleForm.reset();
        },
        (err:any)=>{
          alert("internal error");
        }
      )
    }
    else{
      //create
      this._vehicleService.createVechicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("succssfully completed");
          this.vehicleForm.reset();
        },
        (err:any)=>{
          alert("Internal error");
        }
      )
    }
  
  }

}
