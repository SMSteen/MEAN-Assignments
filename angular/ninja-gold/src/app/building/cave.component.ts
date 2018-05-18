import { Component } from '@angular/core';
import { FarmComponent } from './farm.component';

@Component({
    selector: 'app-cave',
    templateUrl: './farm.component.html',
    styleUrls: ['./building.component.css']
})

export class CaveComponent extends FarmComponent {
          
    ngOnInit() {
        this.goldDesc = 'Earns 5-10 Gold'
        this.goldMin = 5;
        this.goldMax = 10;
    }
  
}