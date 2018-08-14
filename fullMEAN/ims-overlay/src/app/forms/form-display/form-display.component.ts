import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

import { Product } from '../../product';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent implements OnInit {
  @Input()
  product: Product;
  @Input()
  formType: string;
  @Input()
  productForm: FormGroup;
  @Input()
  deptList: string[];
  @Input()
  catList: string[];
  // @Output() sendData = new EventEmitter();
  // @Output() sendFile = new EventEmitter();
  @Output()
  sendData = new EventEmitter<Product>();

  constructor(private router: Router) {}

  ngOnInit() {}

  onFileChanged(event) {
    // if a file has been uploaded, capture data
    if (event.target.files.length) {
      console.log('form.display component - file entered');
      this.productForm.get('image').setValue(event.target.files[0]);
    }
  }

  onSubmit(form: NgForm, event: Event) {
    event.preventDefault();
    console.log(
      'form-display component Form data submitted by user',
      form.value
    );

    // append form input values to FormData for backend use with multer
    const formData = new FormData();
    Object.keys(form.controls).forEach(key => {
      // console.log(key, '-->getting value', this.productForm.get(key).value);
      formData.append(key, this.productForm.get(key).value);
    });

    console.log('formdata', formData.has('image'));

    // emit to parent
    this.sendData.emit(formData as any);
  }

  onCancel() {
    this.formType === 'Edit Product'
      ? this.router.navigateByUrl(`/products/${this.product._id}`)
      : this.router.navigateByUrl('/products');
  }
}
