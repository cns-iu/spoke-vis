import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureCollection } from 'geojson';
import { forkJoin, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

const EMPTY_FEATURES: FeatureCollection = {
  type: 'FeatureCollection', features: []
} ;

@Component({
  selector: 'spoke-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit, OnDestroy {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'spoke-detail';

  edgeFeatures = EMPTY_FEATURES;
  nodeFeatures = EMPTY_FEATURES;
  clusterFeatures = EMPTY_FEATURES;
  boundaryFeatures = EMPTY_FEATURES;

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
        edges: this.http.get<FeatureCollection>(`${dataDir}/edges.geojson`),
        nodes: this.http.get<FeatureCollection>(`${dataDir}/nodes.geojson`),
        clusters: this.http.get<FeatureCollection>(`${dataDir}/cluster.geojson`),
        boundaries: this.http.get<FeatureCollection>(`${dataDir}/boundary.geojson`)
      });
    })
  );

  private readonly subscriptions = new Subscription();

  constructor(private route: ActivatedRoute, private http: HttpClient, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.mapData$.subscribe({
        next: ({edges, nodes, clusters, boundaries}) => {
          this.edgeFeatures = edges;
          this.nodeFeatures = nodes;
          this.clusterFeatures = clusters;
          this.boundaryFeatures = boundaries;
          this.cd.detectChanges();
        },
        error: () => {
          this.edgeFeatures = EMPTY_FEATURES;
          this.nodeFeatures = EMPTY_FEATURES;
          this.clusterFeatures = EMPTY_FEATURES;
          this.boundaryFeatures = EMPTY_FEATURES;
          this.cd.detectChanges();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
