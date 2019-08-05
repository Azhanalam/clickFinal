import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Scanner3Component } from '../dialog/scanner3/scanner3.component';


@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  submit3():void
  {
    const dialogRef = this.dialog.open(Scanner3Component, { 
      width: '500px',
      // height:'500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    window.scrollTo(0,0);
  }
}
