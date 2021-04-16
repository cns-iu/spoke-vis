import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OverviewModule } from './pages/overview/overview.module';
import { StateModule } from './state/state.module';
import { VisualizationsRoutingModule } from './visualizations-routing.module';
import { VisualizationsComponent } from './visualizations.component';


@NgModule({
  imports: [
    CommonModule,

    StateModule,
    VisualizationsRoutingModule,

    OverviewModule
  ],
  declarations: [VisualizationsComponent]
})
export class VisualizationsModule { }
