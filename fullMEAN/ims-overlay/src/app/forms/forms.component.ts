import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formType: string;
  product: Product;
  productID: string;
  errors: string[];
  productForm: FormGroup;
  copy: boolean;
  private deptList: string[] = [
    'ammunition',
    'archery',
    'firearms',
    'hunting',
    'license',
    'marine',
    'nc tags',
    'sporting goods'
  ];
  private catList: string[] = [
    'accessories',
    'apparel',
    'boats',
    'bows',
    'footwear',
    'labor',
    'optics',
    'outboard motors',
    'parts',
    'pistols',
    'rifles',
    'skiwear',
    'trailers'
  ];

  constructor(
    private prodService: ProductDataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  createForm() {
    this.productForm = this.fb.group({
      upc: ['', [Validators.required, Validators.minLength(12)]],
      dept: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      desc: ['', Validators.required],
      cost: ['0', [Validators.required, Validators.min(0)]],
      price: ['0', [Validators.required, Validators.min(0)]],
      suggestedRetail: ['0', Validators.min(0)],
      color: '',
      style: '',
      size: '',
      qty: ['0', [Validators.required, Validators.min(0)]],
      image: ''
    });
  }

  ngOnInit() {
    this.createForm();
    // determine if adding a new product
    this.route.url.subscribe(url => {
      if (url[0].path === 'new') {
        // adding new product from scratch
        this.formType = 'Add Product';
        this.product = new Product();
      } else {
        // working with existing data, save productID
        this.productID = url[0].path;
        // get product information
        this.prodService.getProduct(this.productID).subscribe(
          product => {
            console.log(
              'forms.component --> got the product, load into form',
              product
            );
            if (url[1].path !== 'copy') {
              console.log('editing existing product');
              // editing an existing product;
              this.formType = 'Edit Product';
              this.product = product;

              // populate form with existing data
              this.productForm.patchValue(this.product);
            } else {
              // adding a new product but copying some fields from existing product
              this.copy = true;
              this.formType = 'Add Product';
              this.product = product;
              // remove the old _id, upc, size as these will be different
              delete this.product._id;
              delete this.product.upc;
              delete this.product.size;
              // populate form with the data
              this.productForm.patchValue(this.product);
            }
          },
          error => {
            console.log('forms.component --> error retrieving product');
            this.errors = error.error;
          }
        );
      }
    });
  }

  submit(formData) {
    console.log('in form.component --> formData', formData);
    const cleanData = { ...this.product, ...formData };
    console.log('form.component cleanData', cleanData);
    console.log(this.formType);
    if (this.formType === 'Add Product') {
      this.prodService.addProduct(cleanData).subscribe(
        newProduct => {
          console.log(
            'form.component --> successfully added product',
            newProduct
          );
          this.productForm.reset();
          this.router.navigateByUrl('/products');
        },
        error => {
          console.log('form.component --> error creating product');
          this.errors = error.error;
        }
      );
    } else {
      this.prodService.updateProduct(cleanData).subscribe(
        updatedProduct => {
          console.log(
            'form.component component --> successfully updated product',
            updatedProduct
          );
          this.router.navigateByUrl(`/products/${updatedProduct._id}`);
        },
        error => {
          console.log('form.component component --> error updating product');
          this.errors = error.error;
        }
      );
    }
  }
}
