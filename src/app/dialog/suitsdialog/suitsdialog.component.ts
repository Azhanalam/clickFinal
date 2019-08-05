import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-suitsdialog',
  templateUrl: './suitsdialog.component.html',
  styleUrls: ['./suitsdialog.component.css']
})
export class SuitsdialogComponent implements OnInit {
  inputText:string;
  inputWarning:string="";

  constructor(private router:Router,public dialogRef: MatDialogRef<SuitsdialogComponent>) { }

  ngOnInit() {
  }

  YES(inputText){
    this.inputWarning = "";
    if(inputText === 'L') {
      this.dialogRef.close();
      this.router.navigate(["map3"]);
    }
    else {
      this.inputWarning = "Please enter the correct size";
    }
    console.log("input value: ",inputText);

    window.scrollTo(0,0);
  }
}
