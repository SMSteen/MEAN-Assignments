import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '../../product';
import { ProductdataService } from '../../productdata.service';

@Component({
  selector: 'app-shoe-new',
  templateUrl: './shoe-new.component.html',
  styleUrls: ['./shoe-new.component.css']
})
export class ShoeNewComponent implements OnInit {
  product: Product = new Product();
  errors: string[];

  constructor(
    private productService: ProductdataService,
    private router: Router
  ) {}

  ngOnInit() {}

  create(form: NgForm, event: Event) {
    event.preventDefault();
    const { value: product } = form;
    this.productService.addProduct(product).subscribe(
      newProduct => {
        console.log('shoe-new.component --> product successfully added');
        form.reset();
        // redirect to shoe list
        this.router.navigateByUrl('/products');
      },
      error => {
        console.log('shoe-new.component --> error creating product');
        this.errors = error.error;
      }
    );
  }

  reset(form: NgForm, event: Event) {
    event.preventDefault();
    form.reset();
  }
}
