import { Component, OnInit, OnChanges } from '@angular/core';
import { GolddataService } from './golddata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalGold: number = 0;
  status: string; //for css


  constructor(private _golddataService: GolddataService) {}
  
  ngOnInit(){
   this._golddataService.gold$
    .subscribe(total => {
      this.totalGold += total
      this.status = this.totalGold >= 1 ? "earned" : "lost";
    })
  }
}
