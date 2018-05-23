import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Shoe } from '../app/shoe'; 
import { SHOES } from '../app/data/shoe-data'; 

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  shoeData$ = new BehaviorSubject<Shoe[]>(SHOES);

  constructor() { }

  addShoe(shoe: Shoe){
    const temp = this.shoeData$.getValue()
    //add the new prodcut
    temp.push(shoe);
    this.shoeData$.next(temp);
  }

  deleteShoe(id: number){
    const temp = this.shoeData$.getValue();
    //find the matching product
    for (var i=0; i < temp.length; i++) {
      if (temp[i].id === id) {
        //remove the product
        temp.splice(i, 1);
        this.shoeData$.next(temp);
        return;
      }
    }
  }

}