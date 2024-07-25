import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vechcle-view',
  templateUrl: './vechcle-view.component.html',
  styleUrls: ['./vechcle-view.component.css']
})
export class VechcleViewComponent implements OnInit {
  public vechicle:any={};

  constructor(private _activeedRoute:ActivatedRoute,private _vehicleService:VehicleService) { 
    _activeedRoute.params.subscribe(
      (data:any)=>{
        _vehicleService.getVechicle(data.id).subscribe(
          (data:any)=>{
            this.vechicle=data;

          },
          (err:any)=>{
            alert("internal server");
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
