import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  betaCompData = "This represents BetaComponent Data.";
  
  constructor() { }

  ngOnInit() {
  }

}
