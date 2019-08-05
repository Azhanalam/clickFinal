import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemlistComponent } from '../dialog/itemlist/itemlist.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  DATE1:string=new Date(new Date().setUTCDate(new Date().getDate()-1)).toJSON().slice(0,10).split('-').reverse().join('/');
  DATE:string=new Date().toJSON().slice(0,10).split('-').reverse().join('/');
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  submit():void
  {
    const dialogRef = this.dialog.open(ItemlistComponent, { 
      width: '290px',
      // height:'500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
  }

}
