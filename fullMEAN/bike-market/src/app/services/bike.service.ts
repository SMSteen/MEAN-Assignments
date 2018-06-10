import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Bike } from '../bike';
import { User } from '../user';

//temp
import { BIKES } from '../data-testing/bike-data';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  baseURL: string = '/api/bikes';  
  bikes: Bike[] = BIKES;
  bike: Bike;

  constructor(
    private http: HttpClient
  ) { }

  // getBikes(): Observable<Bike[]> {
  //   return this.http.get<Bike[]>(this.baseURL);
  // }

  //TEMP --> REPLACE WITH DB CALL ABOVE
  getBikes(): Observable<Bike[]> {
    return of(this.bikes);
  }

  // deleteBike(bike: Bike): Observable<Bike> {
  //   return this.http.delete<Bike>(this.baseURL);
  // }

  //TEMP --> REPLACE WITH DB CALL ABOVE
  deleteBike(id: number): Observable<Bike> {
    const deletedBike = this.bikes.find(bike => bike._id === id)
    console.log('bike-service --> deleting bike', deletedBike)
    return of(deletedBike);
  }
}
