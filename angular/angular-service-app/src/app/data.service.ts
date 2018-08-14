import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  numbersAlpha: number[] = [];
  numbersBeta: number[] = [];
  difference$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  retrieveAlphaNumbers(): number[] {
    return this.numbersAlpha;
  }
  addAlphaNumber(num: number) {
    this.numbersAlpha.push(num);
  }

  retrieveBetaNumbers(): number[] {
    return this.numbersBeta;
  }
  addBetaNumber(num: number) {
    this.numbersBeta.push(num);
  }
}
