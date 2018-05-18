import { Component } from '@angular/core';
import { FarmComponent } from './farm.component';

@Component({
    selector: 'app-house',
    templateUrl: './farm.component.html',
    styleUrls: ['./building.component.css']
})

export class HouseComponent extends FarmComponent {

    ngOnInit(){
        this.goldDesc = 'Earns 7-15 Gold';
        this.goldMin = 7;
        this.goldMax = 15;
    }
}