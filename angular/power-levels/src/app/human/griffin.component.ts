import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-griffin',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class GriffinComponent extends HumanComponent {
  multiplier: number = 10;
}