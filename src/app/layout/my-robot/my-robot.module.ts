import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyRobotRoutingModule} from './my-robot-routing.module';
import {MyRobotComponent} from './my-robot.component';
import {FontScrollDirective} from '../../drective/font-scroll/font-scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    MyRobotRoutingModule
  ],
  declarations: [
    MyRobotComponent,
    FontScrollDirective
  ]
})

export class MyRobotModule {
}
