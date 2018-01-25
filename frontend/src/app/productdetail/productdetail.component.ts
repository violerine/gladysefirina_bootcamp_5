import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpModule } from "@angular/http";


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
 
  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    // this.loadproductInfo()
  }



  




}
