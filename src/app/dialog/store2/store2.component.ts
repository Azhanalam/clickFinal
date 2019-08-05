import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-store2',
  templateUrl: './store2.component.html',
  styleUrls: ['./store2.component.css']
})
export class Store2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
YES(){

  this.router.navigate(["product2"]);
  window.scrollTo(0,0);
  }
}
