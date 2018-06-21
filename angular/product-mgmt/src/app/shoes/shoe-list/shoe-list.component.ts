import { Component, OnInit } from '@angular/core';

import { ProductdataService } from '../../productdata.service';
import { Shoe } from '../../shoe';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoes: Shoe[] = [];
  errorMessage: string;

  constructor(private productService: ProductdataService) {}

  ngOnInit() {
    console.log('shoe-list.component: getting products');
    this.productService.getShoes().subscribe(
      shoes => {
        this.shoes = shoes;
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }

  onDelete(id) {
    this.productService.deleteShoe(id).subscribe(
      deletedShoe => {
        console.log(
          'shoe-list.component --> successfully deleted shoe',
          deletedShoe
        );
        this.shoes = this.shoes.filter(
          delShoe => delShoe._id !== deletedShoe._id
        );
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }
}
