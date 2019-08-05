import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-finalpicked',
  templateUrl: './finalpicked.component.html',
  styleUrls: ['./finalpicked.component.css']
})
export class FinalpickedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
YES()
{
  this.router.navigate(["order"]);
}
}
