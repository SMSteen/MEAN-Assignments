import { Component, OnInit } from '@angular/core';
import { FarmComponent } from './farm.component';
import { CaveComponent } from './cave.component';
import { CasinoComponent } from './casino.component';
import { HouseComponent } from './house.component';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
