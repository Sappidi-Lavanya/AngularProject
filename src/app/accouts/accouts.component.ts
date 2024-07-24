import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accouts',
  templateUrl: './accouts.component.html',
  styleUrls: ['./accouts.component.css']
})
export class AccoutsComponent implements OnInit {

  public accounts:any=[];
  public term:string="";
  public column:string="";
  public order:string="";
  public limit:string="";
  public page:string="";


  constructor(private _accountsService:AccountsService) { 
    _accountsService.getAccounts().subscribe(
      (data:any)=>{
      this.accounts=data;
      },
      (err:any)=>{
      alert("internal error");
      }
    )
  }

  ngOnInit(): void {
  }
  filter(){
    this._accountsService.getFilteredAccounts(this.term).subscribe(
     (data:any)=>{
    this.accounts=data;
     },
     (err:any)=>{
    alert("internal error");
     }
    )
  }
  sort(){
    this._accountsService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
         },
         (err:any)=>{
        alert("internal error");
         }
    )
  }
  
  paged(){
    this._accountsService.getPagedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
         },
         (err:any)=>{
        alert("internal error");
         }
    )
  }
  delete(id:string){
    this._accountsService.deleteAccounts(id).subscribe(
      (data:any)=>{
     alert("succefully deleted");
     location.reload();
      },
      (err:any)=>{
       alert("deletion failed!")
      }
    )
  }
}
