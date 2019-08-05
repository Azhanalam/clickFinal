import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Scanner2Component } from '../dialog/scanner2/scanner2.component';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  submit1():void
  {
    const dialogRef = this.dialog.open(Scanner2Component, { 
      width: '500px',
      // height:'500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    window.scrollTo(0,0);
  }
}
