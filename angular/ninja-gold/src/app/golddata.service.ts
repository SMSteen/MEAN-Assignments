import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GolddataService {
  gold$ = new BehaviorSubject<number>(0)
  activities: Status[] = [];

  constructor() { }

  updateGold(amt: number, bldg: string){
    const status: string = amt >= 0 ? "earned" : "lost";
    this.gold$.next(amt)
    this.activities.push({status, msg: `You've ${status} ${amt} gold at the ${bldg}.`})
  }


  getActivities(): Observable<Status[]> {
    return of (this.activities);
  }
}

//create interface to push defined object into activities array
//using for css and content
export interface Status {
  status: string; //for css
  msg: string; //content
}