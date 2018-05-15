import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbersAlpha: number[] = [];
  componentName: string = this.constructor.name;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbersAlpha = this._dataService.retrieveAlphaNumbers();
  }

  addRandomNum(){
    //generate random number between 1-10
    let randNum = Math.floor(Math.random() * 10) + 1
    this._dataService.addAlphaNumber(randNum);
  }
}