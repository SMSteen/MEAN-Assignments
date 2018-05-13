import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-qilin',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class QilinComponent extends HumanComponent {
  multiplier: number = 90;
}