import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'spoke-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit, OnDestroy {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'spoke-detail';

  edgeFeatures?: mapboxgl.MapboxGeoJSONFeature;
  nodeFeatures?: mapboxgl.MapboxGeoJSONFeature;
  clusterFeatures?: mapboxgl.MapboxGeoJSONFeature;
  boundaryFeatures?: mapboxgl.MapboxGeoJSONFeature;

  readonly mapData$ = this.route.paramMap.pipe(
    map(p => {
      const disease = p.get('disease') || undefined;
      const food = p.get('food') || undefined;
      return {disease, food};
    }),
    filter(({disease, food}) => disease !== undefined),
    switchMap(({disease, food}) => {
      const dataDir = `assets/datasets/${disease}-food-tree`;
      return forkJoin({
        edges: this.http.get<mapboxgl.MapboxGeoJSONFeature>(`${dataDir}/edges.geojson`),
        nodes: this.http.get<mapboxgl.MapboxGeoJSONFeature>(`${dataDir}/nodes.geojson`),
        clusters: this.http.get<mapboxgl.MapboxGeoJSONFeature>(`${dataDir}/cluster.geojson`),
        boundaries: this.http.get<mapboxgl.MapboxGeoJSONFeature>(`${dataDir}/boundary.geojson`)
      })
    })
  );

  private readonly subscriptions = new Subscription();

  constructor(private route: ActivatedRoute, private http: HttpClient, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.mapData$.subscribe(({edges, nodes, clusters, boundaries}) => {
        this.edgeFeatures = edges;
        this.nodeFeatures = nodes;
        this.clusterFeatures = clusters;
        this.boundaryFeatures = boundaries;
        this.cd.detectChanges();
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
