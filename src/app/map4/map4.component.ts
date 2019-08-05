import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map4',
  templateUrl: './map4.component.html',
  styleUrls: ['./map4.component.css']
})
export class Map4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
submit(){
  this.router.navigate(["map"]);
  window.scrollTo(0,0);
}
}
