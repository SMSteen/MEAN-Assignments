import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit, OnChanges {
  @Input()
  initialPower: number
  className: string = this.constructor.name;
  compStyle: string = this.constructor.name.toLowerCase();
  multiplier: number = 1;

  constructor() { }

  ngOnInit() {
    this.initialPower *= this.multiplier;
  }

  ngOnChanges() {
    this.initialPower *= this.multiplier;
  }
}
