import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public vehicles:any=[];
  public term:string="";
  public column:string="";
  public order:string="";
  public limit:string="";
  public page:string="";


  constructor(private _vehicleService:VehicleService) { 
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
      this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  ngOnInit(): void {
  }
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  sort(){
    this._vehicleService.getSortedVehicle(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
 pagee(){
  this._vehicleService.getPagedVehicle(this.limit,this.page).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("internal server error");
    }

  )
 }
 delete(id:string){
  this._vehicleService.deleteVehicle(id).subscribe(
    (data:any)=>{
      alert("deleted  successfulyy");
      location.reload();
    },
    (err:any)=>{
      alert("deletion failed");
    }
  )
 }

}
