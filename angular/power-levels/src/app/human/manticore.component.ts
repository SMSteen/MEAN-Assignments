import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-manticore',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class ManticoreComponent extends HumanComponent {
  multiplier: number = 250;
}