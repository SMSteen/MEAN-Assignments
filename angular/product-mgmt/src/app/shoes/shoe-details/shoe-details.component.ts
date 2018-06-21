import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Shoe } from '../../shoe';
import { ProductdataService } from '../../productdata.service';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit {
  // id: number;
  // shoeID: string;
  shoe: Shoe;
  errors: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductdataService
  ) {}

  ngOnInit() {
    // get the id of the selected product passed through params
    this.route.paramMap
      .pipe(switchMap(params => this.productService.getShoe(params.get('id'))))

      .subscribe(
        shoe => {
          console.log('shoe-details.component --> got the shoe', shoe);
          this.shoe = shoe;
        },
        error => {
          console.log('shoe-details.component --> error getting shoe');
          this.errors = error.error;
        }
      );
  }

  onSubmit(shoe: Shoe) {
    this.productService.updateShoe(shoe).subscribe(
      updatedShoe => {
        console.log(
          'shoe-details.component --> successfully updated shoe',
          updatedShoe
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
    this.productService.deleteShoe(id).subscribe(
      deletedShoe => {
        console.log(
          'shoe-details.component --> succesfully deleted shoe',
          deletedShoe
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
