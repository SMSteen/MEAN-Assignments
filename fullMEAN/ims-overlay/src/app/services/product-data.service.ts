import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  baseURL = '/api/products/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log('getting all products in service');
    return this.http.get<Product[]>(this.baseURL);
  }

  addProduct(newProd: Product): Observable<Product> {
    console.log('adding a product in service:', newProd);

    // currently without using FormData, file is not attached to request; file never makes it to line 8 of server/product.routes.js
    // below code (formData.append) does work
    const formData: FormData = new FormData();
    // append form input values to FormData for backend use with multer
    for (const field in newProd) {
      if (newProd.hasOwnProperty(field)) {
        formData.append(field, newProd[field]);
      }
    }
    console.log(formData);

    return this.http.post<Product>(this.baseURL, formData);
  }

  getProduct(prod_id): Observable<Product> {
    console.log('getting a single product in service', prod_id);
    return this.http.get<Product>(this.baseURL + prod_id);
  }

  updateProduct(product): Observable<Product> {
    const formData: FormData = new FormData();
    // append form input values to FormData for backend use with multer
    for (const field in product) {
      if (product.hasOwnProperty(field)) {
        console.log('field name', field, 'field value', product[field]);
        formData.append(field, product[field]);
      }
    }
    console.log('updating a product in service', product._id);
    return this.http.put<Product>(this.baseURL + product._id, formData);
  }

  deleteProduct(prod_id): Observable<Product> {
    console.log('deleting a product in service', prod_id);
    return this.http.delete<Product>(this.baseURL + prod_id);
  }
}
