import { Component, OnInit } from '@angular/core';
import { GolddataService, Status } from '../golddata.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Status[] = [];

  constructor(private _golddataService: GolddataService) { }

  ngOnInit() {
    this._golddataService.getActivities()
    .subscribe(activities => this.activities = activities)
  }
  
}
