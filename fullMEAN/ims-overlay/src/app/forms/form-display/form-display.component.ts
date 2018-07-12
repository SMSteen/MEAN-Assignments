import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../../product';

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
  @Output() sendData = new EventEmitter();
  @Output() sendFile = new EventEmitter();

  fileToUpload: File = null;

  constructor() {}

  ngOnInit() {}

  onFileChanged(event) {
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
    // How can these values be emitted TOGETHER?
    this.sendFile.emit(this.fileToUpload);
    this.sendData.emit(form);
  }
}
