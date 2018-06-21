import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  FileUploader,
  FileSelectDirective
} from 'ng2-file-upload/ng2-file-upload';

import { Shoe } from '../app/shoe';
// import { SHOES } from '../app/data/shoe-data';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  // shoeData$ = new BehaviorSubject<Shoe[]>(SHOES);
  baseURL = '/api/shoes/';

  public uploader: FileUploader = new FileUploader({
    url: this.baseURL,
    itemAlias: 'photo'
  });

  constructor(private http: HttpClient) {}

  getShoes(): Observable<Shoe[]> {
    console.log('getting all shoes in service');
    return this.http.get<Shoe[]>(this.baseURL);
  }

  addShoe(newShoe: Shoe): Observable<Shoe> {
    console.log('adding a shoe in service:', newShoe);
    return this.http.post<Shoe>(this.baseURL, newShoe);
  }

  getShoe(shoe_id): Observable<Shoe> {
    console.log('getting a single shoe in service', shoe_id);
    return this.http.get<Shoe>(this.baseURL + shoe_id);
  }

  updateShoe(shoe): Observable<Shoe> {
    console.log('updating a shoe in service', shoe._id);
    return this.http.put<Shoe>(this.baseURL + shoe._id, shoe);
  }

  deleteShoe(shoe_id): Observable<Shoe> {
    console.log('deleting a shoe in service', shoe_id);
    return this.http.delete<Shoe>(this.baseURL + shoe_id);
  }

  // addShoe(shoe: Shoe) {
  //   const shoes = this.shoeData$.getValue();
  //   // add the new prodcut
  //   shoes.push(shoe);
  //   this.shoeData$.next(shoes);
  // }

  // deleteShoe(id: number) {
  //   const shoes = this.shoeData$.getValue();
  //   // find the matching Shoe
  //   for (const [index, shoe] of shoes.entries() as any) {
  //     if (shoe._id === id) {
  //       // remove the Shoe
  //       shoes.splice(index, 1);
  //       this.shoeData$.next(shoes);
  //       return;
  //     }
  //   }
  // }
}
