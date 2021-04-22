import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SearchModule } from './components/search/search.module';
import { StateModule } from './state/state.module';
import { VisualizationsRoutingModule } from './visualizations-routing.module';
import { VisualizationsComponent } from './visualizations.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    MatButtonModule,
    MatIconModule,
    MatSidenavModule,

    StateModule,
    VisualizationsRoutingModule,

    SearchModule
  ],
  declarations: [VisualizationsComponent],
  providers: []
})
export class VisualizationsModule { }
