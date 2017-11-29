import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GroupComponent} from './group.component';

const groupRoutes: Routes = [{path: '', component: GroupComponent, children: []}];

@NgModule({
  imports: [RouterModule.forChild(groupRoutes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {
}
