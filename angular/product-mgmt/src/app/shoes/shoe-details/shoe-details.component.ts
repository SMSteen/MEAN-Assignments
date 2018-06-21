import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Product } from '../../product';
import { ProductdataService } from '../../productdata.service';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit {
  // id: number;
  // shoeID: string;
  product: Product;
  errors: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductdataService
  ) {}

  ngOnInit() {
    // get the id of the selected product passed through params
    this.route.paramMap
      .pipe(
        switchMap(params => this.productService.getProduct(params.get('id')))
      )

      .subscribe(
        product => {
          console.log('shoe-details.component --> got the shoe', product);
          this.product = product;
        },
        error => {
          console.log('shoe-details.component --> error getting shoe');
          this.errors = error.error;
        }
      );
  }

  onSubmit(prod: Product) {
    this.productService.updateProduct(prod).subscribe(
      updatedProd => {
        console.log(
          'shoe-details.component --> successfully updated shoe',
          updatedProd
        );
        // redirect to shoe list
        this.router.navigateByUrl('/products');
      },
      error => {
        console.log('shoe-details.component --> error updating shoe');
        this.errors = error.error;
      }
    );
  }

  onDelete(id) {
    this.productService.deleteProduct(id).subscribe(
      deletedProd => {
        console.log(
          'shoe-details.component --> succesfully deleted shoe',
          deletedProd
        );
        // redirect to product list
        this.router.navigateByUrl('/products');
      },
      error => {
        console.log('shoe-details.component --> error deleting shoe');
        this.errors = error.error;
      }
    );
  }
}
