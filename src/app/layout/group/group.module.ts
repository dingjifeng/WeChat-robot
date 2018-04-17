import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GroupRoutingModule} from './group-routing.module';
import {GroupComponent} from './group.component';
import {SupplyLimitPipe} from '../../pipes/supply-limit/supply-limit.pipe';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule
  ],
  declarations: [
    GroupComponent,
    SupplyLimitPipe
  ]
})
export class GroupModule {
}
