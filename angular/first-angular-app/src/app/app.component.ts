import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variables here are available for printing on template
  title: string = 'app';
  myNum: number = 1.23;
  myArray: string[] = ['Shannon', 'Faith', 'Jacey', 'Charmin', 'JoAnn'];
  myBoolean: boolean = true;
}
