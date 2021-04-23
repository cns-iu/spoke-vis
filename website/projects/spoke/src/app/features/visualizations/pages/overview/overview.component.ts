import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { forkJoin, Observable, of } from 'rxjs';
import { map, pluck, startWith, switchMap } from 'rxjs/operators';
import { View } from 'vega';
import { VisualizationSpec } from 'vega-embed';

import { RouterState } from '../../../../core/state/router.state';
import { DatasetState } from '../../state/dataset.state';
import { createSpec, SpecOptions } from './overview-visualization.vega';


/**
 * Displays an overview visualization
 */
@Component({
  selector: 'spoke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {
  /** The latest visualization spec */
  readonly spec$: Observable<VisualizationSpec>;

  /** The current vega-embed view instance */
  view?: View;

  /**
   * Creates an instance of overview component.
   *
   * @param router Router state used to lookup query parameters
   */
  constructor(
    datasets: DatasetState,
    router: RouterState,
    private readonly ga: GoogleAnalyticsService
  ) {
    this.spec$ = router.state$.pipe(
      pluck('root', 'queryParams'),
      switchMap(({ disease, food }) => forkJoin({
        nodes: datasets.loadDataset<Record<string, unknown>[]>('overview', 'overview-nodes'),
        edges: datasets.loadDataset<Record<string, unknown>[]>('overview', 'overview-edges'),
        source: disease ? datasets.loadDataset<Record<string, unknown>[]>(disease, 'tree-edges') : of(undefined),
        destination: of(food as string | undefined)
      })),
      map(options => this.createSpec(options)),
      startWith({})
    );
  }

  /**
   * Creates a spec with the provided options
   * This method mainly exists to make mocking possible in tests
   *
   * @param options The spec options
   * @returns The created spec
   */
  /* istanbul ignore next */
  createSpec(options: SpecOptions): VisualizationSpec {
    return createSpec(options);
  }

  /** Set the current vega-embed view and subscribe to events */
  setView(view: View) {
    this.view = view;
    view.addEventListener('click', (event, item) => {
      if (item?.datum) {
        const data = item.datum as Record<string, string>;
        const type = data.edge_type ? 'edge_click' : 'node_click';
        const label = data.edge_type ? data.edge_type : data.type;
        this.ga.event('overview_view', type, label);
      }
    });

    view.addEventListener('mouseover', (event, item) => {
      if (item?.datum) {
        const data = item.datum as Record<string, string>;
        const type = data.edge_type ? 'edge_hover' : 'node_hover';
        const label = data.edge_type ? data.edge_type : data.type;
        this.ga.event('overview_view', type, label);
      }
    });
  }
}
