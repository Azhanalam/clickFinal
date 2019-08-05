import { Component, OnInit } from '@angular/core';
import { ScannerdialogComponent } from '../dialog/scannerdialog/scannerdialog.component';
import { Scanner2Component } from '../dialog/scanner2/scanner2.component';
import { Scanner3Component } from '../dialog/scanner3/scanner3.component';

import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }
  submit():void
  {
    const dialogRef = this.dialog.open(ScannerdialogComponent, { 
      width: '500px',
      // height:'500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
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
    
  }

  submit2(event):void
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


