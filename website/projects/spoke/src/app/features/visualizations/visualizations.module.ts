import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StateModule } from './state/state.module';
import { VisualizationsRoutingModule } from './visualizations-routing.module';
import { VisualizationsComponent } from './visualizations.component';


@NgModule({
  imports: [
    CommonModule,

    StateModule,
    VisualizationsRoutingModule
  ],
  declarations: [VisualizationsComponent]
})
export class VisualizationsModule { }
