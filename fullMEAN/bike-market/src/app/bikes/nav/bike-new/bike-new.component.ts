import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bike } from '../../../bike';
import { BikeService } from '../../../services/bike.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-bike-new',
  templateUrl: './bike-new.component.html',
  styleUrls: ['./bike-new.component.css']
})
export class BikeNewComponent implements OnInit {
  bike: Bike = new Bike();
  userID: string;

  constructor(
    private router: Router,
    private bikeService: BikeService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userID = this.authService.userID;
  }

  onSubmit(bike: Bike, event: Event): void {
    // this.bike.owner = this.authService.userID;
    event.preventDefault();
    console.log('bike-new.component --> form data', bike)
  }
}
