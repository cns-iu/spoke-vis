import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureCollection, Point } from 'geojson';
import { forkJoin, Subscription } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { MapMarker } from './../../../../core/models/Map';


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
  markers: MapMarker[] = [];
  mapCenter: [number, number] = [0, -40];

  readonly mapData$ = this.route.paramMap.pipe(
    map(p => {
      const disease = p.get('disease') || undefined;
      const food = p.get('food') || undefined;
      return {disease, food};
    }),
    filter(({disease, food}) => disease !== undefined),
    tap(() => this.resetMap()),
    switchMap(({disease, food}) => {
      // Replace this with a lookup table in appropriate state (or in the URL)
      const diseaseLabel = ({
        cad: 'coronary artery disease',
        alzheimers: 'Alzheimer\'s disease',
        'alzheimers-all': 'Alzheimer\'s disease',
        epilepsy: 'epilepsy'
      } as {[dataset: string]: string})[disease as string] || disease;

      const dataDir = `assets/datasets/${disease}-food-tree`;
      const nodes = this.http.get<FeatureCollection<Point, {label: string}>>(`${dataDir}/nodes.geojson`);
      const markers = nodes.pipe(map(n => {
        return n.features.filter(node => node.properties.label === food || node.properties.label === diseaseLabel)
          .map(node => ({
            config: {
              color: node.properties.label === food ? '#D1B445' : '#880E4F'
            },
            coordinates: node.geometry.coordinates
          }) as MapMarker)
      }));
      const mapCenter = nodes.pipe(map(n =>
        n.features.find(node => node.properties.label === diseaseLabel)?.geometry.coordinates as [number, number] ?? [0, -40]
      ));

      return forkJoin({
        edges: this.http.get<FeatureCollection>(`${dataDir}/edges.geojson`),
        nodes,
        clusters: this.http.get<FeatureCollection>(`${dataDir}/cluster.geojson`),
        boundaries: this.http.get<FeatureCollection>(`${dataDir}/boundary.geojson`),
        markers,
        mapCenter
      });
    })
  );

  private readonly subscriptions = new Subscription();

  constructor(private route: ActivatedRoute, private http: HttpClient, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.mapData$.subscribe({
        next: ({edges, nodes, clusters, boundaries, markers, mapCenter}) => {
          this.edgeFeatures = edges;
          this.nodeFeatures = nodes;
          this.clusterFeatures = clusters;
          this.boundaryFeatures = boundaries;
          this.markers = markers;
          this.mapCenter = mapCenter;
          this.cd.detectChanges();
        },
        error: () => this.resetMap()
      })
    );
  }

  resetMap() {
    this.edgeFeatures = EMPTY_FEATURES;
    this.nodeFeatures = EMPTY_FEATURES;
    this.clusterFeatures = EMPTY_FEATURES;
    this.boundaryFeatures = EMPTY_FEATURES;
    this.markers = [];
    this.mapCenter = [0, -40];
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
