import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-naga',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class NagaComponent extends HumanComponent {
  multiplier: number = 150;
}