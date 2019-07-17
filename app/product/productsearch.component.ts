import { Component, OnInit } from '@angular/core';
import { Iproducts } from './product.interface';
import { ProductService } from './product.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {
  products:Iproducts[];
  searchTerm:any;
  searchTerm1:any;


  constructor(private productservice:ProductService,private router:Router) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe((data)=>this.products=data)
    console.log(this.products)
  }
 
  onSearch(){
    this.searchTerm1=this.searchTerm;
  }

}
