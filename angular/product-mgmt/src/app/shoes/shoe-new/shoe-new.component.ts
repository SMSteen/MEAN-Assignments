import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Shoe } from '../../shoe';
import { ProductdataService } from '../../productdata.service';

@Component({
  selector: 'app-shoe-new',
  templateUrl: './shoe-new.component.html',
  styleUrls: ['./shoe-new.component.css']
})
export class ShoeNewComponent implements OnInit {
  shoe: Shoe = new Shoe();
  errors: string[];

  constructor(
    private productService: ProductdataService,
    private router: Router
  ) {}

  ngOnInit() {}

  create(form: NgForm, event: Event) {
    event.preventDefault();
    const { value: shoe } = form;
    this.productService.addShoe(shoe).subscribe(
      newShoe => {
        console.log('shoe-new.component --> shoe successfully added');
        form.reset();
        // redirect to shoe list
        this.router.navigateByUrl('/products');
      },
      error => {
        console.log('shoe-new.component --> error creating shoe');
        this.errors = error.error;
      }
    );
  }

  reset(form: NgForm, event: Event) {
    event.preventDefault();
    form.reset();
  }
  // onCancel(){
  //   this._router.navigateByUrl('/products');
  // }
}
