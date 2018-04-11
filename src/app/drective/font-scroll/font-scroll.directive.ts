import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[fontScroll]'
})
export class FontScrollDirective {

  // @Input('fontScroll')
  // set isNeedScroll(value: boolean) {
  //   console.log(value, 999);
  //   console.log(this.ele.nativeElement.offsetWidth);
  //   console.log(this.ele.nativeElement.parentNode);
  // }

  constructor(private ele: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.ele.nativeElement.style.background = 'black';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.background = null;
  }

}
