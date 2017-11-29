import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomResponseRoutingModule } from './custom-response-routing.module';
import {CustomResponseComponent} from './custom-response.component';

@NgModule({
  imports: [
    CommonModule,
    CustomResponseRoutingModule
  ],
  declarations: [CustomResponseComponent]
})
export class CustomResponseModule { }
