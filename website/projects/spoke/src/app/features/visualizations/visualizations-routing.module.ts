import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './pages/detail/detail.component';
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
        component: DetailComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class VisualizationsRoutingModule { }
