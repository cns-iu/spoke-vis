import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { combineLatest, from, iif, Observable, of, ReplaySubject } from 'rxjs';
import {
  catchError, debounceTime, delay, distinct, filter, find, map, pluck, switchMap, takeUntil, tap, toArray,
} from 'rxjs/operators';

import { RouterState } from '../../../../core/state/router.state';
import { DatasetState } from '../../state/dataset.state';
import { IndexItem, IndexState } from '../../state/index.state';


export interface FoodItem {
  [key: string]: string;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  dest_name: string;
}


@Component({
  selector: 'spoke-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnDestroy {
  readonly diseaseControl = new FormControl();
  readonly foodControl = new FormControl();

  readonly diseaseOptions: Observable<IndexItem[]>;
  readonly foodOptions: Observable<FoodItem[]>;

  inOverview = this.router.snapshot?.url?.includes?.('overview') ?? true;
  searchEnabled = false;
  switchEnabled = false;

  private readonly destroy$ = new ReplaySubject<void>(1);

  constructor(
    private readonly index: IndexState,
    private readonly datasets: DatasetState,
    private readonly router: RouterState,
    private readonly ga: GoogleAnalyticsService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.foodControl.disable();

    this.diseaseOptions = this.getDiseaseOptions();
    this.foodOptions = this.getFoodOptions();

    this.setupDiseaseListeners();
    this.setupFoodListeners();
    this.setupUrlListener();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  foodItemDisplay(item: FoodItem | null): string {
    return item?.dest_name ?? '';
  }

  searchVisualization(): void {
    const { diseaseControl, foodControl, router, ga } = this;
    const disease = diseaseControl.value as IndexItem;
    const food = foodControl.value as FoodItem;
    const enabled = this.switchEnabled ? 'enabled' : 'disabled';

    router.addQueryParams({ disease: disease.id, food: food.dest_name });
    ga.event('search_component', 'search_click', `${disease.id}_${food.dest_name}_${enabled}`);
    this.switchEnabled = true;
  }

  logShowToggle(): void {
    const category = this.inOverview ? 'show_details_clicked' : 'show_overview_clicked';
    const label = this.switchEnabled ? 'was_enabled' : 'was_disabled';
    this.ga.event('search_component', category, label);
  }

  private getDiseaseOptions(): Observable<IndexItem[]> {
    const collator = new Intl.Collator();
    const compare = (a: IndexItem, b: IndexItem) => collator.compare(a.name, b.name);

    return this.index.entities$.pipe(
      takeUntil(this.destroy$),
      map(o => Object.values(o)),
      map(items => {
        items = items.filter(item => item.selectable);
        items.sort(compare);
        return items;
      })
    );
  }

  private getFoodOptions(): Observable<FoodItem[]> {
    const { diseaseControl, foodControl: food, datasets, destroy$ } = this;
    const collator = new Intl.Collator();
    const compare = (a: FoodItem, b: FoodItem) => collator.compare(a.dest_name, b.dest_name);
    const matchesSearch = (item: FoodItem, search: string) => {
      const itemText = item.dest_name.toLowerCase();
      const searchText = search.toLowerCase();
      return itemText.includes(searchText);
    };

    const options = (diseaseControl.valueChanges as Observable<IndexItem>).pipe(
      switchMap(item => datasets.loadDataset<FoodItem[]>(item.id, 'tree-edges').pipe(
        delay(1),
        catchError(() => of([]))
      )),
      switchMap(items => from(items).pipe(
        distinct(item => item.dest_name),
        toArray()
      )),
      map(items => {
        items.sort(compare);
        return items;
      })
    );

    return combineLatest([options, food.valueChanges as Observable<string | FoodItem>]).pipe(
      takeUntil(destroy$),
      debounceTime(250),
      switchMap(([items, search]) => iif(
        () => typeof search === 'string' && search !== '',
        from(items).pipe(
          filter(item => matchesSearch(item, search as string)),
          toArray()
        ),
        of(items)
      ))
    );
  }

  private setupDiseaseListeners(): void {
    const { diseaseControl, foodControl, index, router, ga, destroy$ } = this;
    const activeParamItem = router.state$.pipe(
      takeUntil(destroy$),
      pluck('root', 'queryParams', 'disease'),
      map((id: string) => index.entities[id]),
      filter(item => !!item && item.selectable),
      tap(item => diseaseControl.setValue(item))
    );
    const diseaseChange = (diseaseControl.valueChanges as Observable<IndexItem>).pipe(
      takeUntil(destroy$),
      tap(item => ga.event('search_component', 'disease_selected', item.id))
    );

    activeParamItem.subscribe();
    diseaseChange.subscribe(() => foodControl.enable());
  }

  private setupFoodListeners(): void {
    const { foodControl, datasets, router, ga, cdr, destroy$ } = this;
    const activeParamItem = router.state$.pipe(
      takeUntil(destroy$),
      pluck('root', 'queryParams'),
      filter(params => !!(params.disease && params.food)),
      switchMap(params => datasets.loadDataset<FoodItem[]>(params.disease, 'tree-edges').pipe(
        catchError(() => of([])),
        switchMap(items => from(items).pipe(
          find(item => item.dest_name.toLowerCase() === params.food.toLowerCase())
        ))
      )),
      filter((item): item is FoodItem => !!item),
      tap(item => {
        foodControl.setValue(item);
        this.switchEnabled = true;
      })
    );
    const foodChange = (foodControl.valueChanges as Observable<FoodItem | string | null>).pipe(
      takeUntil(destroy$),
      tap(item => {
        if (typeof item === 'object' && item) {
          ga.event('search_component', 'food_selected', item.dest_name);
        }
      })
    );

    activeParamItem.subscribe();
    foodChange.subscribe(item => {
      this.searchEnabled = typeof item === 'object' && item !== null;
      cdr.markForCheck();
    });
  }

  private setupUrlListener(): void {
    const { router } = this;
    const inOverview = router.state$.pipe(
      takeUntil(this.destroy$),
      pluck('url'),
      map(url => url.includes('overview'))
    );

    inOverview.subscribe(value => this.inOverview = value);
  }
}
