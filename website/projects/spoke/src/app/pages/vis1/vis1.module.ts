import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxVegaModule } from 'ngx-vega';

import { Vis1Component } from './vis1.component';


@NgModule({
  imports: [
    CommonModule,
    NgxVegaModule
  ],
  declarations: [
    Vis1Component
  ],
  providers: [Vis1Component],
  exports: [Vis1Component]
})
export class Vis1ComponentModule { }
