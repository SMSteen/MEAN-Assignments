import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() sendID = new EventEmitter();
  @Output() sendCopy = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDelete(productID) {
    console.log(productID);
    this.sendID.emit(productID);
  }
}
