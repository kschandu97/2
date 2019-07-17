import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist.component';
import { ProductPipe } from './product/product.pipe';
import { ProductsearchComponent } from './product/productsearch.component';
import { ProductfilterPipe } from './product/productfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductPipe,
    ProductsearchComponent,
    ProductfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
