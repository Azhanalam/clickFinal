import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PathComponent } from '../path/path.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  PICK():void
  {
    this.router.navigate(["map"]);
    window.scrollTo(0,0);
    // const dialogRef = this.dialog.open(PathComponent, {
    //   width: '465px',
    //   // height:'500px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //
    // });

  }

}
