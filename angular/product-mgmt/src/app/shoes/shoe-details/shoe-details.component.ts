import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Shoe } from '../../shoe';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductdataService } from '../../productdata.service';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit {
  id: number;
  shoes: Shoe[] = [];
  shoe: object = {};

  constructor(private _route: ActivatedRoute, private _router: Router, private _productdataService: ProductdataService) {
    //get the id of the selected product passed through params
    this._route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = Number(params.get('id'));
    })
  }
  
  ngOnInit() {
    // get the list of products
    this._productdataService.getShoeList()
      .subscribe(shoes => this.shoes = shoes);
      this.getShoe();
  }

  getShoe(){
    //find the matching product
    for (var i=0; i < this.shoes.length; i++) {
      if (this.shoes[i].id === this.id) {
        console.log('found the shoe')
        this.shoe = this.shoes[i]
      }
    }
  }


  onCancel(){
    this._router.navigate(['products'])
  }
}
