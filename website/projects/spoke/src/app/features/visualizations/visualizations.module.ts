import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StateModule } from './state/state.module';
import { VisualizationsRoutingModule } from './visualizations-routing.module';
import { VisualizationsComponent } from './visualizations.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StateModule,
    VisualizationsRoutingModule
  ],
  declarations: [VisualizationsComponent],
  providers: []
})
export class VisualizationsModule { }
