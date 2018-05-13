import { Component, OnInit, OnChanges, Input, EventEmitter } from '@angular/core';
import { Quote } from "./quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit, OnChanges {
  @Input()
  quotes: Quote[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  voteUp(index){
    this.quotes[index].rank++;
  }

  voteDown(index){
    this.quotes[index].rank--;
  }

  deleteQuote(index){
    this.quotes.splice(index, 1);
  }

}
