import { Component, OnInit, AnimationStyleMetadata } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpModule } from "@angular/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productList = []
  cartList = []
  cart : any
  total = 0


  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.http.get("http://localhost:7000/api/product/cart")
    .subscribe(
      result=>{
        for(var i=0; i<result.json().length; i++){
          this.cart=result.json()
          for(i=0; i<result.json().length; i++){
            this.total+=(result.json()[i].Price*result.json()[i].quantity)
          }
        }
      }
    )
  }

  lalalala(){
    this.http.delete("http://localhost:7000/api/product/cart")
    .subscribe(
      result=>{
        location.reload()
      }
    )
  
  }
  pusingahgue(){
    this.route.navigate([""])
  }



 

  

}
