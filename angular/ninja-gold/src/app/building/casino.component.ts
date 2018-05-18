import { Component } from '@angular/core';
import { FarmComponent } from './farm.component';

@Component({
    selector: 'app-casino',
    templateUrl: './farm.component.html',
    styleUrls: ['./building.component.css']
})

export class CasinoComponent extends FarmComponent {

    ngOnInit(){
        this.goldDesc = 'Earn up to or Lose up to 100 Gold';
        this.goldMin = -100;
        this.goldMax = 100;
    }

}