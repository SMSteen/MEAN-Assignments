import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BikeService } from '../../../services/bike.service';
import { AuthService } from '../../../services/auth.service';
import { Bike } from '../../../bike';

// TEMPORARY UNTIL CONNECTED TO DB
import { User } from '../../../user'
import { USERS } from '../../../data-testing/user-data';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  bikes: Bike[] = [];
  userID: string;

  // // TEMPORARY UNTIL CONNECTED TO DB
  // users: User[] = USERS;

  constructor(
    private bikeService: BikeService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userID = this.authService.userID;
    this.bikeService.getBikes().subscribe(
      bikes => {
        this.bikes = bikes
      },
      error => {
        console.log(error);
      }
    )
  }

  // onDelete(id: number) {
  //   this.bikeService.deleteBike(id).subscribe(
  //     deletedBike => {
  //       console.log('bike-list.component --> deleted bike', deletedBike)
  //       this.bikes = this.bikes.filter(delBike => delBike._id !== id)
  //       this.router.navigateByUrl('/browse');
  //     },
  //     error => console.log(error)
  //   )
  // }

  // onContact(id: number){
  //   const contactBike = this.bikes.find(bike => bike._id === id)
  //   const owner = this.users.find(user => user._id === contactBike.owner)
  //   const contact = alert(`${contactBike.title}\n\nOwner Name:  ${owner.first_name} ${owner.last_name}\nEmail:  ${owner.email}`)
  // }


}
