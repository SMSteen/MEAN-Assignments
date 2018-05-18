import { Component, OnInit, Input } from '@angular/core';
import { GolddataService } from '../golddata.service';

@Component({
    selector: 'app-farm',
    templateUrl: './farm.component.html',
    styleUrls: ['./building.component.css']
  })
  export class FarmComponent implements OnInit {
    @Input()
    goldMin: number = 2;
    goldMax: number = 5;
    goldDesc: string;
    className: string = this.constructor.name.replace(/Component/g,'');
    compStyle: string = this.className.replace(/Component/g,'').toLowerCase();
    
    
    constructor(private _golddataService: GolddataService) { }
  
    ngOnInit() {
        this.goldDesc = 'Earns 2-5 Gold'
    }
  
    getGold(building){      
      this._golddataService.updateGold((Math.floor(Math.random() * (this.goldMax - this.goldMin + 1)) + this.goldMin), building) 
    }
  }