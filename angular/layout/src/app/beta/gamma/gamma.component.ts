import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  gammaCompData = "This represents GammaComponent Data."

  constructor() { }

  ngOnInit() {
  }

}
