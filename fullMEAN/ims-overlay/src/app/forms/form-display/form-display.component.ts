import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';



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

  constructor() {}

  ngOnInit() {}

  onFileChanged(event) {
    console.log(event);
    this.fileToUpload = event.target.files[0];
    console.log('component - file entered', this.fileToUpload);
  }

  onSubmit(form: FormData, event: Event) {
    event.preventDefault();


    // form.append('myFile', fileInputElement.files[0]);  // this doesn't work, .append is not a "method" :(
    // console.log(formElement);
    console.log('form data to include file', this.fileToUpload);
    console.log(
      'in form-display.component --> form does not include file',
      form
    );

    const prod = { ...form, file: this.fileToUpload };

    this.sendData.emit(prod as any);

    // combineLatest(of(this.fileToUpload), of(form))
    //   .pipe(map(([file, product]) => {
    //     return { ...product, file } as any as Product;
    //     }),
    //     take(1)
    //   )
    //   .subscribe(product => {
    //     console.log('product from combine', product);
    //     this.sendData.emit(product);
    //   });
  }
}
