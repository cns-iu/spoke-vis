import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'spoke-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map?: mapboxgl.Map;
  blankStyle: mapboxgl.Style = {
    'version': 8,
    'name': 'Blank',
    'center': [
        0,
        0
    ],
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

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.blankStyle,
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}