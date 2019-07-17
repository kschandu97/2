import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from './product.interface';

@Pipe({
  name: 'productfilter'
})


export class ProductfilterPipe implements PipeTransform {

  transform(products:Iproducts[],searchTerm:any): any {
    if(!products||!searchTerm){
      return products;
    }
    return products.filter(e=>e.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  }

}
