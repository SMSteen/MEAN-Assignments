import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from './quotes/quote';
import { QUOTES } from "./quotes/quotes-data";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';

  //create an instance of Quote
  newQuote: Quote = new Quote();
  quotes: Quote[] = QUOTES;
  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    this.newQuote.rank = 0;
    this.quotes.push(this.newQuote);
    console.log(this.quotes)
    //reset for next quote
    this.newQuote = new Quote();
    form.reset();
  }

  rankUpdate(eventData){
    console.log(eventData)
  }
}