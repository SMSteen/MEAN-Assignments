import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../../productdata.service';

import { Shoe } from '../../shoe';
import { SHOES } from '../../data/shoe-data';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoes: Shoe[] = [];

  constructor(private _productdataService: ProductdataService) { }

  ngOnInit() {
    this._productdataService.getShoeList()
      .subscribe(shoes => this.shoes = shoes);
  }

}