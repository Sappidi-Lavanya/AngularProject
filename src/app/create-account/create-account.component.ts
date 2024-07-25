import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup=new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),

  })

  constructor(private _accountsService:AccountsService) { }

  ngOnInit(): void {
  }
  submit(){
    this._accountsService.createAccounts(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("created");
      },
      (err:any)=>{
        alert("errorrc")
      }
    )

  }

}
