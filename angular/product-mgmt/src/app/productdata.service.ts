import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Shoe } from '../app/shoe'; 
import { SHOES } from '../app/data/shoe-data'; 

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  shoes: Shoe[] = SHOES;

  constructor() { }

  addShoe(shoe){
    this.shoes.push(shoe)
  }

  getShoeList(): Observable<Shoe[]> {
    return of (this.shoes);
  }

}