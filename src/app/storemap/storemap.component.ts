import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { Store1Component } from '../dialog/store1/store1.component';

@Component({
  selector: 'app-storemap',
  templateUrl: './storemap.component.html',
  styleUrls: ['./storemap.component.css']
})
export class StoremapComponent implements OnInit {

  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit() {

  }
  submit(){
    // this.router.navigate(["product"]);
    // const dialogRef = this.dialog.open(Store1Component, {
    //   width: '517px',
      // height:'500px'
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //
    // });
    //
    this.router.navigate(["product"]);
    window.scrollTo(0,0);
  }

}
