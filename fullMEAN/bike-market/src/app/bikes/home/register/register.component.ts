import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registerError: String;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onSubmit(user: User, event: Event): void {
    event.preventDefault();
    console.log('register-component --> form data', user)
    this.authService.register(user).subscribe(
      newUser => {
        // this.user = newUser;
        this.router.navigateByUrl('browse');
      },
      error => {
        this.registerError = error;
      }
    )
  }
}
