import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vis1ComponentModule } from './pages/vis1/vis1.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    Vis1ComponentModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }