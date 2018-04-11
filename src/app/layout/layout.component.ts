import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('aside') aside: ElementRef;

  @HostListener('window:resize')
  onResize() {
    this.toggle(window.innerWidth >= 992);
  }

  constructor() {
  }

  ngOnInit() {
  }

  // 左侧导航显示/隐藏
  toggle(condition: boolean) {
    const el = this.aside.nativeElement;
    if (condition) {
      el.className = 'aside-navbar bg-secondary w-240';
    } else {
      el.className = 'aside-navbar bg-secondary w-0';
    }
  }

}
