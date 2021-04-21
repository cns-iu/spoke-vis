import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapModule } from 'projects/spoke/src/app/shared/components/map/map.module';

import { DetailComponent } from './detail.component';


@NgModule({
  imports: [
    CommonModule,
    MapModule
  ],
  declarations: [DetailComponent],
  exports: [DetailComponent]
})
export class DetailModule { }
