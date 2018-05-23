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

  constructor(private _route: ActivatedRoute, private _router: Router, private _productdataService: ProductdataService) {

  }
  
  ngOnInit() {
    //get the id of the selected product passed through params
    this._route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = Number(params.get('id'));
    })

    //get the shoe
    this.shoes = this._productdataService.shoeData$.getValue().filter(shoe => shoe.id === this.id);

  }

  onSubmit(){
    console.log('changes submitted');
    this._router.navigateByUrl('/products');
  }

  onCancel(){
    this._router.navigateByUrl('/products');
  }

  onDelete(id){
    this._productdataService.deleteShoe(id)
    this._router.navigateByUrl('/products');
  }
}
