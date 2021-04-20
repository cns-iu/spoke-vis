import { NgModule, Type } from '@angular/core';
import { NgxsModule } from '@ngxs/store';


const STATES: Type<unknown>[] = [
];


@NgModule({
  imports: [
    NgxsModule.forFeature(STATES),
  ]
})
export class StateModule { }
