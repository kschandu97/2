import { Component, OnInit } from '@angular/core';
import { Iproducts } from './product.interface';
import { ProductService } from './product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:Iproducts[]=[];

  constructor(private productservice:ProductService) {
    
   }

  ngOnInit() {
    this.productservice.getProducts().subscribe((data)=>this.products=data);

  }
   delete(product){
    let deletedProductIndex=this.products.lastIndexOf(product);
    this.products.splice(deletedProductIndex,1);
  }

}
