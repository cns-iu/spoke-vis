import { Component, Input, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'spoke-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map!: mapboxgl.Map;
  @Input() mapStyle: mapboxgl.Style = {
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

  parkSource: mapboxgl.AnySourceData = {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [
              [
                [-121.353637, 40.584978],
                [-121.284551, 40.584758],
                [-121.275349, 40.541646],
                [-121.246768, 40.541017],
                [-121.251343, 40.423383],
                [-121.32687, 40.423768],
                [-121.360619, 40.43479],
                [-121.363694, 40.409124],
                [-121.439713, 40.409197],
                [-121.439711, 40.423791],
                [-121.572133, 40.423548],
                [-121.577415, 40.550766],
                [-121.539486, 40.558107],
                [-121.520284, 40.572459],
                [-121.487219, 40.550822],
                [-121.446951, 40.56319],
                [-121.370644, 40.563267],
                [-121.353637, 40.584978]
              ]
            ]
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-121.415061, 40.506229]
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-121.505184, 40.488084]
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-121.354465, 40.488737]
          }
        }
      ]
    }
  } as unknown as mapboxgl.AnySourceData;

  ngOnInit() {
    this.loadMap();
  }

  loadMap(): void {
    // this.map = new mapboxgl.Map({
    //   container: 'map',
    //   style: this.mapStyle,
    //   center: [0, 0],
    //   zoom: 0,
    //   accessToken: 'pk.eyJ1IjoiYWRwaGlsbGlwczIwMTciLCJhIjoiY2s1NDNvaHdrMGZidDNobHFkdHB5MG1wcCJ9.NG8JyVzQuA6pP9UfZhlubg'
    // });

    this.map = new mapboxgl.Map({
      container: 'map',
      accessToken: 'pk.eyJ1IjoiYWRwaGlsbGlwczIwMTciLCJhIjoiY2s1NDNvaHdrMGZidDNobHFkdHB5MG1wcCJ9.NG8JyVzQuA6pP9UfZhlubg',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [-121.403732, 40.492392],
      zoom: 10
    });
    // this.dataSources.forEach((source, index) => {
    //   this.map?.addSource(`source-${index}`, source);
    // });
    this.map.on('load', () => {
      this.map.addSource('national-park', this.parkSource);
    });
  }
}