import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PreloadSelectedModuledsList} from './preload-selected-moduleds-list';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthComponent} from './auth/auth.component';
import {Four04Component} from './four04/four04.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthComponent,
    Four04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PreloadSelectedModuledsList
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
