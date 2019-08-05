import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FinalpickedComponent } from '../finalpicked/finalpicked.component';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-suitsdialog2',
  templateUrl: './suitsdialog2.component.html',
  styleUrls: ['./suitsdialog2.component.css']
})
export class Suitsdialog2Component implements OnInit {
  inputText:string;
  inputWarning:string="";

  constructor(private dialog:MatDialog,public dialogRef: MatDialogRef<Suitsdialog2Component>) { }

  ngOnInit() {
  }

YES(inputText):void{
  this.inputWarning = "";
  if(inputText === 'L') {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(FinalpickedComponent, {
      width: '390px',
      // height:'425px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  else {
    this.inputWarning = "Please enter the correct size";
  }

//   console.log(inputText);
//  const dialogRef= this.dialog.open(FinalpickedComponent,{
//     width:"390px"
//   });
// dialogRef.afterClosed().subscribe(result=>{
//   console.log("the dialog was closed");
// });
}
}
