import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-store1',
  templateUrl: './store1.component.html',
  styleUrls: ['./store1.component.css']
})
export class Store1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  YES(){
    this.router.navigate(["product"]);
    window.scrollTo(0,0);
  }
}
