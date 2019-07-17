import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './product/productlist.component';
import { ProductsearchComponent } from './product/productsearch.component';

const routes: Routes = [
  {path:'products',component:ProductlistComponent},
  {path:'search',component:ProductsearchComponent},
  {path:' ',redirectTo:'/search',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
