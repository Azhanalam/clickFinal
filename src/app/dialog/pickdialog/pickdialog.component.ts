import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-pickdialog',
  templateUrl: './pickdialog.component.html',
  styleUrls: ['./pickdialog.component.css']
})
export class PickdialogComponent implements OnInit {

 inputText:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  YES(inputText){
    console.log("input Tex",inputText);
    this.router.navigate(["map2"]);
    window.scrollTo(0,0);
  }
  
}
