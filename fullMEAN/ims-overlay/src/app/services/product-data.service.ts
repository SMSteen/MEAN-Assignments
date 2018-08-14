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

  // addProduct(newProd: Product): Observable<Product> {
  addProduct(newProd): Observable<Product> {
    console.log('adding a product in service');
    return this.http.post<Product>(this.baseURL, newProd);
  }

  getProduct(prod_id): Observable<Product> {
    console.log('getting a single product in service', prod_id);
    return this.http.get<Product>(this.baseURL + prod_id);
  }

  updateProduct(product, prod_id): Observable<Product> {
    console.log('updating a product in service', prod_id);
    return this.http.put<Product>(this.baseURL + prod_id, product);
  }

  deleteProduct(prod_id): Observable<Product> {
    console.log('deleting a product in service', prod_id);
    return this.http.delete<Product>(this.baseURL + prod_id);
  }
}
