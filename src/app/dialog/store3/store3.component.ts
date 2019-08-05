import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-store3',
  templateUrl: './store3.component.html',
  styleUrls: ['./store3.component.css']
})
export class Store3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
YES(){
  this.router.navigate(["product3"]);
  window.scrollTo(0,0);
}
}
