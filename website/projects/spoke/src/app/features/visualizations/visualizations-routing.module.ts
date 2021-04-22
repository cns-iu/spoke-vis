import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        loadChildren: async () => (await import('./pages/overview/overview.module')).OverviewModule
      },
      {
        path: 'details',
        loadChildren: async () => (await import('./pages/detail/detail.module')).DetailModule
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class VisualizationsRoutingModule { }
