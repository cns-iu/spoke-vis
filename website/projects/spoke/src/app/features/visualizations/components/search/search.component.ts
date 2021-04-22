import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map, pluck, takeUntil } from 'rxjs/operators';

import { RouterState } from '../../../../core/state/router.state';
import { DatasetState } from '../../state/dataset.state';
import { IndexItem, IndexState } from '../../state/index.state';


@Component({
  selector: 'spoke-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnDestroy {
  readonly indexItems$ = this.index.entities$.pipe(
    map(entities => Object.values(entities)),
    map(items => [ ...items].sort((a, b) => a.name.localeCompare(b.name)))
  );

  datasetItems$: Observable<Record<string, unknown>[]> = of();

  selectedIndexItem?: IndexItem;
  selectedDatasetItem?: Record<string, unknown>;

  private readonly destroy$ = new ReplaySubject<void>(1);

  constructor(
    private readonly index: IndexState,
    private readonly datasets: DatasetState,
    private readonly router: RouterState
  ) {
    const id$ = router.state$.pipe(
      pluck('root', 'queryParams', 'disease'),
      takeUntil(this.destroy$)
    );

    id$.subscribe(id => {
      const item = index.entities[id as string];
      if (item) {
        this.selectedIndexItem = item;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  datasetItemDisplay(item: Record<string, unknown>): string {
    return item.dest_name as string;
  }

  setSelectedIndexItem(item: IndexItem): void {
    this.selectedIndexItem = item;
    this.datasetItems$ = this.datasets.loadDataset(item.id, 'tree-edges');
  }

  doSearch(): void {
    this.router.addQueryParams({
      disease: this.selectedIndexItem!.id,
      food: this.selectedDatasetItem!.dest_name
    });
  }
}
