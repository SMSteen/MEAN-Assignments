import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../../productdata.service';

import { Shoe } from '../../shoe';
import { SHOES } from '../../data/shoe-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  id: number;
  shoes: Shoe[] = [];

  constructor(private _productdataService: ProductdataService, private _route: ActivatedRoute) { }

  ngOnInit() {    
    this._productdataService.shoeData$
      .subscribe(shoes => this.shoes = shoes);
  }

  onDelete(id){
    this._productdataService.deleteShoe(id);
  }
}