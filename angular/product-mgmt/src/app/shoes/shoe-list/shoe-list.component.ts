import { Component, OnInit } from '@angular/core';

import { ProductdataService } from '../../productdata.service';
import { Product } from '../../product';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string;

  constructor(private productService: ProductdataService) {}

  ngOnInit() {
    console.log('shoe-list.component: getting products');
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }

  onDelete(id) {
    this.productService.deleteProduct(id).subscribe(
      deletedProd => {
        console.log(
          'shoe-list.component --> successfully deleted shoe',
          deletedProd
        );
        this.products = this.products.filter(
          delShoe => delShoe._id !== deletedProd._id
        );
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }
}
