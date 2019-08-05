import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StoremapComponent } from './storemap/storemap.component';
import { Storemap2Component } from './storemap2/storemap2.component';
import { Storemap3Component } from './storemap3/storemap3.component';
// import { Map4Component } from './map4/map4.component';
import { Order2Component } from './order2/order2.component';

import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';

const routes: Routes = [
  {path:'',component:OrderDetailsComponent},
  {path:'order',component:Order2Component},
  {path:'map',component:StoremapComponent},
  {path:'map2',component:Storemap2Component},
  {path:'map3',component:Storemap3Component},
  // {path:'map4',component:Map4Component},
  {path:'product2',component:Product2Component},
  {path:'product3',component:Product3Component},
  {path:'product',component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
