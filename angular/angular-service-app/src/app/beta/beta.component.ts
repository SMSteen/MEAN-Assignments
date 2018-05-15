import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbersBeta: number[] = [];
  componentName: string = this.constructor.name;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbersBeta = this._dataService.retrieveBetaNumbers();
  }

  addRandomNum(){
    //generate random number between 1-5
    let randNum = Math.floor(Math.random() * 5) + 1
    this._dataService.addBetaNumber(randNum);
  }
}
