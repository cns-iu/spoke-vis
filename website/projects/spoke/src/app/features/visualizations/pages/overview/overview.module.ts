import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxVegaModule } from 'ngx-vega';

import { OverviewComponent } from './overview.component';


@NgModule({
  imports: [
    CommonModule,
    NgxVegaModule
  ],
  declarations: [OverviewComponent],
  exports: [OverviewComponent]
})
export class OverviewModule { }
