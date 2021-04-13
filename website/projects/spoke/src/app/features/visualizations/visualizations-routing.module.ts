import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualizationsComponent } from './visualizations.component';


/**
 * Subroutes
 */
const ROUTES: Routes = [
  {
    path: '',
    component: VisualizationsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class VisualizationsRoutingModule { }
