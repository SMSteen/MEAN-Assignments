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
    this.route.paramMap.subscribe(
      params => (this.productID = params.get('id'))
    );
    if (this.productID) {
      console.log('editing existing product, get the product');
      this.formType = 'Edit Product';
      this.prodService.getProduct(this.productID).subscribe(
        product => {
          console.log(
            'forms.component --> got the product, load into form',
            product
          );
          this.product = product;
          // temporary until file upload feature resolved to prevent errors
          this.product.image = '';
          this.productForm.patchValue(this.product);
        },
        error => {
          console.log('forms.component --> error retrieving product');
          this.errors = error.error;
        }
      );
    } else {
      this.formType = 'Add Product';
      this.product = new Product();
    }
  }

  submit(formData) {
    console.log('in form.component --> formData', formData);
    const cleanData = Object.assign({}, this.product, formData);
    console.log('form.component cleanData', cleanData);
    // if (this.formType === 'Add Product') {
    //   this.prodService.addProduct(cleanData).subscribe(
    //     newProduct => {
    //       console.log(
    //         'form.component --> successfully added product',
    //         newProduct
    //       );
    //       this.productForm.reset();
    //       this.router.navigateByUrl('/products');
    //     },
    //     error => {
    //       console.log('form.component --> error creating product');
    //       this.errors = error.error;
    //     }
    //   );
    // } else {
    //   this.prodService.updateProduct(cleanData).subscribe(
    //     updatedProduct => {
    //       console.log(
    //         'form.component component --> successfully updated product',
    //         updatedProduct
    //       );
    //       this.router.navigateByUrl(`/products/${updatedProduct._id}`);
    //     },
    //     error => {
    //       console.log('form.component component --> error updating product');
    //       this.errors = error.error;
    //     }
    //   );
    // }
  }
}
