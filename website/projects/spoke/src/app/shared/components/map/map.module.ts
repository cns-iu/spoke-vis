import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { MapComponent } from './map.component';


@NgModule({
  imports: [
    CommonModule,

    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYWRwaGlsbGlwczIwMTciLCJhIjoiY2s1NDNvaHdrMGZidDNobHFkdHB5MG1wcCJ9.NG8JyVzQuA6pP9UfZhlubg'
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
