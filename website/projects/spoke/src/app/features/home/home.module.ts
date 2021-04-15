import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    CommonModule,

    HomeRoutingModule,
    StateModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
