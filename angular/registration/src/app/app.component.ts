import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //create an instance of User
  user: User = new User();
  users: User[] = [];
  pwError: Boolean = false;
  newUser: Object;

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    this.users.push(this.user);
    this.newUser = this.user;
    //reset for the next user registration
    this.user = new User();
    form.reset();
    console.log(this.newUser)
  }
  
  pwMatch(event: Event, form: NgForm) {
    let pw = document.getElementById("password");
    let pwconf = document.getElementById("pwConf");
    if (pwconf !== pw){
      this.pwError = true;
    } else {
      this.pwError = false;
    }
  }
}