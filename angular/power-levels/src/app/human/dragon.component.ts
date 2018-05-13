import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-dragon',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class DragonComponent extends HumanComponent {
  multiplier: number = 500;
}