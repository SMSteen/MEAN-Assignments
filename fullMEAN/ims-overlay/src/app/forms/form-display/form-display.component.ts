import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { combineLatest, of } from 'rxjs';
import { map, take } from 'rxjs/operators';



import { Product } from '../../product';
import { combineLatest, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent implements OnInit {
  @Input() product: Product;
  @Input() formType: string;
  @Input() productForm: FormGroup;
  @Input() deptList: string[];
  @Input() catList: string[];
  @Output() sendData = new EventEmitter<Product>();

  fileToUpload: File = null;

  constructor(private router: Router) {}

  ngOnInit() {}

  onFileChanged(event) {
    console.log(event);
    this.fileToUpload = event.target.files[0];
    console.log('component - file entered', this.fileToUpload);
  }

  onSubmit(form: FormData, event: Event) {
    event.preventDefault();

    // convert last values of file and formdata to observable
    combineLatest(of(this.fileToUpload), of(form))
      // map observable created above into Product class
      .pipe(
        map(([image, product]) => {
          return ({ ...product, image } as any) as Product;
        }),
        take(1)
      )
      // subscribe to final result (product) and emit to parent
      .subscribe(product => {
        console.log('product from combine', product);
        this.sendData.emit(product);
      });
  }

  onCancel() {
    this.formType === 'Edit Product'
      ? this.router.navigateByUrl(`/products/${this.product._id}`)
      : this.router.navigateByUrl('/products');
  }
}
