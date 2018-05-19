import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubdataService {
  baseURL: string = `https://api.github.com/users/`

  constructor(private _http: HttpClient) { }

  getUser(username: string): Observable<User>{
    
    return this._http.get<User>(this.baseURL + username);
  }

}
