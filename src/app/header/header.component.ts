import { Component, OnInit } from '@angular/core';
import { AccountComponent } from "../account/account.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
account(){
this.dialog.open(AccountComponent,{width:"500px",height:"450px"});
}

}
