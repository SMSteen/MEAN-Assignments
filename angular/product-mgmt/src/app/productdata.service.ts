import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FileUploader,
  FileSelectDirective
} from 'ng2-file-upload/ng2-file-upload';

import { Product } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  baseURL = '/api/products/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log('getting all products in service');
    return this.http.get<Product[]>(this.baseURL);
  }

  addProduct(newProd: Product): Observable<Product> {
    console.log('adding a product in service:', newProd);
    return this.http.post<Product>(this.baseURL, newProd);
  }

  getProduct(prod_id): Observable<Product> {
    console.log('getting a single product in service', prod_id);
    return this.http.get<Product>(this.baseURL + prod_id);
  }

  updateProduct(product): Observable<Product> {
    console.log('updating a product in service', product._id);
    return this.http.put<Product>(this.baseURL + product._id, product);
  }

  deleteProduct(prod_id): Observable<Product> {
    console.log('deleting a product in service', prod_id);
    return this.http.delete<Product>(this.baseURL + prod_id);
  }
}
