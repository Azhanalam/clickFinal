import { Component, OnInit } from '@angular/core';
import { ScannerdialogComponent } from '../dialog/scannerdialog/scannerdialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
    window.scrollTo(0, 0);
    
  }

}
