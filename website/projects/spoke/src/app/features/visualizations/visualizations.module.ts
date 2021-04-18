import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailModule } from './pages/detail/detail.module';
import { OverviewModule } from './pages/overview/overview.module';
import { StateModule } from './state/state.module';
import { VisualizationsRoutingModule } from './visualizations-routing.module';
import { VisualizationsComponent } from './visualizations.component';


@NgModule({
  imports: [
    CommonModule,

    StateModule,
    VisualizationsRoutingModule,

    OverviewModule,
    DetailModule
  ],
  declarations: [VisualizationsComponent]
})
export class VisualizationsModule { }
