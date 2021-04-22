import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy } from '@angular/core';
import { of, ReplaySubject } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';

import {
  Center, DetailData, DetailDataService, EMPTY_DATA, EMPTY_FEATURES, Markers,
} from '../../services/detail-data.service';


@Component({
  selector: 'spoke-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnDestroy {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'spoke-detail';

  edgeFeatures = EMPTY_FEATURES;
  nodeFeatures = EMPTY_FEATURES;
  clusterFeatures = EMPTY_FEATURES;
  boundaryFeatures = EMPTY_FEATURES;
  markers: Markers = [];
  center: Center = [0, -40];

  private readonly destroy$ = new ReplaySubject<void>(1);

  constructor(dataLoader: DetailDataService, cdr: ChangeDetectorRef) {
    const data$ = dataLoader.data$.pipe(
      tap(() => this.setData(EMPTY_DATA)),
      switchMap(obs => obs.pipe(
        catchError(() => of(EMPTY_DATA))
      )),
      takeUntil(this.destroy$)
    );

    data$.subscribe(data => {
      this.setData(data);
      cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setData(data: DetailData): void {
    this.nodeFeatures = data.nodes;
    this.edgeFeatures = data.edges;
    this.clusterFeatures = data.clusters;
    this.boundaryFeatures = data.boundaries;
    this.markers = data.markers;
    this.center = data.center;
  }
}
