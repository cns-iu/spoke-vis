import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail.component';


/**
 * Subroutes
 */
const ROUTES: Routes = [
  {
    path: '',
    component: DetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
