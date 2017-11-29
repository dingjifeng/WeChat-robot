import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRobotRoutingModule } from './my-robot-routing.module';
import {MyRobotComponent} from './my-robot.component';

@NgModule({
  imports: [
    CommonModule,
    MyRobotRoutingModule
  ],
  declarations: [
    MyRobotComponent
  ]
})
export class MyRobotModule { }
