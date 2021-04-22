import { Immutable } from '@angular-ru/common/typings';
import { Injectable, OnDestroy } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { FeatureCollection, Point } from 'geojson';
import { forkJoin, from, Observable, ReplaySubject } from 'rxjs';
import { filter, find, map, pluck, share, switchMap, takeUntil, toArray } from 'rxjs/operators';

import { MapMarker } from '../../../core/models/Map';
import { RouterState } from '../../../core/state/router.state';
import { DatasetState } from '../state/dataset.state';
import { IndexState } from '../state/index.state';


export type Nodes = FeatureCollection<Point, { label: string }>;
export type Edges = FeatureCollection;
export type Clusters = FeatureCollection;
export type Boundaries = FeatureCollection;
export type Markers = MapMarker[];
export type Center = [number, number];
export interface DetailData {
  nodes: Nodes;
  edges: Edges;
  clusters: Clusters;
  boundaries: Boundaries;
  markers: Markers;
  center: Center;
}

interface Params {
  disease: string;
  food: string;
}


export const EMPTY_FEATURES: FeatureCollection = {
  type: 'FeatureCollection',
  features: []
};

export const EMPTY_DATA: DetailData = {
  nodes: EMPTY_FEATURES as Nodes,
  edges: EMPTY_FEATURES,
  clusters: EMPTY_FEATURES,
  boundaries: EMPTY_FEATURES,
  markers: [],
  center: [0, -40]
};


@Injectable()
export class DetailDataService implements OnDestroy {
  readonly data$: Observable<Observable<DetailData>>;

  private readonly destroy$ = new ReplaySubject<void>(1);

  constructor(
    private readonly index: IndexState,
    private readonly datasets: DatasetState,
    private readonly router: RouterState
  ) {
    this.data$ = this.getParams().pipe(
      map(({ disease, food }) => this.loadData(disease, food)),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getParams(): Observable<Params> {
    return this.router.state$.pipe(
      filter((value): value is Immutable<RouterStateSnapshot> => !!value),
      pluck('root', 'queryParams'),
      filter((params): params is Params => !!params.disease),
    );
  }

  private getMarkers(nodes$: Observable<Nodes>, indexLabel: string, label: string): Observable<Markers> {
    const labels = [indexLabel, label];
    return nodes$.pipe(
      pluck('features'),
      switchMap(features => from(features).pipe(
        filter(feature => feature.properties.label in labels),
        map(feature => ({
          coordinates: feature.geometry.coordinates,
          config: { color: feature.properties.label === label ? '#D1B445' : '#880E4F' }
        } as MapMarker)),
        toArray()
      ))
    );
  }

  private getCenter(nodes$: Observable<Nodes>, indexLabel: string): Observable<Center> {
    const defaultCenter: Center = [0, -40];
    return nodes$.pipe(
      pluck('features'),
      switchMap(features => from(features).pipe(
        find(feature => feature.properties.label === indexLabel),
        map(feature => feature?.geometry?.coordinates as Center ?? defaultCenter)
      ))
    );
  }

  private loadData(id: string, label: string): Observable<DetailData> {
    const { index, datasets, destroy$ } = this;
    const indexLabel = index.entities[id]?.name;
    const nodes$ = datasets.loadDataset<Nodes>(id, 'nodes').pipe(share());
    const edges$ = datasets.loadDataset<Edges>(id, 'edges');
    const clusters$ = datasets.loadDataset<Clusters>(id, 'clusters');
    const boundaries$ = datasets.loadDataset<Boundaries>(id, 'boundaries');
    const markers$ = this.getMarkers(nodes$, indexLabel, label);
    const center$ = this.getCenter(nodes$, indexLabel);

    return forkJoin({
      nodes: nodes$,
      edges: edges$,
      clusters: clusters$,
      boundaries: boundaries$,
      markers: markers$,
      center: center$
    }).pipe(takeUntil(destroy$));
  }
}
