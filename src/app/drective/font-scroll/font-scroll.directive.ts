import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[fontScroll]'
})
export class FontScrollDirective {

  constructor(private ele: ElementRef) {
  }

  eleWidth: number;
  parentWidth: number;
  start = null;
  _isNeedScroll: boolean;

  @Input('fontScroll')
  set isNeedScroll(value: boolean) {
    this._isNeedScroll = value;
    let element = this.ele.nativeElement;
    this.eleWidth = element.offsetWidth;
    this.parentWidth = element.parentNode.offsetWidth;
    this.eleWidth > this.parentWidth && window.requestAnimationFrame(this.scroll.bind(this));
  }

  get isNeedScroll() {
    return this._isNeedScroll;
  }

  scroll(time: any) {
    if (this.isNeedScroll) {
      !this.start && (this.start = time);
      let v = (time - this.start) / 40;
      let differ = this.eleWidth - this.parentWidth;
      this.ele.nativeElement.style.transform = `translateX(-${v}px)`;
      if (v < differ) {
        window.requestAnimationFrame(this.scroll.bind(this));
      } else {
        setTimeout(() => {
          this.ele.nativeElement.style.transform = `translateX(0px)`;
          this.start = null;
          window.requestAnimationFrame(this.scroll.bind(this));
        }, 600);
      }
    } else {
      this.ele.nativeElement.style.transform = `translateX(0px)`;
      this.start = null;
      return;
    }
  }


}
