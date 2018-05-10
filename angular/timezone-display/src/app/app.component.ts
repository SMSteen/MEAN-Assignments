import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  theDate = Date.now();
  statusPST = false;
  statusMST = false;
  statusCST = false;
  statusEST = false;
  timeZone: string;

  onButtonClick(event){
    //capture and set the timezone
    this.timeZone = event.srcElement.innerHTML
    //flag the timezone chosen
    switch(this.timeZone){
      case 'PST':
      case 'PDT':
        this.statusPST = true;
        this.statusMST = false;
        this.statusCST = false;
        this.statusEST = false;
        break;
      case 'MST':
      case 'MDT':
        this.statusPST = false;
        this.statusMST = true;
        this.statusCST = false;
        this.statusEST = false;
        break;
      case 'CST':
      case 'CDT':
        this.statusPST = false;
        this.statusMST = false;
        this.statusCST = true;
        this.statusEST = false;
        break;
      case 'EST':
      case 'EDT':
        this.statusPST = false;
        this.statusMST = false;
        this.statusCST = false;
        this.statusEST = true;
        break;
      default:
        this.statusPST = false;
        this.statusMST = false;
        this.statusCST = false;
        this.statusEST = false;
    }
    return this.timeZone;
  }
}
