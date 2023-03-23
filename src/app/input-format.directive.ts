import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    this.el.nativeElement.style.border = '1px solid blue';
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.border = 'none';
  }

  @HostListener('input') onInput() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

}
