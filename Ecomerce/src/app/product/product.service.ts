import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Iproducts } from './product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products:Iproducts[];

  constructor(private http:HttpClient) {
  
   }
  getProducts():Observable<Iproducts[]>{
    return this.http.get<Iproducts[]>("./assets/db.json");
  }
  
}
