import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomResponseComponent} from './custom-response.component';

const customResponseRoutes: Routes = [{path: '', component: CustomResponseComponent, children: []}];

@NgModule({
  imports: [RouterModule.forChild(customResponseRoutes)],
  exports: [RouterModule]
})
export class CustomResponseRoutingModule {
}
