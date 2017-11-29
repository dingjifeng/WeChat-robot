import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyRobotComponent} from './my-robot.component';

const robotRoutes: Routes = [{path: '', component: MyRobotComponent, children: []}];

@NgModule({
  imports: [RouterModule.forChild(robotRoutes)],
  exports: [RouterModule]
})
export class MyRobotRoutingModule {
}
