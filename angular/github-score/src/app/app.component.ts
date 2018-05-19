import { Component } from '@angular/core';
import { GithubdataService } from './githubdata.service'
import { User } from './user';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  username: string;
  ghScore: number = 0;

  
  constructor(private _githubdataService: GithubdataService) {}

  getScore(form: NgForm){
    const { username } = form.value;
    console.log(username)
    this._githubdataService.getUser(username)
      .subscribe(data => {
        this.ghScore = data.public_repos + data.followers;
        console.log(data)
        this.username = data.login;
      })
  }
}
