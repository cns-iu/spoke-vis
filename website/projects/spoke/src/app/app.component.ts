import { Component } from '@angular/core';

// For Testing
import CadEdges from './shared/components/map/cad-food-tree/edges.json';
import CadNodes from './shared/components/map/cad-food-tree/nodes.json';
import CadBoundary from './shared/components/map/cad-food-tree/boundary.json';
import CadCluster from './shared/components/map/cad-food-tree/cluster.json';


@Component({
  selector: 'spoke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  edgeFeatures: mapboxgl.MapboxGeoJSONFeature = CadEdges;
  nodeFeatures: mapboxgl.MapboxGeoJSONFeature = CadNodes;
  clusterFeatures: mapboxgl.MapboxGeoJSONFeature = CadCluster;
  boundaryFeatures: mapboxgl.MapboxGeoJSONFeature = CadBoundary;
  mapMarkers: any = [
    {
      coordinates: [0, 0],
      config: {
        color: 'green'
      }
    },
    {
      coordinates: [15, 0]
    }
  ];
}
