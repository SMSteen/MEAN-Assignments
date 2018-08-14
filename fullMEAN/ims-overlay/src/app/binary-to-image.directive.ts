import { Directive, OnInit, HostBinding, Input, Host } from '@angular/core';

@Directive({
  selector: '[appBinaryToImage]'
})
export class BinaryToImageDirective implements OnInit {
  @HostBinding()
  @Input()
  src: string | ImageBuffer;

  constructor() {}

  ngOnInit() {
    // if there's no image stored, exit method
    if (typeof this.src === 'string') {
      return;
    }

    // image stored, get the data
    const { data: buffer, contentType } = this.src;

    // convert buffer.data array to single string value, then encode to base64 for display
    const base64 = btoa(
      buffer.data.reduce((memo, code) => memo + String.fromCharCode(code), '')
    );

    this.src = `data:${contentType};base64,${base64}`;
  }
}

// interface for image data returned from api
interface ImageBuffer {
  data: {
    data: Array<number>;
  };
  contentType: string;
}
