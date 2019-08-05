import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrls: ['./order2.component.css']
})
export class Order2Component implements OnInit {

  DATE:string=new Date(new Date().setUTCDate(new Date().getDate()-1)).toJSON().slice(0,10).split('-').reverse().join('/');
  DATE1:string=new Date().toJSON().slice(0,10).split('-').reverse().join('/');

  constructor() { }

  ngOnInit() {
  }

}
