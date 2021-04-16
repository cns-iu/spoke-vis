import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './pages/overview/overview.component';
import { VisualizationsComponent } from './visualizations.component';


/**
 * Subroutes
 */
const ROUTES: Routes = [
  {
    path: '',
    component: VisualizationsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class VisualizationsRoutingModule { }
