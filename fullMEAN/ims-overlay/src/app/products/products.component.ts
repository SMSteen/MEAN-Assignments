import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string;

  constructor(private prodService: ProductDataService) {}

  ngOnInit() {
    console.log('products.component: getting products');
    this.prodService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }

  onDelete(productID) {
    console.log('forms.component, child wants to delete', productID);
    //   this.prodService.deleteProduct(id).subscribe(
    //     deletedProd => {
    //       console.log(
    //         'products.component --> successfully deleted product',
    //         deletedProd
    //       );
    //       this.products = this.products.filter(
    //         delProd => delProd._id !== deletedProd._id
    //       );
    //     },
    //     error => {
    //       this.errorMessage = error.error;
    //     }
    //   );
    // }
  }
}
