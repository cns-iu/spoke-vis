import { Component, Input, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'spoke-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map!: mapboxgl.Map;
  @Input() mapStyle: mapboxgl.Style | string = {
    'version': 8,
    'name': 'Blank',
    'center': [0, 0],
    'zoom': 0,
    'sources': {},
    'sprite': 'https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty',
    'glyphs': 'https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf',
    'layers': [
      {
        'id': 'background',
        'type': 'background',
        'paint': {
          'background-color': 'rgba(255,255,255,1)'
        }
      }
    ]
  };
  @Input() dataSources!: mapboxgl.AnySourceData[];

  ngOnInit() {
    this.loadMap();
  }

  loadMap(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.mapStyle,
      accessToken: 'pk.eyJ1IjoiYWRwaGlsbGlwczIwMTciLCJhIjoiY2s1NDNvaHdrMGZidDNobHFkdHB5MG1wcCJ9.NG8JyVzQuA6pP9UfZhlubg'
    });

    this.map.on('load', () => {
      this.dataSources.forEach((source, index) => {
        this.map?.addSource(`source-${index}`, source);
      });

      this.map.addControl(new mapboxgl.NavigationControl, 'top-right');
    });
  }
}