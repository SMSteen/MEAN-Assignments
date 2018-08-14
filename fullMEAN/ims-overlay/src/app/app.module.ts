import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ProductDataService } from './services/product-data.service';
import { BinaryToImageDirective } from './binary-to-image.directive';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormDisplayComponent } from './forms/form-display/form-display.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormDisplayComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductsComponent,
    BinaryToImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
