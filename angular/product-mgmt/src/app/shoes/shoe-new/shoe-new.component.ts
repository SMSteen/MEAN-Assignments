import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Shoe } from '../../shoe';
import { ProductdataService } from '../../productdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoe-new',
  templateUrl: './shoe-new.component.html',
  styleUrls: ['./shoe-new.component.css']
})
export class ShoeNewComponent implements OnInit {
  shoe: Shoe = new Shoe();

  constructor(private _productdataService: ProductdataService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    //update the behavior subject
    this._productdataService.addShoe(this.shoe)
    //reset the product for next addition
    this.shoe = new Shoe();
    //redirect to product listing
    this._router.navigateByUrl('/products');
  }

  onCancel(){
    this._router.navigateByUrl('/products');
  }
}
