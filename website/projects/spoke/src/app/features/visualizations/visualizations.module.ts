import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DetailModule } from './pages/detail/detail.module';
import { OverviewModule } from './pages/overview/overview.module';
import { DatasetDefinitionService } from './services/dataset-definition.service';
import { StateModule } from './state/state.module';
import { VisualizationsRoutingModule } from './visualizations-routing.module';
import { VisualizationsComponent } from './visualizations.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StateModule,
    VisualizationsRoutingModule,

    OverviewModule,
    DetailModule
  ],
  declarations: [VisualizationsComponent],
  providers: [DatasetDefinitionService]
})
export class VisualizationsModule { }
