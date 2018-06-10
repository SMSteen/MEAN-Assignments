import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { User } from '../user';

//temp
import { USERS } from '../data-testing/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = '/api/users';  
  //temp
  users: User[] = USERS;
  user: User;

  constructor(
    private http: HttpClient
  ) { }

  // login(user): Observable<User>{
  //   return this.http.post<User>(this.baseURL + 'login', user);
  // }

  //TEMP --> REPLACE WITH DB CALL ABOVE
  login(user): Observable<User>{
    console.log('auth.service --> verifying user', user)
    const { email, password } = user;
    const foundUser = this.users.find(user => user.email === email)
    if (foundUser){
      if(foundUser.password === password){
        return of(foundUser);
      }
    } else {
      return throwError("Invalid credentials.");
    }
  }

  // register(user): Observable<User>{
  //   return this.http.post<User>(this.baseURL + 'register', user);
  // }

  //TEMP --> REPLACE WITH DB CALL ABOVE
  register(user): Observable<User>{
    const { email } = user;
    console.log('auth.service --> adding new user,', user)
    const foundUser = this.users.find(user => user.email === email)
    if(foundUser){ //ensure user doesn't already exist in database
      return throwError("Sorry, that user already exists in our database.")
    } else {
      this.users.push(user);
      this.user = user;
      return of(this.user);
    }
  }
}