import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview.component';


/**
 * Subroutes
 */
const ROUTES: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
