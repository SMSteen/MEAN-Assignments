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

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('new shoe to be added', this.shoe);
    
    //update the behavior subject
    this._productdataService.addShoe(this.shoe)

    this.shoe = new Shoe();
    form.reset();
    
    this._router.navigate(['products'])
  }

  onCancel(){
    this._router.navigate(['products'])
  }
}
