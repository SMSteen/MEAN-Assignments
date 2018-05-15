import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentName = this.constructor.name;
  alphaSum: number;
  betaSum: number;
  difference: number;

  constructor(private _dataService: DataService) { }

  getDifference(){
    //get the alphaSum
    const alpha = this._dataService.retrieveAlphaNumbers();
    let alphasum = 0;
    for(let i=0; i<alpha.length; i++){
      alphasum += alpha[i]; 
    }
    this.alphaSum = alphasum;
    console.log('alpha', this.alphaSum)
    
    //get the betaSum
    const beta = this._dataService.retrieveBetaNumbers();
    let betasum = 0;
    for(let i=0; i<beta.length; i++){
      betasum += beta[i]; 
    }
    this.betaSum = betasum;

    //get the difference
    this.difference = this.alphaSum - this.betaSum;
  }
}