import { Directive, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: '[binaryToImage]'
})
export class BinaryToImageDirective implements OnInit {
  @HostBinding()
  @Input() src: string | ImageBuffer;

  constructor() { }

  ngOnInit() {
    if (typeof this.src === 'string') {
      return;
    }

    const { data: buffer, contentType } = this.src;

    const base64 = btoa(buffer.data.reduce((memo, code) => memo + String.fromCharCode(code), ''));

    this.src = `data:${contentType};base64,${base64}`;
  }
}

interface ImageBuffer {
  data: {
    data: Array<number>;
  };
  contentType: string;
}
