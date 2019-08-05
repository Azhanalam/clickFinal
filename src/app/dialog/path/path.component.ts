import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Yes(){
    this.router.navigate(["map"]);
    window.scrollTo(0,0);
  }
}
