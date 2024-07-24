import { Component, OnInit } from '@angular/core';
import { GmailsService } from '../gmails.service';

@Component({
  selector: 'app-gmails',
  templateUrl: './gmails.component.html',
  styleUrls: ['./gmails.component.css']
})
export class GmailsComponent implements OnInit {

  public mails:any=[];

  constructor(private _gmailService:GmailsService) { 
    _gmailService.getGmail().subscribe(
      (data:any)=>{
        this.mails=data;
      },
      (err:any)=>{
        alert("internal error")
      }
    )
  }

  ngOnInit(): void {
  }

}
