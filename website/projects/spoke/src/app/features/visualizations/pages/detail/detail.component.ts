import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


// For Testing
import CadEdges from '../../../../shared/components/map/cad-food-tree/edges.json';
import CadNodes from '../../../../shared/components/map/cad-food-tree/nodes.json';
import CadBoundary from '../../../../shared/components/map/cad-food-tree/boundary.json';
import CadCluster from '../../../../shared/components/map/cad-food-tree/cluster.json';


@Component({
  selector: 'spoke-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  edgeFeatures: mapboxgl.MapboxGeoJSONFeature = CadEdges;
  nodeFeatures: mapboxgl.MapboxGeoJSONFeature = CadNodes;
  clusterFeatures: mapboxgl.MapboxGeoJSONFeature = CadCluster;
  boundaryFeatures: mapboxgl.MapboxGeoJSONFeature = CadBoundary;

  readonly disease$ = this.route.paramMap.pipe(map(p => p.get('disease') as string));
  readonly food$ = this.route.paramMap.pipe(map(p => p.get('food') as string));

  constructor(private route: ActivatedRoute) { }
}
