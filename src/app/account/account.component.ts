import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user={username:"",password:"",remember:false};

  constructor(public dialogRef:MatDialogRef<AccountComponent>) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.dialogRef.close();
  }

}
