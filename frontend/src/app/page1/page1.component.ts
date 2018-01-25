import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpModule } from "@angular/http";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  file : File;
  productList = []
  hellokitty = "hellokitty"
  mymelody = "mymelody"
  cinnamoroll ="cinnamoroll"
  pompompurin ="pompompurin"
  keroppi ="keroppi"
  id = []
  cart=0;
  tes


  constructor(private http : Http, private route : Router) { }

  ngOnInit() {

    this.http.get("http://localhost:7000/api/product/cart")
    .subscribe(
      result=>{
        for(var i=0;i<result.json().length;i++){
          this.cart+=result.json()[i].quantity
        }
      }
    )


  this.loadproductList()

  }

  loadproductList(){
;
    let header = new Headers()
    let options = new RequestOptions({ headers : header });

    this.http.get("http://localhost:7000/api/product", options)
    .subscribe(
      result => {
        this.productList = result.json();
      },
      error => {
        
      }
    );
  }

  fileChange($event){
    this.file = $event.target.files[0];
  }

  SaveProductData(f : NgForm){
    if( f.value.name != "" && f.value.name != null && this.file != null){

      
      let formData = new FormData();
      formData.append("name", f.value.name);
      formData.append("description", f.value.description);
      formData.append("variant", f.value.variant);
      formData.append("price", f.value.price);
      formData.append("color", f.value.color);
      formData.append("image", this.file);

      let header = new Headers();
      let options = new RequestOptions({ headers : header });

      this.http.post("http://localhost:7000/api/product/post", formData, options)
      .subscribe(
        result => {
          console.log(result.json());
          this.loadproductList();
          f.reset();
        },
        error => {
          console.log(error);
        },
      );

      

    }
    else{
      console.log("error")
    }
  }

  loadproductHK(x){
    
    let header = new Headers()
    let options = new RequestOptions({ headers : header });
    console.log(x)

    this.http.get("http://localhost:7000/api/product/variant/" + x, options)
    .subscribe(
      result => {
        
        console.log(result.json())
        this.productList = result.json();
      },
      error => {
        
      }
    );
  }
  
  addtocart(x){
    let form = new FormData()
    let option = new RequestOptions({headers:new Headers({})})
    form.append("productid",this.tes._id)
    form.append("productname",this.tes.name)
    form.append("productimage",this.tes.image)
    form.append("productprice",this.tes.price)
    
    this.http.post("http://localhost:7000/api/product/cart",form)
    .subscribe(
      result=>{
        location.reload()
      },
      error=>{
        console.log(error)
      }
    )
  }





}
