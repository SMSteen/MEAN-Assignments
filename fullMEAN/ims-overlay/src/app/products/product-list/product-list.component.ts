import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../product';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() sendID = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDelete(productID, event: Event) {
    this.sendID.emit(productID);
  }
}
