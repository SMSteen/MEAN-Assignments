import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  numbersAlpha: number[] = [];
  numbersBeta: number[] = [];

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
