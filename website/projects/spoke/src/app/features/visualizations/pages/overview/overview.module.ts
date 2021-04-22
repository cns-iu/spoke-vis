import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxVegaModule } from 'ngx-vega';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';


@NgModule({
  imports: [
    CommonModule,

    NgxVegaModule,

    OverviewRoutingModule
  ],
  declarations: [OverviewComponent],
  exports: [OverviewComponent]
})
export class OverviewModule { }
