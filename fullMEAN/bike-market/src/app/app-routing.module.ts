import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikesComponent } from './bikes/bikes.component';
import { HomeComponent } from './bikes/home/home.component';
import { NavComponent } from './bikes/nav/nav.component';
import { LoginComponent } from './bikes/home/login/login.component';
import { RegisterComponent } from './bikes/home/register/register.component';
import { DailyBikeComponent } from './bikes/home/daily-bike/daily-bike.component';
import { BikeListComponent } from './bikes/nav/bike-list/bike-list.component';
import { BikeNewComponent } from './bikes/nav/bike-new/bike-new.component';
import { BikeDetailsComponent } from './bikes/nav/bike-details/bike-details.component';


const routes: Routes = [
  {
    path: '',
    component: BikesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'browse',
        component: BikeListComponent,
      },
      {
        path: 'listings',
        component: BikeDetailsComponent,
      }
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
