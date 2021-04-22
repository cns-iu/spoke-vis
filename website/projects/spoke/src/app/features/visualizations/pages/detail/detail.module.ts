import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MapModule } from '../../../../shared/components/map/map.module';
import { DetailDataService } from '../../services/detail-data.service';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';


@NgModule({
  imports: [
    CommonModule,

    DetailRoutingModule,
    MapModule
  ],
  declarations: [DetailComponent],
  providers: [DetailDataService],
  exports: [DetailComponent]
})
export class DetailModule { }
