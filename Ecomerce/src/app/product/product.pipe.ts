import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from './product.interface';

@Pipe({
  name: 'product'
})

export class ProductPipe implements PipeTransform {

  transform(products:Iproducts[],serachTerm:any): any {
    if(!products||!serachTerm){
      return products;
    }
    return products.filter(p=>p.name.toLowerCase().startsWith(serachTerm.toLowerCase())||p.category.toLocaleLowerCase().startsWith(serachTerm.toLocaleLowerCase()));

  }

}
