import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../app/location/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {
  baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  params: string = '&units=imperial&APPID=62d4f3416197c4cb81ec998da8c52aa1';

  constructor(private _http: HttpClient) { }

  getWeather(zipcode: string): Observable<Weather>{
    return this._http.get<Weather>(this.baseUrl + zipcode + this.params);
  }

}
