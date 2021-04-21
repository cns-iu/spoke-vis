import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYWRwaGlsbGlwczIwMTciLCJhIjoiY2s1NDNvaHdrMGZidDNobHFkdHB5MG1wcCJ9.NG8JyVzQuA6pP9UfZhlubg'
    })
  ],
  exports: [MapComponent]
})
export class MapModule { }
