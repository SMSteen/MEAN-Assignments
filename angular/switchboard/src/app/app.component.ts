import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  states = ['Off','Off','Off','Off','Off','Off','Off','Off','Off','Off'];

  onButtonClick(idx){
    //toggle the state of the button
    if(this.states[idx] === 'Off'){
      this.states[idx] = 'On';
    } else {
      this.states[idx] = 'Off';
    }
  }
}
