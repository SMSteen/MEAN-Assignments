import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//load the children components

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //create an instance of Power
  intialPower: number = 0;
  error: boolean = false;
  
  onSubmit(event: Event, form: NgForm){
    if (form.value.powerLevel > 100 || form.value.powerLevel < 1){
      event.preventDefault();
      this.error = true;
    } else {
      //set powerlevel
      this.intialPower = form.value.powerLevel;
    }
  }
}