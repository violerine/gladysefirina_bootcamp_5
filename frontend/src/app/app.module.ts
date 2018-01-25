import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ProductdetailComponent,
    CartComponent,
    DetailComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component : Page1Component},
      {path:'cart', component : CartComponent},
      {path:'product/:id', component : DetailComponent}
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
