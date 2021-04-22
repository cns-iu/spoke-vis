import { Immutable } from '@angular-ru/common/typings';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Observable } from 'rxjs';
import { filter, map, pluck, startWith } from 'rxjs/operators';
import { View } from 'vega';
import { VisualizationSpec } from 'vega-embed';

import { RouterState } from '../../../../core/state/router.state';
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
  constructor(router: RouterState, private ga: GoogleAnalyticsService) {
    this.spec$ = router.state$.pipe(
      filter((value): value is Immutable<RouterStateSnapshot> => !!value),
      pluck('root', 'queryParams'),
      map(({ disease, food }) => this.createSpec({ source: disease, destination: food })),
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
