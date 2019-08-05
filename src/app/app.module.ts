import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
  MatCardModule
} from '@angular/material';
import { SliderModule } from 'angular-image-slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { ScannerdialogComponent } from './dialog/scannerdialog/scannerdialog.component';
import { PickdialogComponent } from './dialog/pickdialog/pickdialog.component';
import { SuitsdialogComponent } from './dialog/suitsdialog/suitsdialog.component';
import { Scanner2Component } from './dialog/scanner2/scanner2.component';
import { Scanner3Component } from './dialog/scanner3/scanner3.component';
import { Suitsdialog2Component } from './dialog/suitsdialog2/suitsdialog2.component';
import { StoremapComponent } from './storemap/storemap.component';
import { ProductComponent } from './product/product.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { ItemlistComponent } from './dialog/itemlist/itemlist.component';
import { PathComponent } from './dialog/path/path.component';
import { AllitemspickedComponent } from './dialog/allitemspicked/allitemspicked.component';
import { Store1Component } from './dialog/store1/store1.component';
import { Store2Component } from './dialog/store2/store2.component';
import { Store3Component } from './dialog/store3/store3.component';
import { FinalpickedComponent } from './dialog/finalpicked/finalpicked.component';
import { Storemap2Component } from './storemap2/storemap2.component';
import { Storemap3Component } from './storemap3/storemap3.component';
import { Map4Component } from './map4/map4.component';
import { Order2Component } from './order2/order2.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    ProductDetailsComponent,
    HeaderComponent,
    Header2Component,
    ScannerdialogComponent,
    PickdialogComponent,
    SuitsdialogComponent,
    Scanner2Component,
    Scanner3Component,
    Suitsdialog2Component,
    StoremapComponent,
    ProductComponent,
    Product2Component,
    Product3Component,
    ItemlistComponent,
    PathComponent,
    AllitemspickedComponent,
    Store1Component,
    Store2Component,
    Store3Component,
    FinalpickedComponent,
    Storemap2Component,
    Storemap3Component,
    Map4Component,
    Order2Component,
  ],
  imports: [
    ZXingScannerModule,
    MatGridListModule,
    MatDialogModule,
    SliderModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    Store1Component,
    Store2Component,
    Store3Component,
    FinalpickedComponent,
    ItemlistComponent,
    PathComponent,
    AllitemspickedComponent,
    Suitsdialog2Component,
    Scanner2Component,
    Scanner3Component,
    SuitsdialogComponent,
    ScannerdialogComponent,
    PickdialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
