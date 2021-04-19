import { NgModule, Type } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { DatasetState } from './dataset.state';
import { IndexState } from './index.state';


const STATES: Type<unknown>[] = [
  IndexState,
  DatasetState
];


@NgModule({
  imports: [
    NgxsModule.forFeature(STATES),
  ]
})
export class StateModule { }
